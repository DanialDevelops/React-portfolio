import React from "react";

const style = {
  // Your existing styles for the About component
};

function About({ selectedNavTitles }) {
  const aboutData = {
    name: "Danial Choudhry",
    description:
      "Hi my name is Danial I am a full stack developer. I have a passion for learning and creating new things. I am a hard worker and I am always looking for new challenges, I hope to further my knowledge and skills in the field of web development and one day find a career in this field. I am currently enrolled in the University of Toronto's Full Stack Web Development Bootcamp working on honing in my skills and becoming a better programmer. apart from programming I love to play basketball and watch movies in my free time and also playing video games with my friends.",
  };

  const showAbout =
    selectedNavTitles.length === 0 ||
    selectedNavTitles.some(
      (selectedTitle) => selectedTitle.title === "About Me"
    );

  return (
    <main>
      {showAbout && (
        <div style={style.flexContainer}>
          <div style={style.card}>
            <h2>About Me</h2>
            <h3>{aboutData.name}</h3>
            <p>{aboutData.description}</p>
            {/* Add more content here */}
          </div>
        </div>
      )}
    </main>
  );
}

export default About;