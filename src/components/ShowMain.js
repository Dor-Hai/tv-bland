// Components
import Rating from './Rating';

// Styles
import './ShowMain.css';

// Functions
import htmlToTxtFormatter from '../utils/htmlToTxtFormatter';

// Images
import thumbnail from '../images/thumbnail-large.png';

export default function ShowMain({ image, name, rating, summary }) {
    
    return (
        <div className="container flex show-main">
            <div className="column">
                {image ? (<img src={image.original} alt={name} />) : (<img src={thumbnail} alt={name} />)}
            </div>
            <div className="column">
                <Rating rating={rating ? rating.average : rating} isSingle={true} />
                <h1>{name}</h1>
                <p>{htmlToTxtFormatter(summary)}</p>
            </div>
        </div>
    )
}
