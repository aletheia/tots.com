import Link from 'next/link'
import { Clock } from 'lucide-react'

interface ArticleCardProps {
  title: string
  date: string
  readTime: string
}

export function ArticleCard({ title, date, readTime }: ArticleCardProps) {
  return (
    <Link href="#" className="block">
      <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg transition duration-300 hover:bg-opacity-70">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{date}</p>
        <div className="flex items-center text-purple-400">
          <Clock size={16} className="mr-2" />
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  )
}

