// Styles
import './Rating.scss'

export default function Rating({ rating, isSingle }) {

    const ratingDivided = rating / 2;
    const ratingFormatted = Math.round(ratingDivided * 10) / 10;
    
    const ratingToStars = (rating) => {
        let ratingFloored = Math.floor(rating);
        return [...Array(5)].map((count, index) => {
            if(ratingFloored > 0){
                ratingFloored -= 1;
                return (
                    <i key={index} className="fa-solid fa-star full"></i>
                )
            } else {
                return (
                    <i key={index} className="fa-solid fa-star empty"></i>
                )
            }
        })
    }

    return (
        <>
            {rating && isSingle && (
                <div className="rating-container">
                    <div>{ratingToStars(ratingFormatted)}</div> 
                    <p>{ratingFormatted}/5</p>
                 </div>
            )}
            {rating && !isSingle && (
                (<p className="stars-small">{ratingToStars(ratingFormatted)}</p>)
            )}
            {!rating && (<p className='text-small'>No Rating</p>)}
        </>
    )
}
