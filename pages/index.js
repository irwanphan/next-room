import Link from 'next/link'
import { getFeaturedEvents } from './dummy-data'

function HomePage() {
	const featuredEvents = getFeaturedEvents()

	return <section>
		home page
		<ul>
			<li>
				<Link href='/places'>places</Link>
			</li>
			<li>
				<Link href='/hosts'>hosts</Link>
			</li>
			<li>
				<Link href='/events'>events</Link>
			</li>
			<li>
				<Link href='/blogs'>blogs</Link>
			</li>
		</ul>
	</section>
}

export default HomePage