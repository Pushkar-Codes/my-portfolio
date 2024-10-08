import { gsap } from "gsap";

// animatePageIn function
export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");
  const mainContent = document.getElementById("main-content");

  if (bannerOne && bannerTwo && bannerThree && bannerFour && mainContent) {
    const t1 = gsap.timeline();

    t1.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0, // Initial position
    })
      .to([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: -100, // Slide up out of the viewport
        stagger: 0.2, // Delay between each banner
        duration: 1, // Speed of the animation
        ease: "power4.out", // Smooth easing
      })
      .to(
        mainContent,
        {
          opacity: 1, // Fade in main content after banners move away
          duration: 0.1, // Duration of fade-in
          ease: "power2.inOut", // Smooth easing for fade-in
          onComplete: () => {
            mainContent.style.display = "block"; // Ensure it becomes visible
          },
        },
        "-=0.3" // Start fading in content 0.3 seconds before banners finish
      );
  }
};
