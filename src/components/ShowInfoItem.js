// Styles
import './ShowInfoItem.css';

export default function ShowInfoItem({ name, value }) {

    return (
        <div className="show-info-item">
                {name && (<p>{name}</p>)}
                {value && (<p className='light-text'>{value}</p>)}
        </div>
    )
}
