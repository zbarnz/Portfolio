import styles from "../styles/SocialBar.module.css";
import EmailIcon from "@material-ui/icons/Email";
import IconCircle from "./IconCircle";
import Link from "next/link";

const SocialBar = () => {
  return (
    <div className={styles.socialBar}>
      <div className={styles.contactContainer}>
        <div className={styles.entryContainer}>
          <IconCircle icon={<EmailIcon />} />
          <div>
            <h1>Email:</h1>
            <Link href="www.google.com"><a className={styles.linkUnderline}>zachbarnes@socnet.org</a></Link>
          </div>
        </div>
      </div>
      <div className={styles.socialMediaContainer}></div>
    </div>
  );
};

export default SocialBar;