# OSM Preset Explorer & Visualizer

A **clean and interactive web tool** to explore OpenStreetMap presets. This project helps contributors and new mappers understand preset categories, search through terms, and visualize how presets are structured all without opening raw JSON files.

**Check out my OSM profile:** [Pratik Kharkar](https://www.openstreetmap.org/user/pratikkharkar1809)

## Problem

The presets in OSM editors like iD are stored in deep JSON files. This makes it hard to:

**Understand Inheritance:** See how a child preset (like “Bubble Tea Cafe”) inherits fields from a parent (“Cafe”).  
**Audit Translations:** Quickly verify that terms and aliases are correctly localized.  
**Debug Tags:** Identify missing icons or incorrect key-value pairs without going through thousands of lines of JSON.  

This project provides a **visual and interactive reference tool** to make these tasks easy.

## Features

**Search with Highlights:** Filter presets in real time by name, alias, or term, with matches highlighted.  
**Category Navigation:** Quickly explore different preset types (Cafes, Bars, Clinics, etc.) via cards.  
**Schema Awareness:** Shows only relevant info to users while keeping internal JSON data organized.  
**Responsive Design:** Works well on desktop and mobile with a professional sky-blue theme.  
**Vanilla JS:** No extra libraries, so it’s lightweight and easy to integrate with other tools.  
**Planned Inheritance Visualization:** Future support to show parent-child relationships visually.  

## Project Structure

# OSM Preset Explorer & Visualizer

A **clean and interactive web tool** to explore OpenStreetMap presets. This project helps contributors and new mappers understand preset categories, search through terms, and visualize how presets are structured—all without opening raw JSON files.

**Check out my OSM profile:** [Pratik Kharkar](https://www.openstreetmap.org/user/pratikkharkar1809)

---

## Problem

The presets in OSM editors like iD are stored in deep JSON files. This makes it hard to:

- **Understand Inheritance:** See how a child preset (like “Bubble Tea Cafe”) inherits fields from a parent (“Cafe”).  
- **Audit Translations:** Quickly verify that terms and aliases are correctly localized.  
- **Debug Tags:** Identify missing icons or incorrect key-value pairs without going through thousands of lines of JSON.  

This project provides a **visual and interactive reference tool** to make these tasks easy.

---

## Features

- **Search with Highlights:** Filter presets in real time by name, alias, or term, with matches highlighted.  
- **Category Navigation:** Quickly explore different preset types (Cafes, Bars, Clinics, etc.) via cards.  
- **Schema Awareness:** Shows only relevant info to users while keeping internal JSON data organized.  
- **Responsive Design:** Works well on desktop and mobile with a professional sky-blue theme.  
- **Vanilla JS:** No extra libraries, so it’s lightweight and easy to integrate with other tools.  
- **Planned Inheritance Visualization:** Future support to show parent-child relationships visually.  

---

## Project Structure
osm-preset-viewer/
index.html # Main layout & HTML structure
style.css # UI design and responsive styling
script.js # JSON parsing, search, and interactivity
data.json # Preset data with internal metadata
README.md # Project overview


## Installation & Usage

1. Clone the repository:

```bash
git clone https://github.com/pk000003/osm-preset-viewer.git
2.Make sure all files (index.html, style.css, script.js, data.json) are in the same folder.
3.Open index.html in any modern web browser.

GSoC 2026 Roadmap
Planned features for this project:

Visual Inheritance Trees: Show how child presets inherit fields from parent presets.
Icon Support: Add official OSM icons for better visualization.
One-Click Tag Copy: Copy tags directly for use in JOSM or iD editor.

Author

Pratik Kharkar
OpenStreetMap: pratikkharkar1809
GitHub: @pk000003

License
This project is licensed under the MIT License. See the LICENSE file for details.
