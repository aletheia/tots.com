import { CommunityEvent } from '@/components/CommunityEvent';

const events = [
	{
		id: 1,
		title: 'Monthly Tech Meetup',
		date: '2023-06-15',
		location: 'Virtual',
	},
	{
		id: 2,
		title: 'Hackathon: AI for Good',
		date: '2023-07-01',
		location: 'San Francisco, CA',
	},
	{
		id: 3,
		title: 'Web3 Workshop',
		date: '2023-07-10',
		location: 'New York, NY',
	},
	// Add more events...
];

export default function Community() {
	return (
		<div className="min-h-screen py-20">
			<div className="container mx-auto px-6">
				<h1 className="text-4xl font-bold mb-8 text-center">Community</h1>
				<p className="text-xl text-center mb-12">
					Join our thriving tech community and participate in exciting events!
				</p>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{events.map((event) => (
						<CommunityEvent key={event.id} {...event} />
					))}
				</div>
			</div>
		</div>
	);
}
