import { Link } from 'react-router-dom';

// styles
import './Header.css';

export default function Header() {
  return (
    <header className='container padding'>
        <Link to='/' className='logo'>TV Bland</Link>
    </header>
  )
}