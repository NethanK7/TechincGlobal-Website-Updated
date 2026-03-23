import type { MetadataRoute } from "next";
import { createManifest } from "@/pwa/config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return createManifest();
}
