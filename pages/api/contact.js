require("dotenv").config();

const USER = process.env.HOST_EMAIL;
const PASSWORD = process.env.HOST_EMAIL_SECRET;
const RECIPIENT = process.env.RECIPIENT_EMAIL;

export default function Mailer(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: USER,
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: USER,
    to: RECIPIENT,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.send("success");
}
