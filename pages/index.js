import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <header>
        <div className={styles.container}>
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
            <h1 className={styles.intro}>Samyog Dhital</h1>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.img}></div>
      </main>
    </>
  );
}
