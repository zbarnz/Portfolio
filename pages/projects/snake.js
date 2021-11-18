import ProjectPage from "../../components/ProjectPage";
import snakeOne from "../../public/images/snake/snake1.png";
import snakeTwo from "../../public/images/snake/snake2.png";
import snakeThree from "../../public/images/snake/snake3.png";

export default function snake() {
  return (
    <ProjectPage
      img1={snakeOne}
      img2={snakeTwo}
      img3={snakeThree}
      cap1="Home"
      cap2="Game Board"
      cap3="Artist's Rendition"
      name="Snake Online"
      author="Zach Barnes"
      tech="Socket.io, Javascript, HTML, CSS"
      git="https://github.com/zbarnz/Online-Snake"
      live="#"
      isLive={false}
      desc="Snake is the common name for a video
       game concept where the player maneuvers a
        line which grows in length, with the line
        itself being a primary obstacle. With two
       players, the concept is the same but each player
       must avoid the other. The last player standing
       wins. In this app, socket.io is used to keep track
       of each players movement in real time. Otherwise,
        vanilla javascript, HTML, and CSS are used for
         the frontend."
    />
  );
}