'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Home, User, Mic, FileText, Users } from 'lucide-react'

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { href: '/', icon: Home, text: 'Home' },
    { href: '/about', icon: User, text: 'About' },
    { href: '/podcast', icon: Mic, text: 'Podcast' },
    { href: '/articles', icon: FileText, text: 'Articles' },
    { href: '/community', icon: Users, text: 'Community' },
  ]

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 p-2 bg-purple-600 rounded-full shadow-lg transition-all duration-300 hover:bg-purple-700"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 bg-opacity-95 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <nav className="flex flex-col h-full pt-20 px-4">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center py-3 px-4 text-gray-300 hover:text-white hover:bg-purple-700 rounded transition duration-200" onClick={toggleMenu}>
              <item.icon size={20} className="mr-3" />
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

