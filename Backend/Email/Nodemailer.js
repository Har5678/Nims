import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nims23178@gmail.com',  // Replace with your Gmail address
      pass: 'fytw sogv mxat yoym'          // Replace with your Gmail password or App Password
    }
  });



const nodemailers=  (formData) => {
  console.log(formData.formData);
  
    const mailOptions = {
        from: formData.formData.email,      // Sender's email
        to: 'nims23178@gmail.com', // Recipient's email
        subject: 'Hey! The new lead is here', // Subject line
        text: `Here's the new lead. Please contact the customer.\nDetails:\nName: ${formData.formData.name}  \n Email: ${formData.formData.email} \n Phone: ${formData.formData.phone} \n Message: ${formData.formData.message}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });

      return formData;
}

export default nodemailers;