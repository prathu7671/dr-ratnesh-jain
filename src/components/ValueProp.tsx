
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ValueProp = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="section-title">Why Collaborate with Dr. Jain?</h2>
      <p className="text-gray-600 text-lg mb-8">
        Dr. Ratnesh Jain brings a unique blend of expertise in biopharma innovation, strategic consulting, and entrepreneurial leadership. 
        With a proven track record of transforming research into scalable solutions, he offers unparalleled insights and value to 
        industry stakeholders, government agencies, and academia. His visionary approach and commitment to excellence make him an 
        ideal partner for driving impactful collaborations and achieving commercial success.
      </p>
      <Button size="lg">
        Book a Consultation <ArrowRight className="ml-2" size={16} />
      </Button>
    </div>
  );
};

export default ValueProp;
