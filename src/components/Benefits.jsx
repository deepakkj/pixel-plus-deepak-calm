// src/components/Benefits.jsx
export default function Benefits() {
    const items = [
      {
        icon: '/icons/stress.svg',
        title: 'Stress less',
        description: 'Get the stress relief you need with our guided exercises.',
        linkText: 'Learn More',
      },
      {
        icon: '/icons/sleep.svg',
        title: 'Sleep more',
        description: 'Fall asleep more easily nightly and wake up refreshed.',
        linkText: 'Learn More',
      },
      {
        icon: '/icons/mindful.svg',
        title: 'Live mindfully',
        description: 'Improve focus and wellness with daily mindful exercises.',
        linkText: 'Learn More',
      },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            We're here to help you feel better.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center px-4">
                <img src={item.icon} alt={item.title} className="mb-4 w-12 h-12" />
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{item.description}</p>
                <a href="#" className="text-blue-600 underline font-medium">
                  {item.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }