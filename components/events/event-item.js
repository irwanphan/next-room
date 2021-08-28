import Link from "next/link"
import classes from "./event-item.module.sass"

function EventItem(props) {
    // props for data coming from outside this component
    const { image, title, date, location, id } = props
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const formatedAddress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`
    
    return <li className={classes.eventItem}>
        <img src={'/' + image} alt={title} />
        <div>
            <div>
                <h3>{title}</h3>
                <time>{humanReadableDate}</time>
                <address>{formatedAddress}</address>
            </div>
            <div>
                <Link href={exploreLink}>explore more</Link>
            </div>
        </div>
    </li>
}

export default EventItem