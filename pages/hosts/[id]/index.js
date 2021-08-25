import { useRouter } from "next/router"

function HostPlacesPage() {
    const router = useRouter()
    console.log(router.query)

    function loadEventHandler() {
        router.push({
            pathname: '/hosts/[id]/[hosteventid]',
            query: {id: 'ved', hosteventid: 'eventa'}
        })
    }
    
    return <section>
        this host got some places

        <button onClick={loadEventHandler}>Load event A</button>
    </section>
}

export default HostPlacesPage