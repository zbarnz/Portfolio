import ProjectPage from "../../components/ProjectPage";
import coinOne from "../../public/images/socoin/socoin1.png";
import coinTwo from "../../public/images/socoin/socoin2.jpg";
import coinThree from "../../public/images/socoin/socoin3.jpg";

export default function snake() {
  return (
    <ProjectPage
      img1={coinOne}
      img2={coinTwo}
      img3={coinThree}
      cap1="SocNet"
      cap2="Coin"
      cap3="Code"
      name="SoCoin"
      author="Zach Barnes"
      tech="Crypto.js, Elliptic, Javascript"
      git="https://github.com/zbarnz/SoCoin"
      live="#"
      isLive={false}
      desc="SoCoin is a showcase of blockchain technology
       in the form of a crypto currency. This example includes
       steps such as signing transactions with private and public
       keys, proof-of-work, and mining rewards to incentivize mining blocks."
    />
  );
}
