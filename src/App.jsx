import React, { useState } from "react";
import { ArrowRight, ExternalLink, Menu, X } from "lucide-react";

const roles = ["Full Stack Developer", "UI/UX Designer", "YouTuber"];

export default function Portfolio() {
  const [hoverHero, setHoverHero] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isDeleting, setIsDeleting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentRole.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleSend = (e) => {
    e.preventDefault();
    const msg = `Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/94777718203?text=${msg}`, "_blank");
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Social", href: "#contact" },
  ];

  return (
    <div className="bg-[#f5f5f5] text-[#111827] overflow-x-hidden scroll-smooth">
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <a href="#hero" className="font-bold text-[#1da1f2] text-xl tracking-wide no-underline">
             <span style={{color: '#00658D', fontSize: 20, fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 700}}>Binada</span><span style={{color: '#00AEEF', fontSize: 20, fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 700}}>_d</span>
          </a>

          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            {navLinks.map(
              (item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="hover:text-[#1da1f2] transition-all duration-300"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-block px-5 py-2 rounded-full border border-[#1da1f2] text-[#1da1f2] hover:bg-[#1da1f2] hover:text-white duration-300 no-underline">
              Contact Me
            </a>

            <a href="/cv.pdf" download className="hidden sm:inline-block px-5 py-2 rounded-full bg-[#1da1f2] text-white hover:scale-105 duration-300 no-underline">
              Download CV
            </a>

            <button
              className="md:hidden p-2 text-gray-700 hover:text-[#1da1f2] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl">
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-sm font-medium hover:text-[#1da1f2] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2 border-t border-gray-100">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex-1 text-center px-4 py-2 rounded-full border border-[#1da1f2] text-[#1da1f2] text-sm no-underline">
                  Contact Me
                </a>
                <a href="/cv.pdf" download className="flex-1 text-center px-4 py-2 rounded-full bg-[#1da1f2] text-white text-sm no-underline">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-24 pb-10 relative"
        onMouseEnter={() => setHoverHero(true)}
        onMouseLeave={() => setHoverHero(false)}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center gap-8 lg:gap-6 relative">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center w-full lg:relative lg:min-h-[500px]">

            {/* LEFT SIDE - mobile: in flow, desktop: absolute */}
            <div
              className={`relative w-full lg:w-auto opacity-100 translate-x-0 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 transition-all duration-700 z-20 ${
                hoverHero
                  ? "lg:opacity-100 lg:translate-x-0"
                  : "lg:opacity-0 lg:-translate-x-32 lg:pointer-events-none"
              }`}
            >
              <p className="uppercase tracking-[5px] text-[#1da1f2] text-sm mb-3">
                Design
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none mb-4">
                UI/UX
              </h1>

              <p className="text-gray-500 mb-6 lg:mb-10">
                Beautifully human-centered interfaces
              </p>

              <div className="hidden sm:block space-y-6 lg:space-y-8">
                <div>
                  <h3 className="font-bold text-base sm:text-lg">Travel Planner</h3>
                  <p className="text-gray-500 text-sm">
                    Smart travel planning app with intuitive experiences.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-base sm:text-lg">Health Tracker</h3>
                  <p className="text-gray-500 text-sm">
                    Modern wellness tracking interfaces.
                  </p>
                </div>
              </div>

              <a href="#projects" className="mt-6 lg:mt-10 flex items-center gap-2 text-[#1da1f2] font-semibold hover:gap-4 duration-300">
                View All Projects <ArrowRight size={18} />
              </a>
            </div>

            {/* CENTER IMAGE */}
            <div className="relative z-10 flex items-center justify-center w-full my-6 lg:my-0">
              <div
                className={`absolute rounded-full transition-all duration-700 ${
                  hoverHero
                    ? "w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-[#1da1f2]/20 blur-[100px]"
                    : "w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] bg-[#1da1f2]/10 blur-[150px]"
                } animate-pulse`}
              ></div>

              <img
                src="/images/hero.jpg"
                alt="hero"
                className="relative z-10 transition-all duration-700 origin-center max-h-[50vh] sm:max-h-[60vh] lg:max-h-none"
                style={{
                  width: "min(750px, 80vw)",
                  transform: hoverHero ? "scale(0.45)" : "scale(1)",
                }}
              />

              {/* Floating Elements */}
              <div
                className={`absolute top-[5%] left-[5%] animate-bounce text-orange-500 font-black text-2xl sm:text-3xl transition-all duration-700 ${
                  hoverHero ? "lg:opacity-100" : "lg:opacity-0"
                }`}
              >
                ⚡
              </div>

              <div
                className={`absolute bottom-[5%] right-[5%] animate-pulse text-[#1da1f2] font-black text-2xl sm:text-3xl transition-all duration-700 ${
                  hoverHero ? "lg:opacity-100" : "lg:opacity-0"
                }`}
              >
                ✦
              </div>
            </div>

            {/* RIGHT SIDE - mobile: in flow, desktop: absolute */}
            <div
              className={`relative w-full lg:w-auto opacity-100 translate-x-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 transition-all duration-700 z-20 ${
                hoverHero
                  ? "lg:opacity-100 lg:translate-x-0"
                  : "lg:opacity-0 lg:translate-x-32 lg:pointer-events-none"
              }`}
            >
              <p className="uppercase tracking-[5px] text-[#1da1f2] text-sm mb-3 lg:text-right">
                Engineering
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none mb-4 lg:text-right">
                Development
              </h1>

              <p className="text-gray-500 mb-6 lg:mb-10 lg:text-right">
                Robust, scalable applications
              </p>

              <div className="hidden sm:block space-y-6 lg:space-y-8 lg:text-right">
                <div>
                  <h3 className="font-bold text-base sm:text-lg">E-Commerce Platform</h3>
                  <p className="text-gray-500 text-sm">
                    Full-stack commerce apps with React & APIs.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-base sm:text-lg">Task Manager API</h3>
                  <p className="text-gray-500 text-sm">
                    Secure backend architecture for productivity apps.
                  </p>
                </div>
              </div>

              <div className="flex lg:justify-end">
                <a href="#projects" className="mt-6 lg:mt-10 flex items-center gap-2 text-[#1da1f2] font-semibold hover:gap-4 duration-300">
                  View All Projects <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* TEXT BELOW IMAGE */}
          <div
            className={`text-center transition-all duration-700 ${
              hoverHero
                ? "lg:opacity-0 lg:translate-y-8 lg:scale-95"
                : "lg:opacity-100 lg:translate-y-0 lg:scale-100"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl font-black mb-2">
              It's me <span className="text-[#1da1f2]">binada_d.</span>
            </h1>

            <p className="text-gray-500">
              Creative developer & UI/UX designer
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOME / INTRO ================= */}
      <section id="home" className="py-20 sm:py-28 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative inline-block mt-10 mb-14 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-80 aspect-square">
            <div
              className="absolute bg-white rounded-full"
              style={{
                width: '90%', height: '90%',
                left: '7%', top: '4%',
                boxShadow: "0 0 30px 8px rgba(14, 165, 233, 0.4), 0 0 60px 20px rgba(14, 165, 233, 0.15)",
                outline: "4px solid #0EA5E9",
              }}
            />
            <img
              src="/images/about.jpg"
              alt=""
              className="absolute inset-0 w-full h-full rounded-full object-cover object-bottom"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-5">
            I'm <span className="text-[#1da1f2]">Binada Basilu</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-500 leading-8 px-2">
            Crafting digital experiences through thoughtful design and clean
            code. Welcome to my corner of the internet.
          </p>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10 mt-12 sm:mt-16 max-w-xl mx-auto">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black">5+</h3>
              <p className="text-gray-500 uppercase tracking-[3px] text-xs mt-2">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black">1+</h3>
              <p className="text-gray-500 uppercase tracking-[3px] text-xs mt-2">
                Years
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black">10+</h3>
              <p className="text-gray-500 uppercase tracking-[3px] text-xs mt-2">
                Clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 sm:py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#1da1f2]/20 blur-3xl rounded-full"></div>

            <img
              src="/images/hero.jpg"
              alt=""
              className="relative rounded-3xl shadow-2xl hover:scale-105 duration-500 w-full"
            />
          </div>

          <div>
            <p className="uppercase tracking-[5px] text-[#1da1f2] text-sm mb-4 fade-slide">
              About Me
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 fade-slide">
              Turning Ideas Into
              <br />
              <span className="text-[#1da1f2]">Digital Reality</span>
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold mb-5">
              Hi, I'm{" "}
              <span className="text-[#1da1f2]">{displayText}</span>
              <span className="text-[#1da1f2] animate-pulse">|</span>
            </h3>

            <p className="text-gray-500 leading-8 fade-slide">
              I'm a designer and developer who bridges the gap between
              aesthetics and functionality. From pixel-perfect UI to robust
              backend architecture, I craft experiences that people love to use.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <p className="uppercase tracking-[5px] text-[#1da1f2] text-sm mb-4">
              My Expertise
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">Service Offerings</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
            {/* CARD */}
            <div className="bg-white rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 lg:p-10 shadow-xl hover:-translate-y-3 duration-500 border border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 sm:mb-8">
                <img src="/images/cybertec.jpg" alt="Cybertec" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-5">
                Cybertec Computer Solutions
              </h3>

              <p className="text-gray-500 mb-6 sm:mb-10">
                The one store that your all needs in one store.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-10">
                <div>✔ PC & Laptop Reselling</div>
                <div>✔ Support</div>
              </div>

              <a href="https://www.facebook.com/profile.php?id=61564648001328" target="_blank" rel="noopener noreferrer" className="text-[#1da1f2] font-semibold flex items-center gap-2 hover:gap-4 duration-300">
                View More Details <ArrowRight size={18} />
              </a>
            </div>

            {/* CARD */}
            <div className="bg-white rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 lg:p-10 shadow-xl hover:-translate-y-3 duration-500 border border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6 sm:mb-8">
                <img src="https://cdn.worldvectorlogo.com/logos/fiverr-1.svg" alt="Fiverr" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-5">Fiverr</h3>

              <p className="text-gray-500 mb-6 sm:mb-10">
                UI/UX and frontend web development jobs in Fiverr.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-10">
                <div>✔ Full-stack web apps</div>
                <div>✔ Performance optimization</div>
              </div>

              <a href="https://www.fiverr.com/s/R7eGyP8" target="_blank" rel="noopener noreferrer" className="text-[#1da1f2] font-semibold flex items-center gap-2 hover:gap-4 duration-300">
                View Fiverr Account <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 mb-12 sm:mb-16">
            <div>
              <p className="uppercase tracking-[5px] text-[#1da1f2] text-sm mb-4">
                Portfolio
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
                Selected Works &
                <br />
                Experiments
              </h2>
            </div>

            <div className="bg-white rounded-full p-2 flex gap-2 shadow-md overflow-x-auto w-full sm:w-auto">
              <button className="px-4 sm:px-6 py-2 rounded-full bg-[#1da1f2] text-white text-sm sm:text-base whitespace-nowrap">
                All
              </button>

              <button className="px-4 sm:px-6 py-2 rounded-full hover:bg-gray-100 text-sm sm:text-base whitespace-nowrap">
                Design
              </button>

              <button className="px-4 sm:px-6 py-2 rounded-full hover:bg-gray-100 text-sm sm:text-base whitespace-nowrap">
                Web
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                img: "webdesign.png",
                alt: "Panto Design",
                href: "https://www.figma.com/proto/hTDpAnmhZy08L6jDUmny43/Panto---Furniture-Landing-Page-Design--Community-?page-id=0%3A1&node-id=1-2&viewport=550%2C597%2C0.12&t=dh9J8T98b3EAUJWz-1&scaling=scale-down&content-scaling=fixed",
              },
              {
                img: "tours-mirissa.png",
                alt: "Tours Mirissa Design",
                href: "https://www.figma.com/proto/xCXFcptnhP5eHreSvFk5Se/Untitled?page-id=0%3A1&node-id=16-2133&p=f&viewport=34%2C352%2C0.04&t=ZjSxbBYmUmHoWS6L-1&scaling=scale-down&content-scaling=fixed",
              },
              {
                img: "home.png",
                alt: "MedCare Assist",
                href: "https://www.figma.com/proto/K3JOzPZSuPmXAJjEqYUBMj/MedCare-Assist?page-id=2%3A197&node-id=2-198&viewport=376%2C24%2C0.11&t=zBrnOelVPUJmN4U8-1&scaling=scale-down&content-scaling=fixed",
              },
              {
                img: "body.png",
                alt: "Home Design",
                href: "https://www.figma.com/proto/sUPvxsjKcKm8TCgLW8NBuF/Hi-Gal?page-id=0%3A1&node-id=1-6&viewport=1844%2C478%2C0.18&t=y0D6Qf6eMf9gBP3v-1&scaling=scale-down&content-scaling=fixed",
              },
            ].map((project, i) => (
              <div key={i} className="group flex flex-col items-center">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <div className="bg-gray-800 rounded-[16px] sm:rounded-[20px] p-2 sm:p-3 shadow-2xl hover:scale-[1.02] duration-500">
                    <div className="flex items-center justify-between px-2 sm:px-4 pb-2 sm:pb-3">
                      <div className="flex gap-1.5 sm:gap-2">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="w-14 sm:w-20 h-1.5 sm:h-2 bg-gray-600 rounded-full"></div>
                      <div className="text-white/60 text-[10px] sm:text-xs">Figma Design</div>
                    </div>
                    <div className="relative overflow-y-auto rounded-lg sm:rounded-xl bg-white" style={{ height: "300px" }}>
                      <img
                        src={`/images/${project.img}`}
                        alt={project.alt}
                        className="w-full"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 duration-500 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 duration-500 flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base">
                          <ExternalLink size={16} />
                          View on Figma
                        </div>
                      </div>
                    </div>
                    <div className="h-2 sm:h-3 bg-gray-800 rounded-b-[8px] sm:rounded-b-[12px] mt-1"></div>
                  </div>
                </a>
                <div className="w-12 sm:w-16 h-6 sm:h-8 bg-gray-700 rounded-b-full -mt-1"></div>
                <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gray-700 rounded-full -mt-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="pt-28 sm:pt-40 pb-20 sm:pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="uppercase tracking-[5px] text-[#1da1f2] text-sm mb-4">
              Hello Binada
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">CONTACT ME</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 relative">
            {/* LEFT */}
            <div className="relative">
              <p className="uppercase tracking-[3.25px] text-[#00AEEF] text-xs mb-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
                CONNECT
              </p>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-0" style={{ color: '#191C1E', fontFamily: "'Hanken Grotesk', sans-serif", lineHeight: 1.2 }}>
                Let&apos;s stay in touch
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-x-4 sm:gap-y-6 mt-6 sm:mt-8">
                {[
                  { img: "github.jpg", sub: "View my code", href: "https://github.com/BiNaDa2003" },
                  { img: "linkdin.jpg", sub: "Connect professional", href: "https://www.linkedin.com/in/binada-dewndara-640440244" },
                  { img: "youtube.jpg", sub: "Subscribe my latest", href: "https://www.youtube.com/@BinadaDewundara" },
                  { img: "facebook.jpg", sub: "Like, Comment<br/>Share", href: "https://www.facebook.com/binada.basilu/" },
                  { img: "tiktok.jpg", sub: "Follow for more", href: "#" },
                  { img: "instargram.jpg", sub: "Let's Share<br/>Reels", href: "#" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center cursor-pointer group"
                    style={{
                      background: 'rgba(255,255,255,0.70)',
                      borderRadius: 16,
                      outline: '1px solid white',
                      outlineOffset: -1,
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      padding: '16px 8px 14px',
                    }}
                  >
                    <div className="transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                      <img src={`/images/${item.img}`} alt="" className="w-[80px] sm:w-[100px] lg:w-[120px] h-[46px] sm:h-[58px] lg:h-[68px] object-contain" />
                    </div>
                    <p
                      className="text-[10px] sm:text-xs mt-2 leading-tight"
                      style={{ color: '#3E4850', fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, letterSpacing: '0.65px' }}
                      dangerouslySetInnerHTML={{ __html: item.sub }}
                    />
                  </a>
                ))}
              </div>

              <div className="flex justify-center mt-6">
                <img src="/images/buy-me-coffee.jpg" alt="Buy me coffee" className="rounded-[20px] object-cover hover:scale-105 duration-300 cursor-pointer max-w-full" style={{ width: 181, height: 40 }} />
              </div>
            </div>

            {/* RIGHT */}
            <div
              style={{
                background: 'rgba(255,255,255,0.70)',
                borderRadius: 32,
                outline: '1px solid rgba(255,255,255,0.60)',
                outlineOffset: -1,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
              }}
              className="p-6 sm:p-8 lg:p-10"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8" style={{ color: '#191C1E', fontFamily: "'Hanken Grotesk', sans-serif" }}>
                Start a conversation
              </h3>

              <form onSubmit={handleSend} className="space-y-5 sm:space-y-6">
                <div>
                  <p className="text-xs mb-1 pl-1" style={{ color: '#3E4850', fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, letterSpacing: '0.65px' }}>Full Name</p>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent px-3 py-3 outline-none"
                    style={{ borderBottom: '1px solid #BDC8D1', color: '#6B7280', fontSize: 16, fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                  />
                </div>

                <div>
                  <p className="text-xs mb-1 pl-1" style={{ color: '#3E4850', fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, letterSpacing: '0.65px' }}>Email Address</p>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent px-3 py-3 outline-none"
                    style={{ borderBottom: '1px solid #BDC8D1', color: '#6B7280', fontSize: 16, fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                  />
                </div>

                <div>
                  <p className="text-xs mb-1 pl-1" style={{ color: '#3E4850', fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, letterSpacing: '0.65px' }}>Message</p>
                  <textarea
                    rows="4"
                    placeholder="What's on your mind?  Hello Binada......."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent px-3 py-2.5 outline-none resize-none"
                    style={{ borderBottom: '1px solid #BDC8D1', color: '#6B7280', fontSize: 16, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: 1.6 }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white font-bold py-3.5 sm:py-4 text-sm sm:text-base hover:scale-[1.02] duration-300"
                  style={{
                    background: '#00AEEF',
                    borderRadius: 12,
                    boxShadow: '0px 4px 6px -4px rgba(0,0,0,0.10), 0px 10px 15px -3px rgba(0,0,0,0.10)',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.6,
                  }}
                >
                  Send Message
                </button>

                <p className="text-xs text-center text-gray-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  or email me at <a href="mailto:dewndara2003@gmail.com" className="text-[#00AEEF] hover:underline">dewndara2003@gmail.com</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <h1 className="font-black text-xl"><span style={{color: '#00658D'}}>Binada</span><span style={{color: '#00AEEF'}}>_d</span></h1>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-gray-500">
            <a href="https://github.com/BiNaDa2003" target="_blank" rel="noopener noreferrer" className="hover:text-[#1da1f2] duration-300">GitHub</a>
            <a href="https://www.linkedin.com/in/binada-dewndara-640440244" target="_blank" rel="noopener noreferrer" className="hover:text-[#1da1f2] duration-300">LinkedIn</a>
            <a href="https://www.youtube.com/@BinadaDewundara" target="_blank" rel="noopener noreferrer" className="hover:text-[#1da1f2] duration-300">YouTube</a>
            <a href="https://www.facebook.com/binada.basilu/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1da1f2] duration-300">Facebook</a>
          </div>

          <p className="text-gray-500 text-sm text-center">
            © 2026 <span style={{color: '#00658D'}}>Binada</span><span style={{color: '#00AEEF'}}>_d</span>. All rights reserved.
          </p>
        </div>

      </footer>

      {/* ================= BACK TO TOP (ROCKET) ================= */}
      <a
        href="#hero"
        className="fixed right-4 bottom-8 z-50 w-12 h-12 rounded-full bg-[#1da1f2] text-white flex items-center justify-center shadow-lg hover:bg-[#0088cc] hover:scale-110 duration-300 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 duration-300">
          <path d="M12 2v20"/>
          <path d="M5 9l7-7 7 7"/>
        </svg>
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 duration-300 whitespace-nowrap">
          Back to Top
        </span>
      </a>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-slide {
          opacity: 0;
          animation: slideUp 0.8s ease forwards;
        }
        .fade-slide:nth-child(1) { animation-delay: 0.2s; }
        .fade-slide:nth-child(2) { animation-delay: 0.6s; }
        .fade-slide:nth-child(3) { animation-delay: 1s; }
      `}</style>
    </div>
  );
}
