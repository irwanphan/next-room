import EventList from "../../components/events/event-list"
import { getAllEvents } from "../dummy-data"

function AllEventsPage() {
    const allEvents = getAllEvents()
    // console.log(allEvents)

    return <section>
        <EventList items={allEvents} />
    </section>
}

export default AllEventsPage