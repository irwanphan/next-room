import { useRouter } from "next/router"
import { Fragment } from "react"
import { getEventById } from "../dummy-data"

import EventSummary from "../../components/event-detail/event-summary"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"
import ErrorAlert from "../../components/ui/error-alert"

function EventDetailPage() {
    const router = useRouter()

    // console.log(router.query.eventId)
    const eventId = router.query.eventId
    const event = getEventById(eventId)
    // console.log(event)

    if (!event) {
        return (
            <ErrorAlert>
                <p>no event found . . .</p>
            </ErrorAlert>            
        )
    }
    
    return (
        <Fragment>
            <EventSummary title={event.title}></EventSummary>
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            ></EventLogistics>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}

export default EventDetailPage