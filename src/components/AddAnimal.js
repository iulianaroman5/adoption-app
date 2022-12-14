import Input from "../UI/Input";
import { Formik, Form } from 'formik';
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import FileInput from "../UI/FileInput";
import { useState } from "react";
import { addNewAnimal } from "../services/services";

const AddAnimal = () => {

    const nav = useNavigate();
    const [images, setImages] = useState([]);

    return <>
        <div className="animal-container">
            <Formik
                initialValues={{ name: "", age: "", gender: "", breed: "", type:'' , images: [] }}
                onSubmit={(values) => {
                    values.images = images;
                    addNewAnimal(values).then(() => {
                        nav('/');
                    }).catch(err => console.log(err));

                }}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Form onSubmit={handleSubmit} className="form">
                        <div className="d-f">
                            <div className="inputs-first col-4">
                                <Input
                                    label={'Name'}
                                    name={"name"}
                                    placeholder={"Name"}
                                    type={"text"}
                                    onChange={handleChange}
                                    value={values.name}
                                />
                                <Input
                                    label={'Gender'}
                                    name={"gender"}
                                    placeholder={"Gender"}
                                    type={"text"}
                                    onChange={handleChange}
                                    value={values.gender}
                                />
                                <Input
                                    label={'Breed'}
                                    name={"breed"}
                                    placeholder={"Breed"}
                                    type={"text"}
                                    onChange={handleChange}
                                    value={values.breed}
                                />
                                <Input
                                    label={'Age'}
                                    name={"age"}
                                    placeholder={"Age"}
                                    type={"text"}
                                    onChange={handleChange}
                                    value={values.age}
                                />
                                <Input
                                    label={'Type of animal'}
                                    name={"type"}
                                    placeholder={"Type of animal"}
                                    type={"text"}
                                    onChange={handleChange}
                                    value={values.type}
                                />
                            </div>
                            <div className="inputs-2 col" >
                                <FileInput
                                    images={images}
                                    setImages={setImages}
                                />
                            </div>
                        </div>
                        <Button
                            btnName={"Save"}
                            class={"save-new-animal"}
                            type={'submit'}
                            onClick={() => { }}
                        />
                        <Button
                            btnName={"Close"}
                            class={"save-new-animal"}
                            type={"button"}
                            onClick={() => nav(-1)}
                        />
                    </Form>
                )}
            </Formik>

        </div>
    </>

}

export default AddAnimal;