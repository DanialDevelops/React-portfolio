import React from "react";

const style = {
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    flex: "1 1 300px",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  repoLink: {
    display: "block",
    textAlign: "center",
    textDecoration: "none",
    color: "#007BFF",
    fontWeight: "bold",
  },
};

function Project({ selectedNavTitles }) {
  const projectData = [
    {
      name: "movie-review",
      description:
        "This is a simple movie review app that allows users to add movies and review them. It also allows users to view other users' reviews and ratings",
      image: require("../images/spoiled.png"),
      repo: "https://github.com/DanialDevelops/movie-review",
    },
    {
      name: "Flavor fusion",
      description:
        "Introducing Flavor Fusion, your go-to recipe website for satisfying your cravings and making the most of your ingredients! With our innovative search feature, you can find delicious recipes tailored to your specific cravings or based on the ingredients you have on hand. From savory to sweet, breakfast to dinner, we have a vast collection of recipes to suit every taste bud.",
        image: require("../images/food.png"),
      repo: "https://github.com/AndreBesner/group-project-1-flavour-fusion",
    },
    {
      name: "E-commerce-backend",
      description:
        "In this project I worked on making a program with SQL and Node.js to create a simple E commerce backend which also uses sequelize",
      image: require("../images/Screenshot_8.png"),
      repo: "https://github.com/DanialDevelops/E-commerce-backend",
    },
    {
      name: "Fit Folio",
      description:
        "In this project I worked on making a fitness tracking app using mern stack and graphql",
      image: require("../images/fitfolio.png"),
      repo: "https://github.com/DanialDevelops/Fit-Folio",
    },
  ];

  return (
    <main>
      <h2>Portfolio</h2>
      <div style={style.flexContainer}>
        {projectData.map((project, pos) => (
          <div key={pos} style={style.card}>
            <h3>{project.name}</h3>
            <img src={project.image} alt="placeholder" style={style.image} />
            <p>{project.description}</p>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              style={style.repoLink}
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Project;