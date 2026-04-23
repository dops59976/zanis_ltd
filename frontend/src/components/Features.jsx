export default function Features() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', description: 'Deploy in seconds, scale instantly. Sub-10ms latency across all regions.' },
    { icon: '🔒', title: 'Enterprise Security', description: 'SOC 2 certified. AES-256 encryption. Your data, your control.' },
    { icon: '🌍', title: 'Global Scale', description: 'Deploy anywhere. 99.9% uptime SLA. Always available.' }
  ];
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100/30 rounded-full filter blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer relative overflow-hidden transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-800 transition">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition leading-relaxed">{feature.description}</p>
                <div className="mt-6 h-1 w-0 bg-black group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
