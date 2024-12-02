import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-900 bg-opacity-50 backdrop-blur-md fixed w-full z-10">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-center items-center">
          <Link href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-400 hover:to-purple-600 transition duration-300">
            Tech on the Stack
          </Link>
        </div>
      </nav>
    </header>
  )
}

