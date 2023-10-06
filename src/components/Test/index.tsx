import { FC } from "react";
import { twMerge } from "tailwind-merge";

type FromProps = {
	questionText: string;
	answers: string[];
	currentAnswer: string;
	setCurrentAnswer: (answer: string, question: string) => void;
};

const Test: FC<FromProps> = ({
	questionText,
	answers,
	currentAnswer,
	setCurrentAnswer,
}) => {
	return (
		<div className="rounded-2xl border border-orange-300/20 bg-pink-400/10 px-4 pb-4 pt-2 backdrop-blur-2xl">
			<h2 className="mb-4 text-2xl">{questionText}</h2>
			<div className="flex flex-wrap gap-2">
				{answers.map((answer) => (
					<label
						key={answer}
						className={twMerge(
							"flex flex-[45%] items-center justify-center rounded-lg border border-white p-2 text-center text-lg transition-all bg-white/10 font-semibold",
							currentAnswer === answer &&
								"bg-white text-black",
						)}
					>
						<span>{answer}</span>
						<input
							className="hidden"
							type="radio"
							name={questionText}
							onChange={() =>
								setCurrentAnswer(answer, questionText)
							}
						/>
					</label>
				))}
			</div>
		</div>
	);
};
export default Test;
