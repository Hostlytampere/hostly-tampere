import { fi } from "./fi";

export type { Content } from "./fi";

/**
 * Yksi paikka josta koko sivuston copy tulee.
 * Kun englanti lisätään: `export const t = locale === "en" ? en : fi;`
 */
export const t = fi;
