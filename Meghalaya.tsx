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
import MeghalayaMap from "@assets/TN_map_1776628923935.jpg";
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
export default function TamilNaduPage() {
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
                Northeast India
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Meghalaya
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
               Abode of clouds 
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Shillong" },
                  { label: "Population", value: "34.47 lakhs" },
                  { label: "Area", value: "22,429 sq km" },
                  { label: "Founded", value: "21 January 1972" },
                  { label: "Language", value: "Kasi,Garo" },
                  { label: "Districts", value: "12 Districts" },
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
        <Section title="Capital" icon="🏛️">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-6 border border-red-100 dark:border-red-900/30 text-center">
            <div className="text-5xl mb-3">🌆</div>
            <h3
              className="text-2xl font-bold text-foreground mb-1"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Shillong
            </h3>
            <p className="text-muted-foreground text-sm">
             Shillong - 'Scotland of the East'
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of Meghalaya" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(MeghalayaMap, "Map of Meghalaya")}
            >
              <img
                src={MeghalayaMap}
                alt="Map of Meghalaya"
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
              Meghalaya, a state in Northeast India, is a land of profound natural beauty and cultural heritage. Its name, an etymology derived from the Sanskrit words megha and alaya, translates literally to the "abode of clouds." This title is a direct reflection of its geography and climate; as a mountainous plateau primarily composed of Archean rock formations, it is the wettest region on Earth. The towns of Mawsynram and Cherrapunji hold world records for annual rainfall, creating a landscape defined by deep gorges, dramatic waterfalls, and a persistent mist.
              
            </p>
            <p className="text-foreground">
              The state’s history is deeply rooted in its indigenous tribes—the Khasis, Garos, and Jaintias. These groups maintained independent kingdoms until coming under British administration in the 19th century. Originally part of Assam, Meghalaya achieved full statehood on January 21, 1972. This historical backdrop has preserved a unique religion and social structure; while about 75% of the population is Christian, many still practice indigenous faiths like Niamtre and Songsarek. Furthermore, the state is famous for its matrilineal system, where lineage and inheritance are traced through the mother.
            </p>
            <p className="text-foreground">
             Meghalaya's moisture-rich environment supports a spectacular array of flora and fauna. Approximately 70% of the state is forested, including dense subtropical forests and "sacred groves" preserved by local communities. It is home to the rare Clouded leopard, the Hoolock gibbon, and the endemic insect-eating pitcher plant.
            </p>
            <p className="text-foreground">
          Economy remains predominantly agrarian, with nearly two-thirds of the workforce engaged in agriculture. While rice is the staple food grain, the state is a significant producer of cash crops like pineapples, bananas, and high-quality The turmeric. Though rich in minerals like coal and limestone, industrial development is limited, with the state increasingly focusing on ecotourism and its vast hydroelectric potential. While English is the official language, Khasi and Garo remain the most widely spoken tongues, embodying the enduring spirit of the "abode of clouds”.   
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Meghalaya, mapsofindia.com)
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
        <Section title="Facts about Meghalaya" icon="💡">
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
            Scroll horizontally to explore Meghalaya's iconic foods, crafts,
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
    name: "Wangala Festival",
    tagline: "The Festival of the Hundred Drums",
    description:
      "The Wangala Festival, also known as the Festival of the Hundred Drums, is the most significant harvest celebration for the Garo people of Meghalaya, Assam, and Bangladesh. Held annually between September and December, it is a thanksgiving ceremony dedicated to Misi Saljong, the Sun God, to acknowledge a bountiful harvest. The celebration begins with sacred rituals like Rugala, where rice beer is poured, and Cha·chat So·a, the burning of incense by the village priest (Kamal). The highlight of the festival is the synchronized beating of 100 long drums (Dama), accompanied by the melodic sounds of flutes and brass instruments. Men and women dress in vibrant traditional attire—the Dakmanda and Gando—adorned with feathered headgear called do’me. They perform energetic folk dances, including the Chambil Mesaa (Pomelo Dance) and rhythmic "rapping" known as Katta Doka. While traditionally a religious event for the Songsarek (animistic) community, the modern 100 Drums Festival in Asanag has become a major cultural landmark, attracting global tourists to witness the preservation of Garo heritage.",
    images: [WangalaFestival1,WangalaFestival2, WangalaFestival3],
    source: "(src: Wikipedia)",
  },
  {
    name: " Shad Suk Mynsiem",
    tagline:
      "The heart of kasi culture",
    description:
      "The Shad Suk Mynsiem festival is celebrated by the Khasi tribe in Meghalaya in April. The festival is a celebration of the harvest season and is dedicated to nature. The main attraction of the festival is the Shad Suk Mynsiem dance, which is performed by young Khasi women wearing traditional attire and holding parasols. The dance is believed to invoke the blessings of the gods for a bountiful harvest. The festival is a colorful and vibrant event that showcases the unique cultural heritage of the Khasi tribe in Meghalaya.",
    images: [ShadSukMynsiem1,ShadSukMynsiem2],
    source: "tse3.mm.bing.net",
  },
  {
    name: "Shillong Winter Festival",
    tagline:
      "Winter tales",
    description:
      "The Shillong Winter Festival is a vibrant annual event held in December that celebrates the rich cultural heritage of Meghalaya. Organized by the Meghalaya Tourism Development Corporation, the festival transforms the "Abode of Clouds" into a hub of festivity. It features a diverse array of activities, including traditional dance performances, live music, and adventure sports. Visitors can explore various food stalls offering local delicacies or shop for indigenous crafts. This festival provides a unique opportunity to experience the warmth of Khasi traditions and the scenic beauty of Shillong during the crisp winter season.",
    images: [ShillongWinterFestival],
    source: "(src:tse.mm.bing.net)",
  },
  {
    name: "Strawberry Festival",
    tagline:
      "From Farm to Feast",
    description:
      "The Strawberry Festival is an annual festival celebrated in the town of Sohra (Cherrapunji) in Meghalaya in February. The festival is a celebration of the harvest season of strawberries in the region, which is known for its high-quality strawberries. The festival is marked by various events and activities, including strawberry picking, traditional dance performances, food stalls, and adventure sports. The festival provides an opportunity for visitors to taste and buy the fresh strawberries from the local farmers.The festival is a popular event that attracts visitors from all over the world who are interested in experiencing the unique flavor of the locally grown strawberries. The festival also provides a platform for local farmers to showcase their produce and promote eco-tourism in the region. The Strawberry Festival is a testament to the diverse cultural heritage of Meghalaya and is a must-visit destination for anyone interested in exploring the state’s unique customs and traditions."
.",
    images: [StrawberryFestival],
    source: "(src: tse1.mm.bing.net)",
  },
  {
    name: "Durga Puja",
    tagline:
      "The festival of Padhinettam Perukku, also known as 'Aadi Perukku', held on the 18th day of the Tamil month of Aadi.",
    description:
      ' In Meghalaya, Durga Puja is a vibrant testament to the state’s cultural diversity, where tradition meets the serene beauty of the hills. While the festival is celebrated with grandiosity across India, Meghalaya’s observance is uniquely characterized by its hilly terrain and communal harmony. Unlike the massive, crowded metropolitan celebrations, Puja here is defined by over 250 community pandals scattered across the Khasi, Jaintia, and Garo Hills, where the cool mountain air adds a distinct, tranquil atmosphere to the festivities.What sets this state apart is the seamless integration of local tribal culture and urban traditions. In the capital city of Shillong, the celebrations are exceptionally inclusive, often seeing participation from various ethnic communities, making it a "People’s Festival" rather than just a religious one. The Central Puja Committee coordinates these efforts to ensure peace and environmental consciousness, often emphasizing eco-friendly idols. The immersion processions are particularly striking; instead of vast riverbanks, the idols are carried through narrow, winding mountain roads to local immersion points, creating a picturesque and intimate farewell to the Goddess that is truly unlike any other state in the country.'
',
    images: [DurgaPuja1,DurgaPuja2],
    source: "tse3.mm.bing.net",
  },
  {
    name: "Behdeinkhlam",
    tagline: "Derived from the Pnar words 'behdein' (to drive away) and 'khlam' (plague or disease), ",
    description:
      "Behdienkhlam is the most significant cultural and harvest festival of the Pnar people in Meghalaya, India, primarily celebrated in the Jaintia Hills. The name itself is deeply symbolic, derived from the Pnar words 'behdein'(to drive away) and 'khlam' (plague or disease), reflecting its historical roots as a ritual to ward off cholera and evil spirits. Held annually in July after the sowing season, the festivities serve as a powerful invocation for a bountiful harvest and the collective well-being of the community.The celebration is marked by vibrant rituals and traditional sports. Men symbolically drive away negative energies by beating house roofs with bamboo poles, while elaborate, tall structures known as Rots are paraded through the streets and eventually submerged in the sacred mud pool of Aitnar. A central highlight is a unique game called Dad-lawakor, similar to football but played with a wooden ball, and the Iatan-Bhang, a spirited tug-of-war over a stripped wooden log. While the men engage in rhythmic dancing to the beat of drums and flutes, women play a crucial role by offering sacrificial food to honor their ancestors. This festival beautifully intertwines spiritual devotion with community bonding and cultural preservation.
",
    images: [Behdeinkhlam1,Behdeinkhlam2,Behdeinkhlam3],
    source: "(src: tse3.mm.bing.net,tse4.mm.bing.net,tse2.mm.bing.net)",
  },
  {
    name: "Laho Dance Festival",
    tagline:"The Joyful Pulse of Behdienkhlam
      "Attracts thousands, clad in orange robes, to the sacred spot where the ship landed.",
    description:
      "The Laho Dance of Meghalaya is a profound cultural tradition of the Pnar community, primarily celebrated during the Behdienkhlam festival. This social dance serves as a vibrant expression of communal unity and gratitude for a successful harvest. Distinguishing itself from many Indian folk traditions, the Laho Dance is performed without any musical instruments; instead, it relies on the rhythmic recitation of witty and satirical couplets that set the pace for the performers. The choreography typically features a woman linked between two men, moving in synchronized harmony to the melodic verses. Dancers are adorned in colorful traditional Khasi-Pnar attire, with women wearing elaborate gold and silver jewelry. Despite its significance, the dance faces modern challenges such as urbanization and a lack of institutional support.  ",
    images: [LahoDanceFestival],
    source: "auchitya.com",
  },
 
];

