import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "5 Signs You Might Need a Root Canal",
      excerpt: "Tooth pain isn't always a cavity. Learn the top 5 warning signs that indicate you might need root canal therapy to save your tooth.",
      date: "Oct 12, 2023",
      author: "Dr. Sarah Smith",
      category: "Treatments",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Invisalign vs. Traditional Braces: Which is Right for You?",
      excerpt: "Struggling to choose between clear aligners and metal braces? We break down the pros, cons, and costs of each orthodontic option.",
      date: "Sep 28, 2023",
      author: "Dr. James Lee",
      category: "Orthodontics",
      img: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "How Long Do Dental Implants Actually Last?",
      excerpt: "Dental implants are an investment in your smile. Discover the lifespan of implants and how to care for them to ensure they last a lifetime.",
      date: "Sep 15, 2023",
      author: "Dr. Sarah Smith",
      category: "Implants",
      img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "The Ultimate Guide to Preventing Cavities",
      excerpt: "Brushing twice a day is just the beginning. Learn advanced tips and dietary changes to keep your teeth cavity-free year-round.",
      date: "Aug 30, 2023",
      author: "Emily Chen, RDH",
      category: "Prevention",
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "What to Expect During Your First Visit",
      excerpt: "Nervous about visiting a new dentist? Here is a step-by-step breakdown of what happens during a comprehensive new patient exam.",
      date: "Aug 14, 2023",
      author: "Dr. James Lee",
      category: "Clinic News",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Teeth Whitening: Professional vs. At-Home Kits",
      excerpt: "Are over-the-counter whitening strips safe? We compare drugstore kits with professional in-office whitening treatments.",
      date: "Jul 22, 2023",
      author: "Dr. Sarah Smith",
      category: "Cosmetic",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dental Health Blog</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Expert advice, oral hygiene tips, and answers to your most common dental questions from our Seattle team.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <Link to={`/blog`} className="block h-48 overflow-hidden">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <Link to={`/blog`}>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Pagination (Visual Only) */}
        <div className="mt-16 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-md font-medium">1</button>
            <button className="px-4 py-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50">2</button>
            <button className="px-4 py-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50">3</button>
            <button className="px-4 py-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50">Next</button>
          </nav>
        </div>
      </div>
    </div>
  );
}
