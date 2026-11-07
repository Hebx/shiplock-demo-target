export function formatShipNote(name: string): string {
  const trimmed = name.trim();
  return `Ship note: ${trimmed.length > 0 ? trimmed : "unnamed vessel"} is cleared to sail.`;
}
