import imgTop from "../../assets/top-img2.png";
import Accordion from "../../components/Accordion/index";
import accordionData from "../../data/accordionData";

function About() {
  return (
    <section className="about">
      <div className="top">
        <img src={imgTop} alt="background" />
      </div>

      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} key={title} />
        ))}
      </div>
    </section>
  );
}

export default About;