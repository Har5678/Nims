import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "nims23178@gmail.com", // Replace with your Gmail address
        pass: "fytw sogv mxat yoym"  // Replace with your Gmail App Password
    }
});

const nodemailerR = (formData) => {
    console.log(formData.formData);

    const mailOptions = {
        from: formData.formData.email,      // Sender's email
        to: "nims23178@gmail.com",          // Recipient's email
        subject: "Hey! The new lead is here", // Subject line
        html: `
            <h2>New Application Received</h2>
            <p>Please contact the customer. Here are the details:</p>
            <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%;">
                <tr>
                    <th style="background-color: #f2f2f2;">Field</th>
                    <th style="background-color: #f2f2f2;">Details</th>
                </tr>
                <tr><td><strong>Name</strong></td><td>${formData.formData.studentName}</td></tr>
                <tr><td><strong>Father's Name</strong></td><td>${formData.formData.fathersName}</td></tr>
                <tr><td><strong>Mother's Name</strong></td><td>${formData.formData.mothersName}</td></tr>
                <tr><td><strong>Gender</strong></td><td>${formData.formData.gender}</td></tr>
                <tr><td><strong>Religion</strong></td><td>${formData.formData.religion}</td></tr>
                <tr><td><strong>Category</strong></td><td>${formData.formData.category}</td></tr>
                <tr><td><strong>Mobile</strong></td><td>${formData.formData.mobile}</td></tr>
                <tr><td><strong>Email</strong></td><td>${formData.formData.email}</td></tr>
                <tr><td><strong>Address</strong></td><td>${formData.formData.address}</td></tr>
                <tr><td><strong>Date of Birth</strong></td><td>${formData.formData.dob}</td></tr>
                <tr><td><strong>Course</strong></td><td>${formData.formData.course}</td></tr>
            </table>
            <p>Regards,<br>NIACE Team</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error:", error);
        } else {
            console.log("Email sent:", info.response);
        }
    });

    return formData;
};

export default nodemailerR;
