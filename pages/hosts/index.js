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
                    <Link href={{
                        pathname: '/hosts/[id]',
                        query: {id: host.id}
                    }}>{host.name}</Link>
                </li>
            ))}
        </ul>
    </section>
}

export default HostsPage