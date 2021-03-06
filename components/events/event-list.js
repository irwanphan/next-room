import EventItem from "./event-item"

function EventList(props) {
    // props to pass the event data to this component
    const { items } = props

    return <section>
        event list
        <ul>
            {items.map((event) => (
                <EventItem
                    key={event.id} 
                    id={event.id}
                    image={event.image}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                />
            ) )}
        </ul>
    </section>
}

export default EventList