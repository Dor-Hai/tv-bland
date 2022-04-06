// Hooks
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

// Components
import ShowMain from '../components/ShowMain';
import ShowInfo from '../components/ShowInfo';
import ShowStarring from '../components/ShowStarring';
import Preloader from '../components/Preloader';

// Styles
import './Show.scss';

export default function Show() {
  // Page ID
  const { id } = useParams();
  // Show Info URL
  const url = `https://api.tvmaze.com/shows/${id}`;
  const { data: show, isPending, error } = useFetch(url);
  // Show Stars Info URL 
  const starringUrl = `https://api.tvmaze.com/shows/${id}/cast`;
  const { data: stars, starsIsPending, starsError } = useFetch(starringUrl);

  return (
    <>
      {isPending && <Preloader />}
      {error && <div className="container">{error}</div>}
      {show && (
        <ShowMain 
        name={show.name}
        rating={show.rating}
        image={show.image}
        summary={show.summary}
      />
      )}
      <div className="wrapper light-bg">
        <div className="container padding show-details">
          <div className="column">
            {show && <ShowInfo
                  streamedOn={show.network}
                  schedule={show.schedule}
                  status={show.status}
                  genres={show.genres}
          />}
          </div>
          <div className="column">
            {starsIsPending && <div className="container">Loading...</div>}
            {starsError && <div className="container">{error}</div>}
            {stars && <ShowStarring stars={stars} />}
          </div>      
        </div>
      </div>  
    </>
  )
}
