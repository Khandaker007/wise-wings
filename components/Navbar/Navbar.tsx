import style from './navbar.module.scss';
const {
    navbar
} = style;

const Navbar = () => {
    return (
        <header className={navbar}>
            <h1>Navbar</h1>
        </header>
    );
};

export default Navbar;
