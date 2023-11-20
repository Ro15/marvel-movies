const App = () => {
  const categories = [
    {
      id: 1,
      title: "Avengers",
    },
    {
      id: 2,
      title: "Attack on Titans",
    },
    {
      id: 3,
      title: "DC herons",
    },
    {
      id: 4,
      title: "Real Characters",
    },
    {
      id: 5,
      title: "Intlo Heros",
    },
  ];
  return (
    <div className="categories-containers">
      {categories.map(({ title,id }) => (
        <div key={id}className="category-container">
          {/* <img/>> */}
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Who Are You?</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
