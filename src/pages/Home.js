import { useFetch } from '../hooks/useFetch';

// Components
import ListItem from '../components/ListItem';
import SiteDescription from '../components/SiteDescription';
import Preloader from '../components/Preloader';

// Styles
import './Home.css';

export default function Home() {

  const { data: shows, isPending, error } = useFetch('https://api.tvmaze.com/schedule');

  return (
    <>
      <div className="container">
        <SiteDescription />
      </div>
      <div className="wrapper light-bg">
        <div className='container padding'>
          {isPending && <Preloader />}
          {error && <div>{error}</div>}
          {shows && <h3>Last Added Shows</h3>}
          <div className="item-grid">
            {shows && shows.map(show => (
                <ListItem
                    key={show.id} 
                    id={show.show.id}
                    name={show.show.name} 
                    rating={show.show.rating} 
                    image={show.show.image} 
                />
            ))} 
          </div>
        </div>
      </div>
    </>
  )
}
