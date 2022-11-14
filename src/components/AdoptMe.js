import { Form, Formik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, useCtx } from "../context/Auth";
import Button from "../UI/Button";
import Input from "../UI/Input";


const AdoptMe = (props) => {

    const { adoptAnimal, currentUser, setAdoptAnimal } = useContext(AuthContext);

    const data = props.data;
    const nav = useNavigate();


    console.log(adoptAnimal,data);

    return <>
        <Formik
            initialValues={{
               ...adoptAnimal, firstName: '',
                lastName: '', email: currentUser.email,
                address: '', phoneNumber: '', petName: adoptAnimal?.name
            }}
            onSubmit={(values) => {
                alert(`You adopted ${values.petName} with success.`)
                nav('/');
            }}
        >
            {({ values,
                handleChange,
                handleSubmit,
            }) => <Form onSubmit={handleSubmit}>
                    <div className="adopt-container">
                        <h1>Adoption application</h1>
                        <section className="double-input">
                            <h4>*Pet parent</h4>
                            <Input
                                type={'text'}
                                value={values.firstName}
                                label={'First Name'}
                                name={'firstName'}
                                class={'adopt-double-input'}
                                placeholder={'First Name'}
                                onChange={handleChange}
                            />
                            <Input
                                type={'text'}
                                value={values.lastName}
                                label={'Last Name'}
                                name={'lastName'}
                                class={'adopt-double-input'}
                                placeholder={'Last Name'}
                                onChange={handleChange}
                            />
                        </section>
                        <section className="second-section">
                            <Input
                                type={'text'}
                                value={values.petName}
                                label={'Pet Name'}
                                name={'petName'}
                                class={'adopt-input'}
                                placeholder={'Pet Name'}
                                onChange={handleChange}
                            />
                            <Input
                                type={'email'}
                                value={values.email}
                                label={'Your Email'}
                                name={'email'}
                                class={'adopt-input'}
                                placeholder={'Email'}
                                disabled={true}
                                onChange={handleChange}
                            />
                            <Input
                                type={'text'}
                                value={values.phoneNumber}
                                label={'Phone number'}
                                name={'phoneNumber'}
                                class={'adopt-input'}
                                placeholder={'Phone number'}
                                onChange={handleChange}
                            />
                            <Input
                                type={'text'}
                                value={values.address}
                                label={'Address'}
                                name={'address'}
                                class={'adopt-input'}
                                placeholder={'Address'}
                                onChange={handleChange}

                            />
                            <img src={adoptAnimal?.images[0]} alt="Pet" />
                        </section>
                        <section className="adopt-buttons">
                            <Button 
                                btnName={'Adopt now'}
                                class={'adopt-btn'}

                            />
                            <Button 
                                btnName={'Close'}
                                onClick={() => {
                                    setAdoptAnimal({});
                                    nav('/');
                                }}
                                class={'adopt-btn'}
                                type={'button'}
                                
                            />
                        </section>
                    </div>
                </Form>

            }
        </Formik>
    </>
}

export default AdoptMe;