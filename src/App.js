import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList/CardList';

// toast
import { Toaster } from 'react-hot-toast';


function App() {

  const games = [
    {
      title: "EA FC 26",
      genre: "Sports",
      price: 70,
      rating: 9.3,
      status: "Online",
      description: "The next chapter of football gaming with hyper-realistic gameplay.",
      image: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
    },
    {
      title: "Minecraft",
      genre: "Adventure",
      price: 40,
      rating: 8.8,
      status: "Offline",
      description: "Explore, build, and survive in a world of endless possibilities.",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"
    },
    {
      title: "GTA V",
      genre: "Action",
      price: 60,
      rating: 9.7,
      status: "Online",
      isTopRated: true,
      description: "Experience the ultimate open-world action adventure.",
      image: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
    },
    {
      title: "Red Dead Redemption 2",
      genre: "Action",
      price: 50,
      rating: 9.2,
      status: "Offline",
      description: "Live life as an outlaw in the wild American frontier.",
      image: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
    },
    {
      title: "God of War",
      genre: "Action",
      price: 45,
      rating: 9.5,
      status: "Online",
      isTopRated: true,
      description: "A bold new beginning in the Norse realm.",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"
    },
    {
      title: "Zelda: Breath of the Wild",
      genre: "Adventure",
      price: 55,
      rating: 9.1,
      status: "Offline",
      description: "An epic adventure across a vast and stunning kingdom.",
      image: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
    }
  ];

  return (
    <div className="App">
      <div>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </div>
      <CardList games={games} />
    </div>
  );
}

export default App;
