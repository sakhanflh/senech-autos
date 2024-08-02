import { Link } from "react-router-dom";

interface navProps {
    styleParent: string;
    styleChild: string;
}
const Navbar = ({ styleParent, styleChild }: navProps) => {
    return (
        <nav className={styleParent}>
            <Link className={styleChild} to={'/'}>Home</Link>
            <Link className={styleChild} to={'/buy'}>Buy</Link>
            <Link className={styleChild} to={'/howitworks'}>How it works</Link>
            <Link className={styleChild} to={'/review'}>Review</Link>
            <Link className={styleChild} to={'/services'}>Services</Link>
        </nav>
    )
}

export default Navbar;