import Card from './Card';
import plusImg from "../assets/+.svg";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { deleteAnimal, getAnimals } from '../services/services';
import { useEffect, useState, useContext } from 'react';
import { AuthContext, useCtx } from '../context/Auth';

const Content = (props) => {


    const navigate = useNavigate();

    const list = props.list;
    const setList = props.setList;

    const {currentUser, adoptAnimal, setAdoptAnimal} = useContext(AuthContext);
 
    
    const { categories } = props;

    const handleClose = (event, id) => {
        event.preventDefault();
        deleteAnimal(id);

    }

    useEffect(() => {
        getAnimals()
            .then(result => {
                setList(result);

            })
            .catch(err => console.log(err));
    }, []);


    useEffect(() => {
        categories(new Set(list.map(el => el.type)));
    }, [list])


    const goToAddAnimal = () => {
        navigate('add-animal')

    }

    const handleAdoptMe = (event,animal) => {
        event.preventDefault();
        setAdoptAnimal(animal);
        adoptAnimal && navigate('adopt-me');
         
        
    }


    return (<>


        <div className="content-box">
            {currentUser && <div className='card1 first'>
                <img src={plusImg} />
                <Button
                    class={"add-button"}
                    btnName={"Add animal"}
                    onClick={goToAddAnimal}
                />
            </div>}
            {list.length > 0 && list.map((obj, index) => <Card
                breed={obj.breed}
                age={obj.age}
                name={obj.name}
                gender={obj.gender}
                images={obj.images}
                key={obj.id + index}
                handleClose={(e) => handleClose(e, obj.id)}
                adoptMe={(event) => handleAdoptMe(event, obj)}
            />)}
        </div>

    </>
    );
}

export default Content;