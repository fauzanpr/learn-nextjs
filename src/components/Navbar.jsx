import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="title">
                <h1>People Data</h1>
            </div>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/list'>People List</Link>
        </nav>
     );
}
 
export default Navbar;