"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "@/lib/data";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectGrid() {
	const gridRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!gridRef.current) return;

		const projects = gsap.utils.toArray<HTMLElement>(".project-card");

		projects.forEach((project) => {
			gsap.fromTo(
				project,
				{ y: 100, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: project,
						start: "top bottom-=100",
						toggleActions: "play none none reverse",
					},
				},
			);
		});
	}, []);

	return (
		<section className="py-32 px-4 md:px-12 max-w-screen-2xl mx-auto">
			<div className="flex justify-between items-end mb-20 border-b border-white/20 pb-8">
				<h2 className="text-4xl md:text-6xl font-bold">Selected Works</h2>
				<span className="font-mono text-sm opacity-50">2022 — 2025</span>
			</div>

			<div
				ref={gridRef}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
			>
				{PROJECTS.map((project) => (
					<Link
						href={`/projects/${project.id}`}
						key={project.id}
						className="project-card group relative aspect-4/5 bg-zinc-900 overflow-hidden border border-white/5 block"
					>
						<Image
							src={project.cover}
							alt={project.title}
							fill
							className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-60 grayscale group-hover:grayscale-0"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>

						<div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
							<span className="font-mono text-xs text-zinc-400 mb-2">{project.category.toUpperCase()}</span>
							<h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
						</div>

						{/* Corner Accents for that 'tech/blueprint' feel */}
						<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-white/10"></div>
						<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/50 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-white/10"></div>
					</Link>
				))}
			</div>
		</section>
	);
}
