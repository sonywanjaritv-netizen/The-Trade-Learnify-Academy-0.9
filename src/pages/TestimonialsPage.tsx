import React, { useState } from "react";
import { Star, Play, ExternalLink } from "lucide-react";

const TestimonialsPage = () => {
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
      {
        title: "From Zero to Hero - Offline Program",
        thumbnail:
          "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
        duration: "6:10",
        student: "Sunita Joshi - Nagpur",
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
      {
        name: "Manish Agarwal",
        rating: 5,
        review:
          "Attending offline classes gave me the discipline and structure I needed. The peer learning environment is fantastic.",
        date: "1 month ago",
        location: "Nagpur"
      },
      {
        name: "Pooja Kulkarni",
        rating: 5,
        review:
          "The offline program's practical approach and live market sessions in classroom setting are incredibly valuable.",
        date: "2 months ago",
        location: "Nagpur"
      },
      {
        name: "Ravi Deshmukh",
        rating: 5,
        review:
          "The offline program exceeded my expectations. Small batch size ensures personal attention and the mentors are always available for guidance.",
        date: "6 weeks ago",
        location: "Nagpur"
      },
    ],
    studentEarnings: [
      {
        name: "Rajesh Kumar",
        experience: "8 months post-course",
        earnings: "₹2.5L per month",
        background: "Software Engineer turned full-time trader",
        story:
          "The offline classroom environment in Nagpur helped me stay focused and disciplined. Direct mentorship made all the difference.",
        program: "Offline Program - Nagpur"
      },
      {
        name: "Priya Sharma",
        experience: "6 months post-course",
        earnings: "₹1.8L per month",
        background: "Homemaker with no prior trading experience",
        story:
          "Face-to-face learning and peer support in offline batches gave me the confidence to start trading successfully.",
        program: "Offline Program - Nagpur"
      },
      {
        name: "Amit Patel",
        experience: "1 year post-course",
        earnings: "₹3.2L per month",
        background: "Business owner expanding investment portfolio",
        story:
          "The structured offline program and immediate doubt resolution helped me master complex trading strategies quickly.",
        program: "Offline Program - Nagpur"
      },
    ]
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
      {
        title: "Working Professional's Online Success",
        thumbnail:
          "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400",
        duration: "4:30",
        student: "Ritu Agarwal - Pune",
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
      {
        name: "Sanjay Gupta",
        rating: 5,
        review:
          "The flexibility of online classes while maintaining quality education is remarkable. Great support system.",
        date: "3 weeks ago",
        location: "Chennai"
      },
      {
        name: "Neha Sharma",
        rating: 5,
        review:
          "Online program's recorded sessions and live doubt clearing made learning very convenient for my schedule.",
        date: "1 month ago",
        location: "Hyderabad"
      },
      {
        name: "Rahul Verma",
        rating: 5,
        review:
          "Perfect balance of live interaction and flexibility. The online program's quality matches classroom teaching with added convenience.",
        date: "5 weeks ago",
        location: "Kolkata"
      },
    ],
    studentEarnings: [
      {
        name: "Arjun Kapoor",
        experience: "7 months post-course",
        earnings: "₹2.2L per month",
        background: "Marketing Manager learning part-time",
        story:
          "The online program's flexibility allowed me to learn while working. Live sessions and personal mentorship calls were game-changers.",
        program: "Online Program - Mumbai"
      },
      {
        name: "Kavya Reddy",
        experience: "5 months post-course",
        earnings: "₹1.6L per month",
        background: "IT Professional seeking additional income",
        story:
          "Online learning with recorded sessions helped me learn at my own pace. The quality of education is outstanding.",
        program: "Online Program - Bangalore"
      },
      {
        name: "Deepak Joshi",
        experience: "10 months post-course",
        earnings: "₹2.8L per month",
        background: "Consultant transitioning to trading",
        story:
          "The online program's comprehensive curriculum and personal mentorship helped me transition successfully to full-time trading.",
        program: "Online Program - Delhi"
      },
    ]
  };

  const currentTestimonials = selectedProgram === 'offline' ? offlineTestimonials : onlineTestimonials;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Learners Say
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real stories from real students who transformed their financial future through our online and offline programs
            </p>
          </div>
        </div>
      </section>

      {/* Program Toggle */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
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
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {selectedProgram === 'offline' ? 'Offline Program' : 'Online Program'}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Success Stories
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentTestimonials.videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Play className="text-white" size={48} />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 font-semibold mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">by {video.student}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Google{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Reviews
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              {selectedProgram === 'offline' ? 'Offline Program - Nagpur' : 'Online Program - Pan India'}
            </p>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-green-600 fill-current"
                    size={24}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600">
                ({selectedProgram === 'offline' ? '87' : '65'} reviews)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.googleReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-gray-900 font-semibold">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-green-600 fill-current"
                        size={16}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "{review.review}"
                </p>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=The+Trade+Learnify+Academy+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold"
            >
              <span>View All Google Reviews</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Student Earnings Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Student{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Earnings Showcase
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real earnings from {selectedProgram === 'offline' ? 'offline' : 'online'} program students - see how our education translates to financial success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentTestimonials.studentEarnings.map((student, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {student.earnings}
                  </div>
                  <div className="text-gray-500 text-sm mb-4">
                    {student.experience}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {student.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{student.background}</p>
                  <p className="text-green-600 text-sm font-semibold">{student.program}</p>
                </div>
                <p className="text-gray-700 leading-relaxed italic text-center">
                  "{student.story}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              Success Story?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of successful traders who transformed their financial future through our {selectedProgram} program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <span>Get Started Today</span>
            </a>
            <a
              href="/courses"
              className="inline-flex items-center space-x-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              <span>View {selectedProgram === 'offline' ? 'Offline' : 'Online'} Program</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;