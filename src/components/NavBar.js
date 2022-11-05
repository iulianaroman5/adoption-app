import Button from "../UI/Button";


const NavBar = (props) => {

    const filter = (el) => {
        props.searchFilter(el);
    }

    const arr = ['caini', 'pisici', 'iepuri', 'pasari',];

    return <>
        <nav className="navbar">
            {arr.map((el, index) =>
                <li key={index} className="list-element">
                    <Button btnName={el} onClick={filter} class='nav-btn' />
                </li>)}

        </nav>
    </>

}

export default NavBar;