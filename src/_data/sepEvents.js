// Hilfsfunktion zum Filtern von sep Veranstaltungen
export function getSepEvents(events) {
  return events.filter(event => event.code && event.code.startsWith('sep'));
}
