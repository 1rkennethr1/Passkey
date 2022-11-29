import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from "react";

interface Props {
	children: React.ReactNode;
}

interface State {
	queues: QueueType[];
	setQueues: Dispatch<SetStateAction<QueueType[]>>;
	tasks: Task[];
	setTasks: Dispatch<SetStateAction<Task[]>>;
}

type QueueType = {
	queue: string;
	list: Task[];
};
export type Task = {
	task: number;
	duration: number;
	queue: string;
};
const AsyncTask4 = createContext<State>({} as State);
const defaultQueues: QueueType[] = [
	{ queue: "High Priority", list: [] },
	{ queue: "Regular", list: [] },
	{ queue: "Regular", list: [] },
	{ queue: "Regular", list: [] },
];
export default function StateContext({ children }: Props) {
	const [queues, setQueues] = useState<QueueType[]>(defaultQueues);
	const [tasks, setTasks] = useState<Task[]>([
		{ task: 120, queue: "High Priority", duration: 120 },
		{ task: 23, queue: "High Priority", duration: 23 },
		{ task: 33, queue: "Regular", duration: 33 },
		{ task: 33, queue: "Regular", duration: 33 },
		{ task: 56, queue: "Regular", duration: 56 },
		{ task: 36, queue: "Regular", duration: 36 },
		{ task: 22, queue: "Regular", duration: 22 },
		{ task: 11, queue: "Regular", duration: 11 },
		{ task: 52, queue: "Regular", duration: 52 },
		{ task: 33, queue: "Regular", duration: 33 },
		{ task: 14, queue: "Regular", duration: 14 },
		{ task: 5, queue: "Regular", duration: 5 },
	]);
	return (
		<AsyncTask4.Provider
			value={{
				queues,
				setQueues,
				tasks,
				setTasks,
			}}
		>
			{children}
		</AsyncTask4.Provider>
	);
}

export const useStateContext = () => useContext(AsyncTask4);
