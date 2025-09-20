import React, { useState } from "react";
import { Star, Play, ExternalLink, ArrowRight } from "lucide-react";

const TestimonialsSection = () => {
  const [selectedProgram, setSelectedProgram] = useState<'offline' | 'online'>('offline');

  const offlineTestimonials = {
    videoTestimonials: [
      {
        title: "Offline Classroom Experience - Life Changing",
        thumbnail:
          "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
        duration: "4:15",
        student: "Rajesh Kumar - Nagpur",
      },
      {
        title: "Face-to-Face Learning Made All the Difference",
        thumbnail:
          "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400",
        duration: "3:50",
        student: "Priya Sharma - Nagpur",
      },
      {
        title: "Offline Mentorship Success Story",
        thumbnail:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
        duration: "5:25",
        student: "Amit Patel - Nagpur",
      },
    ],
    googleReviews: [
      {
        name: "Rohit Mehta",
        rating: 5,
        review:
          "The offline classroom environment in Nagpur is exceptional. Direct interaction with mentors and fellow students made learning so much easier.",
        date: "2 weeks ago",
        location: "Nagpur"
      },
      {
        name: "Sneha Gupta",
        rating: 5,
        review:
          "Best offline trading academy in Nagpur! The hands-on approach and immediate doubt resolution is unmatched.",
        date: "1 month ago",
        location: "Nagpur"
      },
      {
        name: "Vikash Singh",
        rating: 5,
        review:
          "The offline program's structured approach and face-to-face mentorship helped me become a confident trader.",
        date: "3 weeks ago",
        location: "Nagpur"
      },
    ],
    instagramComments: [
      {
        username: "@nagpur_trader",
        comment:
          "Attending offline classes in Nagpur was the best decision! Personal attention is amazing 🔥",
        likes: 28,
      },
      {
        username: "@local_investor",
        comment:
          "The classroom environment and peer learning in offline batches is incredible! 💯",
        likes: 22,
      },
      {
        username: "@nagpur_student",
        comment: "Offline mentorship changed my trading game completely! 📈",
        likes: 35,
      },
    ],
  };

  const onlineTestimonials = {
    videoTestimonials: [
      {
        title: "Online Learning Success from Mumbai",
        thumbnail:
          "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
        duration: "3:30",
        student: "Arjun Kapoor - Mumbai",
      },
      {
        title: "Remote Trading Education Excellence",
        thumbnail:
          "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
        duration: "4:45",
        student: "Kavya Reddy - Bangalore",
      },
      {
        title: "Online Program Transformed My Career",
        thumbnail:
          "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
        duration: "5:10",
        student: "Deepak Joshi - Delhi",
      },
    ],
    googleReviews: [
      {
        name: "Anita Desai",
        rating: 5,
        review:
          "The online program is perfectly structured. Live sessions and recorded classes make it very convenient for working professionals.",
        date: "1 week ago",
        location: "Mumbai"
      },
      {
        name: "Karan Malhotra",
        rating: 5,
        review:
          "Excellent online trading course! The interactive sessions and doubt clearing calls are very effective.",
        date: "2 weeks ago",
        location: "Delhi"
      },
      {
        name: "Meera Iyer",
        rating: 5,
        review:
          "Online learning with personal mentorship calls made all the difference. Highly recommended!",
        date: "1 month ago",
        location: "Bangalore"
      },
    ],
    instagramComments: [
      {
        username: "@mumbai_trader_online",
        comment:
          "Online classes are so convenient! Can learn from home and still get personal attention 🏠📚",
        likes: 31,
      },
      {
        username: "@remote_learner",
        comment:
          "The online program quality is outstanding! Live sessions feel like classroom experience 💻✨",
        likes: 26,
      },
      {
        username: "@digital_trader",
        comment: "Online mentorship calls are game-changers! Personal guidance from anywhere 🌐",
        likes: 29,
      },
    ],
  };

  const currentTestimonials = selectedProgram === 'offline' ? offlineTestimonials : onlineTestimonials;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              Learners Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real success stories from our students across both online and offline programs
          </p>
        </div>

        {/* Program Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm">
            <button
              onClick={() => setSelectedProgram('offline')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedProgram === 'offline'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Offline Program
            </button>
            <button
              onClick={() => setSelectedProgram('online')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedProgram === 'online'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Online Program
            </button>
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {selectedProgram === 'offline' ? 'Offline Program' : 'Online Program'} Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentTestimonials.videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-green-300 transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-500/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white ml-1" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-gray-900 font-semibold mb-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-600 text-sm">by {video.student}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Google Reviews - {selectedProgram === 'offline' ? 'Offline Program' : 'Online Program'}
            </h3>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-green-500 fill-current"
                    size={20}
                  />
                ))}
              </div>
              <span className="text-xl font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600">
                ({selectedProgram === 'offline' ? '87' : '65'} reviews)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentTestimonials.googleReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-gray-900 font-semibold">{review.name}</h4>
                    <p className="text-gray-500 text-xs">{review.location}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-green-500 fill-current"
                        size={14}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                  "{review.review}"
                </p>
                <p className="text-gray-500 text-xs">{review.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Comments */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Instagram Comments - {selectedProgram === 'offline' ? 'Offline Program' : 'Online Program'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentTestimonials.instagramComments.map((comment, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-green-600 font-semibold text-sm">
                    {comment.username}
                  </h4>
                  <span className="text-gray-500 text-xs">
                    ❤️ {comment.likes}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {comment.comment}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/testimonials"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-600/25 transform hover:scale-105"
          >
            <span>View All Testimonials</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;