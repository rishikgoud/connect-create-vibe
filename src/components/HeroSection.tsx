import heroIllustration from '@/assets/hero-illustration.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-secondary/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 fade-in">
              Find Your Next Gig.{' '}
              <span className="block text-4xl md:text-5xl lg:text-6xl">
                Anytime, Anywhere.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl fade-in">
              ConnectCreator helps freelancers and clients discover short-term creative 
              opportunities nearby. Connect with local talent instantly.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in">
              <a href="#register" className="btn-primary text-lg px-8 py-4">
                Join as Creator
              </a>
              <a href="#register" className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                Post a Gig
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-8 mt-12 fade-in">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-white/80 text-sm">Active Creators</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5K+</div>
                <div className="text-white/80 text-sm">Gigs Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-white/80 text-sm">Cities</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Illustration */}
          <div className="relative slide-up">
            <div className="relative">
              <img 
                src={heroIllustration} 
                alt="Creative professionals connecting with clients" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-md rounded-full p-4 animate-bounce">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/20 backdrop-blur-md rounded-full p-6 animate-pulse">
                <div className="w-6 h-6 bg-accent-orange rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;