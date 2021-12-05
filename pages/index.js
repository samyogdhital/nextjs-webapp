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
            <h3 className={styles.subintro}>Coder</h3>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.img}></div>
        <section className={styles.me}>
          <img src="../images/IMG_5026.jpg" alt="" srcset="" />
          <h2>
            Hello! I'm Samyog Dhital, A Full Stack Developer From Kathmandu,
            Nepal.
          </h2>
          <div>
            Feel free to connect with me! Let's talk about web dev, tech,
            sports, photography, video games, cooking, or how I can be of help
            to your team or business! I'd love to get to know more developers
            and expand my network. I also know a thing or two about beer.
          </div>
        </section>
      </main>
    </>
  );
}
