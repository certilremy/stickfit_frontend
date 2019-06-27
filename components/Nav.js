import Link from 'next/link';

const Nav =()=>(
    <div>
     <Link href ="/">
     <p> Home</p>
     </Link>
    <Link href ="/sell">
     <p> Sell!</p>
    </Link>
    </div>
);

export default Nav;