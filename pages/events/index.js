import EventList from "../../components/events/event-list"
import { getFeaturedEvents } from "../dummy-data"

function AllEventsPage() {
    const featuredEvents = getFeaturedEvents()
    console.log(featuredEvents)

    return <section>
        <EventList items={featuredEvents} />
    </section>
}

export default AllEventsPage