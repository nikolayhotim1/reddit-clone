import { db } from '@/lib/db'
import { PostFeed } from '../PostFeed'
import { INFINITE_SCROLL_PAGINATION_RESULTS } from '@/config'

export async function GeneralFeed() {
	const posts = await db.post.findMany({
		orderBy: {
			createdAt: 'desc'
		},
		include: {
			votes: true,
			author: true,
			comments: true,
			subreddit: true
		},
		take: INFINITE_SCROLL_PAGINATION_RESULTS // 4 to demonstrate infinite scroll, should be higher in production
	})
	return <PostFeed initialPosts={posts} />
}
