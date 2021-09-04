import { useRouter } from "next/router"
import { Fragment } from "react"
import EventList from "../../components/events/event-list"
import EventsSearch from "../../components/events/events-search"
import { getAllEvents } from "../dummy-data"

function AllEventsPage() {
    const allEvents = getAllEvents()
    // console.log(allEvents)

    const router = useRouter()

    function findEventHandler(year, month) {
        const fullPath = `/events/${year}/${month}`
        
        router.push(fullPath)
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventHandler} />
            <EventList items={allEvents} />
        </Fragment>
    )
}

export default AllEventsPage