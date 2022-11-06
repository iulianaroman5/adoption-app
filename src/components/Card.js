import paw from "../assets/paw.svg";
import unknown from '../assets/unknown.png';

const Card = (props) =>{
return (
    <div className="card1">
        <img src={props.images[0] ?? unknown} alt="pet"/>
        <section className="pet-details" >
            <p><img src={paw} alt="paw"/><span>Name: {props.name}</span></p>
            <p><img src={paw} alt="paw"/><span>Gender: {props.gender}</span></p>
            <p><img src={paw} alt="paw"/><span>Breed: {props.breed}</span></p>
            <p><img src={paw} alt="paw"/><span>Age: {props.age}</span></p>
        </section>
    </div>
)
}

export default Card;