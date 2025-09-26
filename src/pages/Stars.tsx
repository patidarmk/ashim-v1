import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { celestialBodies } from '@/data/celestial-data';
import { ArrowRight } from 'lucide-react';

const StarsPage = () => {
  const stars = celestialBodies.filter(body => body.type === 'Star');

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Discover the Stars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stars.map(star => (
          <Link to="/celestial/$bodyId" params={{ bodyId: star.id }} key={star.id}>
            <Card className="bg-gray-800/50 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <img src={star.image} alt={star.name} className="rounded-t-lg w-full h-48 object-cover" />
                <CardTitle className="mt-4 text-2xl font-bold text-white">{star.name}</CardTitle>
                <CardDescription className="text-gray-400">{star.distance}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{star.description.substring(0, 100)}...</p>
                <div className="flex items-center text-yellow-400 font-semibold">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StarsPage;