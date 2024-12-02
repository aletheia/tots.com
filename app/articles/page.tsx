import { ArticleCard } from '@/components/ArticleCard';

const articles = [
	{
		id: 1,
		title: '10 Best Practices for Clean Code',
		date: '2023-06-05',
		readTime: '5 min read',
	},
	{
		id: 2,
		title: 'The Rise of Edge Computing',
		date: '2023-05-20',
		readTime: '7 min read',
	},
	{
		id: 3,
		title: 'Understanding Blockchain Technology',
		date: '2023-05-10',
		readTime: '6 min read',
	},
	// Add more articles...
];

export default function Articles() {
	return (
		<div className="min-h-screen py-20">
			<div className="container mx-auto px-6">
				<h1 className="text-4xl font-bold mb-8 text-center">Articles</h1>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{articles.map((article) => (
						<ArticleCard key={article.id} {...article} />
					))}
				</div>
			</div>
		</div>
	);
}
