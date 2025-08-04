import { Star } from 'lucide-react';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Freelance Videographer",
      image: testimonial1,
      rating: 5,
      text: "ConnectCreator has completely transformed how I find video projects. I've booked more gigs in the last 3 months than in the entire previous year. The location-based matching is incredible!"
    },
    {
      name: "Marcus Rodriguez",
      role: "Wedding Photographer",
      image: testimonial2,
      rating: 5,
      text: "As a photographer, timing is everything. ConnectCreator's real-time notifications have helped me catch last-minute opportunities that I would have missed otherwise. Game changer!"
    },
    {
      name: "Alex Thompson",
      role: "Graphic Designer",
      image: testimonial3,
      rating: 5,
      text: "The payment system is so smooth and the clients are genuinely great to work with. I love how I can set my availability and only get matched with gigs that fit my schedule perfectly."
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Creators Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real creators who have transformed their freelance careers 
            with ConnectCreator. Join thousands of satisfied users.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 slide-up">
          <div className="gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Creators Worldwide
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join a growing community of successful freelancers and satisfied clients.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
                <div className="text-white/80">Active Creators</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
                <div className="text-white/80">Gigs Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">4.9/5</div>
                <div className="text-white/80">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-white/80">Cities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your journey with ConnectCreator today and discover opportunities you never knew existed.
          </p>
          <a href="#register" className="btn-primary text-lg px-8 py-4">
            Start Creating Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;