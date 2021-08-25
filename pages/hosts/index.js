import Link from 'next/link'

function HostsPage() {
    const hosts = [
        {id: 'ved', name: 'Vedic'},
        {id: 'ed', name: 'Edy'},
    ]

    return <section>
        hosts listed
        <ul>
            {hosts.map((host) => (
                <li key={host.id}>
                    <Link href={`/hosts/${host.id}`}>{host.name}</Link>
                </li>
            ))}
        </ul>
    </section>
}

export default HostsPage