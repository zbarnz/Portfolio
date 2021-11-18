import ProjectPage from "../../components/ProjectPage";
import agendaOne from "../../public/images/agenda/agenda1.png";
import agendaTwo from "../../public/images/agenda/agenda2.png";
import agendaThree from "../../public/images/agenda/agenda3.png";

export default function agenda() {
  return (
    <ProjectPage
      img1={agendaThree}
      img2={agendaTwo}
      img3={agendaOne}
      cap1="Home"
      cap2="Meeting Form"
      cap3="Login"
      name="Agenda"
      author="Zach Barnes, Tom Hudson, David Oligney"
      tech="Next.js/React, Docker, Express, Axios, Mocha, Mongoose, MongoDB, Docker"
      git="https://github.com/SocexSolutions/agenda-v2"
      live="#"
      isLive={false}
      desc="Agenda is an application made to streamline corporate meetings.
       Using an email-like interface, users can create meetings, vote on meeting
       topics, and participate in discussion without all of the unnecessary
       bloat that office meetings are typically associated with."
    />
  );
}
