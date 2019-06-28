import Link from 'next/link';
import NavStyle from './styles/NavStyles';

const Nav =()=>(
    <NavStyle>
     <Link href ="/items">
     <a>Items</a>
     </Link>
    <Link href ="/sell">
     <a> Sell</a>
    </Link>
    <Link href ="/signup">
     <a> Signup</a>
    </Link>
    <Link href ="/orders">
     <a> Oeders</a>
    </Link>

    <Link href ="/account">
     <a> Account</a>
    </Link>
    </NavStyle>
);

export default Nav;