export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Zanis reduced our deployment time by 70%. Game changer.',
      author: 'Sarah Chen',
      role: 'CTO at TechCorp'
    },
    {
      quote: 'The best infrastructure platform we\'ve used. Security is top-notch.',
      author: 'James Wilson',
      role: 'DevOps Lead at CloudScale'
    },
    {
      quote: 'Simple, powerful, and reliable. Exactly what we needed.',
      author: 'Maria Garcia',
      role: 'Engineering Manager at DataFlow'
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black text-center mb-16">
          Trusted by leading teams
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-black">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-black">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
