import Image from 'next/image';
import Link from 'next/link';
export default function ProjectPage() {
	return (
		<div>
			<h1>Projects</h1>
			<div className="card">
				<div className="card-body">
					<h4>An AI image generator built using Next.js 13</h4>
				</div>
				<Link href="https://ai-images-theta.vercel.app">
					<Image
						src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/314500520_3361677350755088_6241970959365848743_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=liNS2RRljgEAX-fa_X6&_nc_ht=scontent-sea1-1.xx&oh=00_AfCnXMykw6JG8_uQD37scWsWBk9sGqAAUT1oRK0ayDyZIg&oe=636B6814"
						alt=""
						width="600"
						height="400"
					/>
				</Link>
			</div>
			<div className="card">
				<div className="card-body">
					<h4>An older blog built using GatsbyJS</h4>
				</div>
				<Link href="https://thejourney.gtsb.io">
					<Image
						src="https://lh3.googleusercontent.com/ZtCiFrfSMLcL5t32ro6EzuYFycmG0KRlnrdGfiIJk01S_0Wj6fg_0SCKQFe1tlLLW4awLz2sOmA2xYBtJtzzNjmqUGxsV2hh5Snwp11rVbm6W42j1OT4LrXHBlrwnjxkq1GLkvbTC44afwQDOcLUrCmB_Uamrj2yG8yaKDYQeB8XVqon8YqPykwguKrZjCuP5lMbbEsFGMUYwDh5CJlAZlg5hJBzpQreKmAel9fQkAxP8Qu7a2k_1HUksxKz1B0EouRHzNOdUcdds_ghdEbx8ScDkFOwdPka-WxK92dtb93P4fqHHwgvclZs_JholH4Ck40fjCxcrYz5Jov2WL0iNt6prA9ZVxAfZXCLrOWRbhFrpVKTaCIbE8vImxrVUyhtpiWDb7kjofNAt7ktZPGAUXWDD3WJXLBgrbRJzLguHDlIcT_irhyEgvvxggfkTsBnPFwiPbwrF2QqxryeDBT_Fvx31uDLWFkKoO-as7De1Ib9Tm3UoVp7bxeZBhS-Bt_x5jd1pMZmDhIpkKb3TjvlBaFrp5ikT6-_700ZnEYCNLHBNYwJdgb-_F7ImSlggxCGOkWkt6I_DM4tQWESf-FD96jOyR7ILqQVGDQ91lpf9aZsxapzwYeShsPzITXXEhYMAmZod-PPDqPDeV4junv9Vl0_BvtdXYWgX-SJtJJ5RF8M-E1biZHU49xmSDuAbSjD7GKBsDAlmKH_xO9jcwSNfsSFaRD8Mp-tqE4mnoMMeFBD7t1j2c6K3Ff0dC2i6mYqRrIF6oyNzf4Lf8rTxxWPaXRnxWqUHzwhO4TsXwrX1IgCTSGgBJ3FNkotBWaG-RGcqsU-eOixW-JrvekexlejMf0cZb0ot8kCB-t0EPA6u1bwHSLmul4pMWGFkpmL_DXJJAGPY212nnAXGIt_TMfbpwsJ-dzugCnyzrWZ-WI=w2520-h1514-no?authuser=0"
						alt=""
						width="600"
						height="400"
					/>
				</Link>
			</div>
			<div className="card">
				<div className="card-body">
					<h4>A work in progress, Tracker-TS is an inventory manager </h4>
					<p>written in Typescript using Pocketbase for backend</p>
				</div>
				<Link href="#">
					<Image
						src="https://lh3.googleusercontent.com/eCOu34tG8mDbuqY_Es0JASszezGBUF9of-0XtXimseZPtLeE6fas8b-XWKp4tC2XyX0qvz_UJfDYyHl88ORToPNwZlaRiDAXVLABY9z-1hHUwNFwCblLse5dBvVcJGdsTYvAXdgB8HmztmbavWaiesPNIaV-l6O2lz3igU7K0NMDIKXZL8HOMqnQKBZFJT66ItSgqRmzOJWgRu9JYyyKKPZDTPptw3769SEtbYuHLW9A-2LRAME9VPFhCy4WztYORpR4YiPxovFVtTLJw3vFUrR_LYBQUgKZfxg7STd27AvXwgqIzEVR5esHt3n3AtW7MjLvUzU9SY77WS5Yp3-26mSa4UKT12dL0cErwrJhCepMmOaPVjaJFF4ZloYq5P6LKJzH8Mjji7eqPv6bl_3Rc5Nb4fmMa_PBUXGCMbR-vOqNlWlyv7G8Bvl7dBC1em-C57-U4NcHhZiOxpQuqC985CcyaZMYeHH3ANd8OrWPD0j4xsy6FMqCB7ezMM9DwLPUw2F2AqGo5OT9_D3ZqWpSFAbpw_ctMySZ5zu28IL-IJY73IOFjOw8YeTe3FSiBjPZljBdXp_Er_tr8jSGNzxRfOrmAHQmbhzwYcLAKHybeZHqYqgRES_g9M6Zd8k7yYPaIqSl_HRqyxJqF0HtxSj-49aEaQ4dEi5lYPvCYG-vvVDnMrhfmIGDK9Al8_OkhUOYGhtINtSlJ9uCGENLgVlXqLvG5lqBFJxwiuBC3fX_Zk_ZK94YhdRFohnu8xkG34pjaFImqYEBIr0d1a-mYXol1cp8MXOSSVxVW64vVyZLOquqtUoUQgfHq6XBm22Z0SNSj6p3jziWPLoPSkdWzzbGR1KoINOEraT5fN4TwsT9Z5s6HJg0PftUdweXV3XU9VBKiHDJF8jQ9nr0BMYAFtj8G9XnKh3dYLRYjAHlhEE=w2252-h1440-no?authuser=0"
						alt=""
						width="600"
						height="400"
					/>
				</Link>
			</div>
		</div>
	);
}
