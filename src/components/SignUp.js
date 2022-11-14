import { Formik, Form } from "formik";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../configuration/firebase';

const SignUp = () => {

    const nav = useNavigate();

  function handleRegister(values){
        const auth = getAuth(app);
        console.log(auth);

        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(() => {
            signInWithEmailAndPassword(auth, values.email, values.password)
            .then(() => nav('/'))
            .catch(er => console.log(er));

        }).catch(er=> console.log('We encounter error -> ',er));
    }

    const handlePasswordValidation = (values) => {

        if (values.password.length === 0) {
            throw new Error('Password cannot be empty');
        }
        if (values.password !== values.password2) {
            throw new Error('Password must match with confirmed password.');
        }
        return true;
    }


    return <>
        <Formik
            initialValues={{
                email: '',
                password: '',
                password2: ''
            }}
            onSubmit={(values) => {
                if (handlePasswordValidation(values)) {
                    handleRegister( values)
                }
            }}
        >
            {({ values,
                handleChange,
                handleSubmit,
            }) => <Form onSubmit={handleSubmit}>
                    <div className="signup-container">
                        <h1>Sign-up</h1>
                        <section className="signup-section">
                            <Input
                                type={'email'}
                                value={values.email}
                                label={'Email'}
                                name={'email'}
                                class={'signup-input'}
                                placeholder={'Email'}
                                onChange={handleChange}
                            />
                            <Input
                                type={'password'}
                                value={values.password}
                                label={'Password'}
                                name={'password'}
                                class={'signup-input'}
                                placeholder={'Password'}
                                onChange={handleChange}
                            />
                            <Input
                                type={'password'}
                                value={values.password2}
                                label={'Password'}
                                name={'password2'}
                                class={'signup-input'}
                                placeholder={'Confirm Password'}
                                onChange={handleChange}
                            />
                        </section>
                        <section className="signup-buttons">
                            <Button
                                btnName={'Sign-up!'}
                                class={'signup-btn'}

                            />
                            <Button
                                btnName={'Close'}
                                onClick={() => {
                                    nav(-1);
                                }}
                                class={'signup-btn'}
                                type={'button'}

                            />
                        </section>
                    </div>
                </Form>

            }
        </Formik>
    </>
}


export default SignUp;