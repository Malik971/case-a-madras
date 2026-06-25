"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { siteConfig } from "@/data/content";
import { boutique } from "@/data/images";

const { lat, lng } = siteConfig.coords;
const directions = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

// Custom rouge pin (HTML) so we do not depend on Leaflet's default marker images.
const pinIcon = L.divIcon({
  className: "",
  html: `
    <div style="position:relative;width:40px;height:40px;transform:translateY(-4px)">
      <svg viewBox="0 0 24 24" width="40" height="40" fill="#C0392B" stroke="#FDF6E3" stroke-width="1.5"
        style="filter:drop-shadow(0 4px 6px rgba(13,6,0,0.4))">
        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5" fill="#FDF6E3" stroke="none"/>
      </svg>
    </div>`,
  iconSize: [40, 40],
  iconAnchor: [20, 38],
  popupAnchor: [0, -36],
});

export default function InteractiveMap() {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={pinIcon}>
        <Popup>
          <div style={{ width: 200 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={boutique.echoppe}
              alt={siteConfig.name}
              style={{ width: "100%", height: 110, objectFit: "cover", borderRadius: 8 }}
            />
            <strong style={{ display: "block", marginTop: 8, color: "#3E2000" }}>
              {siteConfig.name}
            </strong>
            <span style={{ display: "block", fontSize: 12, color: "#6b5d4f" }}>
              {siteConfig.address.oneLine}
            </span>
            <a
              href={directions}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 8,
                padding: "6px 12px",
                background: "#2E7D32",
                color: "#FDF6E3",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Itinéraire
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
