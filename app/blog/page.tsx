'use client';

import { Posts } from './posts';

export default function BlogPage() {
	const posts = Posts;
	function log() {
		console.log(posts);
	}

	return (
		<div>
			<h1>Blogg</h1>
			<div className="blog-list">
				<button onClick={log}>Log</button>
				<select name="select" id="select"></select>
			</div>
		</div>
	);
}

// function BlogPosts({ post }: any) {
// 	const { id, title, description, date } = post || {};
// 	return (
// 		<div>
// 			<p>{id}</p>
// 			<p>{title}</p>
// 			<p>{description}</p>
// 			<p>{date}</p>
// 		</div>
// 	);
// }
