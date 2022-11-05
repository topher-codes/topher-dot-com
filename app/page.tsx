import Image from 'next/image';

export default function HomePage() {
	return (
		<div>
			<div className="card" id="card-photo">
				<div className="card-img">
					<Image
						src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/295039461_3274098816179609_5255628418250824421_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6BdGgZX6qLEAX-A8_7P&_nc_ht=scontent-sea1-1.xx&oh=00_AfC85QywsQ2PXjFLxU_B3HL1aYkAzv0lijIu8EssJ6Ibwg&oe=636ABE79"
						width="300"
						height="300"
						alt="nothing"
					/>
				</div>
			</div>
			<div className="card" id="card-about">
				<p>Some Content</p>
			</div>
			<div className="card" id="card-about">
				<p>Some More Content</p>
			</div>
		</div>
	);
}
