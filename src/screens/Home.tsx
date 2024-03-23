import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectMessage, selectToken, selectUser } from "../redux/Reducer/AuthSlice";
import { login } from "../redux/Actions";

const Home = () => {
    const user = useAppSelector(selectUser);
    const token = useAppSelector(selectToken);
    const message = useAppSelector(selectMessage);

    const dispatch = useAppDispatch();

    React.useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <>
            <Header />
            <Container gradient>
                <main className="flex flex-wrap">
                    <h1>Home</h1>
                    <button
                        onClick={() => {
                            dispatch(login({ username: "tmquang0209@gmail.com", password: "1234567a" }));
                        }}
                    >
                        Login
                    </button>
                    {user && (
                        <div>
                            <p>{JSON.stringify(user)}</p>
                        </div>
                    )}
                    {token && (
                        <div>
                            <p>{token}</p>
                        </div>
                    )}
                    {message && (
                        <div>
                            <p>{message}</p>
                        </div>
                    )}
                </main>
            </Container>
        </>
    );
};

export default Home;
