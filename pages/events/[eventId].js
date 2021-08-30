import { useRouter } from "next/router"
import { getEventById } from "../dummy-data"

function EventDetailPage() {
    const router = useRouter()

    console.log(router.query.eventId)
    const eventId = router.query.eventId
    const event = getEventById(eventId)

    console.log(event)
    if (!event) {
        return <p>no event found</p>
    }
    
    return <section>
        event detail page
    </section>
}

export default EventDetailPage