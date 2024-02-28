import { HeroContent, heroContentVariants } from "./HeroContent";
import { HeroMedia, heroMediaVariants } from "./HeroMedia";
import { HeroRoot, heroRootVariants } from "./HeroRoot";

const compoundHero = {
  Root: HeroRoot,
  Content: HeroContent,
  Media: HeroMedia,
};

const heroVariants = {
  heroRootVariants,
  heroContentVariants,
  heroMediaVariants,
};

export { compoundHero as Hero };
export { heroVariants };
