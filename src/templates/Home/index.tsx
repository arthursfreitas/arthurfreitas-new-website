import Head from "next/head";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { BurgerMenu } from "../../components/BurgerMenu";
import { Link as ScrollLink, Element } from "react-scroll";
import { FiArrowUpCircle } from "react-icons/fi";
import { useEffect, useState } from "react";

export function Home() {
  const [translate, setTranslate] = useState("translateX(3em)");

  useEffect(() => {
    const checkScrollToTop = () => {
      if (window.pageYOffset > 850) {
        setTranslate("translateX(0em)");
      } else if (window.pageYOffset <= 850) {
        setTranslate("translateX(3em)");
      }
    };
    window.addEventListener("scroll", checkScrollToTop);
  });

  return (
    <main className={styles.contentWrapper}>
      <Head>
        <title>Arthur Freitas | FullStack Developer</title>
        <meta name="description" content="Arthur Freitas | Developer | Node.js | TypeScript | Nest.js | React.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className={styles.menu}></div>
        <BurgerMenu />
      </header>
      <Element name="home">
        <section id="home" className={styles.home}>
          <div>
            <p>Hello! 👋</p>
            <h1>I am Arthur Freitas</h1>
            <h1>Develop, that&apos;s what i do.</h1>
            <div>
              <p>Full Stack Developer who lives in Brazil</p>
              <p>I am hungry for knowledge and challenges are not a problem.</p>
            </div>
            <ScrollLink to="portfolio" className={styles.buttonLink}>
              Portfolio
            </ScrollLink>
          </div>
        </section>
      </Element>
      <Element name="about">
        <section id="about" className={styles.about}>
          <div>
            <h2 className={styles.title}>About</h2>
            <div>
              <p>
                My name is Arthur Freitas, I&apos;m from Brazil and I&apos;m 23
                years old. I describe myself as a person who loves programming.
                In addition to my work, I enjoy creating and contributing to
                open source projects and building new projects. It helps me to
                learn a lot of new things. I started programming around 15 years
                old, when I attended a computer technician. I started as a
                Fullstack developer around 2018. Since then, I have been
                dedicated every day to studying. I really like helping people
                who are just starting out. In my spare time, I usually watch
                videos about programming and listen to technology podcasts. I
                work as a backend developer using technologies like
                <Link href="https://nestjs.com/">
                  <a target="_blank"> <strong>Nest.js</strong>, </a>
                </Link>
                <Link href="https://nodejs.org/en/">
                  <a target="_blank"><strong>Node.js</strong>, </a>
                </Link>
                <Link href="https://www.typescriptlang.org/">
                  <a target="_blank"><strong>TypeScript</strong> </a>
                </Link>
                and more.
              </p>
            </div>
          </div>
        </section>
      </Element>
      <Element name="portfolio">
        <section id="portfolio" className={styles.portfolio}>
          <div>
            <h2 className={styles.title}>Portfolio</h2>
            <div className={styles.portfolioWrapper}>
              <div>
                <h3>Instituto Líbano</h3>
                <Image
                  src="/instituto-libano.jpg"
                  alt="Instituto Líbano"
                  width={1280 / 2}
                  height={720 / 2}
                />
              </div>
              <div>
                <h3>Madri Desentupidora</h3>
                <Image
                  src="/madri-desentupidora.jpg"
                  alt="Madri Desentupidora"
                  width={1280 / 2}
                  height={720 / 2}
                />
              </div>
              <div>
                <h3>Gracê Doceria</h3>
                <Image
                  src="/grace-doceria.jpg"
                  alt="Gracê Doceria"
                  width={1280 / 2}
                  height={720 / 2}
                />
              </div>
              <div>
                <h3>Padel Sports Center</h3>
                <Image
                  src="/padel-sports-center.jpg"
                  alt="Padel Sports Center"
                  width={1280 / 2}
                  height={720 / 2}
                />
              </div>
              <div>
                <h3>Proseg Lacres</h3>
                <Image
                  src="/proseg-lacres.jpg"
                  alt="Proseg Lacres"
                  width={1280 / 2}
                  height={720 / 2}
                />
              </div>
              <div>
                <h3>Financeira Atrative</h3>
                <Image
                  src="/financeira-atrative.jpg"
                  alt="Financeira Atrative"
                  width={1280 / 2}
                  height={720 / 2}
                />
              </div>
            </div>
          </div>
        </section>
      </Element>
      <Element name="contact">
        <section id="contact" className={styles.contact}>
          <div>
            <h2 className={styles.title}>Contact</h2>
            <div>
              <p>
                If you liked my profile or want to carry out a project or just
                chat with me, don&apos;t hesitate to send me an email:
                <Link href="mailto:arthurssfreitas@gmail.com">
                  <a className={styles.mailLink}> <strong>arthurssfreitas@gmail.com </strong></a>
                </Link>
              </p>
            </div>
            <Link href="https://linktr.ee/arthursfreitas">
              <a target="_blank" className={styles.buttonLink}>
                Talk to me
              </a>
            </Link>
          </div>
        </section>
      </Element>
      <footer>
        <div className={styles.footer}>
          <ul>
            <li>
              <ScrollLink to="about">About</ScrollLink>
            </li>
            <li>
              <ScrollLink to="portfolio">Portfolio</ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact">Contact</ScrollLink>
            </li>
          </ul>
          <p>© 2021 - Arthur Freitas</p>
        </div>
      </footer>
      <button
        id="toTop"
        style={{ transform: translate }}
        className={styles.toTop}
      >
        <ScrollLink to="home">
          <FiArrowUpCircle />
        </ScrollLink>
      </button>
    </main>
  );
}
