import { useParams, Link } from '@tanstack/react-router';
import { celestialBodies } from '@/data/celestial-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CelestialBodyPage = () => {
  const { bodyId } = useParams({ from: '/celestial/$bodyId' });
  const body = celestialBodies.find(b => b.id === bodyId);

  if (!body) {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">Celestial Body Not Found</h1>
        <p className="text-gray-400 mt-4">The cosmic entity you're looking for has ventured beyond our reach.</p>
        <Link to="/">
          <Button variant="link" className="mt-4 text-purple-400">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to={`/${body.type.toLowerCase()}s`}>
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to {body.type}s
        </Button>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <img src={body.image} alt={body.name} className="rounded-lg w-full h-auto object-cover shadow-2xl shadow-purple-500/20" />
        </div>
        <div className="lg:col-span-2">
          <Card className="bg-gray-800/50 border-purple-500/20 h-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-4xl font-bold text-white">{body.name}</CardTitle>
                  <CardDescription className="text-gray-400 text-lg mt-1">{body.distance}</CardDescription>
                </div>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">{body.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">{body.description}</p>
              <h3 className="text-2xl font-semibold text-white mb-4">Key Facts</h3>
              <ul className="space-y-3">
                {body.facts.map((fact, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CelestialBodyPage;