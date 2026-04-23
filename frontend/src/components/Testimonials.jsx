export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Reduced deployment time by 70%. The best infrastructure platform we have ever used.',
      author: 'Sarah Chen',
      role: 'CTO, TechCorp',
      company: '🏢'
    },
    {
      quote: 'Enterprise-grade security with developer-friendly simplicity. A game changer.',
      author: 'James Wilson',
      role: 'DevOps Lead, CloudScale',
      company: '🌐'
    },
    {
      quote: 'Scalability and reliability we can depend on. Highly recommended.',
      author: 'Maria Garcia',
      role: 'Engineering Manager, DataFlow',
      company: '📊'
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-black text-center mb-16">
          Trusted by leading teams
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-8 rounded-xl border border-gray-200 hover:border-gray-300 hover-lift">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-black">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="text-2xl">{testimonial.company}</div>
                <div>
                  <p className="font-bold text-black">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
