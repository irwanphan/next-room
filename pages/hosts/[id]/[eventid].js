import { useRouter } from "next/router"

function HostEvent() {
    const router = useRouter()
    console.log(router.query)

    return <section>
        specific event with this host
    </section>
}

export default HostEvent