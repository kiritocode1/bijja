import { PERSONAL_INFO } from "@/lib/data";

export default function Footer() {
	return (
		<footer className="py-20 px-4 md:px-12 max-w-screen-2xl mx-auto bg-black text-white border-t border-white/10">
			<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
				<div className="space-y-4">
					<h2 className="text-6xl md:text-8xl font-bold tracking-tighter">Let&#39;s Connect</h2>
					<p className="text-zinc-500 max-w-md">Based in {PERSONAL_INFO.location}. Open for opportunities and collaborations.</p>
				</div>

				<div className="flex flex-col gap-4 text-right">
					<a
						href={`mailto:${PERSONAL_INFO.email}`}
						className="text-xl hover:underline decoration-1 underline-offset-4"
					>
						{PERSONAL_INFO.email}
					</a>

					<div className="flex gap-6 justify-end mt-4">
						<a
							href={PERSONAL_INFO.social.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="text-zinc-400 hover:text-white transition-colors"
						>
							LinkedIn
						</a>
						<a
							href={PERSONAL_INFO.social.instagram}
							target="_blank"
							rel="noopener noreferrer"
							className="text-zinc-400 hover:text-white transition-colors"
						>
							Instagram
						</a>
						<a
							href={PERSONAL_INFO.social.issuu}
							target="_blank"
							rel="noopener noreferrer"
							className="text-zinc-400 hover:text-white transition-colors"
						>
							Issuu
						</a>
					</div>
				</div>
			</div>

			<div className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-zinc-600 font-mono uppercase">
				<span>
					© {new Date().getFullYear()} {PERSONAL_INFO.name}
				</span>
				<span>Architecture / Design</span>
			</div>
		</footer>
	);
}
