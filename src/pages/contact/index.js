/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Container, Section } from "../../components";
import Button from "../../components/common/button";
import { Typography } from "../../components/common";
import "./style.scss";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
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
			<Container>
				<div className="contact-content">
					<div className="contact-header">
						<Typography variant="heading-xl">
							Connect with me
						</Typography>
						<Typography variant="body-lg" className="text-gradient">
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
							size="lg"
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
								Message sent successfully!
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
			</Container>
		</Section>
	);
};

export default Contact;
