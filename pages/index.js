import Link from 'next/link'

function HomePage() {
	return <section>
		home page

		<ul>
		<li>
				<Link href='/places'>the places</Link>
			</li>
			<li>
				<Link href='/hosts'>the hosts</Link>
			</li>
			<li>
				<Link href='/blogs'>the blogs</Link>
			</li>
		</ul>
	</section>
}

export default HomePage