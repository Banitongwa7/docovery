import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';


export default function Home() {
  
  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
    {/* Header */}
    <header className="hero-bg text-white pb-32 relative overflow-hidden">
      <nav className="container mx-auto flex justify-between items-center py-6 px-4">
        <div className="flex items-center gap-3">
          <Image src="/assets/logo.svg" alt="DoTech Logo" className="h-10 w-10 animate-spin-slow" />
          <span className="text-2xl font-bold tracking-tight">DoTech</span>
        </div>
        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#about" className="hover:text-blue-200 transition">About</a></li>
          <li><a href="#services" className="hover:text-blue-200 transition">Services</a></li>
          <li><a href="#community" className="hover:text-blue-200 transition">Community</a></li>
          <li><a href="#team" className="hover:text-blue-200 transition">Team</a></li>
          <li>
            <a href="#contact" className="ml-4 px-5 py-2 bg-white text-blue-700 rounded-lg font-bold shadow hover:bg-blue-100 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* Animated SVG behind the headline */}
      <div className="hero-anim pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 z-0">
        <svg viewBox="0 0 600 320" fill="none" width="600" height="320">
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="300" cy="160" rx="180" ry="60" fill="url(#g1)">
            <animate attributeName="rx" values="180;220;180" dur="6s" repeatCount="indefinite" />
            <animate attributeName="ry" values="60;80;60" dur="6s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="300" cy="160" rx="90" ry="30" fill="#60a5fa" fillOpacity="0.2">
            <animate attributeName="rx" values="90;120;90" dur="7s" repeatCount="indefinite" />
            <animate attributeName="ry" values="30;50;30" dur="7s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center pt-10 md:pt-20 relative z-10">
        <div className="md:w-1/2 fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">Technology for Tomorrow</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100/90 fade-in-up delay-100">
            DoTech is a space for innovation, research, and learning dedicated to technology. We explore, analyze, and share advances and solutions to address tomorrow's challenges.
          </p>
          <div className="flex gap-4 fade-in-up delay-200">
            <a href="#services" className="px-6 py-3 bg-white text-blue-700 rounded-lg font-bold shadow hover:bg-blue-100 transition tilt shine">Our Services</a>
            <a href="#community" className="px-6 py-3 border border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-700 transition tilt shine">Join Community</a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 fade-in-up delay-300">
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_1pxqjqps.json"
            style={{ height: '340px', width: '340px' }}
          />
        </div>
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120vw] h-40 bg-gradient-to-t from-blue-50/80 to-transparent rounded-t-full"></div>
    </header>

    {/* About Section */}
    <section id="about" className="container mx-auto px-4 -mt-24 mb-20">
      <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 fade-in-up">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Who We Are</h2>
          <p className="text-gray-600 text-lg mb-4">
            At DoTech, we are passionate technologists, researchers, and creators. Our mission is to empower innovation, foster learning, and connect a vibrant community of forward-thinkers.
          </p>
          <ul className="list-disc ml-6 text-blue-700 font-medium">
            <li>Highlighting emerging trends & discoveries</li>
            <li>Sharing real-world applications of technology</li>
            <li>Building a collaborative, inclusive community</li>
          </ul>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_4kx2q32n.json"
            style={{ height: '180px', width: '180px' }}
          />
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12 fade-in-up">Our IT Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center card-hover transition-transform duration-300 fade-in-up">
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_2ks3pjua.json"
              style={{ height: '90px', width: '90px', margin: '0 auto 1rem' }}
            />
            <h3 className="text-xl font-bold mb-2 text-blue-700">UI/UX Design</h3>
            <p className="mb-4 text-gray-600">Intuitive, beautiful interfaces for web & mobile, focused on accessibility and user experience.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center card-hover transition-transform duration-300 fade-in-up delay-100">
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_1pxqjqps.json"
              style={{ height: '90px', width: '90px', margin: '0 auto 1rem' }}
            />
            <h3 className="text-xl font-bold mb-2 text-blue-700">Development</h3>
            <p className="mb-4 text-gray-600">Robust, scalable, and secure solutions tailored to your needs using the latest technologies.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center card-hover transition-transform duration-300 fade-in-up delay-200">
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_2glqweqs.json"
              style={{ height: '90px', width: '90px', margin: '0 auto 1rem' }}
            />
            <h3 className="text-xl font-bold mb-2 text-blue-700">Consulting</h3>
            <p className="mb-4 text-gray-600">From MVPs to enterprise, we deliver high-quality software, infrastructure, and expert advice.</p>
          </div>
        </div>
        <div className="text-center mt-10 fade-in-up delay-300">
          <a href="#contact" className="inline-block px-10 py-4 bg-blue-700 text-white rounded-xl shadow hover:bg-blue-800 transition text-lg font-bold shine">Request a Quote</a>
        </div>
      </div>
    </section>


    <section id="community" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12 fade-in-up">Our Community</h2>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="bg-blue-50 rounded-2xl shadow p-8 text-center hover:shadow-xl transition fade-in-up">
                    <Player
                        autoplay
                        loop
                        src="https://assets2.lottiefiles.com/packages/lf20_1pxqjqps.json"
                        style={{ height: '70px', width: '70px', margin: '0 auto 1rem' }}
                    />
                    <h3 className="text-lg font-bold text-blue-700 mb-2">Events & Meetups</h3>
                    <p className="text-gray-600">Connect with innovators, attend workshops, and join our regular tech meetups.</p>
                </div>
                <div className="bg-blue-50 rounded-2xl shadow p-8 text-center hover:shadow-xl transition fade-in-up delay-100">
                    <Player
                        autoplay
                        loop
                        src="https://assets2.lottiefiles.com/packages/lf20_4kx2q32n.json"
                        style={{ height: '70px', width: '70px', margin: '0 auto 1rem' }}
                    />
                    <h3 className="text-lg font-bold text-blue-700 mb-2">Blog & Knowledge</h3>
                    <p className="text-gray-600">Read our blog, join the forum, and contribute to open discussions about emerging technologies.</p>
                </div>
                <div className="bg-blue-50 rounded-2xl shadow p-8 text-center hover:shadow-xl transition fade-in-up delay-200">
                    <Player
                        autoplay
                        loop
                        src="https://assets2.lottiefiles.com/packages/lf20_2glqweqs.json"
                        style={{ height: '70px', width: '70px', margin: '0 auto 1rem' }}
                    />
                    <h3 className="text-lg font-bold text-blue-700 mb-2">Forum & Collaboration</h3>
                    <p className="text-gray-600">Work together on open source and community-driven projects that make a real-world impact.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="team" className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12 fade-in-up">Meet Our Team</h2>
            <div className="flex flex-wrap justify-center gap-10">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center w-72 card-hover transition-transform duration-300 fade-in-up">
                    <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-200 shadow-lg shine" />
                    <div className="text-lg font-bold text-blue-700">John Doe</div>
                    <div className="text-gray-600 mb-2">DevOps Lead</div>
                    <p className="text-gray-500">Expert in cloud infrastructure and automation, ensuring reliability and scalability for all our projects.</p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center w-72 card-hover transition-transform duration-300 fade-in-up delay-100">
                    <Image src="https://randomuser.me/api/portraits/men/44.jpg" alt="Tinh Nguyen" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-200 shadow-lg shine" />
                    <div className="text-lg font-bold text-blue-700">Tinh Nguyen</div>
                    <div className="text-gray-600 mb-2">UI/UX Designer</div>
                    <p className="text-gray-500">Passionate about UI/UX, Tinh brings ideas to life with creative and user-centric designs.</p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center w-72 card-hover transition-transform duration-300 fade-in-up delay-200">
                    <Image src="https://randomuser.me/api/portraits/women/65.jpg" alt="Maria Oto" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-200 shadow-lg shine" />
                    <div className="text-lg font-bold text-blue-700">Maria Oto</div>
                    <div className="text-gray-600 mb-2">Full-stack Developer</div>
                    <p className="text-gray-500">Full-stack developer with a knack for building scalable and maintainable software solutions.</p>
                </div>
            </div>
        </div>
    </section>


    <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8 fade-in-up">Contact Us</h2>
            <div className="max-w-xl mx-auto bg-blue-50 rounded-2xl shadow-xl p-10 fade-in-up delay-100">
                <form className="space-y-6" autoComplete="off">
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700" htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none" required />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700" htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none" required />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700" htmlFor="message">Message</label>
                        <textarea id="message" name="message" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none" rows={4} required></textarea>
                    </div>
                    <button type="submit" className="w-full px-6 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition font-bold shine">Send Message</button>
                </form>
                <div className="mt-6 text-center text-gray-500">
                    Or email us at <a href="mailto:info@dotech.com" className="text-blue-600 hover:underline">info@dotech.com</a>
                </div>
            </div>
        </div>
    </section>


    <footer className="relative bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-900 text-white py-14 mt-10 overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-5 gap-10 relative z-10">
            <div className="md:col-span-2 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-4">
                    <Image src="/assets/logo.svg" alt="DoTech Logo" className="h-10 w-10 drop-shadow-lg" />
                    <span className="text-2xl font-bold tracking-tight">DoTech</span>
                </div>
                <p className="text-gray-300 text-sm mb-6">Empowering innovation, research, and learning in technology. Join us to shape tomorrow.</p>
                <div className="flex gap-4">
                    <a href="https://twitter.com/" target="_blank" aria-label="Twitter" className="hover:text-blue-400 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56c-.883.392-1.832.656-2.828.775a4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.116 2.813 5.247-.807-.026-1.566-.247-2.228-.616v.062c0 3.053 2.174 5.599 5.058 6.175-.53.144-1.087.222-1.662.222-.406 0-.799-.039-1.184-.112.8 2.497 3.122 4.314 5.872 4.364A9.867 9.867 0 0 1 0 21.543c2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.56z"/></svg>
                    </a>
                    <a href="https://github.com/" target="_blank" aria-label="Github" className="hover:text-blue-400 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </a>
                    <a href="mailto:info@dotech.com" aria-label="Email" className="hover:text-blue-400 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 4.5h21a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 18V6a1.5 1.5 0 0 1 1.5-1.5zm10.5 8.25L3.75 6.75h16.5L12 12.75zm-9 6.75h18V8.25l-9 6.75-9-6.75V18z"/></svg>
                    </a>
                </div>
            </div>
            <div>
                <h4 className="font-bold mb-4">Services</h4>
                <ul>
                    <li><a href="#services" className="hover:text-blue-300 transition">UI/UX Design</a></li>
                    <li><a href="#services" className="hover:text-blue-300 transition">Development</a></li>
                    <li><a href="#services" className="hover:text-blue-300 transition">Consulting</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Community</h4>
                <ul>
                    <li><a href="#community" className="hover:text-blue-300 transition">Events</a></li>
                    <li><a href="#community" className="hover:text-blue-300 transition">Blog</a></li>
                    <li><a href="#community" className="hover:text-blue-300 transition">Forum</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul>
                    <li><a href="#about" className="hover:text-blue-300 transition">About Us</a></li>
                    <li><a href="#team" className="hover:text-blue-300 transition">Team</a></li>
                    <li><a href="#contact" className="hover:text-blue-300 transition">Contact</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Newsletter</h4>
                <form
                  className="flex flex-col gap-2"
                  autoComplete="off"
                  onSubmit={(event) => {
                    event.preventDefault();
                    event.currentTarget.reset();
                    const successMessage = document.getElementById('newsletter-success');
                    if (successMessage) {
                      successMessage.classList.remove('hidden');
                      setTimeout(() => successMessage.classList.add('hidden'), 3000);
                    }
                  }}
                >
                    <input type="email" required placeholder="Your email" className="px-3 py-2 rounded bg-blue-800/30 border border-blue-700 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition text-white rounded px-3 py-2 font-semibold">Subscribe</button>
                    <span id="newsletter-success" className="hidden text-green-300 text-xs mt-1">Subscribed! 🎉</span>
                </form>
            </div>
        </div>
        <div className="text-center text-blue-200 mt-10 text-xs relative z-10">
            <span className="inline-flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-300 inline-block animate-pulse" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
                &copy; 2025 DoTech. All rights reserved.
            </span>
        </div>
    </footer>
    </main>
  )
}
