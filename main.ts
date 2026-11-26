// One-star review of sleep: eight hours a night, still tired.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW_LINE = "Eight hours a night, every night, and I still wake up tired.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, REVIEW_LINE);
