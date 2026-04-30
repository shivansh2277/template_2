import { ArrowRight, Star, CheckCircle2, PhoneCall, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - SEO Optimized H1 */}
      <section className="relative bg-primary-50 pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full shadow-sm mb-6 border border-primary-100">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium text-slate-700">4.9/5 Average Rating on Google</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                The Best Dentist in <span className="text-primary-600">Seattle, WA</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Experience pain-free, comprehensive dental care. From routine cleanings to advanced dental implants and Invisalign, our local Seattle team is here to give you a confident smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+12065550123"
                  className="inline-flex justify-center items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20 text-lg"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Call (206) 555-0123</span>
                </a>
                <Link
                  to="/services"
                  className="inline-flex justify-center items-center space-x-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all text-lg"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Accepting New Patients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Most Insurances Accepted</span>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              {/* Decorative background blob */}
              <div className="absolute inset-0 bg-primary-200 rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Friendly Seattle Dentist treating a patient"
                className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full border-4 border-white"
                referrerPolicy="no-referrer"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Star className="w-6 h-6 text-green-600 fill-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Top Rated</p>
                  <p className="text-xs text-slate-500">Seattle Dental Clinic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Keyword Optimized */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Dental Services</h2>
            <p className="text-lg text-slate-600">
              We offer a full range of dental treatments in our state-of-the-art Seattle clinic to keep your smile healthy and beautiful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dental Implants",
                desc: "Permanent, natural-looking tooth replacements. Restore your smile and chewing ability with our expert implant specialists.",
                img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Invisalign & Braces",
                desc: "Straighten your teeth discreetly. We offer clear aligners and traditional braces for teens and adults in Seattle.",
                img: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Root Canal Therapy",
                desc: "Pain-free root canals to save infected teeth. Our endodontic treatments are fast, effective, and prioritize your comfort.",
                img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              }
            ].map((service, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow group">
                <img src={service.img} alt={service.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.desc}</p>
                  <Link to="/services" className="text-primary-600 font-semibold inline-flex items-center hover:text-primary-700">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-colors">
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews Integration (Simulated) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Seattle Patients Say</h2>
              <p className="text-slate-400 text-lg">Don't just take our word for it. Read our verified Google reviews.</p>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <span className="text-2xl font-bold">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-slate-300 text-sm ml-2">(128 Reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah M.", text: "Best dentist in Seattle! I was terrified of getting a root canal, but Dr. Smith and the team made it completely painless. Highly recommend!" },
              { name: "James L.", text: "Got my Invisalign here. The staff is incredibly friendly, the clinic is spotless, and they are always on time. My smile looks amazing." },
              { name: "Emily R.", text: "I've been looking for a reliable local dentist since moving to WA. Seattle Smiles exceeded my expectations. Thorough cleaning and great advice." }
            ].map((review, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center font-bold text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-white">{review.name}</p>
                    <p className="text-xs text-slate-400">Local Guide</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Visit Our Seattle Clinic</h2>
                <p className="text-slate-600 mb-8 text-lg">
                  Conveniently located in downtown Seattle. We offer free parking for our patients.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-600 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Address</h4>
                      <p className="text-slate-600">123 Smile Avenue<br />Seattle, WA 98101</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-600 shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Hours</h4>
                      <p className="text-slate-600">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+12065550123"
                  className="inline-flex justify-center items-center space-x-2 bg-primary-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors w-full sm:w-auto text-center"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Call to Schedule: (206) 555-0123</span>
                </a>
              </div>
              
              {/* Map Embed */}
              <div className="h-[400px] lg:h-auto bg-slate-200 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1709845123456!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Seattle Smiles Location Map"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
