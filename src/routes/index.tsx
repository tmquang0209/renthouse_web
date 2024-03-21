import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../screens/NotFound";
import Home from "../screens/Home";
import Login from "../screens/Login";

const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Navigation;
