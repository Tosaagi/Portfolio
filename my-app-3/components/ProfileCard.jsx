import { useState, useEffect } from "react";

const animals = [
  "Alligator", "Anteater", "Axolotl", "Badger", "Bat", "Beaver", "Buffalo",
  "Camel", "Capybara", "Chameleon", "Cheetah", "Chinchilla", "Chipmunk",
  "Chupacabra", "Cormorant", "Coyote", "Crow", "Dingo", "Dinosaur", "Dolphin",
  "Duck", "Elephant", "Ferret", "Fox", "Frog", "Giraffe", "Goose", "Hedgehog",
  "Hyena", "Iguana", "Kangaroo", "Koala", "Lemur", "Leopard", "Monkey", "Moose",
  "Narwhal", "Nyancat", "Orangutan", "Otter", "Panda", "Penguin", "Platypus",
  "Rabbit", "Raccoon", "Sheep", "Skunk", "Squirrel", "Tiger", "Turtle", "Walrus", "Wolf",
];

// Function to select a random animal
const getRandomAnimal = () => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
};

function ProfileCard() {
  const [animal, setAnimal] = useState(getRandomAnimal());
  const animalImageUrl = `https://ssl.gstatic.com/docs/common/profile/${animal.toLowerCase()}_lg.png`;

  return (
    <main className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-8">
      <div className="w-64 h-64 rounded-full border-4 border-mainaccent shadow-lg overflow-hidden flex items-center justify-center animate-fade-in-scale">
        <img src={animalImageUrl} alt={animal} className="scale-125" />
      </div>
      <div className="flex flex-col items-center sm:items-start font-baloo animate-fade-in-up">
        <h2 className="text-4xl font-bold">Hi, I'm Vitto!</h2>
        <p className="text-white text-2xl font-bold">Front end web developer</p>
        <p className="text-white">2+ Years</p>
        <p className="text-white text-center">Based in Indonesia. Uses React.js with Tailwind CSS</p>
      </div>
    </main>
  );
}

export default ProfileCard;
