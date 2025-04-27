import React from 'react'
import Navbar from '../components/navbar'
import fotoDiri from '../assets/fotodiri1.jpg'
import Card from '../components/card'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/500",
    },
  ],
};
const buttonHover = "hover:scale-105 transition-transform duration-200";
const buttonActive = "active:scale-95 transition-transform duration-100";


const No2 = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Added ID for Profile section */}
      <div id="profile-section" className='flex items-center flex-col justify-center pt-28 pb-12 px-4'>
        <h1 className='italic font-black text-white mb-8 text-4xl md:text-5xl'>Profile</h1>
        
        <div className='flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl px-4'>
          {/* Photo Box */}
          <div className='w-full md:w-1/3 bg-white/20 p-4 rounded-xl shadow-2xl backdrop-blur-sm border border-white/10'>
            <img 
              src={fotoDiri} 
              alt="Foto Diri" 
              className='w-full h-auto rounded-lg object-cover' 
            />
          </div>
          
          {/* Text Box */}
          <div className='w-full md:w-2/3 bg-white/20 p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-white/10'>
            <div className="text-white text-justify leading-relaxed">
              <p className="mb-4 text-lg">
                <span className="text-2xl font-bold">Hello everyone 👋</span>. My name is <span className="font-semibold">Deandro</span>, and I am an undergraduate student in Computer Engineering at the Department of Electrical Engineering, Universitas Indonesia.
              </p>
              <p className="mb-4 text-lg">
                I am an enthusiastic and hard-working individual who values a balance between academic and non-academic achievements. With a passion for gaining diverse knowledge and experiences, particularly in the field of computer science, I am eager to learn new things and interact with different people.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Added ID for About Me section */}
      <div id="about-section" className='flex flex-col items-center justify-center pb-12 px-4'>
        <h1 className='italic font-black text-white mb-8 text-4xl md:text-5xl'>About Me</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4'>
          {response.results.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              body={item.body}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* Added ID for Contact section */}
      <div id="contact-section" className='flex flex-col items-center justify-center pb-20 px-4'>
        <h1 className='italic font-black text-white mb-8 text-4xl md:text-5xl'>Contact Me</h1>
        
        <div className='w-full max-w-4xl bg-white/20 p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-white/10'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/20 rounded-full">
                  <EnvelopeIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-200">deandro@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/20 rounded-full">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-gray-200">+62 812 3456 7890</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/20 rounded-full">
                  <MapPinIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Address</h3>
                  <p className="text-gray-200">Depok, West Java, Indonesia</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <button 
        onClick={() => navigate('/')}
        className={`${buttonHover} ${buttonActive} absolute bottom-6 left-6 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg shadow-md flex items-center`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Home
      </button>
    </div>
  )
}

export default No2