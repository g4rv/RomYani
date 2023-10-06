const Home = () => {
	return (
		<section className="h-[100dvh] p-4 py-8">
			<div className="flex h-full flex-col items-center justify-center gap-10 rounded-2xl bg-white/10  backdrop-blur">
				<h1 className="font-noto text-5xl">Обери себе:</h1>
				<div className="flex flex-col items-center gap-3">
					<a
						href="/RomYani/roma/test"
						className="neonText font-nuni text-4xl"
					>
						Рома
					</a>
					<div className="mt-1 w-full border-b-2 border-cyan-50" />
					<a
						href="/RomYani/yana/test"
						className="neonText font-nuni text-4xl"
					>
						Яна
					</a>
				</div>
			</div>
		</section>
	);
};
export default Home;
