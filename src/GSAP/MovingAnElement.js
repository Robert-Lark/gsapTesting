import Img from "./Img.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import { gsap } from "gsap";

//On this element we have set the base opacity to 0 and changed it over time using gsap
// we have also made it rotate and move down on the page over a duration of 5seconds
// we

const useStyles = makeStyles((theme) => ({
	img: {
		width: "50%",
		opacity: 0,
	},
	img1: {
		//margin: "0 auto",
		width: "50%",
		opacity: 0,
	},
}));

function MovingAnElement(props) {
	const classes = useStyles();

	const toImg = React.createRef();
	const fromImg = React.createRef();
	const fromToImg = React.createRef();
	const expand = React.createRef();
	useEffect(() => {
		//these effect move the image to a certain place
		gsap.to(toImg.current, {
			y: 400,
			scale: 0.5,
			rotation: 360,
			opacity: 0.5,
			borderRadius: 70,
			duration: 5,
		});
		gsap.from(fromImg.current, {
			// these effects move an image from a certain place to its initial location.
			delay: 5,
			y: 400,
			scale: 0.5,
			rotation: 360,
			opacity: 0.5,
			borderRadius: 70,
			duration: 5,
		});
		gsap.fromTo(
			fromToImg.current,
			// these effects move an image from a certain place to a certain location.
			{
				//this first set of curly brackets is the from co-ordinates
				y: 400,
				x: 600,
				scale: 0.5,
				rotation: 360,
				opacity: 0.5,
				borderRadius: 300,
				duration: 5,
			},
			{
				//this first set of curly brackets is the from co-ordinates
				delay: 2,
				y: 200,
				x: 200,
				scale: 0.8,
				opacity: 1,
				borderRadius: 10,
				duration: 5,
			}
		);
		gsap.fromTo(
			expand.current,
			// these effects expand an image in the center of the screen.
			{
				//this first set of curly brackets is the from co-ordinates
				y: 150,
				x: 0,
				scale: 0,
				opacity: 0,
			},
			{
				//this first set of curly brackets is the from co-ordinates
				scale: 0.8,
				opacity: 1,
				duration: 5,
			}
		);
	});

	return (
		<div>
			{/* <img ref={toImg} src={Img} alt="" className={classes.img} />
			<img ref={fromImg} src={Img} alt="" className={classes.img} />
			<img ref={fromToImg} src={Img} alt="" className={classes.img} /> */}
			<img ref={expand} src={Img} alt="" className={classes.img1} />
		</div>
	);
}

export default MovingAnElement;
