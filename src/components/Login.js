import { Formik, Form } from "formik";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app, { singInWithGoogle } from "../configuration/firebase";


const Login = () => {
    const nav = useNavigate();

    const auth = getAuth(app);

    const handleLogin = (values) => {
        signInWithEmailAndPassword(auth,values.email, values.password)
        .then(() => {
            nav('/');
        }).catch(err => console.log('Error -> ' , err))
    }
    
           

    return <>
        <div className="background-img">
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => { 
                    handleLogin(values);


                }}
            >
                {({ values,
                    handleChange,
                    handleSubmit
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="login-container">
                            <h1>ForeverHome</h1>
                            <Input
                                class={'login-input-fields'}
                                label={'Email'}
                                type={'email'}
                                value={values.email}
                                name={"email"}
                                onChange={handleChange}
                                placeholder={'Email'}
                            />
                            <Input
                                class={'login-input-fields'}
                                label={'Password'}
                                type={'password'}
                                value={values.password}
                                name={'password'}
                                onChange={handleChange}
                                placeholder={"Password"}
                            />
                             <div className="login-buttons">
                             <Button
                                btnName={"Login"}
                                class={'login-button'}

                            />
                            <p>You don't have an account? <br/> Register right away.</p>
                            <Button
                                btnName={"Sign-up"}
                                class={'login-button'}
                                onClick={() => nav('/sign-up')}
                            />
                            {/* <Button 
                                btnName={'Sign-up with Google'}
                                class={'login-button'}
                                onClick={() => singInWithGoogle }
                                /> */}
                        </div>
                        </div>
                       

                    </Form>

                )}

            </Formik>
        </div>
    </>
}

export default Login;