import { useRouter } from "next/router"

function FilteredEventsPage() {
    const router = useRouter()
    console.log(router.query)

    return <section>
        filtered events page
    </section>
}

export default FilteredEventsPage