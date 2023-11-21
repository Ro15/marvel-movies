import './componets/category-item/category-item.styles.scss';
import CategoryItem from "./componets/category-item/category-item.component";
import avengerImage from "./assets/avenger.jpg";
import TitanImage from "./assets/titan.jpg";
import dcImage from "./assets/dc.jpg";
import balayyaImage from "./assets/balayya.jpg";
import HerosImage from "./assets/Heros.jpg";
const App = () => {
  const categories = [
    {
      id: 1,
      title: "Avengers",
      imageUrl:avengerImage,
    },
    {
      id: 2,
      title: "Attack on Titans",
      imageUrl:TitanImage,
    },
    {
      id: 3,
      title: "DC herons",
      imageUrl:dcImage,
    },
    {
      id: 4,
      title: "Real Characters",
      imageUrl:balayyaImage,
    },
    {
      id: 5,
      title: "Intlo Heros",
      imageUrl:HerosImage,
    },
  ];
  return(
    <div className="categories-containers">
      {categories.map((category)=>(
        <CategoryItem key={category.id} category={category}/>
      
      ))}
    
    </div>
  );
};

export default App;
