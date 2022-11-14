import { Posts } from '../posts';

export default function PostsPage({ params }: any) {
	const posts = Posts;
	return (
		<div>
			<h1>{posts[params.id].title}</h1>
		</div>
	);
}
