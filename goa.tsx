import { useState } from "react";
import { useLocation } from "wouter";
import {
  ArrowLeft,
  MapPin,
  ChevronRight,
  CheckCircle,
  X,
  ZoomIn,
} from "lucide-react";
import tnMap from "@assets/TN_map_1776628923935.jpg";
import pongal1 from "@assets/image_1776788355951.png";
import pongal2 from "@assets/image_1776788364481.png";
import pongal3 from "@assets/image_1776788370635.png";
import pongal4 from "@assets/image_1776788376290.png";
import pongal5 from "@assets/image_1776788390385.png";
import jalli1 from "@assets/image_1776788400543.png";
import jalli2 from "@assets/image_1776788406884.png";
import chith1 from "@assets/image_1776788416217.png";
import chith2 from "@assets/image_1776788422339.png";
import puth1 from "@assets/image_1776788430140.png";
import puth2 from "@assets/image_1776788437438.png";
import adi1 from "@assets/image_1776788476146.png";
import adi2 from "@assets/image_1776788482041.png";
import dance1 from "@assets/image_1776788764847.png";
import dance2 from "@assets/image_1776788772553.png";
import navar1 from "@assets/image_1776788788721.png";
import navar2 from "@assets/image_1776788797545.png";
import karth1 from "@assets/image_1776788805779.png";
import karth2 from "@assets/image_1776788811412.png";
import karth3 from "@assets/image_1776788817244.png";
import karad1 from "@assets/image_1776788825797.png";
import karad2 from "@assets/image_1776788831894.png";
import sixAbodes from "@assets/image_1776788840602.png";
import thiruparankundram from "@assets/image_1776788847901.png";
import thiruchendur from "@assets/image_1776788856768.png";
import palani1 from "@assets/image_1776788865143.png";
import palani2 from "@assets/image_1776788870905.png";
import swamimalai from "@assets/image_1776788878018.png";
import thiruttani from "@assets/image_1776788887081.png";
import pazhamudir from "@assets/image_1776788895857.png";
import bhumiLingam from "@assets/image_1776788902350.png";
import jambuLingam from "@assets/image_1776788909064.png";
import jyothiLingam from "@assets/image_1776788916164.png";
import akashaLingam from "@assets/image_1776789530181.png";
import meenakshi1 from "@assets/image_1776789548589.png";
import meenakshi2 from "@assets/image_1776789554420.png";
import meenakshi3 from "@assets/image_1776789558971.png";
import meenakshi4 from "@assets/image_1776789565292.png";
import rames1 from "@assets/image_1776789575242.png";
import rames2 from "@assets/image_1776789580153.png";
import rames3 from "@assets/image_1776789590790.png";
import dhanush1 from "@assets/image_1776789610085.png";
import dhanush2 from "@assets/image_1776789615338.png";
import pamban1 from "@assets/image_1776789624415.png";
import pamban2 from "@assets/image_1776789631296.png";
import pamban3 from "@assets/image_1776789638782.png";
import chola1 from "@assets/download_1777100508255.png";
import chola2 from "@assets/download_1777100514323.png";
import chola3 from "@assets/download_1777100516025.png";
import velan1 from "@assets/download_1777100518481.png";
import velan2 from "@assets/download_1777100520664.png";
import velan3 from "@assets/download_1777100523842.png";
import velanFest1 from "@assets/image_1777102241686.png";
import velanFest2 from "@assets/image_1777102257711.png";
import thiruv1 from "@assets/download_1777100525385.png";
import thiruv2 from "@assets/download_1777100526870.png";
import vive1 from "@assets/download_1777100529380.png";
import vive2 from "@assets/download_1777100531237.png";
import vive3 from "@assets/download_1777100532535.png";
import mahab1 from "@assets/download_1777100537305.png";
import mahab2 from "@assets/download_1777100539158.png";
import mahab3 from "@assets/download_1777100541720.png";
import mahab4 from "@assets/download_1777100543112.png";
import nilgiri1 from "@assets/download_1777100544581.png";
import nilgiri2 from "@assets/download_1777100547931.png";
import malai1 from "@assets/download_1777100551195.png";
import malai2 from "@assets/download_1777100558868.png";
import sri1 from "@assets/image_1777100897996.png";
import sri2 from "@assets/image_1777100906255.png";
import sri3 from "@assets/image_1777100911861.png";
import gAmbur from "@assets/image_1777100917162.png";
import gTirunelveliHalva from "@assets/image_1777100921467.png";
import gDindigul from "@assets/image_1777100927953.png";
import gMalli from "@assets/image_1777100932602.png";
import gButterBun from "@assets/image_1777100937948.png";
import gJigarthanda from "@assets/image_1777100946447.png";
import gUthukuli from "@assets/image_1777100950953.png";
import gMuthu from "@assets/image_1777100955650.png";
import gSalemMango from "@assets/image_1777100960783.png";
import gErodeTurmeric from "@assets/image_1777100965689.png";
import gTiruppur from "@assets/image_1777100975810.png";
import gKanchiSilk from "@assets/image_1777100982364.png";
import gSungdi from "@assets/image_1777100987731.png";
import gBharatanatyam from "@assets/image_1777100994118.png";
import gDosaIdli from "@assets/image_1777101000988.png";
import gVenPongal from "@assets/image_1777101005896.png";
import gVadaSambar from "@assets/image_1777101012951.png";
import gRasam from "@assets/image_1777101457846.png";
import gPanniyaram from "@assets/image_1777101463186.png";
import gNeyiAppam from "@assets/image_1777101468204.png";
import gPoiKaal from "@assets/image_1777101472285.png";
import gKaragattam from "@assets/image_1777101478099.png";
import gThanjavur1 from "@assets/image_1777101487729.png";
import gThanjavur2 from "@assets/image_1777101493885.png";
import gSilambattam from "@assets/image_1777101502689.png";
import gThalaiyaati from "@assets/image_1777101507013.png";
import gFeast from "@assets/image_1777101512605.png";

/* ─── Lightbox ──────────────────────────────────────────────────────────── */
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

/* ─── Image placeholder (for docx images without uploaded files) ─────────── */
function DocxImage({
  label,
  source,
  color = "#D45A3A",
}: {
  label: string;
  source?: string;
  color?: string;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden border border-border my-4"
      style={{ background: color + "12" }}
    >
      <div
        className="flex items-center justify-center py-10 gap-3"
        style={{ borderBottom: `2px solid ${color}22` }}
      >
        <div className="text-4xl opacity-60">🖼️</div>
        <div>
          <p className="font-semibold text-sm text-foreground/70">{label}</p>
          {source && <p className="text-xs text-muted-foreground">{source}</p>}
        </div>
      </div>
    </div>
  );
}

/* ─── Section wrapper ────────────────────────────────────────────────────── */
function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{icon}</span>
        <h2
          className="text-2xl font-bold text-foreground"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {title}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      {children}
    </section>
  );
}

/* ─── Image grid (shared) ────────────────────────────────────────────────── */
function ImageGrid({
  images,
  alt,
  onImageClick,
}: {
  images: string[];
  alt: string;
  onImageClick: (src: string, alt: string) => void;
}) {
  const cols =
    images.length === 1
      ? "grid-cols-1"
      : images.length >= 3
        ? "grid-cols-2 sm:grid-cols-3"
        : "grid-cols-1 sm:grid-cols-2";
  return (
    <div className={`grid gap-3 ${cols}`}>
      {images.map((src, idx) => (
        <button
          key={idx}
          onClick={() =>
            onImageClick(
              src,
              `${alt}${images.length > 1 ? ` — image ${idx + 1}` : ""}`,
            )
          }
          className="group relative rounded-xl overflow-hidden border border-border bg-muted/30 cursor-zoom-in aspect-[4/3]"
        >
          <img
            src={src}
            alt={`${alt} ${idx + 1}`}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>
      ))}
    </div>
  );
}

/* ─── Festival card ──────────────────────────────────────────────────────── */
function FestivalCard({
  number,
  name,
  tagline,
  description,
  source,
  hasImage,
  imageLabel,
  images,
  onImageClick,
}: {
  number: number;
  name: string;
  tagline?: string;
  description: string;
  source?: string;
  hasImage?: boolean;
  imageLabel?: string;
  images?: string[];
  onImageClick: (src: string, alt: string) => void;
}) {
  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-card">
      <div className="flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-primary/8 to-transparent border-b border-border">
        <div
          className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {number}
        </div>
        <div>
          <h3
            className="font-bold text-foreground text-base"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {name}
          </h3>
          {tagline && (
            <p className="text-muted-foreground text-xs italic mt-0.5">
              {tagline}
            </p>
          )}
        </div>
      </div>
      <div className="px-5 py-4 space-y-4">
        <p
          className="text-sm text-foreground leading-relaxed"
          style={{ fontFamily: "'Lora', serif", textAlign: "justify" }}
        >
          {description}
        </p>
        {images && images.length > 0 && (
          <ImageGrid images={images} alt={name} onImageClick={onImageClick} />
        )}
        {hasImage && !images && (
          <DocxImage
            label={imageLabel ?? name}
            source={source}
            color="#D45A3A"
          />
        )}
        {source && !hasImage && !images && (
          <p className="text-xs text-muted-foreground">{source}</p>
        )}
        {source && images && (
          <p className="text-xs text-muted-foreground">{source}</p>
        )}
      </div>
    </div>
  );
}

