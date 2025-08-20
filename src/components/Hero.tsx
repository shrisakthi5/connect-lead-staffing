import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Professional business environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-light/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-white text-sm font-medium">Leading Staffing Solutions in Chennai</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Global <span className="text-accent">LeadConnect</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium max-w-2xl">
                A leading staffing company in Chennai for employers in the public and private sector
              </p>
              
              <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
                Since 2018, we've been pioneering innovative human resource services, partnering with clients to fulfill business objectives—from talent attraction and recruitment to performance, retention, and succession planning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button variant="hero" size="lg" className="group">
                  Find Out More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
                >
                  Our Services
                </Button>
              </div>
            </div>
          </div>

          {/* Stats/Features */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">500+</h3>
                    <p className="text-white/80 text-sm">Organizations Trust Us</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">2018</h3>
                    <p className="text-white/80 text-sm">Established Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Innovative HR Solutions
                  </h3>
                  <p className="text-white/80 text-sm">
                    Hundreds of leading organizations in India trust our forward-thinking recruitment solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;