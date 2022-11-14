import Button from "../UI/Button";


const NavBar = (props) => {


    const animalList = Array.from(props.listOfAnimals);

    const filter = (el) => {
        props.searchFilter(el.target.value );
    }



    return <>
        <nav className="navbar">
        <li><Button btnName={'Show all'} onClick={() => window.location.reload()} class='nav-btn'/></li>

            {animalList.length > 0 && animalList.map((el, index) =>
                <li key={index} className="list-element">
                    <Button btnName={el} onClick={filter} class='nav-btn' value={el}/>
                </li>)}

        </nav>
    </>

}

export default NavBar;