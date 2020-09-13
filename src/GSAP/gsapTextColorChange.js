import React, { useEffect } from "react";
import { gsap } from "gsap";

function GSAPComponentTextColorChange(props) {
	const header = React.createRef();
useEffect(() => {
		gsap.to(header.current, { color: "#8c0", duration: 5 });
    });
    

	return (
		<div className="App">
				<p ref={header}>
					CHANGING THE COLOR OF TEXT
				</p>
		</div>
	);
}

export default GSAPComponentTextColorChange;
