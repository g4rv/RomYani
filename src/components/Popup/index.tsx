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
		} else {
			document.body.style.overflow = "visible";
		}
	}, [isOpened]);

	return (
		<dialog ref={dialogRef} className="p-4 rounded-xl">
			<p className="text-xl font-bold mb-8 text-center">{title}</p>
			<div className="flex flex-col items-center gap-4">
				{testState === "failed" ? (
					<button className="px-2 py-1 border border-black rounded-2xl" onClick={() => navigate("/RomYani/")}>
						Переобрати себе
					</button>
				) : null}
				<button
                    className="px-2 py-1 border border-black rounded-2xl" 
					onClick={() =>
						navigate(
							`${location.pathname.slice(
								0,
								location.pathname.lastIndexOf("/"),
							)}/greeting`,
						)
					}
				>
					{testState === 'failed' ? `Сірьога, дурень, це я - ${location.pathname.includes('roma') ? 'Рома' : 'Яна'}!` : 'Продовжити'}
				</button>
			</div>
		</dialog>
	);
};
export default Popup;
