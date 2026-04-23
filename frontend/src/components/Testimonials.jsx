export default function Testimonials() {
  const testimonials = [
    {
      text: "Zanis Ltd reduced our deployment time by 70%. The infrastructure is rock-solid.",
      author: "Sarah Chen",
      role: "VP Engineering, TechCorp",
      company: "TechCorp",
      avatar: "SC"
    },
    {
      text: "Best infrastructure platform we've evaluated. The support team is exceptional.",
      author: "James Wilson",
      role: "CTO, CloudScale Inc",
      company: "CloudScale",
      avatar: "JW"
    },
    {
      text: "Enterprise-grade security with developer-friendly tools. Exactly what we needed.",
      author: "Maria Garcia",
      role: "Head of DevOps, DataFlow",
      company: "DataFlow",
      avatar: "MG"
    }
  ];

  return (
    <section id="customers" className="py-24 bg-primary relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Loved by Teams Worldwide
          </h2>
          <p className="text-xl text-gray-400">
            See what engineers from leading companies have to say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-accent/20 bg-primary/50 hover:border-accent/50 hover:bg-primary/70 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-accent/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="text-white font-bold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo cloud (company logos) */}
        <div className="mt-20 pt-16 border-t border-accent/10">
          <p className="text-center text-gray-400 text-sm font-semibold mb-8">
            TRUSTED BY LEADING COMPANIES
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {['TechCorp', 'CloudScale', 'DataFlow', 'FinTech', 'WebScale'].map((company) => (
              <div
                key={company}
                className="h-12 px-4 rounded-lg border border-accent/20 bg-primary/50 flex items-center justify-center text-gray-400 font-semibold hover:border-accent/50 hover:text-accent transition group"
              >
                <span className="text-sm">● {company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
