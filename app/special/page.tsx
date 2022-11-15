'use client';

import { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import { useCountdown } from './useCountdown';

export default function SpecialPage() {
	const birthdayTime = new Date('Jan 13, 2023 00:00:00').getTime();

	return (
		<div className="card-body">
			<h1>Countdown to Miranda's Birthday! ❤️</h1>
			<p>(So that I don't make the unforgivable mistake of forgetting 😬)</p>
			<CountdownTimer targetDate={birthdayTime} />
		</div>
	);
}
