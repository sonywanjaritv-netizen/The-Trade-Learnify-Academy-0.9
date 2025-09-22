import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const GalleryPage = () => {
  const [selectedType, setSelectedType] = useState<'videos' | 'images'>('videos');

  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Trading Fundamentals Masterclass',
      description: 'Learn the basics of trading with our expert mentors',
      thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '15:30'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Live Trading Session Highlights',
      description: 'Watch our students trade live in the market',
      thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '12:45'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Risk Management Strategies',
      description: 'Master the art of protecting your capital',
      thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '18:20'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Options Trading Explained',
      description: 'Complete guide to options trading strategies',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '22:15'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Forex Market Analysis',
      description: 'Understanding global currency markets',
      thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '19:30'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Student Success Stories',
      description: 'Real testimonials from our successful traders',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '14:20'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Technical Analysis Deep Dive',
      description: 'Advanced chart patterns and indicators',
      thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '25:45'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Cryptocurrency Trading Guide',
      description: 'Navigate the digital asset markets',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '17:10'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Academy Tour & Facilities',
      description: 'Take a virtual tour of our Nagpur academy',
      thumbnail: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '8:30'
    }
  ];

  const images = [
    {
      src: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Classroom Learning Environment',
      description: 'Our state-of-the-art offline classroom in Nagpur'
    },
    {
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Student Success Celebration',
      description: 'Celebrating our students\' trading achievements'
    },
    {
      src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Interactive Learning Sessions',
      description: 'Hands-on practice with live market data'
    },
    {
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'One-on-One Mentorship',
      description: 'Personal guidance sessions with expert mentors'
    },
    {
      src: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Trading Lab Setup',
      description: 'Professional trading workstations for students'
    },
    {
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Group Study Sessions',
      description: 'Collaborative learning with fellow traders'
    },
    {
      src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Market Analysis Workshop',
      description: 'Live market analysis and discussion sessions'
    },
    {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Certificate Ceremony',
      description: 'Graduation ceremony for successful students'
    },
    {
      src: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Academy Entrance',
      description: 'Welcome to The Trade Learnify Academy'
    },
    {
      src: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Online Learning Setup',
      description: 'Professional online class broadcasting setup'
    },
    {
      src: 'https://images.pexels.com/photos/3184456/pexels-photo-3184456.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Student Portfolio Review',
      description: 'Reviewing student trading performance'
    },
    {
      src: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Academy Library',
      description: 'Extensive collection of trading books and resources'
    }
  ];

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Academy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our academy through videos and images showcasing our learning environment, student success stories, and educational content
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm">
              <button
                onClick={() => setSelectedType('videos')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedType === 'videos'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Videos ({videos.length})
              </button>
              <button
                onClick={() => setSelectedType('images')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedType === 'images'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Images ({images.length})
              </button>
            </div>
          </div>

          {/* Content Grid */}
          {selectedType === 'videos' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-1"
                  onClick={() => handleVideoClick(video.id)}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="text-white ml-1" size={24} />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute top-4 right-4">
                      <ExternalLink className="text-white" size={16} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Join Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              Academy?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the same quality education and supportive environment shown in our gallery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <span>Enroll Now</span>
            </a>
            <a
              href="/courses"
              className="inline-flex items-center space-x-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              <span>View Courses</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;