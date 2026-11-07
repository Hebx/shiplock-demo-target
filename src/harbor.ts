export function harborStatus(berths: number, occupied: number): string {
  const free = Math.max(0, berths - occupied);
  return free > 0 ? `${free} berth(s) free` : "Harbor full";
}
