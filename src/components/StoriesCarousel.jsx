// src/components/StoriesCarousel.jsx
export default function StoriesCarousel() {
  const items = [
    { src: '/images/story1.jpg', alt: 'LeVar Burton' },
    { src: '/images/story2.jpg', alt: 'Tom Chatfield' },
    { src: '/images/story3.jpg', alt: 'Erik Braa' },
    { src: '/images/story4.jpg', alt: 'Tamara Levitt' },
    { src: '/images/story5.jpg', alt: 'Mel Mah' },
    // Add more as needed
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex space-x-4">
            {items.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-40 h-56 rounded-lg overflow-hidden bg-white shadow-md">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
