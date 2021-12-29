import logo from "./logo.svg";
import "./App.css";
import Floor from "./Components/Floor";
import { useState } from "react";

function App() {
	const [floor, setFloor] = useState([
		{ id: "1", lift: false },
		{ id: "2", lift: false },
		{ id: "3", lift: false },
		{ id: "4", lift: false },
		{ id: "5", lift: true },
	]);
	const [totalArrLen, setTotaArrLen] = useState(5);

	let newFloor = new Array();
	let newValue = {
		id: "",
	};

	const butoonInpFunc = (e) => {
		if (e.target.value === "") {
			console.log(undefined);
			return;
		} else {
			console.log("UUUUUUUUUUU");
			let arrSizeIncr = parseInt(e.target.value);
			let totalLength;
			if (arrSizeIncr > 0) {
				totalLength = floor.length + arrSizeIncr;
			}

			console.log(totalLength, "tl");
			let newA = new Array();
			for (let i = 1; i <= totalLength; i++) {
				let lift = i == totalLength ? true : false;
				let v = {
					id: i,
					lift: lift,
				};
				newA.push(v);
			}

			setFloor(newA);
			setTotaArrLen(newA.length);
		}
	};

	const addFloor = () => {
		console.log(newValue, "nv");
		newFloor = floor;
		newFloor.push(newValue);
		console.log(newFloor, "arr");
		setFloor(newFloor);
	};

	const updateLift1 = () => {
		let data = JSON.parse(localStorage.getItem("udata"));

		setFloor(data);
	};

	return (
		<div className="App">
			<input type="text" onChange={butoonInpFunc} />
			<button onClick={addFloor}>Add floor</button>
			{floor.map((f, index) => {
				return (
					<>
						<Floor floor={floor} f={f} totalArrLen={totalArrLen} updateLift1={updateLift1} />
					</>
				);
			})}
		</div>
	);
}

export default App;
