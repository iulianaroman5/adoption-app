import Card from './Card';
import plusImg from "../assets/+.svg";

const Content = () => {
    const array = [{ id: '1', name: 'Oxi', gender: 'M', breed: 'Labrador', age: '2 months' }];

    return (
        <div className="content-box">
            <div className='card1 first'><img src={plusImg} /> </div>
            {array.map((obj, index) => <Card
            breed={obj.breed}
            age={obj.age}
            name={obj.name}
            gender={obj.gender}
            key={index} 
            />)}
        </div>
    );
}

export default Content;