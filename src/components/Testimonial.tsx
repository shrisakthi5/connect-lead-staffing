import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <span className="text-primary text-sm font-medium">Client Testimonial</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonial Card */}
          <Card className="relative overflow-hidden border-0 shadow-elegant">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  "LeadConnect Consultancy Services brings a wealth of knowledge and experience to our recruitment needs. 
                  They have developed strong relationships with both our team and candidates, and continually improve both 
                  the service and value for money through their flexible approach."
                </blockquote>

                {/* Author */}
                <div className="pt-6 border-t border-border w-full max-w-md">
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Hiring Manager</p>
                    <p className="text-sm text-muted-foreground">Leading Enterprise Client</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Successful Placements</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;