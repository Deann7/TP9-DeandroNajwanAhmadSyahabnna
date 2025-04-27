import React from 'react'

const Card = ({ title, body, image }) => {
  return (
    <div className="bg-white/20 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm border border-white/10 transition-transform duration-300 hover:scale-105">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-200 line-clamp-3">{body}</p>
      </div>
    </div>
  )
}

export default Card