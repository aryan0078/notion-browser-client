import { colorAndGradients } from "../data/colorAndGradients";
import { jamesWebbTelescope } from "../data/jamesWebbTelescope";
import { japanesePrint } from "../data/japanesePrint";
import { metMuseum } from "../data/metMuseum";
import { nasaArchive } from "../data/nasaArchive";
import { patterns } from "../data/patterns";
import { rijskMuseum } from "../data/rijksMuseum";

const coverPhotosArchieve = [
  ...colorAndGradients,
  ...jamesWebbTelescope,
  ...japanesePrint,
  ...metMuseum,
  ...nasaArchive,
  ...patterns,
  ...rijskMuseum,
];

export const getRandomPhoto = (): string => {
  const randomIndex = Math.floor(Math.random() * coverPhotosArchieve.length);
  return coverPhotosArchieve[randomIndex];
};
