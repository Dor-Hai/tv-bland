// Styles
import './ShowStar.css';

export default function ShowStar({ avatar, name, value }) {

    return (
        <div className="show-star">
                {avatar ? (<img src={avatar} alt={name} />) : (<i className="fa-solid fa-user"></i>)}
                {name && (<p>{name}</p>)}
                {value && (<p className='light-text'>{value}</p>)}
        </div>
    )
}
