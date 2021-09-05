import { Fragment } from "react"
import { useRouter } from "next/router"

import EventList from "../../components/events/event-list"
import ResultsTitle from "../../components/events/results-title"
import { getFilteredEvents } from "../dummy-data"

function FilteredEventsPage() {
    const router = useRouter()
    console.log(router.query)

    const filterData = router.query.slug
    console.log(filterData)

    if (!filterData) {
        return <p className="center">loading...</p>
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]
    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return <p className="center">invalid search filter, try again</p>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p className="center">no event found for the chosen filter, try again</p>
    }

    console.log(filteredEvents)

    // month has 0 as base number
    const date = new Date(numYear, numMonth - 1)

    console.log(date)

    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    ) 
}

export default FilteredEventsPage