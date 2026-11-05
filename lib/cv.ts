import fs from "node:fs";
import path from "node:path";
import { person } from "./content";

// The CV link only appears once public/Sadaqat_Rasool_CV.pdf exists; until then visitors get an email link.
export const hasCv = fs.existsSync(path.join(process.cwd(), "public", "Sadaqat_Rasool_CV.pdf"));
export const cvHref = hasCv ? person.cv : `mailto:${person.email}?subject=CV%20request`;
export const cvLabel = hasCv ? "Download my CV (PDF)" : "Ask for my CV";
