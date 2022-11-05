import Image from 'next/image';
import Link from 'next/link';
export default function ProjectPage() {
	return (
		<div>
			<h1>Projects</h1>
			<div className="card">
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
				<Link href="https://thejourney.gtsb.io">
					<Image
						src="https://lh3.googleusercontent.com/ZtCiFrfSMLcL5t32ro6EzuYFycmG0KRlnrdGfiIJk01S_0Wj6fg_0SCKQFe1tlLLW4awLz2sOmA2xYBtJtzzNjmqUGxsV2hh5Snwp11rVbm6W42j1OT4LrXHBlrwnjxkq1GLkvbTC44afwQDOcLUrCmB_Uamrj2yG8yaKDYQeB8XVqon8YqPykwguKrZjCuP5lMbbEsFGMUYwDh5CJlAZlg5hJBzpQreKmAel9fQkAxP8Qu7a2k_1HUksxKz1B0EouRHzNOdUcdds_ghdEbx8ScDkFOwdPka-WxK92dtb93P4fqHHwgvclZs_JholH4Ck40fjCxcrYz5Jov2WL0iNt6prA9ZVxAfZXCLrOWRbhFrpVKTaCIbE8vImxrVUyhtpiWDb7kjofNAt7ktZPGAUXWDD3WJXLBgrbRJzLguHDlIcT_irhyEgvvxggfkTsBnPFwiPbwrF2QqxryeDBT_Fvx31uDLWFkKoO-as7De1Ib9Tm3UoVp7bxeZBhS-Bt_x5jd1pMZmDhIpkKb3TjvlBaFrp5ikT6-_700ZnEYCNLHBNYwJdgb-_F7ImSlggxCGOkWkt6I_DM4tQWESf-FD96jOyR7ILqQVGDQ91lpf9aZsxapzwYeShsPzITXXEhYMAmZod-PPDqPDeV4junv9Vl0_BvtdXYWgX-SJtJJ5RF8M-E1biZHU49xmSDuAbSjD7GKBsDAlmKH_xO9jcwSNfsSFaRD8Mp-tqE4mnoMMeFBD7t1j2c6K3Ff0dC2i6mYqRrIF6oyNzf4Lf8rTxxWPaXRnxWqUHzwhO4TsXwrX1IgCTSGgBJ3FNkotBWaG-RGcqsU-eOixW-JrvekexlejMf0cZb0ot8kCB-t0EPA6u1bwHSLmul4pMWGFkpmL_DXJJAGPY212nnAXGIt_TMfbpwsJ-dzugCnyzrWZ-WI=w2520-h1514-no?authuser=0"
						alt=""
						width="600"
						height="400"
					/>
				</Link>
			</div>
		</div>
	);
}
