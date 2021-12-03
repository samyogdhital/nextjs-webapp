import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.topnav}>
          <a className={styles.active} href="#home">
            Home
          </a>
          <div className={styles.nav_right}>
            <a href="#news">About</a>
            <a href="#contact">Projects</a>
            <a href="#about">Skills</a>
            <a href="#about">Tools</a>
            <a href="#about">Contact</a>
            <div className="icon"></div>
          </div>
        </div>
      </header>
    </div>
  );
}
