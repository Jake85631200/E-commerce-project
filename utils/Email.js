const nodemailer = require("nodemailer");
let transporter;

if (process.env.NODE_ENV === "production") {
  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_SEND_FROM,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
} else {
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
}

const sendMail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.GMAIL_SEND_FROM,
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

module.exports = sendMail;
