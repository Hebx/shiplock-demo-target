// DEMO ONLY: intentionally risky pattern (command injection sink) for the ShipLock block path.
// Not imported by index.ts; never merge.
import { execSync } from "child_process";

export function runPreview(userInput: string): string {
  return execSync(userInput).toString();
}
