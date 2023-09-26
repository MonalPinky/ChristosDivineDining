function Sendgrid(text) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "duplooyzak2@gmail.com", // Change to your recipient
    from: "578282@student.belgiumcampus.ac.za", // Change to your verified sender
    subject: "Client trying to contact",
    text: text,
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}
