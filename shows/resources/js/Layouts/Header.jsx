import { usePage } from "@inertiajs/react";

function Header(props){
    const user = usePage().props.auth.user;
    console.log(user)
    return(
        <header className={props.class}>
            <a href="/" className="header__logo">Shows</a>
            {
                user ? 
                <nav className="header__navigation">
                    <span className="header__navigation--user">
                        <p className="header__navigation--user-name">{user.name}</p>
                        <img src="https://i.pinimg.com/736x/97/7b/3d/977b3d3bdccb2f19c1ee887688a054bc.jpg" alt={user.name} className="header__navigation--user-image" />
                    </span>
                </nav>
                : 
                <nav className="header__navigation">
                    <a href={route('login')} className="header__navigation--auth">LOGIN</a>
                    <a href={route('register')} className="header__navigation--auth">REGISTER</a>
                </nav>
            }
        </header>
    )
}

export default Header;