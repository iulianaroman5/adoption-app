import Card from './Card';
import plusImg from "../assets/+.svg";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { getAnimals } from '../services/services';
import { useEffect, useState } from 'react';


const Content = (props) => {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const animalBreeds = new Set();

    
    useEffect( () => {
        getAnimals()
        .then(result => {
            result.forEach(el =>{ 
                console.log(el.breed);
            animalBreeds.add(el.breed);
            }
                );
            setList(result);
        })
        .catch(err => console.log(err));

    },[]);


    const goToAddAnimal = () => {
        navigate('add-animal')
    }

    console.log(animalBreeds);

    return (<>
       

        <div className="content-box">
            <div className='card1 first'>
                <img src={plusImg} />
                <Button
                    class={"add-button"}
                    btnName={"Add animal"}
                    onClick={goToAddAnimal}
                />
            </div>
            {list.length > 0 && list.map((obj) => <Card
                breed={obj.breed}
                age={obj.age}
                name={obj.name}
                gender={obj.gender}
                images={obj.images}
                key={obj.id}
            />)}
        </div>
      
    </>
    );
}

export default Content;