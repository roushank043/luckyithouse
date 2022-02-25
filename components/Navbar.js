import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper #01579b white darken-2">
        <Link href="/" ><a href="#" className="brand-logo left "> <img   src="LOGO.png" /> </a></Link>
        <ul id="nav-mobile" className="right ">
          <li> <a  className='nl' href="/" >Home</a></li>
          <li ><a className='nl' href="/services">Service</a></li>
          <li><a className='nl' href="/contactus">Contact us</a></li>
          {/* <li ><a href="/login">Login</a></li> */}
          {/* <li  ><a href="/signup">Sign UP</a></li> */}
        </ul>
      </div>
    </nav>
  )

}
export default NavBar;