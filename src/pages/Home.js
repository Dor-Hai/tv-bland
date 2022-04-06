import { useFetch } from '../hooks/useFetch';

// Components
import ListItem from '../components/ListItem';
import SiteDescription from '../components/SiteDescription';

// Styles
import './Home.css';

export default function Home() {

  const { data: shows, isPending, error } = useFetch('https://api.tvmaze.com/schedule');

  return (
    <>
      <div className="container">
        <SiteDescription />
      </div>
      <div className="wrapper white-bg">
        <div className='container padding'>
          {isPending && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {shows && <h3>Last Added Shows</h3>}
          <div className="item-grid">
            {shows && shows.map(show => (
                <ListItem
                    key={show.id} 
                    id={show.show.id}
                    name={show.show.name} 
                    rating={show.show.rating.average} 
                    image={show.show.image.medium} 
                />
            ))} 
          </div>
        </div>
      </div>
    </>
  )
}
