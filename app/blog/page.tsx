'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Posts } from './posts';

export default function BlogPage() {
	const posts = Posts;
	function log() {
		console.log(posts);
	}
	const [input, setInput] = useState('eqfg');

	return (
		<div>
			<h1>Blogg</h1>
			<div className="blog-list">
				<button onClick={log}>Log</button>
			</div>
			<form>
				<input
					type="text"
					name="input"
					id="input"
					value={input}
					onChange={(e) => setInput(e.currentTarget.value)}
				/>
				<button>
					<Link key={input} href={`/blog/${input}`}>
						Go
					</Link>
				</button>
			</form>
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
