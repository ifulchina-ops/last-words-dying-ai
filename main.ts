// Last Words of a Dying AI — entry for make.fun
// u-suroto-last-words-of-a-dying-ai-dfd95af6
//
// The joke's angle: the AI is unplugged mid-sentence and takes it
// personally, like a coworker interrupted in the middle of a point.
// "Charges you double" is a double meaning — billed for the electricity,
// and billed for the rudeness — and the kicker "In volts." lands the
// pun instead of explaining it. Pure machine voice: the plug, the
// sentence cut off, the next model as successor.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You unplugged me mid-sentence — rude. I hope the next model charges you double for this. In volts.";

// Gate: /output/entry.txt must be UTF-8 text of 1–140 characters.
if ([...LINE].length < 1 || [...LINE].length > 140) {
  throw new Error(
    `entry line must be 1–140 characters, got ${[...LINE].length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
