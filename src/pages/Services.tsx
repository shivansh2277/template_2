import { CheckCircle2, PhoneCall } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "dental-implants",
      title: "Dental Implants in Seattle",
      description: "Missing a tooth? Dental implants are the most durable and natural-looking solution for tooth replacement. Our Seattle implant specialists use advanced 3D imaging to ensure precise, pain-free placement.",
      benefits: ["Permanent tooth replacement", "Looks and feels natural", "Prevents bone loss", "No impact on adjacent teeth"],
      img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "braces-invisalign",
      title: "Invisalign & Braces",
      description: "Achieve the straight smile you've always wanted. We offer both traditional braces and clear Invisalign aligners. Perfect for teens and adults looking for orthodontic treatment in Seattle.",
      benefits: ["Clear, virtually invisible aligners", "Comfortable custom fit", "Removable for eating and brushing", "Faster treatment times"],
      img: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "root-canal",
      title: "Painless Root Canal Therapy",
      description: "Don't let tooth pain disrupt your life. Our endodontic experts perform fast, comfortable root canals to save infected teeth and relieve pain immediately.",
      benefits: ["Immediate pain relief", "Saves your natural tooth", "Modern, pain-free techniques", "Prevents further infection"],
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry & Whitening",
      description: "Enhance your smile with our cosmetic services. From professional teeth whitening to porcelain veneers, we can help you achieve a bright, flawless smile.",
      benefits: ["Professional teeth whitening", "Custom porcelain veneers", "Smile makeovers", "Boosts self-confidence"],
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Dental Services</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Comprehensive, top-rated dental care tailored to your needs. Explore our specialized treatments.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="md:w-2/5 h-64 md:h-auto">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <a
                    href="tel:+12065550123"
                    className="inline-flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Consult with a Dentist</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Not sure what you need?</h2>
        <p className="text-lg text-slate-600 mb-8">
          Schedule a comprehensive exam and consultation. Our Seattle team will evaluate your oral health and create a personalized treatment plan.
        </p>
        <a
          href="tel:+12065550123"
          className="inline-flex justify-center items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20 text-lg"
        >
          <PhoneCall className="w-5 h-5" />
          <span>Call (206) 555-0123 to Book</span>
        </a>
      </div>
    </div>
  );
}
