export default function Testimonials() {
  const testimonials = [
    { quote: 'Zanis reduced our deployment time by 70%. Game changer.', author: 'Sarah Chen', role: 'CTO at TechCorp' },
    { quote: 'The best infrastructure platform we\'ve used. Security is top-notch.', author: 'James Wilson', role: 'DevOps Lead at CloudScale' },
    { quote: 'Simple, powerful, and reliable. Exactly what we needed.', author: 'Maria Garcia', role: 'Engineering Manager at DataFlow' }
  ];
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black text-center mb-16">Trusted by leading teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-gray-400 hover:-translate-y-1 hover:shadow-lg group transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-black transform group-hover:scale-125 transition" style={{transitionDelay: `${i * 50}ms`}}>★</span>)}
              </div>
              <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-black group-hover:text-gray-800 transition">{testimonial.author}</p>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
