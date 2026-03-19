'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';

      if (!serviceId || !templateId || !publicKey) {
        console.error('Missing EmailJS environment variables.');
        return;
      }

      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            alert('Message sent successfully!')
            console.log('SUCCESS!');
          },
          (error) => {
            alert(`Message failed to send: ${error.text}`)
            console.log('FAILED...', error.text);
          },
        );
    } else {
      console.log('Form reference is null.');
    }
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <div>
          <label>Name</label>
          <input type="text" name="user_name" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="user_email" />
      </div>
      <div>
        <label>Message</label>
        <textarea name="message" />
        <input className="send" type="submit" value="Send" />
      </div>
    </form>
  );
};