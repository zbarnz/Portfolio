import styles from "../styles/SocialBar.module.css";
import IconCircle from "./IconCircle";
import Link from "next/link";

import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const SocialBar = () => {
  return (
    <div className={styles.socialBar}>
      <div className={styles.contactContainer}>
        <div className={styles.entryContainer}>
          <IconCircle
            href="mailto:zbarnz@yahoo.com"
            icon={<EmailIcon />}
          />
          <div>
            <h1>Email:</h1>
            <Link href="mailto:zbarnz@yahoo.com">
              <a className={styles.linkUnderline}>zbarnz@yahoo.com</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.socialMediaContainer}>
        <div className={styles.entryContainer2}>
          <IconCircle
            href="https://www.linkedin.com/in/zach-barnes-92436614b/"
            icon={<LinkedInIcon />}
          />
        </div>
        <div className={styles.entryContainer2}>
          <IconCircle
            icon={<GitHubIcon />}
            href="https://github.com/zbarnz"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialBar;