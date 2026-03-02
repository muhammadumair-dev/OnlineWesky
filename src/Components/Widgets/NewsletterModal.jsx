import React, { useEffect } from 'react';

const NewsletterModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[url('https://www.onlinecava.com/wp-content/uploads/2020/05/onlinecava-whisky_main-banner.jpg')]  w-full h-full md:h-auto md:max-w-2xl md:rounded-lg overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close newsletter"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 bg-white rounded-full p-2 shadow-sm"
        >
          ✕
        </button>

        <div className="flex flex-col" >
          <div className="md:w-1/2 bg-cover bg-center p-8 text-white" style={{backgroundImage:'url(/assets/newsletter-bg.jpg)'}}>
            <h2 className="text-2xl font-bold">SIGN UP FOR NEWSLETTER</h2>
            <p className="mt-3 text-sm">Signup for our newsletter to get notified about sales and new products.</p>
          </div>

          <div className="md:w-1/2 p-6 md:p-10">
            <form className="flex flex-col gap-4">
              <label className="text-sm font-medium">Your Email (required)</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />

              <div>
                <div className="text-xs font-semibold mb-2">CAPTCHA</div>
                <div className="w-full border rounded p-4 flex items-center justify-center text-sm text-gray-600">reCAPTCHA placeholder</div>
              </div>

              <div className="flex gap-3 mt-4">
                <button type="submit" className="bg-amber-400 text-white px-4 py-2 rounded-md">Submit</button>
                <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
