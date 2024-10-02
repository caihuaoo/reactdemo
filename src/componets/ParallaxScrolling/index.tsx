import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./index.module.less";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Scroll() {
  const main = useRef<HTMLDivElement>();
  let getRatio = (el) => {
    return window.innerHeight / (window.innerHeight + el.offsetHeight);
  };
  useGSAP(
    () => {
      gsap.utils.toArray("section").forEach((section, i) => {
        section.bg = section.querySelector(".bg");

        // Give the backgrounds some random images
        section.bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

        // the first image (i === 0) should be handled differently because it should start at the very top.
        // use function-based values in order to keep things responsive

        const container = document.body.querySelector("#scrollContainer");

        const { offsetHeight } = container || {};

        console.log(offsetHeight, "offsetHeight");

        gsap.fromTo(
          section.bg,
          {
            backgroundPositionY: `-${offsetHeight / 2}px`,
          },
          {
            backgroundPositionY: `${offsetHeight / 2}px`,
            ease: "none",
            scrollTrigger: {
              trigger: section.bg,
              // start: () => (i ? "top bottom" : "top top"),
              // end: "bottom top",
              scrub: true,
              // invalidateOnRefresh: true, // to make it responsive
              scroller: document.body.querySelector("#scrollContainer"), // to use a different scroller
            },
          }
        );
      });
    },
    { scope: main }
  );

  return (
    <div id="scrollContainer" className={styles.container} ref={main}>
      <section>
        <div className={`${styles.bg} bg`}></div>
        <h1>Simple parallax sections</h1>
      </section>
      <section>
        <div className={`${styles.bg} bg`}></div>
        <h1>Hey look, a title</h1>
      </section>
      <section>
        <div className={`${styles.bg} bg`}></div>
        <h1>They just keep coming</h1>
      </section>
      <section>
        <div className={`${styles.bg} bg`}></div>
        <h1>So smooth though</h1>
      </section>
      <section>
        <div className={`${styles.bg} bg`}></div>
        <h1>Nice, right?</h1>
      </section>
    </div>
  );
}
