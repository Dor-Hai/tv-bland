import { Link } from 'react-router-dom';

// Images
import thumbnail from '../images/thumbnail-large.png';

// Components
import Rating from "./Rating";

export default function ListItem({ id, name, rating, image }) {
  return (
    <div className='show-item'>
        <Link to={`/shows/${id}`}>
            {image ? (<img src={image.medium} alt={name} />) : (<img src={thumbnail} alt={name} />)}
        </Link>
        <Rating rating={rating ? rating.average : rating} />
        <Link to={`/shows/${id}`}>
            <p className='item-title'>{name}</p>
        </Link>
    </div>
  )
}
