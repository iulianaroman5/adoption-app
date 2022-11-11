import Button from "../UI/Button";
import profileImg from "../assets/profileImg.svg";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../configuration/firebase";
import { AuthContext } from "../context/Auth";
import {useContext} from 'react';


const Header = () => {
    
    const {currentUser} = useContext(AuthContext);

    const auth = getAuth(app);
    const nav = useNavigate();

    const handleLogEvent = (event) => {
        event.preventDefault();
        if (currentUser) {
            auth.signOut().then(() => {
                nav('/');
            });
        }else{
            nav('/login');
        }
       

    }

    return (
        <header>
            <h1 className="header-title">ForeverHome</h1>
            <section className="details">
                <img src={profileImg} alt="user-profile-img" />
                <Button
                    class={'header-button'}
                    disabled={true}
                    onClick={() => { }}
                    btnName={"Profile"}

                />
                <Button
                    class={'header-button'}
                    // disabled={true}
                    onClick={(event) => handleLogEvent(event)}
                    btnName={currentUser ? "Log out" : 'Log in'}
                />
            </section>


        </header>
    );
}

export default Header;