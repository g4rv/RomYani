import { Outlet } from "react-router-dom";

const GreetingsLayout = () => {
	return (
		<main className="relative isolate min-h-[100dvh] bg-main bg-cover">
			<div className="absolute inset-0 -z-10 bg-orange-800/5 backdrop-blur-sm" />
			<section className="flex flex-col gap-16 p-6">
				<Outlet />
				<div className="rounded-xl border border-black/10 bg-gray-500/10 px-4 py-6 backdrop-blur-xl">
					<p>
						Я так і не вигадав куди це приліпить, тому просто
						вставлю як є...
					</p>
					<div>
						<p>Займіться!</p>
						<p>69</p>
					</div>
				</div>
			</section>
		</main>
	);
};
export default GreetingsLayout;
