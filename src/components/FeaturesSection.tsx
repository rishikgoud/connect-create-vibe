import { Map, MessageSquare, Filter, DollarSign, Users, Clock, Target, MapPin } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Map className="w-8 h-8" />,
      title: "Live Gig Map",
      description: "Track real-time locations of available gigs and nearby creators. See opportunities as they pop up in your area.",
      color: "text-blue-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Real-Time Chat",
      description: "Connect instantly with clients and creators through our built-in messaging system. No need for external communication.",
      color: "text-green-500"
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Interest-Based Filters",
      description: "Customize your experience with smart filters that match gigs to your specific skills, interests, and availability.",
      color: "text-purple-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Fast, Secure Payments",
      description: "Built-in payment processing ensures you get paid quickly and securely. No hassle, no delays, just reliable transactions.",
      color: "text-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Reviews",
      description: "Build your reputation with our rating and review system. Quality creators and clients rise to the top.",
      color: "text-orange-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "Work when you want, where you want. Accept gigs that fit your schedule and lifestyle perfectly.",
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Creative Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to find, manage, and complete creative projects. 
            ConnectCreator provides the tools that make freelancing easier and more profitable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-secondary/10 rounded-2xl mb-6 group-hover:scale-110 transition-smooth ${feature.color}`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-smooth">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Spotlight */}
        <div className="mt-20 slide-up">
          <div className="bg-card border-radius-card shadow-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 md:p-12 lg:p-16">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Smart Matching Algorithm
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our AI-powered matching system analyzes your skills, location, availability, 
                  and preferences to connect you with the perfect opportunities. No more 
                  endless searching - let the gigs come to you.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Skill-based matching</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Location optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Availability sync</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Preference learning</span>
                  </li>
                </ul>
                <a href="#register" className="btn-primary">
                  Experience Smart Matching
                </a>
              </div>
              
              {/* Visual */}
              <div className="bg-gradient-to-br from-primary/5 via-primary-secondary/5 to-accent/5 flex items-center justify-center p-8">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary to-primary-secondary rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full shadow-elegant flex items-center justify-center">
                      <Target className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  {/* Floating Icons */}
                  <div className="absolute top-8 left-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white animate-bounce">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center text-white animate-bounce" style={{ animationDelay: '0.5s' }}>
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;