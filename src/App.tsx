import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Tests from './pages/Tests';
import Greeting from './pages/Greeting';
import GreetingsLayout from './layouts/GreetingsLayout';


const App = () => {
    return (
        <Routes>
			<Route path='/*' element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path=":bunny/test" element={<Tests />} />
			</Route>
            <Route path=':bunny/greeting' element={<GreetingsLayout />}>
				<Route index element={<Greeting />} />
			</Route>
		</Routes>
    );
};
export default App;