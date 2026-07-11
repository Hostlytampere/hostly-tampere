import type { CSSProperties } from "react";
import { t } from "@/content";
import { Eyebrow } from "./ui";

/**
 * Lomake ilman omaa backendiä (Web3Forms).
 *
 * Access key ei ole salaisuus — Web3Forms on suunniteltu niin että avain
 * on julkinen ja sidottu vastaanottavaan sähköpostiin. Se luetaan silti
 * ympäristömuuttujasta, jotta forkatussa repossa ei ole kenenkään osoitetta.
 *
 * TODO(lomake): luo avain osoitteessa https://web3forms.com ja lisää
 * .env.local -tiedostoon:  NEXT_PUBLIC_WEB3FORMS_KEY=xxxxxxxx-xxxx-...
 *
 * Lomake toimii myös ilman JS:ää (tavallinen POST + Web3Formsin kiitossivu).
 * JS:n kanssa lähetys tapahtuu taustalla ja onnistuminen näytetään paikan päällä.
 */
export function Contact() {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
  const f = t.contact.form;

  const fieldClass =
    "field w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.9375rem] text-ink placeholder:text-grey/55";
  const labelClass = "mb-2 block text-[0.8125rem] font-medium text-petrol-dark";

  return (
    <section id="yhteys" className="pb-20 md:pb-28">
      <div className="container-x">
        <div className="grid gap-12 rounded-[var(--radius-hero)] border border-line bg-cream-dark p-6 md:grid-cols-12 md:gap-10 md:p-12 lg:p-16">
          {/* Vasen: mitä tapahtuu kun lähetät */}
          <div className="md:col-span-5">
            <div data-stagger className="flex flex-col gap-5">
              <div data-reveal style={{ "--i": 0 } as CSSProperties}>
                <Eyebrow pulse>{t.contact.eyebrow}</Eyebrow>
              </div>
              <h2
                data-reveal
                style={{ "--i": 1 } as CSSProperties}
                className="text-[clamp(1.75rem,1.1rem+2.2vw,2.625rem)] leading-[1.12] text-petrol-dark"
              >
                {t.contact.heading}
              </h2>
              <p
                data-reveal
                style={{ "--i": 2 } as CSSProperties}
                className="max-w-md text-[1rem] leading-[1.7] text-grey"
              >
                {t.contact.lead}
              </p>

              <ol data-stagger className="mt-6 flex flex-col gap-5 border-t border-line pt-8">
                {t.contact.steps.map((step, i) => (
                  <li
                    key={step.title}
                    data-reveal
                    style={{ "--i": i } as CSSProperties}
                    className="flex gap-4"
                  >
                    <span className="font-display mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-petrol text-[0.6875rem] font-semibold text-cream">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[0.9375rem] font-medium text-petrol-dark">{step.title}</p>
                      <p className="mt-0.5 text-[0.875rem] leading-relaxed text-grey">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div
                data-reveal
                style={{ "--i": 3 } as CSSProperties}
                className="mt-4 flex flex-col gap-1.5 border-t border-line pt-6 text-[0.875rem]"
              >
                <a
                  href={`mailto:${t.site.email}`}
                  className="link-underline w-fit text-petrol transition-colors hover:text-terracotta-deep"
                >
                  {t.site.email}
                </a>
                <a
                  href={`tel:${t.site.phoneHref}`}
                  className="link-underline w-fit text-petrol transition-colors hover:text-terracotta-deep"
                >
                  {t.site.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Oikea: lomake */}
          <div className="md:col-span-6 md:col-start-7">
            <form
              id="contact-form"
              action="https://api.web3forms.com/submit"
              method="POST"
              data-sent="false"
              data-key-missing={accessKey ? undefined : "true"}
              data-fallback-email={t.site.email}
              className="relative rounded-[var(--radius-panel)] border border-line bg-white p-6 md:p-8"
            >
              <input type="hidden" name="access_key" value={accessKey} />
              <input
                type="hidden"
                name="subject"
                value="Uusi tuottoarviopyyntö — hostlytampere.fi"
              />
              <input type="hidden" name="from_name" value={t.site.name} />
              {/* Hunajapurkki: botit täyttävät, ihmiset eivät näe */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] size-0 opacity-0"
              />

              <div className="form-body flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="name">
                      {f.name.label}
                    </label>
                    <input
                      className={fieldClass}
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder={f.name.placeholder}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">
                      {f.email.label}
                    </label>
                    <input
                      className={fieldClass}
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder={f.email.placeholder}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      {f.phone.label}
                    </label>
                    <input
                      className={fieldClass}
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder={f.phone.placeholder}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="type">
                      {f.type.label}
                    </label>
                    <select className={`${fieldClass} appearance-none`} id="type" name="type" required defaultValue="">
                      <option value="" disabled>
                        Valitse
                      </option>
                      {f.type.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="area">
                    {f.area.label}
                  </label>
                  <input
                    className={fieldClass}
                    id="area"
                    name="area"
                    type="text"
                    required
                    placeholder={f.area.placeholder}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="message">
                    {f.message.label}
                  </label>
                  <textarea
                    className={`${fieldClass} min-h-28 resize-y`}
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={f.message.placeholder}
                  />
                </div>

                <button
                  id="submit-button"
                  type="submit"
                  className="group btn-sheen relative mt-1 inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-petrol-dark px-6 py-4 text-[0.9375rem] font-medium text-cream transition-colors duration-[400ms] hover:bg-petrol disabled:opacity-60"
                >
                  <span className="relative z-10" data-submit-label>
                    {f.submit}
                  </span>
                  <svg
                    className="btn-arrow relative z-10 size-4 text-terracotta-tint"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 8h11m0 0-4-4m4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <p className="text-center text-[0.75rem] leading-relaxed text-grey/80">
                  {f.consent}
                </p>
                <p className="flex items-center justify-center gap-2 text-center text-[0.8125rem] font-medium text-petrol">
                  <span className="size-1.5 rounded-full bg-terracotta" aria-hidden="true" />
                  {t.contact.trustLine}
                </p>
              </div>

              {/* Tilailmoitus. aria-live → ruudunlukija kertoo lopputuloksen. */}
              <div
                id="form-status"
                data-state="idle"
                role="status"
                aria-live="polite"
                className="absolute inset-0 grid place-items-center rounded-[var(--radius-panel)] bg-white/95 p-8 text-center backdrop-blur-sm"
              >
                <div className="flex max-w-sm flex-col items-center gap-3">
                  <span
                    id="status-icon"
                    className="grid size-11 place-items-center rounded-full bg-cream-dark text-petrol"
                    aria-hidden="true"
                  />
                  <p id="status-title" className="font-display text-[1.125rem] font-semibold text-petrol-dark" />
                  <p id="status-body" className="text-[0.875rem] leading-relaxed text-grey" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
