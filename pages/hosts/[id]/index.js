import { useRouter } from "next/router"

function HostPlacesPage() {
    const router = useRouter()
    console.log(router.query)
    
    return <section>
        this host got some places
    </section>
}

export default HostPlacesPage