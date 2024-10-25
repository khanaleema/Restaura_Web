import React from 'react';
import { CONTACT } from '../constants';

const ContactSection = () => {
  return (
    <section className="container mx-auto py-16" id="contact">
      <h2 className="mb-12 text-center text-4xl font-semibold text-gray-800 lg:text-5xl">
        Contact Us
      </h2>
      <div className="text-neutral-400">
        {CONTACT.map((detail) => (
          <div key={detail.key} className="my-8">
            <p className="border-b-2 border-dotted border-neutral-700 pb-4 text-center text-xl tracking-tight lg:text-2xl">
              {detail.value}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="mailto:khanaleema770@gmail.com" 
          className="inline-block rounded bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition duration-300"
        >
          Email Us
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
