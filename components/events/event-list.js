import EventItem from "./event-item"

function EventList(props) {
    // props to pass the event data to this component
    const { items } = props.events

    return <section>
        event list
        <ul>
            {items.map( event => <EventItem /> )}
        </ul>
    </section>
}

export default EventList