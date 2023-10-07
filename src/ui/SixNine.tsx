import { useEffect, useState } from "react";

const SixNine = () => {
    const [curVal, setCurVal] = useState(1)

	useEffect(() => {
		setInterval(() => {
            setCurVal(prev => prev < 360 ? ++prev : 1)
        }, 100);
	}, []);

	return (
		<p
			className="bg-clip-text text-8xl text-[6rem] font-extrabold leading-none text-transparent"
			style={{ backgroundImage: `conic-gradient(hsl(${curVal}deg, 70%, 70%), hsl(${curVal * 2}deg, 70%, 70%), hsl(${curVal * 3}deg, 70%, 70%), hsl(${curVal * 4}deg, 70%, 70%)), conic-gradient(hsl(${curVal}deg, 70%, 70%), hsl(${curVal * 2}deg, 70%, 70%), hsl(${curVal * 3}deg, 70%, 70%), hsl(${curVal}deg, 70%, 70%))` }}
		>
			69
		</p>
	);
};
export default SixNine;
