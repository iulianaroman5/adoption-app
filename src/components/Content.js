import Card from './Card';
import plusImg from "../assets/+.svg";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";


const Content = (props) => {
    const navigate = useNavigate();

    const array = [{ id: '1', name: 'Oxi', gender: 'M', breed: 'Labrador', age: '2 months' }];
    

    const goToAddAnimal = () => {
        navigate('add-animal')
    }


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
            {array.map((obj, index) => <Card
                breed={obj.breed}
                age={obj.age}
                name={obj.name}
                gender={obj.gender}
                key={index}
            />)}
        </div>
      
    </>
    );
}

export default Content;