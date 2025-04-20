// src/components/Pricing.jsx
export default function Pricing() {
    return (
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Start your free trial
          </h2>
          <p className="text-gray-700 mb-8">
            Enjoy unlimited access to all features with our 7-day free trial.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Try Free for 7 Days
          </button>
        </div>
      </section>
    );
  }