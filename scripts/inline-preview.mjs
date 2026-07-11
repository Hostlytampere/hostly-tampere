/**
 * Tekee `out/index.html`:stä yhden itsenäisen HTML-tiedoston esikatselua varten.
 *
 * Miksi tämä on mahdollista: sivustolla ei ole yhtään client-komponenttia,
 * joten kaikki interaktiivisuus on inline-skripteissä. Kun Nextin oma
 * hydraatio-JS poistetaan, sivu toimii edelleen täysin — animaatiot, valikko
 * ja lomake mukaan lukien. Esikatselu on siis oikea build, ei erillinen demo.
 *
 * Aja:  npm run build && npm run preview:inline
 * Tulos: out/preview-inline.html
 */
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "out");

const MIME = {
  woff2: "font/woff2",
  woff: "font/woff",
  ttf: "font/ttf",
  png: "image/png",
  jpg: "image/jpeg",
  svg: "image/svg+xml",
};

/** Muuttaa CSS:n url(/polku) -viittaukset data-URI:ksi. */
async function inlineCssUrls(css) {
  const urls = [...css.matchAll(/url\((['"]?)(\/[^)'"]+)\1\)/g)];
  for (const [full, , path] of urls) {
    const ext = path.split(".").pop().toLowerCase();
    const mime = MIME[ext];
    if (!mime) continue;
    try {
      const buf = await readFile(join(outDir, path));
      css = css.replaceAll(full, `url(data:${mime};base64,${buf.toString("base64")})`);
    } catch {
      console.warn(`  ! ohitettiin ${path} (ei löydy)`);
    }
  }
  return css;
}

const html = await readFile(join(outDir, "index.html"), "utf8");

// 1. Kerää ja inlinaa tyylitiedostot
const cssHrefs = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)].map(
  (m) => m[1]
);
let css = "";
for (const href of cssHrefs) {
  css += await inlineCssUrls(await readFile(join(outDir, href), "utf8"));
}
console.log(`  · ${cssHrefs.length} tyylitiedostoa, ${(css.length / 1024).toFixed(0)} kt inlinattuna`);

// 2. Otsikko
const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "Hostly Tampere";

// 3. Bodyn sisältö
const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/)?.[1] ?? "";

// 4. Säilytä vain omat inline-skriptimme (ei Nextin hydraatiota / flight-dataa)
const keptScripts = [...body.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)]
  .map((m) => m[1])
  .filter((s) => !s.includes("self.__next_f") && s.trim().length > 0);

// 5. Riisu bodystä kaikki skriptit
const bodyClean = body.replace(/<script[\s\S]*?<\/script>/g, "");

const out = `<title>${title}</title>
<style>
${css}
</style>
<script>document.documentElement.classList.add("js")</script>
${bodyClean}
${keptScripts.map((s) => `<script>${s}</script>`).join("\n")}
`;

const target = join(outDir, "preview-inline.html");
await writeFile(target, out, "utf8");
console.log(`  · ${keptScripts.length} inline-skriptiä säilytetty`);
console.log(`✓ ${target} (${(out.length / 1024).toFixed(0)} kt)`);
