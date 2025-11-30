/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Container, Section, Typography, Button } from "../../components";
import { isMobile } from "../../utils";
import "./style.scss";

const Contact = () => {
	const socialAccounts = window.bootstrap.sections.home.socialAccounts || [];
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);
	const isMobileViewport = isMobile();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			// The recipient email address
			const recipient = "koidalasai@gmail.com";

			// Encode the subject and body for the mailto link
			const subject = encodeURIComponent(
				`Contact Message from ${formData.name}`
			);
			const body = encodeURIComponent(`
                    Name: ${formData.name}
                    Email: ${formData.email}
                    
                    Message:
                    ${formData.message}
                `);

			// Construct the mailto link
			const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

			// Create a temporary link element and click it to trigger the email client
			const tempLink = document.createElement("a");
			tempLink.href = mailtoLink;
			document.body.appendChild(tempLink);
			tempLink.click();
			document.body.removeChild(tempLink);

			// Here you would typically make an API call
			// For now, we'll simulate a submission
			await new Promise((resolve) => {
				setTimeout(resolve, 1000);
			});

			setSubmitStatus("success");
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			setSubmitStatus("error");
			console.error("Form submission error:", error);
		} finally {
			setIsSubmitting(false);

			setTimeout(() => {
				setSubmitStatus(null);
			}, 3000);
		}
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		if (submitStatus) setSubmitStatus(null);
	};

	return (
		<Section id="contact" classes="contact-section">
			<Container noPadding classes="contact-section-wrapper">
				<div className="contact-content">
					<div className="contact-header">
						<Typography variant="" className="main-header">
							Connect with me
						</Typography>
						<Typography variant="body-md" className="sub-header">
							Have a project in mind? Let&apos;s talk!
						</Typography>
					</div>

					<form className="contact-form" onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="form-group">
							<label htmlFor="message">Message</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								rows={5}
								required
							/>
						</div>

						<Button
							type="submit"
							variant="primary"
							size="sm"
							className="submit-btn"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Sending..." : "Send Message"}
						</Button>
						{submitStatus === "success" && (
							<Typography
								variant="body-lg"
								className="form-status success"
							>
								Mail Opened successfully! Just click Send.
							</Typography>
						)}
						{submitStatus === "error" && (
							<Typography
								variant="body-lg"
								className="form-status error"
							>
								Failed to send message. Please try again.
							</Typography>
						)}
					</form>
				</div>
				<div className="follow-me">
					<div className="follow-me-header">
						{isMobileViewport ? (
							<Typography variant="heading-xs">
								Follow & Connect.
							</Typography>
						) : (
							<>
								<Typography variant="" className="main-header">
									Follow me!
								</Typography>
								<Typography
									variant="body-md"
									className="sub-header"
								>
									Like & Connect.
								</Typography>
							</>
						)}
					</div>
					<div className="social-links">
						{socialAccounts.map((item) => {
							return (
								<div className="media" key={item.key}>
									<img src={item.src} alt={item.name} />
									<a className={item.key} href={item.href}>
										<span className="media-name">
											{item.name}
										</span>
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default Contact;
