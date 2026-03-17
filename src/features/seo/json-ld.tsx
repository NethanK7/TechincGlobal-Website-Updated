/**
 * Server component that safely renders a JSON-LD structured data block.
 *
 * Usage:
 * ```tsx
 * import { JsonLd } from "@/features/seo/json-ld";
 * import { organizationSchema } from "@/config/schema";
 *
 * export default function Layout({ children }) {
 *   return (
 *     <>
 *       <JsonLd data={organizationSchema()} />
 *       {children}
 *     </>
 *   );
 * }
 * ```
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface JsonLdProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0),
      }}
    />
  );
}
