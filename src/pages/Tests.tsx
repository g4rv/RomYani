import { useEffect, useState } from "react";
import { TestState, TestsArr } from "../types/testsTypes";
import Test from "../components/Test";
import { useLocation } from "react-router-dom";
import Popup from "../components/Popup";
import { twMerge } from "tailwind-merge";

// type TestsListProps = {};

const romaTest: TestsArr = [
	{
		question: "Яке поганяло було у Коваля?",
		answers: ["Пекарь", "Таксіст", "Сова", "Цап"],
		correctAnswer: "Сова",
		currAnswer: "",
	},
	{
		question: "Як звали преподшу на яку ми накатали заяву?",
		answers: ["Тонконог", "Хмельницька", "Бобровник", "Грицик"],
		correctAnswer: "Тонконог",
		currAnswer: "",
	},
	{
		question: "Яка з перерахованих ігор, була твоєю грою дитинства?",
		answers: [
			"Crash Bandicoot",
			"Mario Kart",
			"Splinter Cell",
			"Shadow of the Colossus",
		],
		correctAnswer: "Shadow of the Colossus",
		currAnswer: "",
	},
];

const yanaTest: TestsArr = [
	{
		question: "1",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "1",
		currAnswer: "",
	},
	{
		question: "3",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "3",
		currAnswer: "",
	},
	{
		question: "2",
		answers: ["1", "2", "3", "4"],
		correctAnswer: "2",
		currAnswer: "",
	},
];

const Tests = () => {
	const location = useLocation();
	const [testState, setTestState] = useState<TestState>("inProgress");
	const [testsScore, setTestsScore] = useState(0);
	const [isAllTestsDone, setIsAllTestsDone] = useState(false);
	const [popupTitle, setPopupTitle] = useState("");
	const [tests, setTest] = useState(
		location.pathname.includes("roma") ? romaTest : yanaTest,
	);

	const setCurrentAnswer = (answer: string, question: string) => {
		setTest((tests) =>
			tests.map((test) =>
				test.question === question
					? {
							...test,
							currAnswer: answer,
					  }
					: test,
			),
		);
	};

	const handleSubmitTests = () => {
		setTestState(() => (testsScore < tests.length ? "failed" : "passed"));
		console.log(testsScore);
	};
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
	useEffect(() => {
		setTestsScore(
			tests.reduce(
				(acum, cur) =>
					cur.currAnswer === cur.correctAnswer ? ++acum : acum,
				0,
			),
		);
		setIsAllTestsDone(tests.every((test) => test.currAnswer));
	}, [tests]);

	useEffect(() => {
		if (testState === "inProgress") return;

		const currUser = location.pathname.includes("roma") ? "Рома" : "Яна";
		if (testState === "failed") {
			setPopupTitle(
				`Ти не ${currUser}! ${
					currUser === "Рома" ? "Розбійниця" : "Розбійник"
				}, передай телефон ${currUser.slice(
					0,
					currUser.length - 1,
				)}і!👀`,
			);
		}
		if (testState === "passed") {
			setPopupTitle(`Чудово! Ти дійсно ${currUser}!😀`);
		}
	}, [location.pathname, testState]);

	return (
		<section className="px-6 pb-12 pt-8">
			<h1 className="mb-4 text-center text-4xl font-semibold">{`А ти точно ${
				location.pathname.includes("roma") ? "Рома" : "Яна"
			}?🤔`}</h1>
			<p className="mb-12 text-center text-xl">
				Дай відповідь на ці запитання, щоб я впевнився!
			</p>
			<div className="mb-12 flex flex-col gap-4">
				{tests.map((test) => (
					<Test
						key={test.question}
						answers={test.answers}
						questionText={test.question}
						currentAnswer={test.currAnswer}
						setCurrentAnswer={setCurrentAnswer}
					/>
				))}
			</div>
			<button
				className={twMerge(
					"mx-auto block rounded-lg border border-white p-2 text-center",
					!isAllTestsDone && "border-gray-400 text-gray-300",
				)}
				onClick={handleSubmitTests}
				disabled={!isAllTestsDone}
			>
				Підтвердити!
			</button>
			<Popup
				isOpened={testState !== "inProgress"}
				title={popupTitle}
				testState={testState}
			/>
		</section>
	);
};
export default Tests;
