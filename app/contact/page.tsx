export default function ContactPage() {
	return (
		<div className="fullscreen">
			<h1>Contact</h1>
			<div className="card">
				<form
					action="https://formsubmit.co/andrewsc33@icloud.com"
					method="POST"
					className="form"
				>
					<input type="text" name="name" placeholder="Name" required />
					<input type="email" name="email" placeholder="Email" required />
					<input type="text" name="message" placeholder="Message" required />
					<button type="submit">Send</button>
				</form>
			</div>
		</div>
	);
}
