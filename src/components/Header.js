import Button from "../UI/Button";
import profileImg from "../assets/profileImg.svg";

const Header = () => {
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
                    disabled={true}
                    onClick={() => { }}
                    btnName={"Log out"}
                />
            </section>


        </header>
    );
}

export default Header;