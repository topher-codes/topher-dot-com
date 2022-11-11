'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Posts } from './posts';

export default function BlogPage() {
	const [input, setInput] = useState('eqfg');
	const posts = Posts;

	return (
		<div>
			<h1>Blogg</h1>
			<div className="blog-list">
				{posts?.map((post) => {
					return <BlogPost key={post.id} note={post} />;
				})}
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

function BlogPost({ note }: any) {
	const { id, title, description, date } = note || {};
	return (
		<div>
			<div>
				<Link href={`/blog/${id}`}>
					<h2>{title}</h2>{' '}
				</Link>
				<h6>{date}</h6>
				<h4>{description}</h4>
			</div>
		</div>
	);
}

// const techBar = [
// 	{
// 		id: 0,
// 		name: '00',
// 	},
// 	{
// 		id: 1,
// 		name: '01',
// 	},
// 	{
// 		id: 2,
// 		name: '02',
// 	},
// 	{
// 		id: 3,
// 		name: '03',
// 	},
// ];

// function TechBarButton({ techBar }) {
// 	const { id, name } = techBar || {};
// 	return (
// 		<div>
// 			<Link href={`/${id}`}>{name}</Link>
// 		</div>
// 	);
// }
