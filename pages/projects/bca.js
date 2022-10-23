import ProjectPage from "../../components/ProjectPage";
import bcaOne from "../../public/images/bca/bca1.png";
import bcaTwo from "../../public/images/bca/bca2.png";
import bcaThree from "../../public/images/bca/bca3.png";

export default function snake() {
  return (
    <ProjectPage
      img1={bcaThree}
      img2={bcaOne}
      img3={bcaTwo}
      cap1="Home"
      cap2="Events"
      cap3="Timeline"
      name="Bentley Consulting Association"
      author="Zach Barnes, Tom Hudson"
      tech="Next.js, React, Javascript, HTML, CSS"
      git="https://github.com/thudsonbu/bca"
      live="https://bentleyconsultingassociation.vercel.app/"
      isLive={true}
      desc="The Bentley Consulting Association is the premiere
       consulting organization on the Bentley University Campus.
        The organization has created a community that works together
         to achieve their goals in the consulting space, including
          generating awareness about consulting, and finding internships
           and full-time positions. Launched in 2019, BCA has undergone
            a number of transformations. The recently re-branded
             organization has grown exponentially, created a Bootcamp program,
              hosted case competitions, and engaged in numerous probono
               consulting projects with real world clients. If you are
                interested in consulting, learning about the field or
                 preparing for a career, the Bentley Consulting Association
                  is the organization for you!"
    />
  );
}