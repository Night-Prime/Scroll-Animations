import { useRef, useLayoutEffect } from "react";
import "./App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

/**
 * @summary Practicing how to use GSAP ScrollTrigger in Horizontal view
 * @returns Smooth Web Motion
 */

function App() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const pin = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          sectionRef.current,
          {
            translateX: 0,
          },
          {
            translateX: "-500vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.6,
              pin: true,
            },
          }
        )
        .to(".first h1", {
          scale: 10,
          ease: "bounce",
          scrollTrigger: {
            trigger: ".first",
            start: "left 0",
            end: "right 100",
            scrub: true,
            pin: true,
            // markers: true,
          },
        })
        .to(".second h1", {
          rotate: 360,
          scale: 5,
          ease: "linear",
          scrollTrigger: {
            trigger: ".second",
            start: "<10%",
            toggleActions: "play none none reset",
            scrub: true,
            pin: true,
            // markers: true,
          },
        })
        .from(".third h1", {
          y: -180,
          x: -300,
          opacity: 0,
          scale: 8,
          duration: 0.5,
          ease: "linear",
          scrollTrigger: {
            trigger: ".third",
            start: "<10%",
            scrub: true,
            pin: true,
            // markers: true,
          },
        })
        .to(".fourth h1", {
          y: "200",
          scale: 5,
          ease: "power2",
          scrollTrigger: {
            trigger: ".fourth",
            start: "center <0",
            scrub: true,
            pin: true,
            // markers: true,
          },
        })
        .to(".fifth h1", {
          y: "-200",
          x: "200",
          scale: 8,
          ease: "bounce",
          scrollTrigger: {
            trigger: ".fifth",
            start: "left <0",
            scrub: true,
            pin: true,
            // markers: true,
          },
        });
    });

    return () => {
      pin.revert();
    };
  }, []);

  return (
    <div className="App">
      <div ref={triggerRef}>
        <div className="app-container" ref={sectionRef}>
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
    </div>
  );
}

export default App;
