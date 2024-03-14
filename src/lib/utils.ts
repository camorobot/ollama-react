import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeConverter(datumTijdString: string | number | Date) {
  const nu = Date.now(); // Huidige tijd in milliseconden sinds de Unix Epoch
  const gegevenTijd = new Date(datumTijdString).getTime(); // Gegeven tijd in milliseconden sinds de Unix Epoch
  const verschilInMilliseconden = nu - gegevenTijd; // Verschil in milliseconden

  const millisecondenPerUur = 1000 * 60 * 60;
  const millisecondenPerDag = millisecondenPerUur * 24;

  const verschilInDagen = Math.floor(verschilInMilliseconden / millisecondenPerDag);
  const verschilInUren = Math.floor(verschilInMilliseconden / millisecondenPerUur);

  if (verschilInDagen > 0) {
    return verschilInDagen;
  } else {
    return verschilInUren;
  }
}

export function formatNumber(getal: number) {
  // Controleer of het getal door 1000 gedeeld kan worden zonder rest
  if (getal % 1000 === 0) {
    return `${getal / 1000}k`;
  } else {
    return getal.toString();
  }
}