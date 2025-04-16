
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Dr. Jain's expertise has been invaluable in advancing our biopharma projects.",
    author: "Dr. Sarah Johnson",
    role: "Research Director",
    company: "Pharma Innovations"
  },
  {
    quote: "His strategic insights and innovative approach have significantly impacted our product development.",
    author: "Dr. Rajesh Kumar",
    role: "CEO",
    company: "BioGenome Labs"
  },
  {
    quote: "Working with Dr. Jain transformed our research capabilities and accelerated our time to market.",
    author: "Dr. Lisa Chen",
    role: "Head of R&D",
    company: "NextGen Biopharma"
  }
];

const partners = [
  "Cipla", "Abbott", "Reliance", "Sun Pharma", "Intas", "Zydus", "Mankind"
];

const FeaturedCollaborations = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
        {partners.map((partner, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-24">
            <span className="font-semibold text-gray-700">{partner}</span>
          </div>
        ))}
      </div>
      
      <Carousel className="w-full max-w-3xl mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                  <div className="text-sm">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default FeaturedCollaborations;
