import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className='light-blue lighten-3'>
            <div className='nav-wrapper'>
                <a href='/' className='brand-logo'>
                    React Shop
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contacts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
