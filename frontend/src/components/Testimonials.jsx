export default function Testimonials() {
  const testimonials = [
    {
      text: "Zanis Ltd transformed how we deploy infrastructure. Time to market dropped by 60%.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
      avatar: "👩‍💻"
    },
    {
      text: "The security features and compliance tools saved us weeks of work. Highly recommended.",
      author: "James Wilson",
      role: "DevOps Lead, CloudScale",
      avatar: "👨‍🔧"
    },
    {
      text: "Best infrastructure platform I've used. The support team is incredible.",
      author: "Maria Garcia",
      role: "Engineering Manager, DataFlow",
      avatar: "👩‍🚀"
    }
  ];

  return (
    <section className="py-20 bg-primary border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Engineers Worldwide
          </h2>
          <p className="text-xl text-gray-400">
            Join thousands of teams using Zanis Ltd
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-accent/20 bg-primary/50 hover:border-accent/50 transition"
            >
              <div className="flex items-start mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
