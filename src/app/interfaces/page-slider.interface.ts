export interface ISlide {
  title: string;
  backgroundImage: string;
  description?: string;
  cards?: ICard[];
}

export interface ICard {
  title: string;
  text: string;
}
