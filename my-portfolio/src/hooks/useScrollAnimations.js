import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTrigger plugin ko activate karna
gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  useEffect(() => {
    // 1. Accessibility Check: Agar user ne reduced motion on kiya hai toh animation mat chalao
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // 2. gsap.context React 19 mein safe cleanup aur zero memory leaks ensure karta hai
    const ctx = gsap.context(() => {
      // A. Hero Section Entrance Animation (Page khulte hi)
      gsap.fromTo(
        "#home h1, #home p, #home a",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
        }
      );

      // B. Har Section ki Heading ka Scroll Reveal (#about, #skills, #projects, #contact)
      const sectionIds = ["#about", "#skills", "#projects", "#contact"];

      sectionIds.forEach((id) => {
        const headingElements = document.querySelectorAll(`${id} h2`);
        if (headingElements.length > 0) {
          gsap.fromTo(
            headingElements,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: id,
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // C. About Section Cards Stagger Reveal
      gsap.fromTo(
        "#about .group",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: "#about",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // D. Skills Section Cards Stagger Reveal
      gsap.fromTo(
        "#skills .group",
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: "#skills",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      // E. Projects Showcase Cards Stagger Reveal
      gsap.fromTo(
        "#projects article",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      // F. Contact Section Cards Reveal
      gsap.fromTo(
        "#contact .contact-animate",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Cleanup: Component unmount hone par saare ScrollTriggers hata do
    return () => ctx.revert();
  }, []);
}