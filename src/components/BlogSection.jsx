// src/components/BlogSection.jsx
export default function BlogSection() {
    const posts = [
      {
        title: '5 Ways to Improve Your Sleep',
        excerpt: 'Discover practical tips and routines to fall asleep faster and wake up refreshed.',
        linkText: 'Read More',
        href: '#',
      },
      {
        title: 'Meditation Techniques for Beginners',
        excerpt: 'Learn simple meditation exercises to reduce stress and increase focus.',
        linkText: 'Read More',
        href: '#',
      },
      {
        title: 'The Science Behind Calm Music',
        excerpt: 'Explore how curated music can enhance relaxation and productivity.',
        linkText: 'Read More',
        href: '#',
      },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            From the Calm Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article key={idx} className="border rounded-lg overflow-hidden shadow-sm">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a
                    href={post.href}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {post.linkText}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }