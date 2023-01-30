import Card from "./components/card";

const App = () => {

  const CARDS = [
    {
      cardTitle: 'White Traditional long dress',
      price: 3.99,
      rating: 4.6,
      images: "./images/dress.jpg",
    },
    {
      cardTitle: 'Long sleeve denim jacket',
      price: 4.99,
      rating: 4.8,
      images: "./images/denim.jpg",
    },
    {
      cardTitle: 'Hush Puppies',
      price: 2.99,
      rating: 4.2,
      images: "./images/flipflops.jpg",

    },
    {
      cardTitle: 'Athens skirt',
      price: 3.99,
      rating: 3.8,
      images: "./images/skirt.jpg",
    }
  ];

  return (
    <div className="shop-container">
      <Card cards={CARDS} />
    </div>
  )
};

export default App;

