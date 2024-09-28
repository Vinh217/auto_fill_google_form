import React, { useState } from 'react';

const EmailForm = () => {
  const [emails, setEmails] = useState('');
  const [formLink, setFormLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [statusMessages, setStatusMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailArray = emails
      .split('\n')
      .map((email) => email.trim())
      .filter((email) => email !== '');

    setStatusMessages([]);
    setLoading(true);
    setError(null);

    try {
      for (const email of emailArray) {
        setStatusMessages((prev) => [...prev, `Đang gửi: ${email}`]);

        const response = await fetch('/api/autosubmit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formUrl: formLink,
            emails: [email],
          }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'An error occurred');
        }

        setStatusMessages((prev) => [...prev, `Đã gửi thành công: ${email}`]);
      }
      alert('Forms submitted successfully!');
    } catch (err) {
      setError(err.message || 'Failed to submit the form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Google Form Email Submit</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label htmlFor="emails" className="block text-sm font-medium text-gray-700">
            Nhập danh sách email (mỗi email 1 dòng):
          </label>
          <textarea
            id="emails"
            value={emails}
            onChange={(e) => setEmails(e.target.value)}
            placeholder="example1@gmail.com&#10;example2@gmail.com"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm min-h-[200px]"
          />
        </div>

        <div>
          <label htmlFor="formLink" className="block text-sm font-medium text-gray-700">
            Nhập link Google Form:
          </label>
          <input
            type="text"
            id="formLink"
            value={formLink}
            onChange={(e) => setFormLink(e.target.value)}
            placeholder="https://docs.google.com/forms/d/e/FORM_ID/formResponse"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>

      {/* Display status messages */}
      <div className="mt-6 space-y-2">
        {statusMessages.map((message, index) => (
          <p key={index} className="text-sm text-gray-600">
            {message}
          </p>
        ))}
      </div>
    </div>
  );
};

export default EmailForm;
