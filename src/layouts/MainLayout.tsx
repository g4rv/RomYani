import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <main className="min-h-full bg-main bg-cover relative isolate">
            <div className="-z-10 absolute inset-0 bg-orange-800/5 backdrop-blur-sm"/>
            <Outlet/>
        </main>
    );
};
export default MainLayout;