
import Navigation from "@/components/Navigation";

const SkillDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title mb-6">Skill Development</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Training programs and skill development initiatives led by Dr. Ratnesh Jain.
          </p>
        </div>
      </section>
      
      {/* Content will be added later */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl">Skill Development page content coming soon.</p>
        </div>
      </section>
    </div>
  );
};

export default SkillDevelopment;
