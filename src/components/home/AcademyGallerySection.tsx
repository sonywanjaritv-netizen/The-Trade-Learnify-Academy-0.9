import React, { useState } from 'react';
import { Play, ArrowRight, X } from 'lucide-react';

const AcademyGallerySection = () => {
  const [selectedType, setSelectedType] = useState<'videos' | 'images'>('videos');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
    }
  ];

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Academy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get a glimpse into our academy life, learning environment, and student success stories
          </p>
        </div>

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
              Videos
            </button>
            <button
              onClick={() => setSelectedType('images')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedType === 'images'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Images
            </button>
          </div>
        </div>

        {/* Content */}
        {selectedType === 'videos' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <span>View All {selectedType === 'videos' ? 'Videos' : 'Images'}</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X size={20} />
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Video Player"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AcademyGallerySection;