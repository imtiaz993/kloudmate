import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [captcha, setCaptcha] = useState(false);

  const form = useRef();
  const captchaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    emailjs
      .sendForm(
        'service_z9a31f8',
        'template_8e3l25l',
        form.current,
        'qf4PPeOHbo-eso3SJ'
      )
      .then(
        (result) => {
          setSent(true);
          window.analytics && window.analytics.track('Contact Form Submitted');
        },
        (error) => {
          setError(error.text);
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="mt-12 w-full justify-self-center md:mt-20 md:w-[596px] lg:mt-0 lg:w-full">
      {sent ? (
        <div
          className="rounded-b border-t-4 border-green-500 bg-green-100 px-4 py-3 text-green-900 shadow-md"
          role="alert"
        >
          <div className="flex">
            <div>
              <p className="font-bold">Thank you for getting in touch!</p>
              <p className="text-sm">
                One of our colleagues will get back in touch with you soon! Have
                a great day!
              </p>
            </div>
          </div>
        </div>
      ) : (
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col rounded-xl md:bg-dark-200 md:py-8 md:px-8 lg:px-14 lg:pb-6 lg:pt-6"
        >
          <div className="mt-6">
            <label className="mb-2 block text-sm text-white" htmlFor="Name">
              Name
            </label>
            <input
              required
              className="w-full rounded border border-gray-700 bg-dark-300 px-4 py-4 leading-tight text-gray-700 shadow enabled:text-white"
              id="username"
              type="text"
              placeholder="Enter your name"
              name="user_name"
            />
          </div>
          <div className="mt-6">
            <label className="mb-2 block text-sm text-white" htmlFor="Email">
              Email
            </label>
            <input
              required
              className="w-full rounded border border-gray-700 bg-dark-300 py-4 px-4 leading-tight text-gray-700 shadow autofill:bg-dark-300 enabled:text-white"
              id="email"
              type="email"
              name="user_email"
              placeholder="Enter email address"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="mb-2 block text-sm text-white">
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              className="block w-full resize-none rounded border  border-gray-700 bg-dark-300 py-4  px-4 text-white autofill:bg-dark-300"
              placeholder="Enter your message"
            />
          </div>
          <div className="mt-6">
            <ReCAPTCHA
              onChange={setCaptcha}
              theme="dark"
              sitekey="6LdxjYwhAAAAAIgQRcE3w1PGRH_yXG8x7hN9Mcik"
              ref={captchaRef}
              onErrored={setError}
              size="normal"
            />
          </div>
          {error && (
            <div
              className="relative mt-6 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <div className="mt-4 md:mt-9">
            <button
              disabled={submitting || !captcha}
              type="submit"
              className="w-full rounded-full bg-primary py-4 px-20 text-white disabled:bg-primary-300 sm:px-24 sm:py-4 md:float-right md:w-auto md:px-6 md:py-2"
            >
              Send a message
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
