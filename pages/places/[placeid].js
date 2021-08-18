import { useRouter } from 'next/router'

function PlaceDetailPage() {
    const router = useRouter()

    console.log(router.pathname)
    console.log(router.query)

    // send request to backend server
    // fetch data with id of router.query.projectId
    
    return <section>
        the place detail
    </section>
}

export default PlaceDetailPage