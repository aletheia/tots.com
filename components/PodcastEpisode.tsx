import { Play } from 'lucide-react'

interface PodcastEpisodeProps {
  title: string
  date: string
  duration: string
}

export function PodcastEpisode({ title, date, duration }: PodcastEpisodeProps) {
  return (
    <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg transition duration-300 hover:bg-opacity-70">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400">{date} • {duration}</p>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 transition duration-300">
          <Play size={24} />
        </button>
      </div>
    </div>
  )
}

