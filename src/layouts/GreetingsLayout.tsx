import { Outlet } from "react-router-dom";
import SixNine from "../ui/SixNine";

const GreetingsLayout = () => {
	return (
		<main className="relative isolate min-h-[100dvh] bg-main bg-cover">
			<div className="absolute inset-0 -z-10 bg-orange-800/5 backdrop-blur-sm" />
			<section className="flex flex-col gap-16 p-6">
				<Outlet />
				<div className="rounded-xl border border-black/10 bg-gray-500/10 px-4 py-6 backdrop-blur-xl">
					<p className="font-nuni mb-10">
						Я так і не вигадав куди це приліпить, тому просто
						вставлю як є...
					</p>
					<div className="flex flex-col gap-2 items-center">
						<p className="font-nuni text-2xl">Займіться!</p>
                        <SixNine/>
                        <p className="text-2xl">💋</p>
					</div>
				</div>
			</section>
		</main>
	);
};
export default GreetingsLayout;
