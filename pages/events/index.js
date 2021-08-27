import EventList from "../../components/events/event-list"
import { getAllEvents } from "../dummy-data"

function AllEventsPage() {
    const { allEvents } = getAllEvents()

    return <section>
        <EventList events="{allEvents}">{ allEvents }</EventList>
    </section>
}

export default AllEventsPage