import { useState } from 'react';
import emailjs from 'emailjs-com';

export function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<'success' | 'error' | null>(null);

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setFeedbackType('error');
      setFeedback('Please fill in all fields.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFeedbackType('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    try {
      setIsSending(true);
      setFeedback(null);
      setFeedbackType(null);

      await emailjs.send(
        (import.meta as any).env.VITE_EMAILJS_SERVICE_ID,
        (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: fullName,
          from_email: email,
          subject,
          message,
          to_email: 'fatimazahra.zaha1504@gmail.com',
        },
        (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setFeedbackType('success');
      setFeedback('Your message has been sent successfully. Thank you for reaching out!');
      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Email send error', error);
      setFeedbackType('error');
      setFeedback('Something went wrong while sending your message. Please try again later or email me directly.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          Feel free to reach out for collaboration, job opportunities, or questions about my work. I usually
          respond within a day.
        </p>
        <div /*className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_minmax(0,1fr)] gap-8"*/>
          {/* Contact form 
          <form
            onSubmit={handleSendEmail}
            className="bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm transition-all duration-200 hover:shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-150"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-150"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-150"
                placeholder="e.g. Junior full-stack opportunity, collaboration, question..."
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 resize-none transition-all duration-150"
                placeholder="Write your message here..."
              />
            </div>
            {feedback && (
              <div
                className={`mb-4 text-sm rounded-md px-3 py-2 ${
                  feedbackType === 'success'
                    ? 'bg-green-50 text-green-800 dark:bg-green-900/40 dark:text-green-100'
                    : 'bg-red-50 text-red-800 dark:bg-red-900/40 dark:text-red-100'
                }`}
              >
                {feedback}
              </div>
            )}
            <div className="flex items-center justify-between gap-3">
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                {isSending ? (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send message</span>
                )}
              </button>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Or email me directly at{' '}
                <a
                  href="mailto:fatimazahra.zaha1504@gmail.com"
                  className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  fatimazahra.zaha1504@gmail.com
                </a>
              </p>
            </div>
          </form>
          */}
          {/* Contact infos */}
          <div className="space-y-4 justify-self-center ">
            <div className="bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 text-sm flex flex-col gap-3 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-200">fatimazahra.zaha1504@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-200">+212 707-154222</span>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/FatiZaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex-1 flex-1 text-center rounded-lg bg-gray-900 text-white px-3 py-1.5 text-xs font-medium hover:bg-gray-800 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/fatima-zahra-zaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex-1 flex-1 text-center rounded-lg bg-blue-600 text-white px-3 py-1.5 text-xs font-medium hover:bg-blue-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
