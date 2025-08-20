import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Building, UserCheck, Code, ArrowLeft, ArrowRight, CheckCircle, Star } from "lucide-react";
const WhyChooseUs = () => {
  const keyPoints = [{
    title: "Diverse Permanent Recruitment Solutions",
    description: "Covers junior to executive hiring, with retained, contingent, and executive packages.",
    icon: Users,
    features: ["Junior to Executive roles", "Retained & Contingent search", "Customized packages"]
  }, {
    title: "Efficient Contract Staffing",
    description: "Quick and compliant solutions for niche or contract roles.",
    icon: Clock,
    features: ["Fast turnaround time", "Compliance assured", "Niche specializations"]
  }, {
    title: "RPO, BPO, HRO Expertise",
    description: "A dedicated team delivering strategic staffing via outsourcing models.",
    icon: Building,
    features: ["Recruitment Process Outsourcing", "Business Process Outsourcing", "HR Outsourcing"]
  }, {
    title: "Executive Leadership Hiring",
    description: "Strong experience in recruiting for senior-level and board positions across sectors.",
    icon: UserCheck,
    features: ["C-Suite positions", "Board appointments", "Cross-sector expertise"]
  }, {
    title: "IT Domain Specialization",
    description: "Deep placement experience from developers to C-suite roles across multiple industries.",
    icon: Code,
    features: ["Java developers", "Cybersecurity experts", "IT leadership roles"]
  }];
  const industries = ["Retail", "Utilities", "Healthcare", "Telecommunications", "Finance", "Banking"];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-hero text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <Button variant="outline" size="sm" className="mb-6 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              
              <div className="space-y-6">
                
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Why Choose{" "}
                  <span className="text-accent block sm:inline">LeadConnect</span>{" "}
                  <span className="block">Consultancy Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                  We bring unparalleled expertise, innovative solutions, and a commitment to excellence 
                  that sets us apart in the staffing industry.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button variant="accent" size="lg" className="group">
                    Discover Our Expertise
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white">
                    Contact Us Today
                  </Button>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block relative">
              <div className="relative">
                <div className="text-8xl xl:text-9xl font-bold text-accent/20 leading-none">
                  LeadConnect
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-2xl font-bold text-accent">500+</div>
                        <div className="text-white/80 text-sm">Clients</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">98%</div>
                        <div className="text-white/80 text-sm">Success Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">5+</div>
                        <div className="text-white/80 text-sm">Years</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">24/7</div>
                        <div className="text-white/80 text-sm">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Key Points Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <span className="text-primary text-sm font-medium">Our Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the competitive advantages that make Global LeadConnect 
              the preferred choice for leading organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {keyPoints.map((point, index) => {
            const IconComponent = point.icon;
            return <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {point.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                    <div className="space-y-2">
                      {point.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>)}
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Industries We Serve */}
          <div className="bg-gradient-subtle rounded-2xl p-8 border border-primary/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Industries We Serve
              </h3>
              <p className="text-muted-foreground">
                Our expertise spans across diverse sectors, ensuring we understand your unique requirements
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {industries.map((industry, index) => <div key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default">
                  <span className="font-medium">{industry}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Track Record Speaks
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Numbers that demonstrate our commitment to excellence and client success
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-primary-foreground/80">Organizations Trust Us</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
              <p className="text-primary-foreground/80">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">5+</div>
              <p className="text-primary-foreground/80">Years Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
              <p className="text-primary-foreground/80">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
      
      <Footer />
    </div>;
};
export default WhyChooseUs;