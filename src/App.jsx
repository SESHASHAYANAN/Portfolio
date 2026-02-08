import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuroraBackground from './components/background/AuroraBackground';
import Starfield from './components/background/Starfield';
import GridLayer from './components/background/GridLayer';
import ScanlineOverlay from './components/background/ScanlineOverlay';

export default function App() {
    return (
        <div className="relative min-h-screen bg-space-900 text-white overflow-x-hidden">
            {/* Background layers */}
            <AuroraBackground />
            <Starfield starCount={120} />
            <GridLayer />
            <ScanlineOverlay />

            {/* Navigation */}
            <Navigation />

            {/* Main content */}
            <main>
                <Hero />
                <Projects />
                <About />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
