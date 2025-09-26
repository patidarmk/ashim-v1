import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, User, Telescope } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">About Ashim's Cosmos</h1>
      <p className="text-lg text-gray-300 text-center mb-12">
        A digital odyssey dedicated to the wonders of our universe, curated by Ashim, a passionate space explorer. Our mission is to bring the cosmos closer to you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <Card className="bg-gray-800/50 border-purple-500/20">
          <CardHeader>
            <div className="mx-auto bg-purple-500/20 rounded-full h-16 w-16 flex items-center justify-center">
              <Rocket className="h-8 w-8 text-purple-400" />
            </div>
            <CardTitle className="mt-4 text-2xl font-bold text-white">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">To inspire curiosity and wonder about the universe by providing accessible and engaging information about celestial objects.</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800/50 border-indigo-500/20">
          <CardHeader>
            <div className="mx-auto bg-indigo-500/20 rounded-full h-16 w-16 flex items-center justify-center">
              <User className="h-8 w-8 text-indigo-400" />
            </div>
            <CardTitle className="mt-4 text-2xl font-bold text-white">About Ashim</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">Ashim is an amateur astronomer and lifelong learner with a deep passion for space exploration and sharing the beauty of the cosmos.</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800/50 border-teal-500/20">
          <CardHeader>
            <div className="mx-auto bg-teal-500/20 rounded-full h-16 w-16 flex items-center justify-center">
              <Telescope className="h-8 w-8 text-teal-400" />
            </div>
            <CardTitle className="mt-4 text-2xl font-bold text-white">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">To be a trusted resource for space enthusiasts of all ages, fostering a community that shares a passion for the final frontier.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;