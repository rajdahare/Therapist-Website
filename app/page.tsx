
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden">
                <img src="/images/serena-blake-headshot.jpg" alt="Dr. Serena Blake headshot" className="w-10 h-10 object-cover rounded-full" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                Dr. Serena Blake, PsyD
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVPdE8FDjGrnmAJ8kAXzXUTrOz780udwG6noNWHbShZuuIgw/viewform" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Schedule Consultation
              </a>
            </div>
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        <div className="relative max-w-6xl mx-auto flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col justify-center max-w-xl mx-auto lg:mx-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                <span className="block">Dr. Serena Blake, PsyD</span>
                <span className="block text-lg font-medium text-blue-700 mt-1">Clinical Psychologist</span>
                <span className="block mt-3 text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Compassionate, Evidence-Based Therapy in Los Angeles & Online</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Overcome anxiety, strengthen relationships, and heal from trauma with personalized care—available in-person at Maplewood Drive or virtually via Zoom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVPdE8FDjGrnmAJ8kAXzXUTrOz780udwG6noNWHbShZuuIgw/viewform" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Schedule a Consultation
                </a>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80">
                <img src="/images/serena-blake-headshot.jpg" alt="Dr. Serena Blake headshot" className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white" />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Dr. Serena Blake</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    <span className="font-semibold">Location:</span> 1287 Maplewood Drive, Los Angeles, CA 90026
                  </p>
                  <p className="mb-4">
                    <span className="font-semibold">Experience:</span> 8 years of practice, 500+ sessions
                  </p>
                  <p className="mb-6">
                    Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                  </p>
                  <ul className="mb-6">
                    <li><span className="font-semibold">In-person:</span> Tue & Thu, 10 AM–6 PM</li>
                    <li><span className="font-semibold">Virtual via Zoom:</span> Mon, Wed & Fri, 1 PM–5 PM</li>
                  </ul>
                  <div className="flex flex-col gap-2">
                    <span><span className="font-semibold">Phone:</span> (323) 555-0192</span>
                    <span><span className="font-semibold">Email:</span> <a href="mailto:serena@blakepsychology.com" className="text-blue-600 underline">serena@blakepsychology.com</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-80 h-80">
                <img src="/images/serena-blake-headshot.jpg" alt="Dr. Serena Blake headshot" className="w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Services & Specialties</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M13 7a3 3 0 11-6 0 3 3 0 016 0zm-7 9a7 7 0 1114 0H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Anxiety & Stress Management</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn practical tools and evidence-based strategies to manage anxiety, reduce stress, and regain a sense of calm and control in your daily life.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Relationship Counseling</h3>
              <p className="text-gray-700 leading-relaxed">
                Strengthen your relationships, improve communication, and resolve conflicts with supportive, nonjudgmental guidance for individuals and couples.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trauma Recovery</h3>
              <p className="text-gray-700 leading-relaxed">
                Heal from past trauma and build resilience with a blend of cognitive-behavioral therapy, mindfulness, and compassionate support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rates and Insurance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Session Fees</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-teal-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Individual Session</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">$200</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-teal-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Couples Session</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">$240</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Insurance:</span> I do not accept insurance, but a superbill is provided for self-submission.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you accept insurance?</h3>
              <p className="text-gray-600">
                No, but a superbill is provided for self-submission.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Are online sessions available?</h3>
              <p className="text-gray-600">
                Yes—all virtual sessions via Zoom.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What is your cancellation policy?</h3>
              <p className="text-gray-600">
                24-hour notice required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Indigo Theme */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Dr. Serena Blake, PsyD</h4>
                    <p className="text-gray-600">Clinical Psychologist</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">serena@blakepsychology.com</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">(323) 555-0192</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">1287 Maplewood Drive, Los Angeles, CA 90026</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Office Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">In-person (Tue & Thu)</span>
                      <span className="text-gray-900 font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Virtual via Zoom (Mon, Wed & Fri)</span>
                      <span className="text-gray-900 font-medium">1:00 PM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/images/serena-blake-headshot.jpg" alt="Dr. Serena Blake headshot" className="w-8 h-8 object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-semibold">Dr. Serena Blake, PsyD</h3>
              </div>
              <p className="text-gray-400 text-sm">Clinical Psychologist, Los Angeles, CA</p>
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Good Faith Estimate</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Client Portal</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-400">© 2025 Dr. Serena Blake, PsyD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
