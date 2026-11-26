import { mkdirSync, writeFileSync } from "node:fs";

const review = "Eight hours a night, every night, and I still wake up tired.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
