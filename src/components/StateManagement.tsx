import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Task, useStateContext } from "./context/context"
const StateManagement = () => {
	const { queues, setQueues, setTasks, tasks } = useStateContext();
	const reg = Array.from(Array(3).keys());

	const [totalDur, setTotalDur] = useState<
		{ index: number; duration: number }[]
	>(
		reg.map((e, i) => {
			return { index: i + 1, duration: getTotalDuration(queues[i + 1].list) };
		})
	);

	function getTotalDuration(arr: Task[]) {
		return arr.reduce((a, b) => a + b.duration, 0);
	}
	const queueType = ["Regular", "High Priority"];
	const addRandomTask = () => {
		const random = Math.floor(Math.random() * (120 - 1 + 1) + 1);
		const newTask = {
			task: random,
			duration: random,
			queue: queueType[Math.floor(Math.random() * 1.5)],
		};

		setTasks([...tasks, newTask]);
	};
	const admitTask = () => {
		if (tasks.length > 0) {
			const newTasks = tasks.filter((e, i) => i !== 0);
			setTasks(newTasks);
			let q;
			setTotalDur(
				reg.map((e, i) => {
					return {
						index: i + 1,
						duration: getTotalDuration(queues[i + 1].list),
					};
				})
			);
			q = queues.map((e, i) => {
				if (tasks[0].queue === "Regular") {
					if (i === totalDur.sort()[0].index) {
						return {
							...e,

							list: [...e.list, tasks[0]],
						};
					} else {
						return e;
					}
				} else {
					if (i === 0) {
						return {
							...e,

							list: [...e.list, { ...tasks[0], queue: "High Priority" }],
						};
					} else {
						return e;
					}
				}
			});
			setQueues(q);
		}
	};

	useEffect(() => {
		setTotalDur(
			reg.map((e, i) => {
					return {
						index: i + 1,
						duration: getTotalDuration(queues[i + 1].list),
					};
				})
				.sort((a, b) => a.duration - b.duration)
		);
		console.log(queues);
		if (queues[0].list.length > 0) {
			if (queues[0].list[0].duration === 0) {
				let newQ = queues.map((e, i) => {
					if (i === 0) {
						return { ...e, list: e.list.filter((a, s) => s !== 0) };
					} else return e;
				});
				setQueues(newQ);
			}
		}
		if (queues[1].list.length > 0) {
			if (queues[1].list[0].duration === 0) {
				let newQ = queues.map((e, i) => {
					if (i === 1) {
						return { ...e, list: e.list.filter((a, s) => s !== 0) };
					} else return e;
				});

				setQueues(newQ);
			}
		}
		if (queues[2].list.length > 0) {
			if (queues[2].list[0].duration === 0) {
				let newQ = queues.map((e, i) => {
					if (i === 2) {
						return { ...e, list: e.list.filter((a, s) => s !== 0) };
					} else return e;
				});
				if (newQ[2].list.length > 0) {
					newQ[2].list[0].task = 10;
				} else {
				}

				setQueues(newQ);
			}
		}
		if (queues[3].list.length > 0) {
			if (queues[3].list[0].duration === 0) {
				let newQ = queues.map((e, i) => {
					if (i === 3) {
						return { ...e, list: e.list.filter((a, s) => s !== 0) };
					} else return e;
				});
				if (newQ[3].list.length > 0) {
					newQ[3].list[0].task = 10;
				} else {
				}

				setQueues(newQ);
			}
		}
		let sI = setInterval(() => {
			if (queues.filter((e) => e.list.length !== 0).length !== 0) {
				let newQ = queues.map((e, i) => {
					if (i === 0) {
						if (e.list.length !== 0) {
							let newList = queues[0].list.map((e, i) => {
								if (i === 0) {
									return { ...e, duration: e.duration - 1 };
								} else return e;
							});
							return { ...e, list: newList };
						} else return e;
					}
					if (i === 1) {
						if (e.list.length !== 0) {
							let newList = queues[1].list.map((e, i) => {
								if (i === 0) {
									return { ...e, duration: e.duration - 1 };
								} else return e;
							});
							return { ...e, list: newList };
						} else return e;
					}
					if (i === 2) {
						if (e.list.length !== 0) {
							let newList = queues[2].list.map((e, i) => {
								if (i === 0) {
									return { ...e, duration: e.duration - 1 };
								} else return e;
							});
							return { ...e, list: newList };
						} else return e;
					}
					if (i === 3) {
						if (e.list.length !== 0) {
							let newList = queues[3].list.map((e, i) => {
								if (i === 0) {
									return { ...e, duration: e.duration - 1 };
								} else return e;
							});
							return { ...e, list: newList };
						} else return e;
					}
					if (i === 4) {
						if (e.list.length !== 0) {
							let newList = queues[4].list.map((e, i) => {
								if (i === 0) {
									return { ...e, duration: e.duration - 1 };
								} else return e;
							});
							return { ...e, list: newList };
						} else return e;
					}
					return e;
				});
				setQueues(newQ);
			}
		}, 100);
		return () => clearInterval(sI);
	}, [queues]);

	return (
		<Box
			sx={{
				display: "flex",
				gap: ".5rem",
				height: "max-content",
				margin: "1rem",
				width: "100%",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "start",
					width: "100%",
					border: "1px solid black",
					padding: "1rem",
					gap: "3rem",
				}}
			>
				<Button onClick={addRandomTask} variant="contained">
					Add random task
				</Button>
				<p>Task Queue</p>
				<Box sx={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
					{tasks.map((e, i) => {
						return (
							<Box
								key={i}
								sx={{
									padding: "1rem",
									border:
										e.queue === "High Priority"
											? "1px solid red"
											: "1px solid black",
									width: "3rem",
									height: "3rem",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								{e.task}
							</Box>
						);
					})}
				</Box>
				<Button onClick={admitTask} variant="contained">
					Admit task
				</Button>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "start",
					width: "50%",

					gap: "3rem",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
						gap: ".5rem",
					}}
				>
					{queues.map((e, i) => {
						return (
							<Box
								sx={{
									padding: "1rem",
									display: "flex",
									flexDirection: "column",
									gap: "1rem",
									border:
										e.queue === "High Priority"
											? "1px solid red"
											: "1px solid black",
								}}
							>
								<h2>
									Queue {i + 1} ( <span>{e.queue} </span> )
								</h2>

								<p className="text-sm">Queue List:</p>

								<Box sx={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
									{e.list.map((elem) => (
										<Box
											sx={{
												padding: ".25rem",
												fontSize: ".75rem",
												border:
													elem.queue === "High Priority"
														? "1px solid red"
														: "1px solid black",
											}}
										>
											{elem.task}
										</Box>
									))}
								</Box>

								<p className="text-sm">Duration:</p>
								<Box
									sx={{
										transition: "width 100ms linear",
										height: "1.5rem",
										border: "1px solid red",
										width:
											e.list.length !== 0
												? e.list[0].duration > 100
													? e.list[0].duration -
													(e.list[0].duration % 100) -
													1 +
													"%"
													: e.list[0].duration - 1 > 1.5
														? e.list[0].duration - 1 + "%"
														: "1.5%"
												: "1.5%",
									}}
								></Box>
							</Box>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
};

export default StateManagement;
