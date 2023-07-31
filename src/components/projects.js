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
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/150",
      repo: "https://github.com/yourusername/portfolio",
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/150",
      repo: "https://github.com/yourusername/project2",
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/150",
      repo: "https://github.com/yourusername/project3",
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