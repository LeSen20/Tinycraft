# Tinycraft

Ein interaktives, webbasiertes Kartentool für React, das speziell für das Planen, Navigieren und Verwalten von Clan-Gebieten auf einem festen Minecraft-Server entwickelt wurde. 

Das Tool ermöglicht den nahtlosen Wechsel zwischen der Oberwelt und dem Nether inklusive automatischer Koordinatenumrechnung (1:8).

## Features

- **Präzise Navigation:** Drag-and-Drop-Karte mit einem zentralen Fadenkreuz zur exakten Bestimmung von X/Z-Koordinaten.
- **Dimensions-Wechsel (1:8):** Integrierter Umrechner (über den ⇄-Button), um Positionen zwischen Oberwelt und Nether für die Portal-Planung zu konvertieren.
- **Clan-System:** Gründung und Beitritt von Clans über ein sicheres Codewort.
- **Gebietsansprüche (Claims):** Markierung von Clan-Territorien mit einem festen Radius von 100 Blöcken.
- **Marker-Verwaltung:** Setzen von privaten Markern oder geteilten Clan-Markern direkt über das Fadenkreuz.
- **Custom Themes:** 6 auswählbare Farbschemata (Mitternacht, Smaragd, Dämmerung, Schiefer, Papier, Klassisch), die gerätespezifisch gespeichert werden.
- **Optimierter Speicher:** Chunk-basiertes Upload-Profil zur sicheren Speicherung großer Kartendaten im localStorage unter Umgehung von Ratenbegrenzungen.
- **Interaktives Tutorial:** Schritt-für-Schritt-Anleitung direkt in der UI integriert.

## Technologien und Bibliotheken

- **React** (useState, useRef, useEffect, useCallback)
- **Lucide React** (für die Icons)
- **CSS / Style-System:** Basiert auf dynamischen CSS-Variablen für das Theme-System

## Installation und Setup

1. **Repository klonen:**
   ```bash
   git clone https://github.com
   cd PROJEKT-NAME
   ```

2. **Abhängigkeiten installieren:**
   Stelle sicher, dass lucide-react in deinem Projekt vorhanden ist.
   ```bash
   npm install lucide-react
   # oder
   yarn add lucide-react
   ```

3. **Komponente einbinden:**
   Füge den Code in deine React-Anwendung ein (z. B. als MapTool.jsx) und importiere ihn in deiner App.js.

## Technische Details und Konfiguration

### Dimensionen (Kalibrierung)
Das Tool ist fest auf folgende Weltgrenzen und Skalierungen kalibriert:
- **Oberwelt:** -15.008 bis +15.008 (16 Blöcke pro Pixel)
- **Nether:** -4.000 bis +4.000 (4 Blöcke pro Pixel)

### Speicher-Profil (Upload Profile)
Um Einschränkungen des Browserspeichers zu umgehen, nutzt die Komponente folgende Parameter:
```javascript
const UPLOAD_PROFIL = { 
  maxDim: 1000,     // Maximale Dimension
  maxBytes: 420000, // Maximale Bytezahl
  chunk: 45000,     // Größe der Teilstücke beim Speichern
  pause: 450        // Pause zwischen Schreibvorgängen in ms
};
```

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Siehe die LICENSE-Datei für Details.
