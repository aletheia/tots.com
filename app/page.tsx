import Link from 'next/link';
import { SubscribeForm } from '@/components/SubscribeForm';
import { PodcastEpisode } from '@/components/PodcastEpisode';
import { ArticleCard } from '@/components/ArticleCard';
import { CommunityEvent } from '@/components/CommunityEvent';

const featuredEpisode = {
	id: 1,
	title: 'The Future of AI in Tech',
	date: '2023-06-01',
	duration: '45:30',
};
const featuredArticle = {
	id: 1,
	title: '10 Best Practices for Clean Code',
	date: '2023-06-05',
	readTime: '5 min read',
};
const featuredEvent = {
	id: 1,
	title: 'Monthly Tech Meetup',
	date: '2023-06-15',
	location: 'Virtual',
};

export default function Home() {
	return (
		<div className="min-h-screen">
			<section className="py-20 md:py-32 animate-gradient bg-gradient-to-r from-purple-700 via-pink-600 to-blue-500">
				<div className="container mx-auto px-6 text-center">
					<h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
						Welcome to Tech on the Stack
					</h1>
					<p className="text-2xl md:text-3xl mb-12 animate-fade-in-up animation-delay-200">
						Exploring the latest in technology, one layer at a time.
					</p>
					<div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
						<Link
							href="/podcast"
							className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full transition duration-300 hover:bg-purple-100"
						>
							Listen to Podcast
						</Link>
						<Link
							href="/articles"
							className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 hover:bg-purple-700"
						>
							Read Articles
						</Link>
					</div>
				</div>
			</section>

			<section className="py-20">
				<div className="container mx-auto px-6">
					<h2 className="text-4xl font-bold mb-8 text-center">
						Featured Content
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="glass-effect p-6">
							<h3 className="text-2xl font-semibold mb-4">Latest Podcast</h3>
							<PodcastEpisode {...featuredEpisode} />
							<Link
								href="/podcast"
								className="mt-4 inline-block text-purple-400 hover:text-purple-300"
							>
								View all episodes →
							</Link>
						</div>
						<div className="glass-effect p-6">
							<h3 className="text-2xl font-semibold mb-4">Featured Article</h3>
							<ArticleCard {...featuredArticle} />
							<Link
								href="/articles"
								className="mt-4 inline-block text-purple-400 hover:text-purple-300"
							>
								Read more articles →
							</Link>
						</div>
						<div className="glass-effect p-6">
							<h3 className="text-2xl font-semibold mb-4">Upcoming Event</h3>
							<CommunityEvent {...featuredEvent} />
							<Link
								href="/community"
								className="mt-4 inline-block text-purple-400 hover:text-purple-300"
							>
								See all events →
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-gray-800 bg-opacity-50">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold mb-8 text-center">
						Subscribe to Our Newsletter
					</h2>
					<SubscribeForm />
				</div>
			</section>
		</div>
	);
}
