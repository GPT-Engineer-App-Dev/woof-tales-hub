import { useState } from 'react';
import { Dog } from 'lucide-react';

const dogBreeds = [
  { name: 'Labrador Retriever', description: 'Friendly and outgoing' },
  { name: 'German Shepherd', description: 'Intelligent and versatile' },
  { name: 'Golden Retriever', description: 'Gentle and affectionate' },
  { name: 'Bulldog', description: 'Calm and courageous' },
  { name: 'Beagle', description: 'Merry and curious' },
];

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 flex items-center">
        <Dog className="mr-2" /> All About Dogs
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Dog Facts</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Dogs have an exceptional sense of smell, up to 100,000 times stronger than humans.</li>
            <li>The average lifespan of a dog is between 10-13 years.</li>
            <li>Dogs can understand up to 250 words and gestures.</li>
            <li>A dog's nose print is unique, much like a human's fingerprint.</li>
            <li>The Greyhound is the fastest dog breed, reaching speeds up to 45 mph.</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Popular Dog Breeds</h2>
          <ul className="space-y-2">
            {dogBreeds.map((breed) => (
              <li 
                key={breed.name} 
                className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                onClick={() => setSelectedBreed(breed)}
              >
                {breed.name}
              </li>
            ))}
          </ul>
          {selectedBreed && (
            <div className="mt-4 p-4 bg-blue-100 rounded">
              <h3 className="font-semibold">{selectedBreed.name}</h3>
              <p>{selectedBreed.description}</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8">
        <img 
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
          alt="Cute dog" 
          className="mx-auto object-cover w-full md:w-2/3 h-64 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Index;
