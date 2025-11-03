import React, { useEffect, useState } from "react";
import { GraduationCap, BookOpen, Award, Zap, Shield, Star, Code, TrendingUp, ChevronRight } from "lucide-react";

export default function LandingPage() {
  const [studentCount, setStudentCount] = useState(145);
  const [subjectCount, setSubjectCount] = useState(12);
  const [gradeCount, setGradeCount] = useState(432);

  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-900 via-black to-gray-900">
      {/* Animated Background Elements - Gold Colors */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Sticky Navigation with Gold Shield */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-2xl border-b border-yellow-600/30 shadow-xl shadow-yellow-600/20">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative p-3 bg-linear-to-br from-yellow-600 via-yellow-700 to-yellow-800 rounded-xl shadow-lg shadow-yellow-600/50">
                <Shield className="text-black" size={28} fill="currentColor" />
                <div className="absolute inset-0 bg-linear-to-t from-yellow-500/20 to-transparent rounded-xl"></div>
              </div>
              <div>
                <h1 className="text-2xl font-black bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent tracking-tight">
                  PORTFOLIO
                </h1>
                <p className="text-xs text-yellow-500 font-bold tracking-widest">OF EXCELLENCE</p>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="/students" className="text-gray-300 hover:text-yellow-500 transition-all flex items-center gap-2 group font-semibold">
                <GraduationCap size={20} className="group-hover:scale-110 transition-transform" />
                <span>Students</span>
              </a>
              <a href="/subjects" className="text-gray-300 hover:text-yellow-400 transition-all flex items-center gap-2 group font-semibold">
                <BookOpen size={20} className="group-hover:scale-110 transition-transform" />
                <span>Subjects</span>
              </a>
              <a href="/grades" className="text-gray-300 hover:text-yellow-500 transition-all flex items-center gap-2 group font-semibold">
                <Award size={20} className="group-hover:scale-110 transition-transform" />
                <span>Grades</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Gold Style */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
        {/* Gold Symbol Background */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-5">
          <Shield size={600} className="text-yellow-600" fill="currentColor" />
        </div>

        <div className="text-center mb-20 relative">
          {/* Profile Image with Gold Shield Frame */}
          <div className="inline-block mb-8 relative">
            <div className="absolute inset-0 bg-linear-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-full blur-3xl opacity-70 animate-pulse"></div>
            <div className="relative">
              {/* Shield Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield size={280} className="text-yellow-600 opacity-30" fill="currentColor" />
              </div>
              <div className="relative w-56 h-56 rounded-full bg-linear-to-br from-yellow-600 via-yellow-700 to-yellow-800 p-2 shadow-2xl shadow-yellow-600/50">
                <img 
                  className="w-full h-full rounded-full object-cover border-4 border-yellow-400/30" 
                  src="https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/571186573_796138753195477_4891325890662012070_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEz0M-xG7OZA0dQQ_o_8DifvkixBVlXefG-SLEFWVd58dxS3QKrFJG2OpsYU3OWyYUw88q_2f7fWAggOvoY1un_&_nc_ohc=1jkmYDSe-YEQ7kNvwGMp3el&_nc_oc=AdnDcwqz9F_kD3iFBLiPqpBQQX1Q8jpW6CaSTKVBHoJBydvZFmg5vzEGOu1trs1oodk&_nc_zt=23&_nc_ht=scontent.fmnl25-4.fna&_nc_gid=gyc8gucMgGTMGRElntlWRw&oh=00_AfhMxBEnDl3vU5DF6eIn7gjPtcKMcyHt0Q9TC4p-nnuosg&oe=690E3193" 
                  alt="Charlie T. Gadapan" 
                />
              </div>
            </div>
          </div>

          {/* Introduction with Gold Typography */}
          <div className="space-y-5 mb-12">
            <div className="inline-block px-6 py-2 bg-yellow-600/20 border border-yellow-600/50 rounded-full mb-4">
              <p className="text-yellow-400 font-black tracking-widest text-sm">ELITE • DEVELOPER • STUDENT</p>
            </div>
            <h2 className="text-7xl md:text-8xl font-black bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-tight tracking-tight">
              CHARLIE T. GADAPAN
            </h2>
            <p className="text-2xl text-yellow-400 font-bold tracking-wide">
              IT Student & Code Master
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
              Crafting excellence with every line of code. Building applications with precision and elegance. Upholding the highest standards in development and design.
            </p>
          </div>

          {/* Stats Cards - Gold Style */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-yellow-600 to-yellow-800 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
              <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-yellow-600/50">
                <Shield size={24} className="text-yellow-400 mx-auto mb-2" />
                <div className="text-4xl font-black text-yellow-500">{studentCount}</div>
                <div className="text-sm text-gray-400 mt-1 font-bold tracking-wider">STUDENTS</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-yellow-500 to-yellow-700 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
              <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-yellow-500/50">
                <Star size={24} className="text-yellow-400 mx-auto mb-2" />
                <div className="text-4xl font-black text-yellow-400">{subjectCount}</div>
                <div className="text-sm text-gray-400 mt-1 font-bold tracking-wider">SUBJECTS</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-amber-600 to-orange-700 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
              <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-amber-600/50">
                <Zap size={24} className="text-yellow-400 mx-auto mb-2" />
                <div className="text-4xl font-black text-amber-500">{gradeCount}</div>
                <div className="text-sm text-gray-400 mt-1 font-bold tracking-wider">GRADES</div>
              </div>
            </div>
          </div>

          {/* Action Buttons - Gold & Black */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/students" className="group relative px-10 py-5 bg-linear-to-r from-yellow-600 via-yellow-700 to-yellow-800 text-black rounded-2xl font-black shadow-2xl shadow-yellow-600/50 hover:shadow-yellow-600/70 transition-all hover:scale-105 overflow-hidden border-2 border-yellow-500/50">
              <div className="absolute inset-0 bg-linear-to-r from-yellow-800 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-3 tracking-wide">
                <GraduationCap size={22} />
                EXPLORE STUDENTS
              </span>
            </a>
            <a href="/subjects" className="group relative px-10 py-5 bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-black rounded-2xl font-black shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-500/70 transition-all hover:scale-105 border-2 border-yellow-400/50">
              <span className="flex items-center gap-3 tracking-wide">
                <BookOpen size={22} />
                VIEW SUBJECTS
              </span>
            </a>
            <a href="/grades" className="group relative px-10 py-5 bg-black text-yellow-400 rounded-2xl font-black border-3 border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all hover:scale-105 shadow-xl">
              <span className="flex items-center gap-3 tracking-wide">
                <Award size={22} />
                CHECK GRADES
              </span>
            </a>
          </div>
        </div>

        {/* Powers Section (Skills) */}
        <div className="mt-40 mb-24">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-yellow-600/20 border border-yellow-600/50 rounded-full mb-4">
              <p className="text-yellow-400 font-black tracking-widest text-sm">ELITE SKILLS</p>
            </div>
            <h3 className="text-5xl font-black bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
              TECHNICAL ARSENAL
            </h3>
            <p className="text-gray-400 text-lg font-semibold">Enhanced by premium technology</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-yellow-600 to-yellow-800 rounded-3xl blur-lg group-hover:blur-xl transition-all opacity-50"></div>
              <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-yellow-600/50 hover:border-yellow-500 transition-all">
                <div className="w-16 h-16 bg-linear-to-br from-yellow-600 to-yellow-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="text-black" size={32} />
                </div>
                <h4 className="text-2xl font-black text-yellow-500 mb-3">FRONTEND</h4>
                <p className="text-gray-300 font-semibold">React • JavaScript • Tailwind CSS</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-yellow-500 to-yellow-700 rounded-3xl blur-lg group-hover:blur-xl transition-all opacity-50"></div>
              <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-yellow-500/50 hover:border-yellow-400 transition-all">
                <div className="w-16 h-16 bg-linear-to-br from-yellow-500 to-yellow-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="text-black" size={32} />
                </div>
                <h4 className="text-2xl font-black text-yellow-400 mb-3">BACKEND</h4>
                <p className="text-gray-300 font-semibold">Node.js • Supabase • REST APIs</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-amber-600 to-orange-700 rounded-3xl blur-lg group-hover:blur-xl transition-all opacity-50"></div>
              <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-amber-600/50 hover:border-amber-500 transition-all">
                <div className="w-16 h-16 bg-linear-to-br from-amber-600 to-orange-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="text-black" size={32} />
                </div>
                <h4 className="text-2xl font-black text-amber-500 mb-3">TOOLS</h4>
                <p className="text-gray-300 font-semibold">Git • VS Code • Figma</p>
              </div>
            </div>
          </div>
        </div>

        {/* Origin Story (IT Journey) */}
        <div className="mt-40 mb-24">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-yellow-600/20 border border-yellow-600/50 rounded-full mb-4">
              <p className="text-yellow-400 font-black tracking-widest text-sm">ORIGIN STORY</p>
            </div>
            <h3 className="text-5xl font-black bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
              THE JOURNEY OF EXCELLENCE
            </h3>
            <p className="text-gray-400 text-lg font-semibold">From Novice to Master</p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Timeline Line - Gold */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-linear-to-b from-yellow-600 via-yellow-500 to-yellow-600 opacity-50 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-20">
              {/* Year 1 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="inline-block md:block relative group">
                    <div className="absolute inset-0 bg-linear-to-br from-yellow-600 to-yellow-800 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all"></div>
                    <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-10 border-2 border-yellow-600/50 hover:border-yellow-500 transition-all">
                      <h4 className="text-4xl font-black text-yellow-500 mb-3 md:text-right text-left">FIRST YEAR</h4>
                      <p className="text-yellow-400 font-black mb-4 md:text-right text-left tracking-wide">DISCOVERING POTENTIAL</p>
                      <p className="text-gray-300 leading-relaxed font-medium">
                        The journey began with curiosity. Learning to harness new abilities, understanding the language of machines, and realizing the responsibility that comes with great skill. Every line of code was a step toward mastery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start">
                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-yellow-600 rounded-full blur-xl opacity-50"></div>
                    <div className="relative w-28 h-28 bg-linear-to-br from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-600/50 ring-8 ring-black border-4 border-yellow-400/30">
                      <span className="text-5xl font-black text-black">1</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Year 2 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:col-start-2">
                  <div className="inline-block md:block relative group">
                    <div className="absolute inset-0 bg-linear-to-br from-yellow-500 to-yellow-700 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all"></div>
                    <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-10 border-2 border-yellow-500/50 hover:border-yellow-400 transition-all">
                      <h4 className="text-4xl font-black text-yellow-400 mb-3">SECOND YEAR</h4>
                      <p className="text-yellow-500 font-black mb-4 tracking-wide">MASTERING ABILITIES</p>
                      <p className="text-gray-300 leading-relaxed font-medium">
                        Training intensified. Data structures became second nature, algorithms ran through my veins. Building systems with precision and elegance. The master was emerging.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-start-1 md:row-start-1 flex justify-center md:justify-end">
                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-yellow-500 rounded-full blur-xl opacity-50"></div>
                    <div className="relative w-28 h-28 bg-linear-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/50 ring-8 ring-black border-4 border-yellow-400/30">
                      <span className="text-5xl font-black text-black">2</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Year 3 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="inline-block md:block relative group">
                    <div className="absolute inset-0 bg-linear-to-br from-yellow-600 via-yellow-500 to-yellow-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all"></div>
                    <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-10 border-2 border-yellow-600/50 hover:border-yellow-500 transition-all">
                      <h4 className="text-4xl font-black bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-3 md:text-right text-left">THIRD YEAR</h4>
                      <p className="text-yellow-400 font-black mb-4 md:text-right text-left tracking-wide">ACHIEVING EXCELLENCE</p>
                      <p className="text-gray-300 leading-relaxed font-medium">
                        Rising to the challenge. Building full-stack masterpieces, creating exceptional user experiences, and delivering solutions with premium quality. The symbol of excellence in development, ready to innovate with every deployment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start">
                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-linear-to-r from-yellow-600 to-yellow-500 rounded-full blur-xl opacity-50"></div>
                    <div className="relative w-28 h-28 bg-linear-to-br from-yellow-600 via-yellow-500 to-yellow-700 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-600/50 ring-8 ring-black border-4 border-yellow-400/50">
                      <span className="text-5xl font-black text-black">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Cards - Gold Style */}
        <div className="mt-40">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-yellow-600/20 border border-yellow-600/50 rounded-full mb-4">
              <p className="text-yellow-400 font-black tracking-widest text-sm">ACTIVE MISSIONS</p>
            </div>
            <h3 className="text-5xl font-black bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              CHOOSE YOUR MISSION
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="/students" className="group relative bg-linear-to-br from-yellow-700 to-yellow-900 rounded-3xl p-10 overflow-hidden hover:scale-105 transition-all shadow-2xl shadow-yellow-600/40 hover:shadow-yellow-600/60 border-2 border-yellow-600/50">
              <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-40"></div>
              <div className="absolute top-4 right-4 w-32 h-32 opacity-10">
                <Shield size={128} className="text-white" fill="currentColor" />
              </div>
              <div className="relative">
                <GraduationCap className="text-yellow-300 mb-6 group-hover:scale-110 transition-transform" size={56} />
                <h4 className="text-3xl font-black text-white mb-3">STUDENTS</h4>
                <p className="text-yellow-200 font-semibold mb-6">Protect and manage student data</p>
                <div className="flex items-center gap-2 text-yellow-300 font-black text-sm">
                  <span>ACCESS MISSION</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a href="/subjects" className="group relative bg-linear-to-br from-yellow-600 to-yellow-800 rounded-3xl p-10 overflow-hidden hover:scale-105 transition-all shadow-2xl shadow-yellow-500/40 hover:shadow-yellow-500/60 border-2 border-yellow-500/50">
              <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-40"></div>
              <div className="absolute top-4 right-4 w-32 h-32 opacity-10">
                <Star size={128} className="text-white" fill="currentColor" />
              </div>
              <div className="relative">
                <BookOpen className="text-yellow-300 mb-6 group-hover:scale-110 transition-transform" size={56} />
                <h4 className="text-3xl font-black text-white mb-3">SUBJECTS</h4>
                <p className="text-yellow-200 font-semibold mb-6">Explore the vault of knowledge</p>
                <div className="flex items-center gap-2 text-yellow-300 font-black text-sm">
                  <span>ACCESS MISSION</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a href="/grades" className="group relative bg-linear-to-br from-gray-800 to-black rounded-3xl p-10 overflow-hidden hover:scale-105 transition-all shadow-2xl shadow-yellow-600/40 hover:shadow-yellow-600/60 border-2 border-yellow-600/50">
              <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-40"></div>
              <div className="absolute top-4 right-4 w-32 h-32 opacity-10">
                <Zap size={128} className="text-white" fill="currentColor" />
              </div>
              <div className="relative">
                <Award className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform" size={56} />
                <h4 className="text-3xl font-black text-white mb-3">GRADES</h4>
                <p className="text-gray-300 font-semibold mb-6">Monitor academic performance</p>
                <div className="flex items-center gap-2 text-yellow-400 font-black text-sm">
                  <span>ACCESS MISSION</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer - Gold & Black Style */}
      <footer className="relative bg-black/90 backdrop-blur-xl border-t-2 border-yellow-600/30 mt-40">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <div className="mb-6">
            <div className="inline-block p-4 bg-linear-to-br from-yellow-600 to-yellow-800 rounded-xl">
              <Shield className="text-black" size={40} fill="currentColor" />
            </div>
          </div>
          <p className="text-gray-300 font-black text-lg tracking-wide">© 2025 CHARLIE T. GADAPAN</p>
          <p className="text-gray-500 font-semibold text-sm mt-2">Built with Excellence & Precision</p>
          <p className="text-yellow-600 font-black text-xs mt-3 tracking-widest">QUALITY • INNOVATION • EXCELLENCE</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}