import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../screens/NotFound";
import Home from "../screens/Home";

const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Navigation;
