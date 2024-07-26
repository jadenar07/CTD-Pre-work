import React from "react";
import ComicCarousel from "../../src/components/LogoCarousel/LogoCarousel";
import Card from "../../src/components/Card/Card";
import ep1 from "../../src/assets/ep1.jpeg";
import ep2 from "../../src/assets/ep2.png";
import ep3 from "../../src/assets/ep3.png";
import ep4 from "../../src/assets/ep4.png";
import ep5 from "../../src/assets/ep5.jpg";
import ep6 from "../../src/assets/ep6.png";

const Home = () => {
  return (
    <>
      <ComicCarousel />
      <div className="card-wrap">
        <Card
          image={ep1}
          caption="Fun fact: George Lucas wrote the Episode I script by hand with just pencil and notebook paper"
        />
        <Card
          image={ep2}
          caption="Fun Fact: Episode 2 had no physical clone trooper costumes used in the film"
        />
        <Card
          image={ep3}
          caption="Fun Fact: George Lucas deliberately made the Darth Vader suit top-heavy"
        />
        <Card
          image={ep4}
          caption="Fun Fact: George Lucas was so sure this movie would flop that instead of attending the premiere, he went on vacation"
        />
        <Card
          image={ep5}
          caption="Fun Fact: Lucas didn't want to write the screenplay himself, so he hired science fiction writer Leigh Brackett to shoulder the load"
        />
        <Card
          image={ep6}
          caption="Fun Fact: It took six people to work the full-sized animatronic of Jabba "
        />
      </div>
    </>
  );
};

export default Home;
