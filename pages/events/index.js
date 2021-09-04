import { Fragment } from "react"
import EventList from "../../components/events/event-list"
import EventsSearch from "../../components/events/events-search"
import { getAllEvents } from "../dummy-data"

function AllEventsPage() {
    const allEvents = getAllEvents()
    // console.log(allEvents)

    return (
        <Fragment>
            <EventsSearch />
            <EventList items={allEvents} />
        </Fragment>
    )
}

export default AllEventsPage