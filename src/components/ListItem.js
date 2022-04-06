import { Link } from 'react-router-dom';

// Components
import Rating from "./Rating";

export default function ListItem({ id, name, rating, image }) {
  return (
    <div className='show-item'>
        <Link to={`/shows/${id}`}>
            <img src={image} alt={name} />
        </Link>
        <Rating rating={rating} />
        <Link to={`/shows/${id}`}>
            <p className='item-title'>{name}</p>
        </Link>
    </div>
  )
}
