import EventList from '../components/events/event-list'
import { getFeaturedEvents } from './dummy-data'

function HomePage() {
	const featuredEvents = getFeaturedEvents()

	return <section>
		<EventList items={featuredEvents}/>
	</section>
}

export default HomePage