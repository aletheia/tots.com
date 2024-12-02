import { PodcastEpisode } from '@/components/PodcastEpisode';

const episodes = [
	{
		id: 1,
		title: 'The Future of AI in Tech',
		date: '2023-06-01',
		duration: '45:30',
	},
	{
		id: 2,
		title: 'Scaling Microservices: Lessons Learned',
		date: '2023-05-15',
		duration: '52:15',
	},
	{
		id: 3,
		title: 'Cybersecurity in the Age of Quantum Computing',
		date: '2023-05-01',
		duration: '48:45',
	},
	// Add more episodes...
];

export default function Podcast() {
	return (
		<div className="min-h-screen py-20">
			<div className="container mx-auto px-6">
				<h1 className="text-4xl font-bold mb-8 text-center">
					Tech on the Stack Podcast
				</h1>
				<p className="text-xl text-center mb-12">
					Join us as we explore the cutting-edge technologies shaping our
					digital world.
				</p>
				<div className="grid gap-8">
					{episodes.map((episode) => (
						<PodcastEpisode key={episode.id} {...episode} />
					))}
				</div>
			</div>
		</div>
	);
}
