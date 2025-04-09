import express from 'express';
import nodemailers from './Nodemailer.js';
import nodemailerR from './NodemailerR.js';


const emailRouter= express.Router();

emailRouter.post('/email/enquiry', (req,res)=>{
    const response=nodemailers(req.body);

    return res.json({success: true, message: response})
}); 

emailRouter.post('/email/registration', (req,res)=>{
    const response=nodemailerR(req.body);
    return res.json({success: true, message: response})
});




export default emailRouter;