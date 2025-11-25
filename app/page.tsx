import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="min-h-screen bg-black text-white selection:bg-white selection:text-black math-grid">
			<Hero />
			<About />
			<ProjectGrid />
			<Footer />
		</main>
	);
}
