import React from 'react';
import Header from './Header';
import { banner } from '../assets/video';
const ContactUs = () => {


  const sendEmail = () => {
    const recipientEmail = 'leonistunes@gmail.com'; // Replace with the recipient's email address
    const subject = 'Regarding Contact Us'; // Replace with the subject of your email
    const body = 'Hello, I would like to contact you regarding...'; // Replace with the email body

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  return (
    <div className="w-full h-screen relative bg-primary">
      <div className="fixed w-full bg-white py-4 shadow-md z-10">
        <Header />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-transparent opacity-70"></div>
        <video className="absolute inset-0 object-cover w-full h-full z-0" autoPlay loop muted>
          <source src={banner} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="contact">
          <h1 className="text-4xl font-bold mb-4 text-black">Have any questions? Feel free to send us a message!</h1>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={sendEmail}
          >
            Send a message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;