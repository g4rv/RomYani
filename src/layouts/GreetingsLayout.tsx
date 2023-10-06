import { Outlet } from "react-router-dom";

const GreetingsLayout = () => {
    return (
        <main className="min-h-[100dvh] bg-main bg-cover relative isolate">
            <div className="-z-10 absolute inset-0 bg-orange-800/5 backdrop-blur-sm"/>
            <section>
                <Outlet/>
                <p>Я так і не вигадав куди це приліпить, тому просто вставлю як є...</p>
                <div>
                    <p>Займіться!</p>
                    <p>69</p>
                </div>
            </section>
        </main>
    );
};
export default GreetingsLayout;