import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
	return (
		<section className="h-[100dvh] p-4 py-8">
			<div className="flex h-full flex-col items-center justify-center gap-10 rounded-2xl bg-white/10  backdrop-blur">
				<h1 className="font-noto text-5xl">Обери себе:</h1>
				<div className="flex flex-col items-center gap-3">
					<button
                        onClick={() => navigate("/RomYani/roma/test")}
						className="neonText font-nuni text-4xl"
					>
						Рома
					</button>
					<div className="mt-1 w-full border-b-2 border-cyan-50" />
					<button
                        onClick={() => navigate("/RomYani/yana/test")}
						className="neonText font-nuni text-4xl"
					>
						Яна
					</button>
				</div>
			</div>
		</section>
	);
};
export default Home;
