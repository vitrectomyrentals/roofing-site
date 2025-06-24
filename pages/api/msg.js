export default function handler(req, res) {
  const nodemailer = require("nodemailer");
  require("dotenv").config();

  // Validate required fields
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Please fill in all required fields." });
  }

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "vitrectomyrentals@gmail.com",
      pass: "njaklneywpagppxo",
    },
  });

  // Email content
  const mailOptions = {
    from: "vitrectomyrentals@gmail.com",
    to: "vitrectomyrentals@gmail.com",
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${
      phone || "Not provided"
    }\n\nMessage:\n${message}`,
    html: `
      <h4>New Message from Contact Form</h4>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ error: "Failed to send email. Please try again later." });
    }
    console.log("Email sent successfully:", info.response);
    return res.status(200).json({ message: "Email sent successfully!" });
  });
}
