import { Route, Routes } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import Profile from "./page/Profile";
import Layout from "./Layout";
const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profiles/:username" element={<Profile />} />
            </Route>
        </Routes>
    );
};
export default App;
