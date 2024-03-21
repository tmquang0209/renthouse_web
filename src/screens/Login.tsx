import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectMessage, selectToken, selectUser } from "../redux/Reducer/AuthSlice";
import { useFormik } from "formik";
import { login } from "../redux/Actions";
import { object, string } from "yup";

const loginSchema = object().shape({
    username: string().required("Username is required").min(6, "Username must be at least 6 characters"),
    password: string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

const Login = () => {
    const token = useAppSelector(selectToken);
    const message = useAppSelector(selectMessage);

    const dispatch = useAppDispatch();

    const handleSubmit = (values: any) => {
        dispatch(login(values));
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: handleSubmit,
        validationSchema: loginSchema,
    });

    React.useEffect(() => {
        if (token) {
            window.location.href = "/";
        }
    }, [token]);

    return (
        <>
            <Header />
            <Container gradient>
                <div>
                    <h1>Login</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label>Full Name</label>
                            <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} />
                            {formik.errors.username && formik.touched.username && <p>{formik.errors.username}</p>}
                        </div>

                        <div>
                            <label>Password</label>
                            <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
                            {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}
                        </div>

                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                    {message && (
                        <div>
                            <p>{message}</p>
                        </div>
                    )}
                </div>
            </Container>
        </>
    );
};

export default Login;
