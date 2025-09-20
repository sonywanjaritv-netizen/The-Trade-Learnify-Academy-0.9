import React from 'react';
import { Award, Target, Eye, Users } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Mayank Chinchalkar',
      role: 'Lead Trading Strategist',
      expertise: 'Technical Analysis & Risk Management'
    },
    {
      name: 'Vinay Pohankar',
      role: 'Market Research Director',
      expertise: 'Fundamental Analysis & Market Psychology'
    },
    {
      name: 'Abhitesh Singh',
      role: 'Educational Program Head',
      expertise: 'Curriculum Development & Student Mentoring'
    }
  ];

  const achievements = [
    'Trained more than 1000 aspiring traders across India',
    '6-Month structured programs (online & offline) with a proven success framework',
    'Developed data-driven & backtested trading strategies with higher win rates',
    'Built a strong trading community where students grow together and support each other',
    'One-on-one mentorship provided to 500+ learners for personalized trading guidance',
    'Delivered 100+ interactive workshops & webinars on trading psychology, risk management, and strategy building',
    'Helped beginners become consistent traders with simplified, step-by-step learning',
    'Designed personalized trading plans through individual viva sessions',
    'Recognized as one of Nagpur\'s trusted stock market academies'
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                The Trade Learnify Academy
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transforming trading education through practical knowledge and proven strategies
            </p>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Us
              </span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                At Trade Learnify, we empower individuals to achieve financial freedom through knowledge, 
                discipline, and data-driven strategies. Our mission is to simplify the world of trading and make it 
                accessible for anyone who is ready to step forward and take control of their financial future.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                We offer a 6-month comprehensive offline program in Nagpur and a 6-month online 
                course available across India, designed to provide in-depth learning, real-time practice, and 
                one-on-one support to every student.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Unlike the common belief that trading is risky and "not for everyone," we break this myth by 
                teaching practical strategies, tested systems, and market discipline that can create consistent results.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-6 mb-8">
                <p className="text-lg text-gray-800 font-medium italic">
                  "At The Trade Learnify Academy, we believe trading is not just about buying and selling—it's 
                  about building confidence, creating opportunities, and achieving the financial independence you deserve."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-6">
                <Target className="text-green-600 mr-4" size={32} />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our Goal is to help 10000 People Achieve Financial Freedom in a simple and Honest way
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-6">
                <Eye className="text-green-600 mr-4" size={32} />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To help every student earn profits that showed up in their passbook
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Expert{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals behind your trading success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="text-green-600" size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.expertise}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <span>Join Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <Award className="text-green-600" size={24} />
                </div>
                <p className="text-gray-700 leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;