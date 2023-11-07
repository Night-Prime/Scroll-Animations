import { useRef, useLayoutEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

function App() {
  const app = useRef();

  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.defaults({
      duration: 2,
      // repeatDelay: 0.5,
      // repeatRefresh: true,
      autoAlpha: 1,
    });
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".box h1",
          {
            opacity: 0,
            y: -200,
          },
          {
            opacity: 1,
            y: 0,
            stagger: "each",
          }
        )
        .to(".first h1", {
          scrollTrigger: {
            trigger: ".first",
            start: "top center",
            end: "=+1200",
            markers: true,
            scrub: true,
          },
          ease: "power1",
          scale: 10,
        })
        .to(".second h1", {
          scrollTrigger: {
            trigger: ".second",
            start: "top center",
            end: "bottom bottom",
            markers: true,
            scrub: true,
          },
          ease: "power1",
          rotate: 360,
          scale: 10,
        })
        .fromTo(
          ".third h1",
          {
            scrollTrigger: {
              trigger: ".third",
              start: "top center",
              end: "=+900",
              markers: true,
              scrub: true,
            },
            ease: "elastic",
            yoyo: true,
            y: 0,
          },
          {
            ease: "power1",
            yoyo: true,
            scale: 10,
            y: "+=600",
            repeat: Infinity,
          }
        )
        .fromTo(
          ".fourth h1",
          {
            scrollTrigger: {
              trigger: ".third",
              start: "top center",
              end: "=+900",
              markers: true,
              scrub: true,
            },
            x: "-=3200",
            duration: " <.8",
          },
          {
            x: 0,
            repeat: Infinity,
            ease: "back",
          }
        )
        .fromTo(
          ".fifth h1",
          {
            scrollTrigger: {
              trigger: ".third",
              start: "top center",
              end: "=+900",
              markers: true,
              scrub: true,
            },
            y: "-=2000",
            duration: "<.1",
          },
          {
            y: 0,
            ease: "back",
            repeat: Infinity,
          }
        );
    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <div className="App" ref={app}>
      <div className="app-container">
        <div className="box">
          <div className="text">
            <h1>Dhaniel</h1>
          </div>
        </div>
        <div className="box first">
          <div className="text">
            <h1>Adeola</h1>
          </div>
        </div>
        <div className="box second">
          <div className="text">
            <h1>Ronke</h1>
          </div>
        </div>
        <div className="box third">
          <div className="text">
            <h1>Adejoke</h1>
          </div>
        </div>
        <div className="box fourth">
          <div className="text">
            <h1>Mofe</h1>
          </div>
        </div>
        <div className="box fifth">
          <div className="text">
            <h1>Joshua</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
