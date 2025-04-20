// src/components/FAQ.jsx
export default function FAQ() {
    const faqs = [
      {
        question: 'What is Calm?',
        answer: 'Calm is an app for sleep, meditation and relaxation to help you reduce stress and improve sleep.',
      },
      {
        question: 'How much does Calm cost?',
        answer: 'Calm offers a 7-day free trial, after which it costs $14.99/month or $69.99/year.',
      },
      {
        question: 'Can I cancel anytime?',
        answer: 'Yes, you can cancel your subscription anytime from your account settings.',
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="border rounded-lg p-4 bg-white">
                <summary className="cursor-pointer font-medium">{faq.question}</summary>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  }