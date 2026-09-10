import { useNavigate } from 'react-router-dom'

function Contact() {
	const navigate = useNavigate()

	function handleSubmit(event) {
		event.preventDefault()
		navigate('/')
	}

	return (
		<main className="page contact-page">
			<p className="eyebrow">LET'S CONNECT</p>
			<h1>Contact Page</h1>
			<form className="contact-form" onSubmit={handleSubmit}>
				<label>
					Message
					  <textarea name="message" />
				</label>
				<button type="submit">Send Message</button>
			</form>
		</main>
	)
}

export default Contact
