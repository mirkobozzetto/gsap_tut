import { gsap } from "gsap";

gsap.fromTo("#appear", { opacity: 0.1 }, { opacity: 1, duration: 2.5 });

gsap.fromTo(
  "#bold",
  { fontWeight: 100 },
  { opacity: 1, duration: 2.5, fontWeight: 900 }
);
