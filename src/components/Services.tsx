import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  UserCheck, 
  Users, 
  FileText, 
  Calculator, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Enterprise Staffing Solutions",
    description: "Bespoke RPO and HRO services for corporates, SMEs, recruitment agencies, consultancies or contractors.",
    icon: Building2,
    featured: true
  },
  {
    title: "Executive Hiring",
    description: "Premier leadership staffing solutions to bring the talent needed for growth.",
    icon: UserCheck,
    featured: true
  },
  {
    title: "Permanent Hiring",
    description: "Optimized hiring process to get the best candidates with minimal time.",
    icon: Users,
    featured: false
  },
  {
    title: "Contract Staffing",
    description: "Providing the perfect fit, whether for fixed-term projects or niche roles.",
    icon: FileText,
    featured: false
  },
  {
    title: "Payroll Services",
    description: "Outsource payroll operations with strong customer service and reliability.",
    icon: Calculator,
    featured: false
  },
  {
    title: "Business Consulting Services",
    description: "Strategic and technology consulting to solve complex client challenges.",
    icon: TrendingUp,
    featured: false
  }
];

const Services = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Staffing Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hundreds of leading organizations in India trust our forward-thinking recruitment solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`group relative overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
                  service.featured ? 'md:col-span-1 lg:col-span-1 border-primary/20' : ''
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      service.featured ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.featured && (
                      <div className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                        Popular
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-0 h-auto text-primary font-medium group-hover:gap-2 transition-all"
                  >
                    + Learn More
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Hiring Process?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let our expert team help you find the perfect talent for your organization. 
              Contact us today to discuss your staffing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="professional" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;