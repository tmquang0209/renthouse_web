import "./App.scss";
import { persistor, store } from "./redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { PublicRouter } from "./routes";
import { Routes,Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Routes>
                        {
                            PublicRouter.map((router,index)=>{
                                const Page=router.element
                                return <Route key={index} path={`${router.path}`} element={<Page/>}></Route>
                            })
                        }
                    </Routes>
                </PersistGate>
            </Provider>
        </>
    );
};

export default App;
