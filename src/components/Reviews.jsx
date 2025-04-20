// src/components/Reviews.jsx
export default function Reviews() {
  const reviews = [
    {
      quote: 'When I cannot fall asleep, I turn on this app and am out within 5 minutes.',
      author: '— Sarah L.',
      rating: 5,
    },
    {
      quote: 'I have a very busy brain and calm helps me unwind each night.',
      author: '— John M.',
      rating: 5,
    },
    {
      quote: 'Calm has changed my life in immeasurable ways; I feel more connected.',
      author: '— Aisha R.',
      rating: 5,
    },
    // additional reviews as needed
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Over 2 million 5-star reviews.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-lg shadow-lg"
            >
              <p className="italic mb-4">“{r.quote}”</p>
              <p className="font-semibold mb-2">{r.author}</p>
              <div className="flex justify-center">
                {/* Placeholder for stars */}
                {Array(r.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="mr-1">⭐</span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
