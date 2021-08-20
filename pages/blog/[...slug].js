import { useRouter } from "next/router"

function BlogPostsPage() {
    const router = useRouter()
    console.log(router.query)
    
    return <section>
        <h3>blog posts</h3>
    </section>
}

export default BlogPostsPage