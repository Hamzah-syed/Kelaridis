import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IHomepage {
  strapiHomePage: {
    title: string;
    hero: IHero;
    numbersSection: INumbers[];
  };
}

export interface IHero {
  slug: string;
  header: string;
  image: {
    localFile: IGatsbyImageData;
  }[];
}
export interface INumbers {
  number: string;
  description: string;
}
