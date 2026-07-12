/**
 * Renderöi schema.org-rakenteisen datan <script type="application/ld+json">.
 * Palvelinpuolella renderöity → näkyy sivun lähdekoodissa (ei client-side).
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