/* ─── Historical place card ──────────────────────────────────────────────── */
function HistoricalPlaceCard({
  number,
  name,
  description,
  source,
  hasImage,
  imageLabel,
  subPlaces,
  images,
  onImageClick,
}: {
  number: number;
  name: string;
  description: string;
  source?: string;
  hasImage?: boolean;
  imageLabel?: string;
  images?: string[];
  onImageClick: (src: string, alt: string) => void;
  subPlaces?: {
    name: string;
    location?: string;
    description: string;
    source?: string;
    hasImage?: boolean;
    imageLabel?: string;
    images?: string[];
  }[];
}) {
  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-card">
      <div className="flex items-start gap-4 px-5 py-4 bg-gradient-to-r from-accent/8 to-transparent border-b border-border">
        <div
          className="w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {number}
        </div>
        <h3
          className="font-bold text-foreground text-base pt-1"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {name}
        </h3>
      </div>
      <div className="px-5 py-4 space-y-4">
        <p
          className="text-sm text-foreground leading-relaxed whitespace-pre-line"
          style={{ fontFamily: "'Lora', serif", textAlign: "justify" }}
        >
          {description}
        </p>
        {images && images.length > 0 && (
          <ImageGrid images={images} alt={name} onImageClick={onImageClick} />
        )}
        {hasImage && !images && (
          <DocxImage
            label={imageLabel ?? name}
            source={source}
            color="#3A8A5A"
          />
        )}
        {source && (!hasImage || images) && (
          <p className="text-xs text-muted-foreground">{source}</p>
        )}

        {subPlaces && subPlaces.length > 0 && (
          <div className="space-y-5">
            {subPlaces.map((sub, idx) => (
              <div
                key={idx}
                className="border border-border/60 rounded-xl p-4 bg-muted/30"
              >
                <div className="flex items-start gap-2 mb-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {sub.name}
                    </p>
                    {sub.location && (
                      <p className="text-xs text-muted-foreground">
                        {sub.location}
                      </p>
                    )}
                  </div>
                </div>
                <p
                  className="text-sm text-foreground/80 leading-relaxed pl-6"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {sub.description}
                </p>
                {sub.images && sub.images.length > 0 && (
                  <div className="pl-6 mt-3">
                    <ImageGrid
                      images={sub.images}
                      alt={sub.name}
                      onImageClick={onImageClick}
                    />
                  </div>
                )}
                {sub.hasImage && !sub.images && (
                  <div className="pl-6">
                    <DocxImage
                      label={sub.imageLabel ?? sub.name}
                      source={sub.source}
                      color="#3A7AAA"
                    />
                  </div>
                )}
                {sub.source && (!sub.hasImage || sub.images) && (
                  <p className="text-xs text-muted-foreground mt-2 pl-6">
                    {sub.source}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main page ──────────────────────────────────────────────────────────── */
export default function GoaPage() {
  const [, setLocation] = useLocation();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  );
  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });

  return (
    <div className="min-h-screen bg-background">
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #D45A3A 0%, #C03020 40%, #4CAF84 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-2 border-white -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-2 border-white translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Map
          </button>
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <div className="flex-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm font-medium mb-4">
                West India
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Goa
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Pearl of the Orient
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Panaji" },
                  { label: "Population", value: "14.58 Lakh" },
                  { label: "Area", value: "3,702 sq km" },
                  { label: "Founded", value: "30 May 1987" },
                  { label: "Language", value: "Konkani, Marathi, English, Portuguese" },
                  { label: "Districts", value: "32 Districts" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-white/60 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white/60 text-xs">{label}: </span>
                      <span className="text-white text-xs font-medium">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Capital */}
        <Section title="Capital — Panaji" icon="🏛️">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-6 border border-red-100 dark:border-red-900/30 text-center">
            <div className="text-5xl mb-3">🌆</div>
            <h3
              className="text-2xl font-bold text-foreground mb-1"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Panaji
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Goa — Rome of the East
            </p>
          </div>
        </Section>

        {/* Map of Goa — click to enlarge */}
        <Section title="Map of Goa" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(goaMap, "Map of Goa")}
            >
              <img
                src={goaMap}
                alt="Map of Goa"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium">
                  <ZoomIn className="w-4 h-4" />
                  Click to enlarge
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              (src: mapsofindia.com) — Click the map to view full size
            </p>
          </div>
        </Section>

        {/* Brief Introduction */}
        <Section title="Brief Introduction" icon="📜">
          <div
            className="space-y-4 text-base leading-relaxed"
            style={{ fontFamily: "'Lora', serif", textAlign: "justify" }}
          >
            <p className="text-foreground">
              Goa is a state on the southwestern coast of India within the Konkan region. It is geographically separated from the Deccan highlands by the Western Ghats. It is bordered by the Indian states of Maharashtra to the north and Karnataka to the east and south, with the Arabian Sea forming its western coastline. It was the capital of the eastern Portuguese empire until 1961. Panaji (Panjim) is the state's capital, while Vasco da Gama is its largest city by population. The state's official language is Konkani, spoken by the majority of its inhabitants.
            </p>
            <p className="text-foreground">
              The Portuguese, who first voyaged to the subcontinent in the early 16th century as merchants, conquered it on request of Timoji shortly thereafter. Goa became an overseas territory of the Portuguese Empire and part of what was then known as Portuguese India, remaining under Portuguese rule for approximately 451 years until its annexation by India in December 1961. The historic city of Margão (Madgaon) still reflects the cultural legacy of colonisation.
            </p>
            <p className="text-foreground">
              Goa encompasses an area of 3,702 km2 (1,429 sq mi). The highest point is the Sonsogor Peak, with an altitude of 1,026 m (3,366 ft). Goa has a coastline of 160 km (99 mi). Goa's seven major rivers are the Mandovi, Zuari, Terekhol, Chapora, Galgibag, Cumbarjua canal, Talpona, and the Sal. The Zuari and the Mandovi are the most important rivers, interspaced by the Cumbarjua canal, forming a major estuarine complex. These rivers are fed by the Southwest monsoon rain and their basin covers 69% of the state's geographical area. These rivers are some of the busiest in India.
            </p>
            <p className="text-foreground">
             The state is divided into two administrative districts—North Goa and South Goa. Panaji (Panjim) is the headquarters of North Goa district and is also the capital of Goa. North Goa is further divided into three subdivisions—Panaji, Mapusa, and Bicholim; and five talukas (subdistricts)—Tiswadi (Panaji), Bardez (Mapusa), Pernem, Bicholim, and Sattari (Valpoi). Margao (Madgaon) is the headquarters of the South Goa district. It is also the cultural and commercial capital of Goa. South Goa is further divided into five subdivisions—Ponda, Mormugao-Vasco, Margao, Quepem, and Dharbandora; and seven talukas—Ponda, Mormugao, Salcete (Margao), Quepem, and Canacona (Chaudi), Sanguem, and Dharbandora.Goa has a total number of 334 villages.
            </p>
            <p className="text-foreground">
              Tamil Nadu is bounded on north by Andhra Pradesh and Karnataka, on
              the west by Kerala, on the east by the Bay of Bengal, and on the
              south by the Indian Ocean.
            </p>
            <p className="text-foreground">
              In ancient literature, Goa was known by many names, such as Gomanchala, Gopakapattana, Gopakapattam, Gopakapuri, Govapuri, Govem, and Gomantak. Other historical names for Goa are Sindapur, Sandabur, and Mahassapatam.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Goa is widely regarded as the "Beach Capital of India" and a premier "Party Capital" due to its vibrant nightlife, sandy coastlines, and laid-back atmosphere. As India's smallest state, it is recognized for its unique blend of Portuguese-Indian culture, rich heritage, and high quality of life.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: wikipedia, mapsofindia.com)
            </p>
          </div>
        </Section>

        {/* Festivals */}
        <Section title="Festivals / Culture / Traditions" icon="🎉">
          <div className="space-y-8">
            {festivals.map((f, i) => (
              <FestivalCard
                key={i}
                number={i + 1}
                {...f}
                onImageClick={openLightbox}
              />
            ))}
          </div>
        </Section>

        {/* Historical Places */}
        <Section title="Historical Places / Monuments" icon="🏯">
          <div className="space-y-10">
            {historicalPlaces.map((p, i) => (
              <HistoricalPlaceCard
                key={i}
                number={i + 1}
                {...p}
                onImageClick={openLightbox}
              />
            ))}
          </div>
        </Section>

        {/* Facts */}
        <Section title="Facts about Goa" icon="💡">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {facts.map((fact, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
              >
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p
                  className="text-sm text-foreground leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Art Gallery */}
        <Section title="Art Gallery" icon="🎨">
          <p className="text-muted-foreground text-sm mb-4">
            Scroll horizontally to explore Goa's iconic foods, crafts,
            dance, and traditions.
          </p>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4" style={{ minWidth: "max-content" }}>
              {artGallery.map((item, i) => {
                const hasImg = "image" in item && !!item.image;
                const Wrapper: React.ElementType = hasImg ? "button" : "div";
                return (
                  <Wrapper
                    key={i}
                    onClick={
                      hasImg
                        ? () => openLightbox(item.image as string, item.title)
                        : undefined
                    }
                    className={`flex-shrink-0 w-44 rounded-xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow text-left ${hasImg ? "cursor-zoom-in group" : ""}`}
                  >
                    <div
                      className="h-36 flex items-center justify-center overflow-hidden relative"
                      style={{
                        backgroundColor: item.color + "33",
                        borderBottom: `2px solid ${item.color}44`,
                      }}
                    >
                      {hasImg ? (
                        <>
                          <img
                            src={item.image as string}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </>
                      ) : (
                        <span className="text-4xl">{item.emoji}</span>
                      )}
                    </div>
                    <div className="p-3">
                      <p className="font-semibold text-xs text-foreground leading-tight">
                        {item.title}
                      </p>
                      {item.desc && (
                        <p className="text-xs text-muted-foreground mt-1 leading-tight">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Back */}
        <div className="text-center pt-4">
          <button
            onClick={() => setLocation("/")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <MapPin className="w-5 h-5" />
            Explore the Full Map
          </button>
        </div>
      </main>

      <footer className="mt-16 bg-foreground/5 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <button
            onClick={() => setLocation("/")}
            className="text-primary font-semibold hover:underline text-sm"
          >
            ← Bharat Darpan
          </button>
          <p className="text-xs text-muted-foreground mt-2">
            Preserving India's rich cultural legacy for generations to come
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ─── DATA ───────────────────────────────────────────────────────────────── */

const festivals = [
  {
    name: "Viva Carnaval",
    tagline: "The annual carnival of Goa (aka Entrado)",
    description:
      "The Goa Carnival is the largest in India and one of the few traditional celebrations of the Western Christian holiday in Asia. The current version of the Goa Carnival was modelled after the Rio Carnival by a local Goan musician named Timoteo Fernandes and imposed in 1965 to attract tourists. It has since turned into a major tourist attraction for the state. The urban parade includes floats from local villages, commercial entities, and cultural groups. It is still organised in a very traditional manner, including by the staging of streetside local plays called Khell tiatrs, in various villages, especially in the taluka of Salcete. Live bands play traditional Konkani, Latin, and EDM music throughout the festivities. Streets become open dance floors, where locals and visitors groove to the beat of lively tunes. The traditional mask dances and performances by local artists also add to the celebration. Beyond the parades, street performances, including acrobatics and fire-breathing shows are also held. According to the Government of Goa's Department of Tourism, the carnival is Goa's most famous festival and has been celebrated since the 18th century. The Carnival usually starts off on Fat Saturday (known as Sabado Gordo) and concludes on Fat Tuesday (known as Shrove Tuesday), just before Ash Wednesday and the first day of the Western Christian season of Lent, observed by Christians of the Roman Catholic, Lutheran and Anglican denominations, among others. In Panjim, the capital of Goa, the festival is complemented by Grape Escapade, a local wine festival, and a dance at Samba Square in the centrally located Garden of Garcia da Orta. According to local tradition, during Carnival Goa is taken over by King Momo, usually a local resident who presides over the festival during the four-day span. King Momo traditionally proclaims the Konkani message (English: 'Eat, drink and make merry').",
    images: [goacarnival1, goacarnival2, goacarnival3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Feast of St. Francis Xavier",
    tagline:
      "Honors the 16th-century Spanish Jesuit missionary and co-founder of the Society of Jesus known as the 'Apostle of the Indies' for his extensive efforts in spreading Christianity across Asia",
    description:
      "The Feast of St. Francis Xavier is one of Goa’s most significant religious festivals, celebrated annually on December 3rd to honour the patron saint of the region. Held at the Basilica of Bom Jesus in Old Goa, where the saint's relics are enshrined, this event draws thousands of pilgrims and tourists from around the world. During this decennial event, the saint’s relics are displayed for public veneration, offering a unique spiritual experience. The celebration includes masses, processions, and novenas leading up to the feast day, creating a deep sense of faith and community. This festival, especially during an exposition year, is a profound way to experience Goa’s rich religious and cultural heritage. He is considered the protector of Goa, and the feast transcends religious boundaries, with many locals participating. Nine days of prayer (novena) precede the feast on December 3, attracting pilgrims who participate in a walking pilgrimage. A massive fair occurs concurrently, featuring local food, sweets, and handicrafts, making it a crucial social event.",
    images: [FeastXavier1, FeastXavier2],
    source: "(src: Wikipedia)",
  },
  {
    name: "The Sunburn Festival",
    tagline:
      "Asia's largest three-day Electronic Dance Music (EDM) festival.",
    description:
      "The Sunburn Festival is Asia's largest electronic dance music (EDM) festival and a globally renowned beach festival in Goa. Known for its electrifying performances by top international DJs, immersive stage designs, and vibrant coastal atmosphere, it attracts music enthusiasts from across the world. With its fusion of music, dance, and the quintessential Goan beach vibe, the Sunburn Festival is a must-attend event for anyone looking to experience Goa’s energetic nightlife and festive spirit. The festival drives massive growth in hospitality, including hotels, guesthouses, and restaurants. Sunburn has evolved into a significant experiential event offering workshops (puppets, kite making) and nightlife experiences. It was held annually in Vagator, Goa from 2007 to 2015, and shifted to Pune, Maharashtra in 2016. In 2019, the festival returned to Vagator, Goa. According to a 2014 International Music Summit report, Sunburn was 'as big as Tomorrowland and Ultra'. It was ranked by CNN in 2009 as one of the Top 10 Festivals in the world.",
    images: [sunburn1, sunburn2],
    source: "(src: hindustantimes, sunburn.in)",
  },
  {
    name: "São João",
    tagline:
      "Festival honouring St.John - the Baptist.",
    description:
      "is an annual Catholic religious festival celebrated on 24 June in Goa, India. According to tradition, after attending Mass, young Goan Catholics leap into and swim in local wells, streams, and ponds as a tribute to Saint John the Baptist. The feast of São João is a celebration of the birth anniversary of Saint John the Baptist. Saint John was the son of Saint Elizabeth, a relative of Mary, mother of Jesus. One day, when Mary visited Elizabeth, the baby Saint John 'leapt' in her womb upon hearing Mary's greeting (Luke 1:44) When Jesus was thirty years old, he was baptised by Saint John in the Jordan River. The Nativity of John the Baptist is known to be one of the oldest festivals of the Christian church, and records show that it was celebrated as a big feast in 506 AD. The feast of São João in Goa coincides with the time of the year when the monsoon in Goa has usually commenced, there are fresh greenery and flowers in the surroundings, and wells and other water bodies are full. Consequently, the celebration of the birth of Saint John in Goa apparently evolved to incorporate elements of celebration of the rainy season. Jumping in wells and ponds is symbolic of the baby Saint John leaping in the womb, and of the baptism of Jesus in the river Jordan. People wear kopels (transl. crowns) made of flowers and a creeper known locally as sanjuachi vaal (transl. creeper of São João). The creeper is found growing in wells during the early monsoons. It also has small red flowers that add to the beauty of the kopel. Some believe that the creeper was worn by Saint John himself. While the São João celebrations are 'centuries old', a more recent tradition is followed in the village of Siolim, in Bardez taluka, featuring colourful floats on boats. These festivities date back 175 years, when São João revellers from Chapora and Zhor villages of Anjuna, Badem in Assagao, and Siolim would come in boats to the chapel of São João in Pereira Vaddo, Siolim, every year, to pay homage to the saint. São João is also a celebration of thanksgiving for newly-weds, and for families with babies born during the preceding year. It is thus referred to as Zanvoiamchem fest (transl. - son-in-law's feast) locally. The newly married son-in-law is invited for lunch by his mother-in-law, following which the son-in-law is warmly welcomed with the bursting of firecrackers. This is meant to signify that a marriage is not just between two families but between two villages.",
    images: [saojoao1, saojoao2, saojoao3],
    source: "(src: stayvista.com, wikipedia, scroll.in)",
  },
  {
    name: "Shigmo",
    tagline:
      "The spring festival of Goa (aka-Shishirotsava).",
    description:
      "It is one of the major festivals of the Hindu community. It is also celebrated by Konkani diaspora and Indian festival of Holi is part of it. It is Goa's vibrant 14-day Hindu spring festival, held annually in March or April to welcome spring and celebrate the harvest. It features spectacular, colorful street parades across Goa—particularly in Ponda, Panaji, and Margao—showcasing folk dances, traditional music, and massive, illuminated floats depicting Hindu mythology. Large crowds witness the spectacular performances. A float parade winds its way down the streets once the sun sets and the lights come on.The music is typically dhol, taasha and kasale. Usually the festivities revolve around the village Mand. The Mand-dev and folk dieties are an essential part of the traditions. Goa observes two varieties of Shigmo: Dhakla (younger) and Thorla (Elder). The first is celebrated in Tiswadi, Ponda, Calangute and Quepem while the other in Bardez, Sattari, Bicholim and Pernem. In dance, the rombat form is popular. Here groups of dancers join in dressed in colourful attire. The elaborate attire and variety of instruments make this form special.Historic and comic elements combine to impart a rich and unique flavor to this festival.. Both these elements are evident in the different dance forms like Veeramel, Gade, Ghodemodni that highlight the heroic aspect. The comic aspects come through in the Zagor, Ranmalyem, Khele and Romat.Given its nature worship, the dance is dedicated to the gods and goddesses Shantaguru-Kuti, Santeri, Ravalnath, Shantadurga-Damodar and others. The festival also showcases the varied cultural aspects of Goa. Most of these dances are performed at the various Shigmo parades in towns across Goa. It’s a wonderful experience to witness these first hand as Goa’s traditions come alive. All these celebrations culminate at the frenzied climax of Holi, the festival of colours.",
    images: [shigmo1, shigmo2, shigmo3, shigmo4],
    source: "(src: ItsGoa, Incredible Goa, NDTV, TOI)",
  },
  {
    name: "Chovoth",
    tagline: "Ganesh Chaturthi of Goa.",
    description:
      "The most important and almost the national festival for Goan’s is the Ganesh Chaturthi known as ‘Chovoth’. The festivities run into several days, but minimum at least for one and half days, when puja of Gouri and Mahadev along with Ganapati, is performed. On the Chovoth day, in the morning or evening, a clay idol of Ganapati is brought home. Before that a matov (a small pandal above the place where the idol is place) is prepared with bunches of betel nut, coconut, bananas and branches of mango-trees being necessary ingredients of it. The puja of Ganapati goes on until mid-day. The puja is performed with the help of the pandit. On the second day, in the evening or at night, after performing the uttar puja of the image of Ganapati, it is taken in procession and immersed into a water body be it the sea, creek, river, lake or well. Before the idol is removed from its stand for immersion, it is besought for the welfare of the household and its members. The villages of Cumbharjua, Marcel and St Estevan enjoy a just reputation for their giant images of Ganapati made from different raw materials.While the festival is celebrated for one-and-a-half days in most houses, it can stretch upto 11 days. In community celebrations, the idol is worshipped for 9 to 21 days.",
    images: [chovoth1, chovoth2],
    source: "(src: ItsGoa, Wikipedia)",
  },
  {
    name: "Bonderam Festival",
    tagline:
      "Commemorates a historical protest against Portuguese territorial flags.",
    description:
      "The Bonderam Festival takes place on the fourth Saturday of August each year on Divar Island, which lies about 10 kilometres from Panaji. Known for its rich blend of tradition, history, and creativity, Bonderam is celebrated with flag parades, colourful floats, and cultural performances. While the main festival is usually held in the last week of August, Malar kicks off the Bonderam celebrations a week earlier. It is popularly known as the “Festival of Flags” and is one of Goa’s most unique cultural events. It combines historical remembrance, traditional music, dance, and community spirit, transforming the peaceful island of Divar into a vibrant centre of festivity. The Bonderam Festival has its roots in the Portuguese colonial period in Goa. Historically, the villagers of Divar Island often engaged in disputes over land ownership and territorial boundaries between different wards (locally called vaddos). To resolve these conflicts, the Portuguese authorities introduced a system of placing flags to demarcate boundaries between properties. However, the villagers were dissatisfied with this imposed system and began protesting by knocking down or defacing the flags. Over time, these acts of resistance evolved into a symbolic and festive event. The word ‘Bonderam’ is derived from the Portuguese word bandeira, meaning “flag.” What began as a protest against colonial land demarcation eventually transformed into a joyful celebration of local unity and identity. The highlight of the festival is the ceremonial flag parade. Villagers from different vaddos (wards) of Divar Island carry bright, colourful flags and march through the village streets, re-enacting the historical protest against Portuguese rule in a cheerful and symbolic manner. There are also Float Parade, Mock fights and games, Music-Dance, Cuisine and Community gatherings.",
    images: [bonderamt1, bonderam2, bonderam3],
    source: "(src: Goan Festival, Goa tourism, Boldsky)",
  },
];

const historicalPlaces = [
  {
    name: "Churches amd Convents of Goa (UNESCO World Heritage Site)",
    description:
      "The Churches and Convents of Goa is a serial property located in the former capital of the Portuguese Indies, which is on the west coast of India about 10 km east of the state capital Panjim. These seven monuments exerted great influence in the 16th to 18th centuries on the development of architecture, sculpture, and painting by spreading forms of Manueline, Mannerist, and Baroque art and architecture throughout the countries of Asia where Catholic missions were established. The surviving churches and convents in Goa are the Chapel of St. Catherine (1510); the Church and Convent of St. Francis of Assisi (1517, rebuilt in 1521 and 1661); the Church of Our Lady of Rosary (1549); Sé Cathedral (1652); the Church of St. Augustine (1602; the Basilica of Bom Jesus (1605); and the Chapel of St. Cajetan (1661).",
    images: [],
    subPlaces: [
      {
        name: "Basilica of Bom Jesus",
        location: "Old Goa",
        description:
          "The Basilica of Bom Jesus is a Catholic basilica in Goa, in the Konkan region of India. The church is a pilgrimage centre and recognised by UNESCO as a World Heritage Site.  It is located in Old Goa, the former capital of Portuguese India, and holds the body of St Francis Xavier. It is one of the Seven Wonders of Portuguese Origin in the World. Construction work on the church began in 1594. The church was consecrated in May 1605 by the archbishop, Aleixo de Menezes. This world heritage monument has emerged as a landmark in the history of Christianity.",
        images: [basilica1, basilica2, basilica3],
        source: "(src: wikipedia)",
      },
      {
        name: "Chapel of St. Catherine",
        location: "Old Goa",
        description:
          "The Chapel of St. Catherine (Portuguese: Capela de Santa Catarina) is a UNESCO World Heritage Site located in Old Goa in the same compound as Se Cathedral and the Church and Convent of St. Francis of Assisi. It is the first catholic church built in Goa. It was built in 1510 in the Baroque architectural style, and has a brown and white facade. It faces the Mandovi River and is part of the World Heritage Site, Churches and convents of Goa. The chapel is not functional. It was erected by Afonso de Albuquerque, Portuguese conqueror, in 1510 to commemorate his victorious entry to the city of Goa on St Catherine's Day. Pope Paul III granted it status of cathedral in 1534 and it was rebuilt. The chapel was expanded in 1550 at the order of the governor Jorge Cabral, and a new altarpiece was installed as well..",
        images: [chapelcatherine1],
        source: "(src: wikipedia)",
      },
      {
        name: "Church and Convent of St. Francis of Assissi",
        location: "Old Goa",
        description:
          "The Church of St. Francis of Assisi was built in 1661 by the Portuguese in the Portuguese Viceroyalty of India. The Church of St. Francis of Assisi, together with a convent, was established by eight Portuguese Franciscan friars who landed in Goa in 1517. It stands on the site of the principal mosque of the Adil Shahi city, later demolished. It is part of the UNESCO World Heritage Site, Churches and convents of Goa. The original shrine, constructed by the Fransican monks in 1521 and subsequently enlarged, was showing signs of decay, so a new church was constructed and dedicated to the Holy Spirit. Built in 1665, it retained the portal of the old structure which was in the Portuguese–Manueline style. It is a unique architectural specimen, of this style in the country.The façade of the church is built in the Tuscan style of architecture with only the portal being Manueline since it is a relic from the older structure. The façade is also distinctive in that it is flanked by octagonal towers. In 1517, eight Franciscan monks landed in Goa. They immediately set to work and built themselves a small chapel. This chapel was completed in 1521 and dedicated to the Holy Ghost. This building was later expanded upon and later consecrated as a church in 1602. However, it was not in good repair and it was later torn down and reconstructed in 1665.The church is built of laterite blocks, covered with lime plaster. The original Manueline entrance way is flanked by two octagonal towers. The façade of the church is three tiered and has a small niche which houses the statue of Our Lady of Miracles which was brought from Jaffna in Sri Lanka. In contrast to the simple outer façade the interiors of the church are unabashedly and lavishly decorated in the Baroque style using Corinthian influences. The highlight is the main altar, which has fine examples of this kind of work.The altar is dedicated to St. Francis of Assisi and has above it a huge statue of the saint, and another of Jesus. These statues display excellent features and attention to detail. Flanking the altar are superb paintings on wood depicting scenes from the life of St. Francis of Assisi and the history of the Seraphic Order.Although this church is not as large as the illustrious Se Cathedral, it is beautiful nonetheless. It is a single-nave church with three small chapels on either side of the nave. There are two altars besides the main one, which is dedicated to St. Francis of Assisi. Behind the altar are rooms which form the sacristy and there is a belfry to the north of the altar. The chapels and the gallery which runs around the top of the church are separated by internal buttresses. The main altar is carved and gilded, and beneath the statues of St. Francis of Assisi and Jesus is inscribed the vows of the saint “poverty, humility and obedience”. Beneath the main vault, is a richly carved niche containing the tabernacle, used for the repose of the Blessed Sacrament. The tabernacle is supported by sculptures of the Four Evangelists, Matthew, Mark, Luke and John.",
        images: [assissi1, assissi2, assissi3],
        source: "(src: wikipedia)",
      },
      {
        name: "The Church of Our Lady of Rosary",
        location: "Old Goa",
        description:
          "The Church of Our Lady of the Rosary is a Catholic church built between 1544 and 1547, in Old Goa, State of Goa, India. This church is part of the collection belonging to the World Heritage Site of churches and convents of Goa. According to the Portuguese historian Gaspar Correia, the Portuguese nobleman Afonso de Albuquerque ordered a small chapel to be built in honor of Our Lady of the Rosary on the spot where he was standing, when he had received the confirmation that his soldiers had completed the Portuguese conquest of Goa in 1510 and defeated the Sultan of Bijapur. The church of Our Lady of the Rosary is considered to be one of the oldest preserved buildings in Old Goa. Also, it is the only building that still has a (mainly) Renaissance construction and architectural elements. Gothic style and Manueline style are present in the exterior and interior. The church is an early testimony of the Christianization of Goa. Since it was located far outside the city centre, it was not subjected to any modernization. Other buildings from the same time period were eventually massively overbuilt and reshaped. The facade of the church has three floors and a two-storied portico flanked by cylindrical buttresses and cylindrical towers, each tower with cupolas crowned with crosses. The high windows, near the roof, give the impression of a fortress church with a cruciform plan. In addition, manual Indian designs are visible elements on the facade. Large cords are located at the cornice as well as the individual towers. The southern tower has a turning staircase to get to the upper choir on the second floor of the tower‑facade and the rood screen. The church's baptismal font is located on the ground floor of the northern tower. On the highest floor of the tower façade, there are light graceful columns in the corners, with window openings on all sides, and suspended bells. The church has two chapels and consists of only one nave with a main altar and two side altars. The main altar is dedicated to Our Lady of Rosary, with the influence of Gothic style seen in the rib vault of the Manueline style portico. The side chapels and the altar are arranged by a leaf-vein vault in the shape of a star.",
        images: [rosary1, rosary2, rosary3, rosary4],
        source: "(src: wikipedia)",
      },
      {
        name: "Sé Cathedral ",
        location: "Thiruvallur district",
        description:
          'Subramanya Swamy Temple - Tiruttani, Thiruvallur district - Located atop a hill, Murugan is said to have reclaimed his inner peace after winning a war over the Surapadman and married Valli here. Story ---- After the intensity of the war in Tiruchendur, Murugan needed a place to subdue his anger and seek inner peace, making Tiruttani a place of tranquility. Thanigai in Tamil means "to pacify" or "to calm down," which is why the hill and town are named Tiruttani, where the deity grants mental peace and relieves devotees of anger and stress. Because he came to this spot for peace, the idol of Murugan here is often seen holding a Vajra Vel (thunderbolt weapon) rather than the standard spear, and he is often depicted with a calmer expression and has an elephant mount (vahana)instead of his usual peacock. Valli, a mortal daughter of a tribal chieftain (Kuravas) in Tamil Nadu, was born of a doe and destined to marry Lord Murugan. Valli, from a young age, fell in love with a divine figure (Murugan) and desired to marry him, avoiding all human suitors. Lord Murugan, attracted by her devotion, visited her in the millet fields. He approached her first as a hunter, then with the help of his brother Ganesha (appearing as a wild elephant), he frightened her into accepting his hand in marriage.',
        images: [thiruttani],
        source: "(src: Wikipedia)",
      },
      {
        name: "Solaimalai Murugan Temple – Pazhamudircholai",
        location: "Madurai district",
        description:
          'Solaimalai Murugan Temple - Pazhamudircholai, Madurai district – Located on a hillock near a stream called "Nupura Gangai", Murugan is seen here with both his consorts, Deivanai and Valli. - Story ---- Avvaiyar was a renowned and legendary Tamil poetess and a name behind one of the most famous and appreciated works ever written in Hindu folklore. Her exceptional vocabulary and dexterity in the language made her works stand apart, in the list of even the greatest of the poets. This had started to make her audacious over her abilities. According to the pages drenched in the antiquity of the Hindu folklore, Lord Murugan who was well-versed with his devotee wanted to teach her a lesson and took the shape of a ten-year-old boy in here in Solaimalai. After having achieved everything in her life, Avviayar was resting under a Naaval tree, trying to figure out what lied next for her. A small boy appeared out of nowhere and stood on the tree. The boy asked Avviayar if she would like some fruits. Driven by hunger and thirst, she agreed instantly. The boy asked if she wanted a hot fruit or a cold one, which confused Avviayar but was tired to argue and opted for the cold one. Smilingly, the boy shook the tree, as many fruits fell, all of which were collected by her. The fruits were coated with the sand, so Avviayar blew them to remove it. The boy asked innocently, why was she trying to cool down the fruit blowing, which was already cold. This incident left Avviayar humbled by the clever wordplay and the poetic knowledge of the little boy. However, She was skeptical of the boy’s true identity which was revealed to her as Lord Murugan himself. She bowed to the almighty and requested him to bestow her with his bountiful knowledge, for she had realized the power of infinite learning. She sought Lord Murugan’s blessings and embarked on her quest for endless knowledge.',
        images: [pazhamudir],
        source: "(src: TemplePurohit)",
      },
    ],
  },
  {
    name: "Pancha Bhootam Temples",
    description:
      "The Pancha Bhoota Stalam refers to five sacred Shiva temples in South India, each representing a natural element: Earth, Water, Fire, Air, and Ether (Space). Out of 5, 4 of these temples are  located in Tamil Nadu and 1 Is in Andhra Pradesh, embodying the Hindu philosophy that nature's elements are manifestations of Shiva. In the temples, Shiva is said to have manifested himself in the respective forms of the five elements.",
    hasImage: false,
    subPlaces: [
      {
        name: "Earth – Bhumi Lingam – Ekambareshwar Temple",
        location: "Kanchipuram",
        description:
          "Earth – Bhumi Lingam – Ekambareshwar Temple – Kanchipuram - Shiva is worshipped as Ekambareswarar or Ekambaranathar, and is represented by the lingam, with his idol referred to as Prithvi (earth) lingam. The temple complex covers 25 acres and is one of the largest in India. It houses four gateway towers known as gopurams. The tallest is the southern tower, with 11 stories and a height of 58.5216 metres (192 ft), making it one of the tallest temple towers in India. The temple complex houses many halls; the most notable is the thousand-pillared hall built during the Vijayanagara period. Legend has it that once Parvati, the consort of Shiva, wanted to expiate herself from sin by doing penance under the temple's ancient Mango tree near the Vegavati river. She created the lingam out of wet soil. This lingam is now covered with silver. ",
        images: [bhumiLingam],
        source: "",
      },
      {
        name: "Water – Varuna/Jambu Lingam – Jambukeshwarar Temple",
        location: "Thiruvanaikaval, near Trichy",
        description:
          "Water – Varuna/Jambu lingam – Jambukeshwarar Temple – Thiruvanaikaval, near Trichy - The sanctum of Jambukeswara has the copper plated lingam and an underground water stream, and despite draining the water out, it is always filled with water. Once, Parvati mocked Shiva's penance for the betterment of the world. Shiva wanted to condemn her act and banished her to the earth from Mount Kailash (Shiva's heavenly abode) to do penance. Parvati, in the form of Akhilandeshwari as per Shiva's wish, found the Jambu forest to conduct her penance. She made a lingam out of water of the river Kaveri (also called as river Ponni) under the Venn Naaval tree (the jambu tree on top of the saint Jambu) and commenced her worship. The lingam is known as Appu Lingam or Jala Lingam (Water Lingam). There are five enclosures inside the temple. The massive outer wall covering the fifth precinct, known as the Vibhuti Prakara, stretches over a mile and is two feet thick and over 25 feet high. Legend maintains that the wall was built by Shiva working with the labourers.[10] The fourth precinct contains a hall with 796 pillars and measures 2436 feet by 1493.",
        images: [jambuLingam],
        source: "",
      },
      {
        name: "Fire – Agni/Jyothi Lingam – Annamalaiyar Temple",
        location: "Thiruvannamalai",
        description:
          "Fire – Agni/Jyothi Lingam – Annamalaiyar Temple – Thiruvannamalai - Shiva is worshipped as Annamalaiyar or Arunachaleshwar, and is represented by a silver plated lingam, with his idol referred to as Agni lingam. The sanctum inside is always lit by fire lamps. The 9th-century Shaiva saint poet Manikkavacakar composed the Tiruvempaavai here. The temple complex covers 10 hectares and is one of the largest in India. It houses four gateway towers known as gopurams. The tallest is the eastern tower, with 11 stories and a height of 66 metres (217 ft), making it one of the tallest temple towers in India built by Sevappa Nayakar (Nayakar dynasty). The temple complex houses many halls; the most notable is the thousand-pillared hall built during the Vijayanagar period. The Karthika Deepam festival is celebrated during the day of the full moon between November and December, and a huge beacon is lit atop the nearby Annamalai hill. It can be seen from miles around, and symbolises the Shiva lingam of fire joining the sky. The event is witnessed by three million pilgrims. On the day preceding each full moon, pilgrims circumnavigate the temple base and the Annamalai hills in a worship called Girivalam, a practice carried out by one million pilgrims yearly. ",
        images: [jyothiLingam],
        source: "",
      },
      {
        name: "Ether/Space – Indra/Akasha Lingam – Thillai Natarajar Temple",
        location: "Chidambaram",
        description:
          'Ether/ Space – Indra/Akasha Lingam – Thillai Natarajar Temple – Chidambaram - Chidambaram, the name of the city and the temple, literally means "atmosphere of wisdom" or "clothed in consciousness"; the temple architecture symbolises the connection between the arts and spirituality, creative activity and the divine.The temple wall carvings display all the 108 karanas from the Natya Shastra by Bharata Muni, and these postures form a foundation of Bharatanatyam, a classical Indian dance. The present temple was built in the 10th century when Chidambaram was the capital of the Chola dynasty, making it one of the oldest surviving active temple complexes in South India. After its 10th-century consecration by the Cholas who considered Nataraja as their family deity, Shiva himself is idolised in three forms, as a crystal lingam, as a formless space covered by curtains (Chidambaram rahasyam), and as the Nataraja performing the Ananda Tandava ("Dance of Delight") in the golden hall of the shrine Pon Ambalam. The temple is one of the five elemental lingas in the Shaivism pilgrimage tradition, and considered the subtlest of all Shiva temples (Kovil) in Hinduism. It is also a site for performance arts, including the annual Natyanjali dance festival on Maha Shivaratri.',
        images: [akashaLingam],
        source: "",
      },
      {
        name: "Air – Vayu Lingam – Srikalahasti Temple",
        location: "Srikalahasti, Andhra Pradesh",
        description:
          "The one Pancha Bhootam temple located outside Tamil Nadu. Shiva is worshipped as Srikalahastishvara — the lord of Vayu (wind). A lighted lamp inside the sanctum always flickers as if in a breeze, even though there is no air moving, symbolising the presence of Vayu (Air). It is one of the most celebrated Shiva temples in South India.",
        hasImage: false,
        source: "",
      },
    ],
  },
  {
    name: "1000-Pillar Temple — Madurai Meenakshi Temple",
    description:
      'Meenakshi Temple, also known as Meenakshi Sundareswarar Temple, is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai, Tamil Nadu, India. It is dedicated to Meenakshi, a form of Parvati, and her consort Sundareswarar (Shiva). Built around 1569 by Ariyanatha Mudaliyar, the minister of the Nayak dynasty, the hall is known for its structural beauty and detailed carvings. It is called the 1000-pillar temple because it houses a massive, 16th-century hall known as the Aayiram Kaal Mandapam, which contains a vast, intricately carved forest of pillars. Though often referred to as "1000," the hall actually holds 985, not 1000, granite pillars arranged in rows. While the Sangam literature mentions the temple city of Madurai, the existence of a temple is first referenced in the Tamil texts from 6th century CE. It is one of the Paadal Petra Sthalams, Shiva temples that are revered in the Tevaram verses composed by the Nayanars between the 6th and 11th century CE. The early structures of the temple were built during the reign of the Pandyas in the 12th to 13th century CE. It was later rebuilt by the Vijayanagara Empire in the 14th century CE, after its destruction by the armies of the Delhi Sultanate. The temple complex was later expanded extensively by the Madurai Nayaks in the 16th and 17th centuries. While a few structural improvements were made during the 18th and 19th centuries CE, the temple condition degraded due to negligence during the British Raj. After the Indian independence in the mid 20th century, the temple was restored with donations collected from people. Further restoration and kumbhabhishekam of the temple was conducted in 1974, 1995, and 2009. The temple conducts six pujas everyday, each comprising four rituals namely abhisheka (sacred bath), alankaram (decoration), naivedanam (food offerings) and deepa aradanai (lamp ceremony) for both Meenakshi and Sundareswarar. The rituals and festivals are accompanied with music from instruments such as nadhaswaram (pipe instrument), davandai and tavil (percussion instrument), often along with the recitation of the Vedas. The Hindus circumambulate the shrines clockwise before entering the shrine for a darshana. The Meenakshi shrine is typically visited before the Sundareswarar shrine by the pilgrims, as she is considered the primary deity of the complex. The Meenakshi temple hosts a festival in each month of the Tamil calendar. The Meenakshi thirukalyanam, which celebrates the wedding of Meenakshi and Sundareswarar, is celebrated over 15 days, and is the most attended festival. The festival, celebrated during the month of Chithirai, is part of the ‘Chithirai Thiruvizha’. The festivities include number of events such as the ‘Ther Thiruvizha’ (temple car festival) and ‘Theppa Thiruvizha’ (float festival). The wedding of the divine couple is regarded as an instance of a South Indian wedding with matrilineal emphasis, an arrangement referred as "Madurai marriage", which is in contrast with the "Chidambaram marriage", with patrilineal emphasis, named after the rituals at the Nataraja temple at Chidambaram. The festival includes the wedding ritual, where Alagar (Vishnu) gives away his sister Meenakshi, the royal bride, in marriage to Shiva, and a procession, where the idols of Meenakshi and Sundareswarar are taken in a temple car, pulled by volunteering devotees.',
    images: [meenakshi1, meenakshi2, meenakshi3, meenakshi4],
    source: "(src: Wikipedia, National Geographic)",
  },
  {
    name: "Rameshwaram Temple",
    description:
      "Ramanathaswamy Temple (Rāmanātasvāmi Kōyil) is a Hindu temple dedicated to the Hindu god Shiva located on Rameswaram island in the state of Tamil Nadu, India. It is one of the twelve Jyotirlinga temples. According to tradition, the lingam (an aniconic form of Shiva) of the Ramanathaswamy Temple was established and worshipped by Rama before he crossed the bridge called Rama Setu to the island kingdom of Lanka, identified with Sri Lanka. It is one of the Char Dham pilgrimage sites. In the Yuddha Kanda of the Ramayana, on their journey back to Ayodhya, Rama narrates to Sita the appearance and worship of Shiva in the form of a lingam on the island of Rameswaram before the construction of his bridge to Lanka. He describes the spot to be supremely sacred and capable of expiating major sins. In the Shiva Purana, Rama propitiates Shiva on the shore of Rameswaram in the form of a lingam by the repetition of mantras, meditation, and dancing. Pleased, the deity appeared before Rama and granted his requested boon of victory over Ravana. Rama then requested the deity to remain on the island to sanctify the world and offer his grace to all people. There are sixty-four Tīrthas (holy water bodies) in and around the island of Rameswaram, Tamil Nadu, India. According to Skānda Purāṇa, twenty-four of them are important. Bathing in these Tīrthas is a major aspect of the pilgrimage to Rameswaram and is considered equivalent to penance. Twenty-two of the Tīrthas are within the Rāmanāthasvāmī Temple. The number 22 indicates the 22 arrows in Rama's quiver. is famous for its massive corridor, which features 1,212 intricately carved, symmetrical pillars. These sandstone pillars, standing approximately 30 feet tall, form the world's longest temple corridor. Some reports suggest the overall temple complex may have up to 4,000 pillars in total.",
    images: [rames1, rames2, rames3],
    source: "(src: Famous Tamil Nadu Temples, Wikimedia Commons, Intermiles)",
  },
  {
    name: "Dhanushkodi",
    description:
      "Dhanushkodi is an abandoned town at the south-eastern tip of Pamban Island of the state of Tamil Nadu in India. It is south-east of Pamban and is about 24 kilometres (15 mi) west of Talaimannar in Sri Lanka. The town was destroyed during the 1964 Rameswaram cyclone and remains uninhabited in the aftermath. Although devoid of inhabitants, Dhanushkodi remains a tourist attraction due to its historical and mythological relevance. An estimated 1,800 people died in the cyclonic storm on 22 December 1964 including 115 passengers on board the Pamban-Dhanushkodi passenger train. The entire town was marooned and the Government of Madras declared Dhanushkodi as a ghost town, unfit for living. Around the 40th anniversary of the deadly cyclone, the sea around Dhanushkodi receded about 500 metres (1,600 ft) from the coastline, briefly exposing the submerged part of the town before massive tsunami waves struck the coast on 26 December 2004. The name Dhanushkodi means \"end of the bow\".It is significant for its deep mythological roots to the Ramayana, having served as the site where Lord Rama is believed to have marked the starting point of the Ram Setu bridge to Lanka. It serves as the starting point for the legendary Ram Setu, a 50 km long chain of limestone shoals connecting India's Rameswaram Island to Sri Lanka's Mannar Island.",
    images: [dhanush1, dhanush2],
    source: "(src: Kiomoi Travels, Tusk Travels)",
  },
  {
    name: "Pamban Bridge",
    description:
      "Pamban bridge was a railway bridge that connected the town of Rameswaram on Pamban Island with Mandapam in mainland India. Opened on 24 February 1914, it was India's first sea bridge. The Pamban bridge was the only surface transport link that connected Rameswaram to the mainland India until 1988, when a road bridge was constructed parallel to the railway bridge. In 2020, construction of a new bridge closer to the existing one began which was planned to eventually replace the existing bridge. The New Pamban Bridge was completed in 2024 and was opened for traffic in April 2025.",
    images: [pamban1, pamban2, pamban3],
    source: "",
  },
  {
    name: "The Great Chola Temples (UNESCO World Heritage Site)",
    description:
      "The Great Living Chola Temples were built by kings of the Chola Empire, which stretched over all of south India and the neighbouring islands. The site includes three great 11th- and 12th-century Temples: the Brihadisvara Temple at Thanjavur, the Brihadisvara Temple at Gangaikondacholisvaram and the Airavatesvara Temple at Darasuram. The Temple of Gangaikondacholisvaram, built by Rajendra I, was completed in 1035. Its 53-m vimana (sanctum tower) has recessed corners and a graceful upward curving movement, contrasting with the straight and severe tower at Thanjavur. The Airavatesvara temple complex, built by Rajaraja II, at Darasuram features a 24-m vimana and a stone image of Shiva. The temples testify to the brilliant achievements of the Chola in architecture, sculpture, painting and bronze casting.. The Thanjavur temple is also variously known as Thanjai Periya Kovil, the Thanjavur Big Temple or Rajarajeshwaram, temple of the God of Rajaraja. It is one of the largest Hindu temples and an exemplar of Tamil architecture. Rajaraja himself referred to his temple as Dakshina Meru or the southern abode of Lord Shiva. Construction of the temple began in about 1003-1004 CE, and it was consecrated by Rajaraja in 1010 CE. The Chola kingdom was economically prosperous – they not only controlled every important trading port in south India, but they also had a monopoly over production of the gold mines of Kolar, the pearl fisheries in the Gulf of Mannar, the diamond mines that lay between the rivers Krishna and Pennar on the Deccan plateau (the Golconda mines) and the gem production of Ceylon as well. They are recognized as one of the 44 unesco world heritage sites of india because of the following 4 criterias-\n\nCriterion (i): The three Chola temples of Southern India represent an outstanding creative achievement in the architectural conception of the pure form of the dravida type of temple.\n\nCriterion (ii): The Brihadisvara Temple at Thanjavur became the first great example of the Chola temples, followed by a development of which the other two properties also bear witness.\n\nCriterion (iii): The three Great Chola Temples are an exceptional and the most outstanding testimony to the development of the architecture of the Chola Empire and the Tamil civilisation in Southern India.\n\nCriterion (iv): The Great Chola temples at Thanjavur, at Gangaikondacholapuram and Darasuram are outstanding examples of the architecture and the representation of the Chola ideology.",
    images: [chola1, chola2, chola3],
    source: "(src: Moneycontrol, Incredible India)",
  },
  {
    name: "Velankanni Church",
    description:
      "The Basilica of Our Lady of Good Health, also known as Sanctuary of Our Lady of Velankanni, is a Christian shrine located at the town of Velankanni, Tamil Nadu, India. The shrine is dedicated to the Blessed Virgin Mary. The devotion has existed since the mid-sixteenth century, it is attributed to three separate events which occurred at the site: The apparition of the Madonna and Child to a slumbering shepherd boy, the miraculous healing of a handicapped buttermilk vendor and the rescue of Portuguese sailors from a deadly sea storm. The basilica is built in the Gothic style of architecture. The southern side was extended in 1928 and the northern in 1933. The Shrine Basilica contains three chapels, as well as Our Lady's Tank, Church Museum, Priests' Residence, Offering Center, Stations of the Cross, mysteries of the rosary, Shrine Mega Mahal and Velankanni Beach. The building is painted in white, except for the roof that is made of red tiles. For Goan and Konkani people, she is called \"Shantadurga\" (most compassionate one). A major event is the procession, where only women are allowed to pull the first car and a statue of Mary is in the last and most decorated one. People of other religions also take part. The pilgrims sometimes shave their heads as an offering and perform ear-piercing ceremonies, both being Hindu traditions. Another ritual considered sacred is dipping oneself in the pond. There is a holy flag which is lowered to signal the end of the festival.",
    images: [velan1, velan2, velan3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Thiruvalluvar Statue, Kanyakumari",
    description:
      "The Thiruvalluvar Statue, or Valluvar Statue, is a 40.6-metre-tall (133 ft) stone sculpture of Tamil poet and philosopher Valluvar, known as Thiruvalluvar, the author of the Thirukkural, an ancient Tamil work on morality. It is atop a small island near the town of Kanniyakumari on the southernmost point of the Indian peninsula in the state of Tamil Nadu, India, where the Bay of Bengal, the Arabian Sea and the Indian Ocean meet. It is currently the 25th tallest statue in India. During its silver jubilee celebrations on January 1, 2025, the Government of Tamil Nadu declared the statue as the “Statue of Wisdom”. The combined height of the statue and pedestal is 133 feet (41 metres), denoting the 133 chapters of the Thirukkural. This includes a 95-foot (29-metre) sculpture of Valluvar standing upon a 38-foot (12-metre) pedestal that represents the 38 chapters of Virtue, the first of the three books of the Kural text. The statue itself represents the second and third books of the Kural text, namely, Wealth and Love. The whole design signifies that wealth and love be earned and enjoyed on the foundation of solid virtue.[3] The right hand of the statue with three fingers pointing skywards signifies the three cantos of the Kural text, namely, Aram, Porul, and Inbam (Virtue, Wealth, and Love, respectively), combined.[4] The head of the statue stands at a height of 61 metres (200 ft) above the sea level. There is a glass bridge viz., Kanyakumari Glass bridge also called as Kanyakumari Glass fibre footover bridge, an footover bridge built for pedestrians to cross the sea connecting Thiruvalluvar Statue and Vivekananda Rock Memorial in Kanyakumari which was inaugurated on 30 December 2024. he monument was hit by the Indian Ocean tsunami on 26 December 2004 but stood unaffected. The statue is designed to survive earthquakes of unexpected magnitude, such as magnitude 6 on the Richter Scale occurring within 100 kilometres (62 mi). This is far beyond that of any event recorded in the regional history because the bedrock in the region is ancient and without known local faults.",
    images: [thiruv1, thiruv2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Vivekananda Rock Memorial",
    description:
      "Vivekananda Rock Memorial is a monument and popular tourist attraction in Kanyakumari, India's southernmost tip. The memorial stands on one of the two rocks located about 500 meters off mainland of Vavathurai, Tamil Nadu. It was built in 1970 in honour of Swami Vivekananda, who is said to have attained enlightenment on the rock. According to legends, it was on this rock that Goddess Kanyakumari (Parvathi) performed tapas in devotion of lord Shiva. A meditation hall known as Dhyana Mandapam is also attached to the memorial for visitors to meditate. The design of the mandapa incorporates different styles of temple architecture from all over India. The rocks are surrounded by the Laccadive Sea where the three oceans Bay of Bengal, the Indian Ocean and the Arabian Sea meets. The memorial consists of two main structures, the Vivekananda Mandapam and the Shripada Mandapam. The establishment of Vivekananda Kendra—the Living Memorial alongside the stone structure of the Rock Memorial—was mentioned in 1964. After the groundwork of about nine years, Vivekananda Kendra was officially founded on 7 January 1972 (the 108th birth anniversary of Swami Vivekananda by the Hindu calendar). On that day, as the sun rose, a saffron flag with Om inscribed on it was unfurled on the Vivekananda Rock Memorial to celebrate the founding of the Vivekananda Kendra: a spiritually oriented service mission of a non-monastic order.",
    images: [vive1, vive2, vive3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Group of Monuments at Mahabalipuram (UNESCO World Heritage Site)",
    description:
      "This group of sanctuaries, founded by the Pallava kings, was carved out of rock along the Coromandel coast in the 7th and 8th centuries. It is known especially for its rathas (temples in the form of chariots), mandapas (cave sanctuaries), giant open-air reliefs such as the famous 'Descent of the Ganges', and the temple of Rivage, with thousands of sculptures to the glory of Shiva. It is on the Coromandel Coast of the Bay of Bengal, about 60 kilometres (37 mi) south of Chennai. The site has 40 ancient monuments and Hindu temples, including one of the largest open-air rock reliefs in the world: the Descent of the Ganges or Arjuna's Penance. The monuments were built during the rule of the Pallava dynasty.\n\nThe ratha temples, in southern Mahabalipuram, are carved in the shape of chariots. Their artists used naturally occurring blocks of diorite and granite in sand, carving legends in stone. The best-known are the five monolithic structures projecting above the beach, known as the Five Rathas or the Pandava Rathas. In the Mahabharata, the Pandavas are five brothers with a common wife, Draupadi. Although the symbolism and grouping of the temples have led to these popular names, they are neither true rathas nor dedicated to the Pandavas. The Dharmaraja ratha has a square floor plan within a rectangular frame (26.75 ft x 20.67 ft), and is 35.67 feet high. It has an open porch supported by pillars. The temple's pyramidal tower consists of a vimana of shrinking squares, capped by an octagonal shikhara. There is evidence that it had (or was intended to have) a finial. Its pillars have seated lions at the base. It has three levels; the lowest is solid (probably never carved out), and the upper two have shrines. The two upper levels are connected by stairs carved into the stone. The middle level has two shrines, and the uppermost has one. The ratha walls have carvings and inscriptions, one mentioning Narasimhavarman I. Bhima Ratha (next to the Dharmaraja Ratha) is massive and has a roof resembling a vaulted barrel, reminiscent of woodwork. The ratha is 46 feet (14 m) long, about 25 feet (7.6 m) high and about 25 feet wide. Its incomplete interior was probably intended to house a reclining Vishnu (anantasayana). Unlike the other rathas, the temple has no inscriptions or sculptures. Its vimana is intricately carved on both sides of the roof. The cornice has seven pairs of kudus (Sanskrit: gavaksha). Above it are alternating salas and kutas (types of aediculae), forming thirteen small vimanas. Above this layer are five grivas (necks, clerestory) carved into the shrine, like a niche flanked by small pilasters. The two on each side are the same size, and the middle one is larger. There is structural evidence on the top of eighteen original kalashas and two tridents. Arjuna Ratha, adjacent to Bhima Ratha, is also incomplete. One of the larger monuments, it is about six times smaller in area than the Dharmaraja Ratha. The unfinished Nakula Sahadeva Ratha is an apsidal temple, a relatively-uncommon Hindu design found in Aihole and elsewhere in India.",
    images: [mahab1, mahab2, mahab3, mahab4],
    source: "(src: Mahabalipuram, Alamy, Wikipedia, NDTV)",
  },
  {
    name: "Mountain Railways of India — Nilgiri Mountain Railway (UNESCO World Heritage Site)",
    description:
      "The Nilgiri Mountain Railway (NMR) in Tamil Nadu is a UNESCO World Heritage Site (added in 2005) and a premier mountain railway in India. Built by the British in 1908, this 46-km, meter-gauge line connects Mettupalayam to the hill station of Udhagamandalam (Ooty) via Coonoor. It is renowned for being the only rack-and-pinion railway in India, navigating steep slopes with a 1 in 12.5 gradient, and features 16 tunnels and over 250 bridges. The construction of the Nilgiri Mountain Railway, a 46-km long metre-gauge single-track railway in Tamil Nadu State was first proposed in 1854, but due to the difficulty of the mountainous location the work only started in 1891 and was completed in 1908. This railway, scaling an elevation of 326 m to 2,203 m, represented the latest technology of the time. The uphill journey takes around 290 minutes (4.8 hours), and the downhill journey takes 215 minutes (3.6 hours). It has the steepest track in Asia with a maximum gradient of 8.33%.[3] During Meter Gauge era in 1990s, The Nilgiri Express used to run between Chennai(then Madras) & Udhagamandalam(then Ooty) directly. Timings were:- Madras 21.00; Ooty 10.20 & in return:- Ooty 16.30; Madras 05.50.But it was stopped after NMR got UNESCO World Heritage Tag in 1994. As of 2007, a daily train crosses the rack section, which starts from Mettupalayam at 07:10 and reaches Udhagamandalam at noon. The return train starts from Udhagamandalam at 14:00, and reaches at 17:35. The train is scheduled to connect to the Nilgiri Express, which travels from Mettupalayam to Chennai via Coimbatore. A summer special service runs in April and May, starting from Mettupalayam at 09:30 am and from Udhagamandalam at 12:15 pm. Between Coonoor and Udagamandalam, four daily trains run each way.\n\nEven though the NMR supplies networked computerized ticketing systems for onward journeys, it still issues Edmondson style manual tickets for the Udhagamandalam-Mettupalayam journey to preserve its 'World Heritage Site' status. Ticket booking is similar to conventional trains and can be done via the Indian Railway website. It is advisable to book tickets well in advance, especially during peak season. Stations – Mettupalayam 9MTP), Kallar(QLR), Adderly (ADY), Hillgrove(HLG), Runneyemede(RME), Coonoor(ONR), Wellington(WEL), Aravankadu(AVK), Ketti(KXT), Lovedale(LOV), Fern hill(FER), Udhanagmandalam(UAM)/Ooty.",
    images: [nilgiri1, nilgiri2],
    source: "",
  },
  {
    name: "Trichy Malaikottai (Rockfort)",
    description:
      "Malaikottai, better known as Rockfort, is a living record of Tamil Nadu's past glory and its historical heritage. Founded at the heart of Tiruchirappalli (Trichy), the very old fortification built on a colossus immature rock mass is over 3.8 billion years old; one of the oldest geological buildings in the world. Standing very high above the city, Malaikottai is a history, religion, and culture-telling monument as well. The past of Malaikottai was inextricably linked with the emergence and decline of South Indian dynasties. Its strategic position made it an extremely valuable fort to be held by one or another, starting from the Pallavas right up to the Nayaks and Marathas. Initially, the Pallavas hewed temples out of the ancient rock, and later in the latter part in the Nayak period the fort was fortified and expanded to its present size. The fort played an important role in the Carnatic Wars of the 18th century, when it was fought for hard by the British and French forces. Capturing it was crucial for the control of the region, which resulted in a series of minor battles and fights. It was finally the British who captured the fort and it later became a major stronghold of theirs in the great wars. One of the most impressive things about the fort is that it extends over the natural rock formations with man-made constructions. The fort, situated on a 273-feet rock, offers magnificent views of Trichy and the plains surrounding it. Aside from this, Ucchi Pillayar Temple, which is the temple of Lord Ganesha, is the main attraction of fortification areas. It is believed that Lord Ganesha found refuge at the top of this hillock when he left Srirangam after setting up the idol of Ranganathan. Buried deep within the rock is the Thayumanavar Temple, a beautiful temple of Shiva, as much celebrated in stories as for beauty with Dravidian architecture. This temple comes under this category because the mythology tells us Lord Shiva assumed the guise of a mother (Thayumanavar) so that he could help a woman give birth when she was in labor. There are wall sculptures and inscriptions of Hindu mythology stories around it, adding cultural and religious heritage. But the summit is reached after climbing nearly 400 steps. During the ascent to the summit, visitors are treated to gigantic views of the city below and the green pastures, and the Kaveri River flowing its way down the plains.",
    images: [malai1, malai2],
    source: "(src: TripAdvisor)",
  },
  {
    name: "Srirangam Ranganathaswamy Temple",
    description:
      "The Ranganathaswamy Temple is a Hindu temple dedicated to Ranganathar (a form of Vishnu) and his consort Ranganayaki (a form of Lakshmi). The temple is located in Srirangam, Tiruchirapalli, Tamil Nadu, India. The Srirangam temple stands as the largest religious complex in the world in active worship with a continuous historical presence as a Hindu temple. The temple complex has been nominated as a UNESCO World Heritage Site, and is in UNESCO's tentative list.[4] In 2017, the temple won the UNESCO Asia Pacific Award of Merit 2017 for cultural heritage conservation, making it the first temple in Tamil Nadu to receive the award from the UNESCO. The annual 21-day festival conducted during the Tamil month of Margazhi (December–January) attracts 1 million visitors. The Ranganathaswamy Temple town has over 800 inscriptions, of which nearly 640 are on temple walls and monuments. Many of these relate to gifts and grants by rulers or the elite, while others relate to the temple's management, scholars, dedication and general operation. The inscriptions have been a source of information about South Indian history, culture, economy and social role.[76] These range from the late 9th century to the rule of Aditya Chola I, to the last historical ones from the 16th century. Others are from the times of Cholas, Nayakas, Pandyas, Hoysalas and the Vijayanagara era. The historic inscriptions at the Ranganathaswamy Temple are in six major Indian languages: Tamil, Sanskrit, Kannada, Telugu, Marathi and Odia. The annual temple chariot festival, called Rathothsavam is celebrated during the Tamil month of thai (January–February) and the processional deity, utsavar is taken round the temple in the temple car. The Lord rests on the five-headed snake, Adisesha, representing serene, conscious sleep (Yoga Nidra). The deity lies on an east-west axis, with the head facing west and the feet facing east, yet with the idol facing towards the south, looking toward Lanka. It is a large, historically significant idol carved from black stone measuring roughly 24 feet. The reclining posture is so grand that the entire idol cannot be seen at once, often requiring specific viewing points to see. The temple is revered as Bhooloka Vaikuntham (Vaikuntha on Earth), and the deity is treated as a living emperor who requires a \"waking ceremony\" (Visvaroopa Seva) each morning.",
    images: [sri1, sri2, sri3],
    source: "(src: Wikipedia, cottage9)",
  },
];

const facts = [
  "Tamil Nadu is home to one of the world's oldest civilizations, with the Tamil language being one of the longest-surviving and the first recognized classical language.",
  "It is the 11th largest state by area",
  "It is the 2nd largest economy in India with a GSDP of over $280 billion.",
  "The state contributes significantly to India's manufacturing, producing 60% of the country's matches and acting as a hub for automobile manufacturing.",
  "It is the 6th most populated state in India, with a high literacy rate of around 80.09%.",
  "The state is the birthplace of legendary mathematician Srinivasa Ramanujan and former President APJ Abdul Kalam.",
  "Archaeological evidence indicates that the Tamil Nadu region could have been inhabited more than 385,000 years ago by archaic humans.",
  "It has the country's 9th-highest GSDP per capita of ₹315,220 (US$3,700) and ranks 11th in human development index.",
  "Tamil Nadu is one of the most industrialised states, with the manufacturing sector accounting for nearly one-third of the state's GDP.",
  "The state has three biosphere reserves, mangrove forests, five National Parks, 18 wildlife sanctuaries and 17 bird sanctuaries.",
  "The Sangam literature historically known as 'the poetry of the noble ones’ connotes the early classical Tamil literature and is the earliest known literature of South India. This collection contains 2381 poems in Tamil composed by 473 poets, some 102 anonymous.",
  "Silappathikaram or Silappatikaram is the earliest Tamil epic. It is a poem of 5,730 lines in almost entirely akaval (aciriyam) meter. The epic is a tragic love story of an ordinary couple, Kaṇṇaki and her husband Kōvalaṉ.",
  "Thirukural is an ancient Tamil language moral literature . It is a collection of eighteen books in the Sangam literary classification , known as the “Pathinenkeezhkanakku” , and consists of 1,330 couplets. It is essentially a book of life. It explains the basic qualities that humans need to live well in their inner and outer lives. The book is considered one of the world's best works on morality. It is known for its generality and secular nature. Its author is known as Thiruvalluvar . The time of this book is variously estimated to be from 300 BCE to the 5th century CE.",
  "Tamilnadu has the third largest urbanized population in the country after maharashtra and Uttar Pradesh.",
  "The key industries of the state are heavy engineering and manufacturing-based companies and textiles.",
  "There are a number of rivers in Tamil Nadu, but some of the major ones include Kaveri River, Vaigai River, Palar River, Noyyal River, Bhavani River, Cheyyar River, and Thamirabarani River.",
  "Major Industries in the State are cotton, heavy commercial vehicles, auto components, railway coaches, power pumps, leather tanning industries, cement, sugar, paper, automobiles and safety matches.",
  "Main mineral wealth of the state is granite, lignite and limestone.",
  "The state is an important exporter of tanned skin and leather goods, yarn, tea, coffee, spices, engineering goods, tobacco, handicrafts and black granite. Tamil Nadu contributes to 60 per cent of the tannery industry in India.",
  "Over 70% of all firecrackers used during Diwali come from the town of Sivakasi in Tamil Nadu.",
];

const artGallery = [
  {
    title: "Ambur Biriyani",
    emoji: "🍛",
    color: "#D4883A",
    desc: "Famous biriyani from Ambur, Vellore",
    image: gAmbur,
  },
  {
    title: "Tirunelveli Halva",
    emoji: "🍮",
    color: "#F4A84A",
    desc: "Iconic wheat halva from Tirunelveli",
    image: gTirunelveliHalva,
  },
  {
    title: "Dindigul Talapakatti Biriyani",
    emoji: "🍚",
    color: "#E8733A",
    desc: "Famous seeraga samba biriyani",
    image: gDindigul,
  },
  {
    title: "Madurai Malli",
    emoji: "🌸",
    color: "#F4D8E8",
    desc: "Famous jasmine flowers of Madurai",
    image: gMalli,
  },
  {
    title: "Madurai Butter Bun",
    emoji: "🥐",
    color: "#F4E884",
    desc: "Iconic local bun with butter",
    image: gButterBun,
  },
  {
    title: "Madurai Jigurthanda",
    emoji: "🍨",
    color: "#E8C8E8",
    desc: "Cold dessert drink with milk, almond gum, ice cream",
    image: gJigarthanda,
  },
  {
    title: "Uthukuli Venne (Butter)",
    emoji: "🧈",
    color: "#F8F0C4",
    desc: "Pure white butter from Uthukuli, Erode",
    image: gUthukuli,
  },
  {
    title: "Thoothukoodi Muthu (Pearl)",
    emoji: "🔮",
    color: "#E8F4F8",
    desc: "Famous pearls from Thoothukudi coast",
    image: gMuthu,
  },
  {
    title: "Salem Mango (Malgova)",
    emoji: "🥭",
    color: "#F8C840",
    desc: "Giant Malgova mangoes from Salem",
    image: gSalemMango,
  },
  {
    title: "Erode Turmeric",
    emoji: "🌿",
    color: "#F4B830",
    desc: "Erode — the largest turmeric market in the world",
    image: gErodeTurmeric,
  },
  {
    title: "Tiruppur Garments",
    emoji: "👕",
    color: "#B4D8E8",
    desc: "Knitwear capital of India",
    image: gTiruppur,
  },
  {
    title: "Kanchipuram Silk Sarees",
    emoji: "🥻",
    color: "#D4A4E8",
    desc: "Famous gold-bordered silk sarees",
    image: gKanchiSilk,
  },
  {
    title: "Madurai Sungdi Sarees",
    emoji: "🧣",
    color: "#E8A8C8",
    desc: "Traditional cotton sarees of Madurai",
    image: gSungdi,
  },
  {
    title: "Bharatanatyam",
    emoji: "💃",
    color: "#E88844",
    desc: "Classical Indian dance form from Tamil Nadu",
    image: gBharatanatyam,
  },
  {
    title: "Dosa & Idli",
    emoji: "🥞",
    color: "#F4E8C8",
    desc: "Iconic South Indian breakfast",
    image: gDosaIdli,
  },
  {
    title: "Ven Pongal",
    emoji: "🍲",
    color: "#F4D89C",
    desc: "Savoury rice & lentil dish — breakfast staple",
    image: gVenPongal,
  },
  {
    title: "Vada Sambar",
    emoji: "🥣",
    color: "#D4884A",
    desc: "Crispy lentil fritters with spiced lentil soup",
    image: gVadaSambar,
  },
  {
    title: "Rasam",
    emoji: "🥣",
    color: "#C84830",
    desc: "Thin, tangy tamarind soup — digestive staple",
    image: gRasam,
  },
  {
    title: "Panniyaram",
    emoji: "🍡",
    color: "#D4A864",
    desc: "Crispy or soft rice batter balls",
    image: gPanniyaram,
  },
  {
    title: "Neyi Appam",
    emoji: "🍩",
    color: "#D4884A",
    desc: "Deep-fried ghee sweet rice cakes",
    image: gNeyiAppam,
  },
  {
    title: "Poi Kaal Kudurai",
    emoji: "🐎",
    color: "#D4C8B4",
    desc: "Means 'False-leg horse' — a village folk dance",
    image: gPoiKaal,
  },
  {
    title: "Karagaattam",
    emoji: "🏺",
    color: "#A8D4B4",
    desc: "'Pot dance' — folk dance balancing pot on head while dancing",
    image: gKaragattam,
  },
  {
    title: "Thanjavur Paintings",
    emoji: "🖼️",
    color: "#F4D870",
    desc: "Made with thin gold foils/sheets — classical art form",
    image: gThanjavur1,
  },
  {
    title: "Thanjavur Paintings — Radha Krishna",
    emoji: "🖼️",
    color: "#E8C870",
    desc: "Classical Thanjavur work depicting Radha & Krishna with gold foil & gem inlay",
    image: gThanjavur2,
  },
  {
    title: "Silambattam",
    emoji: "🥋",
    color: "#D4A8A8",
    desc: "Ancient Tamil weapon-based martial art merging fighting and dance-like fluidity",
    image: gSilambattam,
  },
  {
    title: "Thanjavur Thalaiyaati Bommai",
    emoji: "🪆",
    color: "#E8B488",
    desc: "Iconic Thanjavur dancing dolls with bobbing heads — GI-tagged craft",
    image: gThalaiyaati,
  },
  {
    title: "Tamil Nadu Sappadu (Feast)",
    emoji: "🍛",
    color: "#A8C878",
    desc: "Traditional banana-leaf meal — rice, sambar, rasam, poriyal, kootu, payasam",
    image: gFeast,
  },
];

