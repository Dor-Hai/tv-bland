// Components
import ShowInfoItem from './ShowInfoItem';

export default function ShowInfo({ streamedOn, schedule, status, genres }) {

  // Format Genres
  genres = genres ? genres.join(', ') : genres;

  // Format Schedule
  schedule = schedule ? schedule.days.join(', ') : schedule;

  return (
    <>
        <h4>Show Info</h4>
        {streamedOn && (<ShowInfoItem name="Streamed on" value={streamedOn.name} />)}
        {schedule && (<ShowInfoItem name="Schedule" value={schedule} />)}
        {status && (<ShowInfoItem name="Status" value={status} />)}
        {genres && (<ShowInfoItem name="Genres" value={genres} />)}
    </>
  )
}
