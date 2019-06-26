import Link from 'next/link';

const Nav =()=>(
    <div>
     <Link href ="/sell">
     <p> Home</p>
     </Link>
    <Link href ="/">
     <p> Sell!</p>
    </Link>
    </div>
);

export default Nav;