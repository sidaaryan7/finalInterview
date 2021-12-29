const Floor = ({ f, totalArrLen, floor, updateLift1 }) => {
	const moveUp = (id) => {
		let updateLift = floor;

		if (id - 1 == 3 || id - 1 == 1) {
			let token = JSON.parse(localStorage.getItem("token"));

			if (token == null) {
				console.log(token);
				alert("you need acces token");
			} else {
				for (let i = 0; i < updateLift.length; i++) {
					if (updateLift[i].id == id) {
						updateLift[i].lift = false;
					} else if (updateLift[i].id == id - 1) {
						updateLift[i].lift = true;
					}
				}

				localStorage.setItem("udata", JSON.stringify(updateLift));
				updateLift1();
			}
		} else {
			console.log("hhhhhh");
			for (let i = 0; i < updateLift.length; i++) {
				if (updateLift[i].id == id) {
					updateLift[i].lift = false;
				} else if (updateLift[i].id == id - 1) {
					updateLift[i].lift = true;
				}
			}

			localStorage.setItem("udata", JSON.stringify(updateLift));
			updateLift1();
		}
	};
	const moveDown = (id) => {
		let updateLift = floor;
		if (parseInt(id) + parseInt(1) == 3 || parseInt(id) + parseInt(1) == 1) {
			let token = JSON.parse(localStorage.getItem("token"));
			if (token == null) {
				console.log(token);
				alert("you need acces token");
			} else {
				for (let i = 0; i < updateLift.length; i++) {
					if (updateLift[i].id == id) {
						updateLift[i].lift = false;
					} else if (updateLift[i].id == parseInt(id) + parseInt(1)) {
						updateLift[i].lift = true;
					}
				}

				localStorage.setItem("udata", JSON.stringify(updateLift));
				updateLift1();
			}
		} else {
			for (let i = 0; i < updateLift.length; i++) {
				if (updateLift[i].id == id) {
					updateLift[i].lift = false;
				} else if (updateLift[i].id == parseInt(id) + parseInt(1)) {
					updateLift[i].lift = true;
				}
			}

			localStorage.setItem("udata", JSON.stringify(updateLift));
			updateLift1();
		}
	};

	const getAccess = () => {
		console.log("jjjjjjjjjjjjjjjjjjjjjj");
		let token = "rurhdhdjjdbddh263734848hh77";
		localStorage.setItem("token", JSON.stringify(token));
	};
	return (
		<>
			<div>
				{(() => {
					if (f.id == totalArrLen) {
						return (
							<>
								{f.lift === true && (
									<>
										<div>
											<h3>lift</h3>
										</div>
									</>
								)}
								<button onClick={() => moveUp(f.id)}>up</button>
							</>
						);
					} else {
						return (
							<>
								{f.lift === true && (
									<>
										<div>
											<h3>lift</h3>
										</div>
									</>
								)}
								{f.id == 3 && (
									<>
										<button onClick={() => getAccess()}>get Access</button>
									</>
								)}
								{f.id == 1 && (
									<>
										<button onClick={() => getAccess()}>get Access</button>
									</>
								)}
								<button onClick={() => moveUp(f.id)}>up</button>
								<button onClick={() => moveDown(f.id)}>down</button>
							</>
						);
					}
				})()}
			</div>
		</>
	);
};

export default Floor;
