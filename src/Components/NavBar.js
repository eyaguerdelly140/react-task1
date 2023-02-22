
        
import './NavBar.css';

function NavBar() {
    return (
      
       <header className='allNavBar'>
        <p className="logo" >Pixelmetters</p>
        <nav className='navBar-container'>
            <ul>
                <li><a href="#">Work</a></li>
                <li><a href="#">Approach</a></li>
                <li><a href="#">Culture</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                
            </ul>

        </nav>
        <button>Get in touch</button>
        </header>
      
        
    );
}

export default NavBar;
