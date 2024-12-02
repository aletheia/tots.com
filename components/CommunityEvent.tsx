import { Calendar, MapPin } from 'lucide-react'

interface CommunityEventProps {
  title: string
  date: string
  location: string
}

export function CommunityEvent({ title, date, location }: CommunityEventProps) {
  return (
    <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg transition duration-300 hover:bg-opacity-70">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex items-center text-gray-400 mb-2">
        <Calendar size={16} className="mr-2" />
        <span>{date}</span>
      </div>
      <div className="flex items-center text-gray-400">
        <MapPin size={16} className="mr-2" />
        <span>{location}</span>
      </div>
    </div>
  )
}

