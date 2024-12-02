import Image from 'next/image';
import profilePicture from '@/data/profile.jpg';
import resume from '@/data/resume.json';
import { Globe, Linkedin, Github, Twitter } from 'lucide-react';

export default function About() {
	return (
		<div className="min-h-screen py-20">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
					<div className="flex flex-col items-center gap-8 self-start">
						<Image
							src={profilePicture}
							alt="Profile picture"
							width={200}
							height={200}
							className="rounded-full border-2 border-white"
						/>
						<div className="text-xl font-thin">
							{resume.personalInfo.roles.join(' | ')}
						</div>

						<div className="text-xl font-thin">
							<div className="flex flex-wrap gap-2 justify-center">
								{resume.skills.map((skill, index) => (
									<span
										key={index}
										className="px-3 py-1 text-sm rounded-full glass-effect animate-fade-in-up"
										style={{ animationDelay: `${index * 0.05}s` }}
									>
										{skill}
									</span>
								))}
							</div>
						</div>
						<div className="flex flex-col items-center gap-4">
							<div className="flex gap-2">Contact me on</div>
							<div className="flex gap-4">
								{resume.links.map((link, index) => {
									const Icon = {
										website: Globe,
										linkedin: Linkedin,
										github: Github,
										twitter: Twitter,
									}[link.type];

									return (
										Icon && (
											<a
												key={index}
												href={`https://${link.url}`}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 glass-effect rounded-full hover:bg-white/20 transition-colors animate-fade-in-up"
												style={{ animationDelay: `${index * 0.1}s` }}
												aria-label={`Visit my ${link.type}`}
											>
												<Icon className="w-6 h-6" />
											</a>
										)
									);
								})}
							</div>
						</div>
					</div>
					<div className="max-w-2xl text-pretty font-thin">
						<h1 className="text-4xl font-bold mb-8 text-left">About Me</h1>

						<p className="text-xl mb-4">{resume.personalInfo.tagline}</p>
						<p className="text-xl mb-4">{resume.personalInfo.profile}</p>
						<p className="text-xl mb-4">
							{resume.personalInfo.additionalProfile}
						</p>
					</div>
				</div>
			</div>
			<div className="container mx-auto px-6 mt-20">
				<h2 className="text-3xl font-bold mb-8 text-left">My Expertise</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{resume.experience.map((exp, index) => (
						<div
							key={index}
							className="glass-effect p-6 animate-fade-in-up"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="flex flex-col">
								<h3 className="text-xl font-bold mb-2">{exp.title}</h3>
								<div className="flex justify-between items-center mb-4">
									<span className="text-lg text-purple-300">{exp.company}</span>
									<span className="text-sm text-gray-400">{exp.period}</span>
								</div>
								<p className="text-gray-300 font-thin">{exp.description}</p>
							</div>
						</div>
					))}
				</div>
				<h2 className="text-3xl font-bold mb-8 text-left mt-20">
					My Education
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{resume.education.map((edu, index) => (
						<div
							key={index}
							className="glass-effect p-6 animate-fade-in-up"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="flex flex-col">
								<h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
								<div className="flex justify-between items-center mb-4">
									<span className="text-lg text-purple-300">
										{edu.institution}
									</span>
									<span className="text-sm text-gray-400">{edu.period}</span>
								</div>
								{edu.score && (
									<p className="text-gray-300 font-thin">Score: {edu.score}</p>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
