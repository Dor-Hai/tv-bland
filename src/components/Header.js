import { Link } from 'react-router-dom';

// Styles
import './Header.scss';

export default function Header() {
  return (
    <header className='container padding'>
        <Link to='/' className='logo'>TV Bland</Link>
    </header>
  )
}
