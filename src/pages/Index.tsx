import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { categories, celestialBodies } from "@/data/celestial-data";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Index = () => {
  const featuredBodies = celestialBodies.slice(0, 3);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4 animate-fade-in-down" style={{ animationFillMode: 'forwards' }}>
          Welcome to Ashim's Cosmos
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
          Embark on a journey through the stars. Explore distant galaxies, marvel at brilliant stars, and discover the secrets of mysterious planets.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '0.4s' }}>
          <Link to="/planets">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold">
              Start Exploring <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10 hover:text-purple-300">
              About Ashim
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12">Discover the Universe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link to={category.path} key={category.name}>
              <Card className="bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 group">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <category.icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Explore the fascinating {category.name.toLowerCase()} of our cosmos.</p>
                  <div className="flex items-center text-purple-400 font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    View {category.name} <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Celestial Bodies Section */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12">Featured Discoveries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBodies.map(body => (
            <Link to="/celestial/$bodyId" params={{ bodyId: body.id }} key={body.id}>
              <Card className="bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <img src={body.image} alt={body.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">{body.name}</CardTitle>
                  <CardDescription className="text-gray-400">{body.distance}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{body.description.substring(0, 100)}...</p>
                  <div className="flex items-center text-purple-400 font-semibold">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;