import { useState } from "react";
import Button from "react-bootstrap/Button";
import "../scss/HomeFeatures.scss";
import slide1 from "../assets/illustration-features-tab-1.svg";
import slide2 from "../assets/illustration-features-tab-2.svg";
import slide3 from "../assets/illustration-features-tab-3.svg";

function HomeFeatures() {
  const content = [
    {
      image: slide1,
      title: "Simple Bookmarking",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe porro hic voluptatem perferendis! Repudiandae, minus iusto debitis rem est doloribus ab, quaerat minima vel ipsum, expedita dicta! Deleniti, eum.",
    },
    {
      image: slide2,
      title: "Speedy Searching",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe porro hic voluptatem perferendis! Repudiandae, minus iusto debitis rem est doloribus ab.",
    },
    {
      image: slide3,
      title: "Easy Sharing",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe porro hic voluptatem perferendis! Repudiandae, minus iusto debitis rem est doloribus ab, quaerat minima vel ipsum, expedita dicta!",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <section className="home-features-container">
      <div className="features-content">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <section className="slider">
        <div className="slider-container">
          <div className="slider-buttons">
            {content.map((slide, index) => (
              <button
                key={index}
                className={`slider-buttons__btn ${
                  activeTab === index ? "active" : ""
                }`}
                onClick={() => handleTabChange(index)}
              >
                {slide.title}
              </button>
            ))}
          </div>
          <div className="slider-content">
            <div className="slide">
              <div className="slide-image">
                <img
                  src={content[activeTab].image}
                  alt="screen picture"
                  className="slide-image-img"
                />
              </div>
              <div className="slide-block"></div>
              <div className="slide-content">
                <h2>{content[activeTab].title}</h2>
                <p>{content[activeTab].text}</p>

                <Button className="slide-button" variant="primary">
                  More Info
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default HomeFeatures;
