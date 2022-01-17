import { Astro } from "./astro";
import { Day } from "./day";
import { Hour } from "./hour";

export interface Forecastday {
    date: string
    date_epoch: number
    day: Day
    astro: Astro
    hour: Hour[]
  }