const historicalPlaces = [
  {
    name: "Nartiang Monoliths (Jaintia Hills)",
    description:
      "The Nartiang Monoliths, located in the West Jaintia Hills of Meghalaya, represent one of the most significant archaeological and cultural landmarks in Northeast India. This site serves as a profound testament to the Jaintia Kings' legacy, featuring the largest collection of monoliths found in a single area within the Khasi and Jaintia Hills. These megalithic structures were erected between the 15th and 18th centuries to commemorate the glorious reigns and military triumphs of the Jaintia rulers.The site is distinguished by two types of stones: the Mawlyngknot (horizontal flat stones) and the Mawnam (vertical upright stones). The most striking feature of the garden is the world’s tallest monolith, an impressive structure reaching approximately 8 meters in height. Beyond their architectural grandeur, the monoliths hold deep spiritual and historical value for the local tribes, symbolizing the enduring strength of ancestral traditions. Tucked away near the Nartiang market, the site offers a quiet, contemplative atmosphere for visitors looking to explore the ancient megalithic culture and the intriguing history of the Jaintia tribal kingdom.",
    images: [Mono1,Mono2,Mono3,Mono4],
    src: "tripxl.com"
  },
  {
    name: "Megalithic Bridge on the Um-Nyankanah",
    description:
      "The Megalithic Bridge at Thlumuwi is a remarkable 18th-century structure located in the West Jaintia Hills of Meghalaya, India. Spanning across the Um-Nyakanah (or Um-Nyankanah) River, this ancient engineering marvel was constructed using massive, single-stone slabs supported by tall, sturdy stone pillars. According to local history, it was built by Mar Phalangki and U Luh Lyngskor Lamare under the directive of a Jaintia King to facilitate travel after the capital was shifted from Sutnga to Nartiang.The bridge exemplifies the region's rich megalithic culture, where stone was not just a building material but a medium of historical record and utility. Designed to withstand the heavy monsoon rains of the Khasi-Jaintia Hills, the bridge remains a Monuments of National Importance under the protection of the Archaeological Survey of India. Its primitive yet effective design highlights the sophisticated architectural knowledge of the Jaintia people long before modern construction techniques.",
    images: [],
    source: "(src: Wikipedia, National Geographic)",
  },
  {
    name: "Megalithic Bridge on the Um-Kumbeh",
    description:
      "Built using colossal stone slabs, this megalithic bridge across Um-Kumbeh River is said to be constructed by Mar Phalangki and U Luh Lyngskor Lamare as per the local tradition. It was supposedly built by order of the Jaintia king when he shifted his capital to Nartiang in order to carry out trade between the new capital and his old capital of Sutnga. The stones used are dated to be from the 18th century CE.",
    images: [Bridge1,Bridge2],
    source: "(src: megalithic.co.uk)",
  },
  {
    name: "Caves of Meghalaya",
    description:
      "The Caves of Meghalaya comprise a large number of caves in the Jaintia, Khasi Hills, and Garo Hills districts in the Indian state of Meghalaya, and are amongst the longest caves in the world. Of the ten longest and deepest caves in India, the first nine are in Meghalaya, while the tenth is in Mizoram. The longest is Krem Liat Prah in the Jaintia Hills, which is 30,957 m (101,600 ft) long. The word 'Krem' means cave in the local Khasi language. The exploration of the Caves of Meghalaya is currently undertaken for both scientific and recreational pursuits,) and there are still many unexplored and partially explored caves in the state. The annual caving expeditions organized by Meghalaya Adventurers Association (MAA) are known as the 'Caving in the Abode of the Clouds Project'. Because they are located primarily in limestone formations, the caves continue to come under threat from the limestone mining industry." 
",
    images: [Caves1,Caves2],
    source: "(src:Wikipedia.com)",
  },
  {
    name: "Syndai Caves",
    description:
      "The Syndai Caves, located in the West Jaintia Hills of Meghalaya near the Bangladesh border, are a captivating blend of geological splendor and tribal history. Carved over millennia within the region's limestone terrain, these caverns are renowned for their stunning interior chambers filled with intricate stalactites and stalagmites. Beyond their natural beauty, the caves hold significant historical weight; they served as strategic hideouts and shelters for Jaintia warriors during ancient tribal wars and resistance against colonial forces.One of the most distinctive features is the entrance, which is framed by ancient stone carvings believed to date back to the reign of the Jaintia Kings. Inside, the cave system stretches for approximately 970 meters, featuring a labyrinth of narrow tunnels that open into vast, cathedral-like halls. Some formations within have even gained religious importance, with natural limestone shapes being worshipped as Shiva Lingams. Tucked away near Syndai village, the caves offer a rugged, authentic exploration experience for those looking to uncover the underground secrets of Meghalaya.",
    images: [Syndai1,Syndai2],
    source: "gosahin.com",
  },
  {
    name: "Nongriat Living Root Bridge",
    description:
      "The Double Decker Living Root Bridge in Nongriat, Meghalaya, is a masterpiece of ancient bioengineering, uniquely characterized by its two functional levels of intertwined tree roots. Crafted by the indigenous Khasi people, these bridges are grown rather than built, using the aerial roots of the Ficus elastica (rubber tree). Over several decades, roots are painstakingly guided across the Umshiang River until they take hold on the opposite bank, creating a structure that actually grows stronger as it ages.The bridge is renowned for its incredible durability, capable of supporting dozens of people and withstanding the intense monsoons of one of the wettest places on earth. Surrounded by vibrant subtropical rainforests and turquoise natural pools, it represents a perfect harmony between human utility and nature. Reaching this site requires a challenging trek of roughly 3,500 stone steps from Tyrna village, making it a symbol of both endurance and the sustainable ingenuity of Meghalaya’s mountain communities.",
    images: [Bridge1,Bridge2,Bridge3],
    source: "(src: gosomewhere.in,lostwithpurpose.com,cntraveller.in)",
  },
  {
    name: "Kiang Nongbah Monument (Jowai)",
    description:
      "The Kiang Nangbah Monument in Jowai, Meghalaya, stands as a profound tribute to U Kiang Nangbah, a legendary Jaintia freedom fighter who led an armed rebellion against British colonial expansion in the 19th century. Located in the picturesque West Jaintia Hills district, the monument is situated on the banks of the Myntdu River in a serene area known as Syntu Ksiar.
The structure itself is an elegant, hollow tower-like monument designed with traditional Jaintia architectural aesthetics. It serves as a symbolic reminder of Nangbah’s courage and his ultimate sacrifice; he was hanged by the British on December 30, 1862. According to local lore, his last words prophesied that if his head turned toward the east when he died, his country would eventually regain its freedom. Today, the memorial is a major historical landmark, drawing visitors who wish to honor the martyr’s legacy amidst the tranquil natural beauty of the Jaintia Hills.
",
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
