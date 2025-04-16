
import Navigation from "@/components/Navigation";

const Research = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title mb-6">Research</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore Dr. Ratnesh Jain's groundbreaking research in biopharma, nanomedicine, and 3D bioprinting.
          </p>
        </div>
      </section>
      
      {/* Content will be added later */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl">Research page content coming soon.</p>
        </div>
      </section>
    </div>
  );
};

export default Research;
