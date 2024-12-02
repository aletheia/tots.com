import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SideMenu from '@/components/SideMenu';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata = {
	title: 'Tech on the Stack',
	description: 'Personal branding website for a tech professional',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${spaceGrotesk.className} bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white min-h-screen flex flex-col`}
			>
				<Header />
				<div className="flex flex-grow">
					<SideMenu />
					<main className="flex-grow pt-16">{children}</main>
				</div>
				<Footer />
			</body>
		</html>
	);
}
