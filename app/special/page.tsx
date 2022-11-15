'use client';

import { useState } from 'react';

export default function SpecialPage() {
	const birthdayTime = new Date('Jan 13, 2023 00:00:00').getTime();
	const [second, setSecond] = useState(0);
	const [minute, setMinute] = useState(0);
	const [hour, setHour] = useState(0);
	const [day, setDay] = useState(0);
	// function updateCountdown() {
	const now = new Date().getTime();
	const gap = birthdayTime - now;

	// 	const second = 1000;
	// 	const minute = second * 60;
	// 	const hour = minute * 60;
	// 	const day = hour * 24;

	// 	const d = Math.floor(gap / day);
	// 	const h = Math.floor((gap % day) / hour);
	// 	const m = Math.floor((gap % hour) / minute);
	// 	const s = Math.floor((gap % minute) / second);
	// 	dayEl.innerText = d;
	// 	hourEl.innerText = h;
	// 	minuteEl.innerText = m;
	// 	secondEl.innerText = s;
	// 	setTimeout(updateCountdown, 1000);
	// }
	return (
		<div className="card-body">
			<h1>Countdown to Miranda's Birthday! ❤️</h1>
			<p>(so I don't make the unforgivable mistake of forgetting 😬)</p>
		</div>
	);
}
