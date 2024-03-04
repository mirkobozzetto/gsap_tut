import { gsap } from "gsap";

import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

// ... le reste de votre code

gsap.fromTo("#appear", { opacity: 0.1 }, { opacity: 1, duration: 5 });

gsap.fromTo("#bold", { fontWeight: 100 }, { duration: 2.5, fontWeight: 900 });

gsap.fromTo("#txtmodify", { color: "#5653BF" }, { duration: 1, color: "pink" });

// gsap.fromTo("#txtmodify", {}, {});

// vanilla
let cards = document.getElementById("txtmodify");
cards.style.textDecoration = "line-through";
cards.style.backgroundColor = "rgba(79, 206, 81, 0.325)";

// Fonction pour animer en survol
const animateCardOnHover = (card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      duration: 0.5,
      backgroundImage: "linear-gradient(45deg, #F46861, #CFE8CD)",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      duration: 0.5,
      backgroundImage: "",
    });
  });
};

// Cibler toutes les div enfants directes de l'élément avec l'ID #cards
document.querySelectorAll("#cards > div").forEach(animateCardOnHover);
