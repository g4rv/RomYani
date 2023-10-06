import { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TestState } from "../../types/testsTypes";

type PopupProps = {
	title: string;
	isOpened: boolean;
	testState: TestState;
};

const Popup: FC<PopupProps> = ({ isOpened, title, testState }) => {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const navigate = useNavigate();
	useEffect(() => {
		if (isOpened) {
			dialogRef.current?.showModal();
			document.body.style.overflow = "hidden";
		}
	}, [isOpened]);

	const handleConfirmPopup = (path: string) => {
		document.body.style.overflow = "visible";
		navigate(path);
	};

	return (
		<dialog ref={dialogRef} className="rounded-xl p-4">
			<p className="mb-8 text-center text-xl font-bold">{title}</p>
			<div className="flex flex-col items-center gap-4">
				{testState === "failed" ? (
					<button
						className="rounded-2xl border border-black px-2 py-1"
						onClick={() => handleConfirmPopup("/RomYani/")}
					>
						Переобрати себе
					</button>
				) : null}
				<button
					className="rounded-2xl border border-black px-2 py-1"
					onClick={() =>
						handleConfirmPopup(
							`${location.pathname.slice(
								0,
								location.pathname.lastIndexOf("/"),
							)}/greeting`,
						)
					}
				>
					{testState === "failed"
						? `Сірьога, дурень, це я - ${
								location.pathname.includes("roma")
									? "Рома"
									: "Яна"
						  }!`
						: "Продовжити"}
				</button>
			</div>
		</dialog>
	);
};
export default Popup;
