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
export default function PunjabPage() {
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
                North India
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Punjab
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Bread Basket of India
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Chandigarh" },
                  { label: "Population", value: "2.77 Crore" },
                  { label: "Area", value: "50,362 sq km" },
                  { label: "Founded", value: "1 November 1966" },
                  { label: "Language", value: "Punjabi" },
                  { label: "Districts", value: "23 Districts" },
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
        <Section title="Capital — Chandigarh" icon="🏛️">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-6 border border-red-100 dark:border-red-900/30 text-center">
            <div className="text-5xl mb-3">🌆</div>
            <h3
              className="text-2xl font-bold text-foreground mb-1"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Chandigarh
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Punjab — City Beautiful
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of Punjab" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(tnMap, "Map of Tamil Nadu")}
            >
              <img
                src={punjabMap}
                alt="Map of Punjab"
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
              Punjab is a state in northwestern India. Forming part of the larger Punjab region of the Indian subcontinent, the state is bordered by the Indian states and union territories of Himachal Pradesh to the north and northeast, Haryana to the south and southeast, Rajasthan to the southwest, Jammu and Kashmir to the north and Chandigarh — which is also its state capital that it shares with the neighbouring state of Haryana — to the east. To the west, it shares an international border with the identically named Pakistani province of Punjab. The state covers an area of 50,362 square kilometres (19,445 square miles), which is 1.53% of India's total geographical area.
            </p>
            <p className="text-foreground">
              Punjabi, written in the Gurmukhi script, is the most widely spoken and the official language of the state. The main ethnic group are the Punjabis, with Sikhs (57.7%) and Hindus (38.5%) forming the dominant religious groups. Three of the five traditional Punjab rivers — the Sutlej, Beas, and Ravi — flow through the state.
            </p>
            <p className="text-foreground">
              Punjab was enriched during the height of the Vedic period, but declined in predominance with the rise of the Mahajanapadas. The region formed the frontier of initial empires during antiquity including Alexander's and the Maurya empires. It was subsequently conquered by the Kushan Empire, Gupta Empire, and then Harsha's Empire. Punjab came under Muslim rule c. 1000 CE, and was part of the Delhi Sultanate and the Mughal Empire.
            </p>
            <p className="text-foreground">
              Sikhism, based on the teachings of Sikh Gurus, emerged between the 15th and 17th centuries. Conflicts between the Mughals and the later Sikh Gurus precipitated a militarisation of the Sikhs, resulting in the formation of a confederacy after the weakening of the Mughal Empire, which competed for control with the larger Durrani Empire. This confederacy was united in 1801 by Maharaja Ranjit Singh, forming the Sikh Empire.
            </p>
            <p className="text-foreground">
              The Punjab region is noted as the site of one of the earliest urban societies, the Indus Valley Civilisation that flourished from about 3000 B.C. and declined rapidly 1,000 years later, following the Indo-Aryan migrations that overran the region in waves between 1500 and 500 B.C. The rise of kingdoms and dynasties in Punjab is chronicled in the ancient Hindu epics, particularly the Mahabharata. The epic battles described in the Mahabharata are chronicled as being fought in what is now the state of Haryana and historic Punjab. The Gandharas, Kambojas, Trigartas, Andhra, Pauravas, Bahlikas (Bactrian settlers of the Punjab), Yaudheyas, and others sided with the Kauravas in the great battle fought at Kurukshetra. The bulk of the Rigveda was composed in the Punjab region between circa 1500 and 1200 BC.
            </p>
            <p className="text-foreground">
              A significant event in the late 15th century Punjab was the formation of Sikhism by Guru Nanak. The hymns composed by Guru Nanak were later collected in the Guru Granth Sahib, the central religious scripture of the Sikhs. The religion developed and evolved in times of religious persecution, gaining converts from both Hinduism and Islam. Mughal rulers of India tortured and executed two of the Sikh gurus—Guru Arjan (1563–1605) and Guru Tegh Bahadur (1621–1675)—after they refused to convert to Islam. The persecution of Sikhs triggered the founding of the Khalsa by Guru Gobind Singh in 1699 as an order to protect the freedom of conscience and religion, with members expressing the qualities of a Sant-Sipāhī ('saint-soldier').
            </p>
            <p className="text-foreground">
              The Sikh Empire spanned a total of over 200,000 sq mi (520,000 km2) at its zenith. After Ranjit Singh's death in 1839, the empire was severely weakened by internal divisions and political mismanagement. This opportunity was used by the East India Company to launch the First and Second Anglo-Sikh Wars. The country was finally annexed and dissolved at the end of the Second Anglo-Sikh War in 1849 into separate princely states and the province of Punjab. Eventually, a Lieutenant Governorship was established in Lahore as a direct representative of the Crown.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              It is regarded as the "Land of Five Rivers" and is known as the "Granary of India" due to its high agricultural fertility. It is widely celebrated as the sword arm of India and a land of brave warriors, holding a reputation for a vibrant culture, energetic music (bhangra), and immense hospitality.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Punjab, mapsofindia.com)
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
        <Section title="Facts about Tamil Nadu" icon="💡">
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
            Scroll horizontally to explore Tamil Nadu's iconic foods, crafts,
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
    name: "Lohri",
    tagline: "The Harvest Festival of Punjab",
    description:
      "Lohri is a midwinter folk and harvest festival that marks the passing of the winter solstice and the end of winter. It is a traditional welcome of longer days and the sun's journey to the Northern Hemisphere. It is one of the Indian harvest festivals observed on or near Makar Sankranti (in the month of Magha in the Indian calendar) and falls on the night before Maghi (in the month of Magh in the Punjabi calendar) which commonly falls on 13 January every year. A popular folklore in the Punjab region links Lohri to the tale of Dulla Bhatti. The central theme of many Lohri songs is the legend of Dulla Bhatti (Rai Abdullah Bhatti) whose father was a zamindar who lived in Punjab during the reign of Mughal Emperor Akbar. He was regarded as a hero in Punjab, for rescuing girls from being forcibly taken to be sold in slave markets of the Middle East. Among those he saved were two girls Sundri and Mundri, who gradually became a theme of Punjabi folklore. As a part of Lohri celebrations, children go around homes singing the traditional folk songs of Lohri with the 'Dulla Bhatti' name included. One person sings, while others end each line with a loud 'Ho!' sung in unison. After the song ends, the adult of the home is expected to give snacks and money to the singing troupe of youngsters. Lohri also marks the beginning of the harvest season and sunny days. The festival is celebrated by lighting bonfires, eating festive food, dancing and collecting gifts. In houses that have recently had a marriage or childbirth, Lohri celebrations will reach a higher pitch of excitement. In Punjab, people wear their brightest clothes and come to dance the bhangra and giddha to the beat of the dhol. Punjabi songs are sung, and everybody rejoices. Sarson da saag with makki di roti is usually served as the main course at a Lohri dinner. Lohri holds great importance for farmers. The bonfire is lit at sunset in the main village square. People toss sesame seeds, jaggery, sugar-candy and rewaries on the bonfire, sit around it, sing and dance till the fire dies out. Some people perform a prayer and go around the fire. This is to show respect to the natural element of fire, a tradition common in winter solstice celebrations. It is traditional to offer guests til, gajak, jaggery, peanuts and puffed rice or popcorn. Milk and water are also poured around the bonfire by Hindus to thank the Sun God and seek his continued protection.",
    images: [lohri1, lohri2, lohri3, lohri4],
    source: "(src: Wikipedia, Getty images)",
  },
  {
    name: "Baisakhi",
    tagline:
      "Spring harvest festival of Punjab",
    description:
      "Also called Mesadi or Basoa, marks the first day of the month of Vaisakh and is traditionally celebrated annually on 13 April or 14 April. It is seen as a spring harvest celebration primarily in Punjab and Northern India. Whilst it is culturally significant in many parts of India as a festival of harvest, Vaisakhi is also the date for the Indian Solar New Year. Historically, the festival of Vaisakhi was north India’s most important annual market. Although Vaisakhi began as a grain harvest festival for Hindus and its observance predates the creation of Sikhism, it gained historical association with the Sikhs following the inauguration of the Khalsa. People start the day with a holy bath in rivers, followed by special prayers and kirtans (hymns) at Gurdwaras. Key festivities include Nagar Kirtan processions, vibrant Bhangra/Giddha dances, and community feasts (langar). For Sikhs, in addition to its significance as the harvest festival, during which Sikhs hold kirtans, visit local gurdwaras, community fairs, hold nagar kirtan processions, raise the Nishan Sahib flag, and gather to socialize and share festive foods, Vaisakhi observes major events in the history of Sikhism and the Indian subcontinent that happened in the Punjab region. Vaisakhi as a major Sikh festival marks the birth of the Khalsa order by Guru Gobind Singh, the tenth Guru of Sikhism, on 13 April 1699. Later, Ranjit Singh was proclaimed as Maharaja of the Sikh Empire on 12 April 1801 (to coincide with Vaisakhi), creating a unified political state. Vaisakhi was also the day when British Indian Army officer Reginald Dyer ordered his troops to shoot into a protesting crowd in Amritsar, an event which would come to be known the Jallianwala Bagh massacre; the massacre proved influential to the history of the Indian independence movement.",
    images: [baisakhi1, baisakhi2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Hola Mohalla",
    tagline:
      "Commemorates the martial spirit of the Sikh community.",
    description:
      "It is also called Hola, is a three-day long Sikh festival which normally falls in March. It takes place on the second day of the lunar month of Chett, usually a day after the Hindu spring festival Holi, but sometimes coincides with it. Hola Mohalla is a big festive event for Sikhs around the world. The fair held during Holi and Hola at Anandpur Sahib is traditionally a three-day event but participants attend Anandpur Sahib for a week, camping out and enjoying various displays of fighting prowess and bravery, and listening to kirtan, music and poetry. For meals, which is an integral part of the Sikh institution (Gurdwara), visitors sit together in Pangats (Queues) and eat lacto-vegetarian food of the Langars. The event concludes on the day of Hola Mohalla with a long, 'military-style' procession near Takht Kesgarh Sahib, one of the five seats of temporal authority (referred as 'Panj Takht') of the Sikhs. Guru Gobind Singh, the tenth Sikh Guru built upon the story of Prahlad and founded the festival of Hola Mohalla.  Guru Gobind Singh summoned his followers to attend Anandpur on Holi when he introduced a new rally in 1680 to coincide with Holi where his followers could practice manoeuvres and combat training. However, Guru Gobind Singh organised the first procession accompanied by drums in Anandpur on 22 February 1701 A.D. The new tradition of overseeing mock battles and poetry contests at Lohgarh Fort has since spread from the town of Anandpur Sahib to nearby Kiratpur Sahib and the foothills of the Shivaliks, and to other Gurdwaras around the world. The Guru made Hola Mahalla an occasion for the Sikhs to demonstrate their martial skills in simulated battles. This was probably done to forestall a grimmer struggle against the imperial power and channeling people's energy into a more useful activity. Hola Mahalla became an annual event held in an open ground near Holgarh, a fort across the rivulet Charan Ganga, northwest of Anandpur sahib. The popularity of this festival may be judged from the fact that out of five Sikh public holidays requested by the Khalsa Diwan, of Lahore in 1889, the Government approved only two - Hola Mahalla and the birth anniversary of Guru Nanak. Hola Mahalla is presently the biggest festival at Anandpur. The Nihang are the members of the Khalsa Army known for their distinctive blue traditional robes and dumala, which are often embellished. They are prominent at the Hola Mahalla festival.",
    images: [holamoh1, holamoh2, holamoh3, holamoh4],
    source: "(src: wikipedia)",
  },
  {
    name: "Gurupurab (Guru Nanak Jayanti)",
    tagline:
      "Celebrates the birth of the first Sikh guru, Guru Nanak",
    description:
      "One of the most celebrated and important Sikh gurus and the founder of Sikhism, Guru Nanak is highly revered by the Sikh community. This is one of the most sacred festivals in Sikhism, or Sikhi. The festivities in the Sikh religion revolve around the anniversaries of the 10 Sikh Gurus. These Gurus were responsible for shaping the beliefs of the Sikhs. Their birthdays, known as Gurpurab, are occasions for celebration and prayer among the Sikhs. Guru Nanak, the founder of Sikhism, was born on Puranmashi of Kattak in 1469, according to the Vikram Samvat calendar in Rai-Bhoi-di Talwandi in the present Shekhupura District of Pakistan, now Nankana Sahib. It is a Gazetted holiday in India. The celebrations usually commence with Prabhat Pheris. Prabhat Pheris are early morning processions that begin at the Gurudwaras and proceed around the localities singing hymns. Generally, two days before the birthday, Akhand Path (a forty-eight-hour non-stop reading of the Guru Granth Sahib, the holy book of the Sikhs) is held in the Gurdwaras. The day prior to the birthday, a procession, referred to as Nagarkirtan, is organised. This procession is led by the Panj Pyaras (Five Beloved Ones).They head the procession carrying the Sikh flag, known as the Nishan Sahib and the Palki (Palanquin) of Guru Granth Sahib. They are followed by teams of singers singing hymns and devotees sing the chorus. There are brass bands playing different tunes and 'Gatka' teams display their swordsmanship through various martial arts and as mock battles using traditional weapons. The procession pours into the streets of the town. The passage is covered with banners and gates are decorated flags and flowers, for this special occasion. The leaders spreading the message of Guru Nanak. On the day of the Gurpurab, the celebrations commence/begin early in the morning at about 4 to 5 a.m. This time of the day is referred to as Amrit Vela. The congregation starts singing Gurbani at about 1:20 a.m., which is the actual time of birth of Guru Nanak. The celebrations culminate at around 2 a.m. The festival promotes equality, selfless service (seva), and devotion, marked by Nagar Kirtan processions and Langar. Also commemorates his teachings of 'Ik Onkar' (one God), universal brotherhood, and equality. There is also Akhand Path: 48-hour continuous reading of the Guru Granth Sahib in Gurdwaras.",
    images: [gurupurab1, gurupurab2, gurupurab3],
    source: "(src: wikipedia.com, www.sikhpa.com)",
  },
  {
    name: "Teej (Teeyan)",
    tagline:
      "Celebrates the onset of monsoon",
    description:
      "It is a festival celebrated throughout Punjab which is dedicated to the onset of the monsoon and focuses on daughters sisters, and mothers. The festival is celebrated during the monsoon season from the third day of the lunar month of Sawan on the bright half, up to the full moon of Sawan (about 13 days), by women. Married women go to their maternal house to participate in the festivities. In the past, it was traditional for women to spend the whole month of Sawan with their parents. Whether or not a married woman goes to her parents, brothers take a gift set to their sisters called a 'sandhara'. A sandhara includes a Punjabi Suit/sari, laddoo, bangles, mehndi (henna) and a swing.",
    images: [teej1, teej2, teej3],
    source: "(src: wikipedia)",
  },
  {
    name: "Bandi chorr divas",
    tagline: "Celebrated alongside Diwali to commemorate the release ofthe sixth Guru, Guru Hargobind Sahib Ji.",
    description:
      "Also known as Bandi Chhor Dihara, is a Sikh celebration of Diwali commemorating the day when the sixth Guru of Sikhs, Guru Hargobind were released from Gwalior Fort, whom Sikhs believe also freed fifty-two Rajput rajas of the Hill Chieftainships alongside him, who had been imprisoned by Mughal Emperor Jahangir. The Bandi Chhor Divas is celebrated by the lighting up of homes and Gurdwaras, celebratory processions (nagar kirtan) and langar (community kitchen). It is an important Sikh celebration along with Vaisakhi, Hola Mohalla and Gurpurab. It is one of three Sikh celebrations still calculated using the traditional Bikrami calendar, alongside Vaisakhi and Guru Nanak Gurpurab. Bandi Chhor Divas was celebrated when Guru Hargobind was released from Gwalior prison with 52 prisoners and princes holding on to his robe or cape with 52 ropes. The guru led all 52 innocent rulers to safety without any signs of war or battle. In addition to Nagar keertan (a street procession) and an Akhand paath (a continuous reading of Guru Granth Sahib), Bandi Chhor (Shodh) Divas is celebrated with a fireworks display. The Sri Harmandir Sahib, as well as the whole complex, is festooned with thousands of shimmering lights. The gurdwara organizes continuous kirtan singing and special musicians. Sikhs consider this occasion as an important time to visit Gurdwaras and spend time with their families.",
    images: [bandi1, bandi2],
    source: "(src: utsav.gov.in, Wikipedia)",
  },
  {
    name: "Shaheedi Divas",
    tagline:
      "Also known as Guru Tegh Bahadur martyrdom",
    description:
      "Guru Tegh bahadur was the ninth of ten gurus who founded the Sikh religion and was the leader of Sikhs from 1665 until his beheading in 1675. He was born in Amritsar, Punjab, India in 1621 and was the youngest son of Guru Hargobind, the sixth Sikh guru. Considered a principled and fearless warrior, he was a learned spiritual scholar and a poet whose 115 hymns are included in the Guru Granth Sahib, which is the main text of Sikhism. He was the founder of Anandpur Sahib in 1664. Guru Tegh Bahadur was executed on the orders of Aurangzeb, the sixth Mughal emperor, in Delhi, India. Sikh holy premises Gurudwara Sis Ganj Sahib and Gurdwara Rakab Ganj Sahib in Delhi mark the places of execution and cremation of Guru Tegh Bahadur. His day of martyrdom (Shaheedi Divas) is commemorated in India every year on 24 November. Devotees hold special Diwans (congregations) and read from the Guru Granth Sahib. Prayers are offered at Delhi’s Gurudwara Sis Ganj Sahib (site of execution) and Gurudwara Rakab Ganj Sahib (site of cremation). The celebrations include Nagar Kirtans (street processions), Langar (community meals), and kirtan singing, particularly the 'Bachittar Natak' composed by his son, Guru Gobind Singh.",
    images: [shaheedi1],
    source: "(src: wikipedia)",
  },
  {
    name: "Raksha Bandhan",
    tagline: "Also called as Rakhri / Rakhrya",
    description:
      "It is celebrated on the Shravan Purnima (full moon) day, strengthening sibling bonds through the tying of a sacred thread. Sisters tie a Rakhri (thread) on their brothers' wrists, praying for long life and well-being, while brothers offer gifts and protection. Historically, the term "Rakhi" was used by the Sikh Khalsa Army to symbolize their promise to protect farmers and their lands. Sisters may travel to their natal homes (Pehka) to celebrate. The festival is marked by sweets, new clothes, and family gatherings. An annual fair called Rakhar Punya is held at Baba Bakala in the district of Amritsar on the occasion of Raksha Bandhan. This fair has a connection with an important event in the history of the Sikh faith. It is at this holy shrine at Baba Bakala that the famous trader Makhan Shah Lubana declared from the rooftop that he had finally found the true Guru. Guru Harkrishn while on his deathbed in Delhi clumsily uttered “Baba Bakale”. The Sikhs of the time interpreted that the Guru had predicted that his successor would be found in Baba Bakale which was earlier known as Bakkan-Wala. The trader Makhan Shah Lubana made efforts to find the true Guru as he wanted to keep his promise to donate 500 dinars to the true Guru for saving his life from the great storm. His trick to find the true Guru at Baba Bakale worked. He then started shouting from the rooftop 'Guru Ladho Rae', meaning the Guru has been found. This historic event made Baba Bakala a place of pilgrimage for the Sikhs from across the globe. And, it also made Baba Bakala the venue of the annual fair of Rakhar Punya on the festival of Raksha Bandhan. The fair brings people of diverse faiths and religions from across the country together.",
    images: [rakhi1, rakhi2],
    source: "(sec: Wikipedia)",
  },
  {
    name: "Maghi",
    tagline: "Indian harvest festival celebrated on winter solstice",
    description:
      "Maghi is a Punjabi cultural festival, the Indian harvest festival celebrated on winter solstice. Maghi falls on the first day of the month of Magh and is celebrated in Punjab, Haryana, Jammu and Himachal Pradesh. It follows on the heels of the mid-winter festival of Lohri which is marked by bonfires in North Indian fields and yards. The next morning is seen as an auspicious occasion for ritual bathing in ponds and rivers. In the ancient Indian epic the Mahabharata, it was on Maghi (Makar Sankranti) that Bhishma attained mukti (liberation) after having heard discourses about the mysteries of life and death since Kartik Purnima during the Mahabharata War. For Sikhs it is a community gathering to commemorate martyrdom of forty Sikhs (Chalis Mukte) who once had deserted the tenth and last human Guru of Sikhism, Guru Gobind Singh at Anandpur Sahib, but later rejoined the Guru and died while fighting the Mughal Empire army led by Wazir Khan in 1705. Sikhs make a pilgrimage to the site of the war, and take a holy dip in the sacred water pond of Gurdwara Sri Tootti Ganddi Sahib in Muktsar. A fair (mela) is held at Muktsar every year and called the Mela Maghi which is held in memory of the forty Sikh martyrs. Before this tradition started to commemorate the Sikh martyrs who gave their lives to protect the tenth Guru, the festival was observed and mentioned by Guru Amar Das, the third Guru of Sikhism. In Punjab, Maghi is celebrated by eating kheer such as rauh di kheer which is an old dish where rice is cooked in sugarcane juice. The dish is prepared in the evening before Maghi and is kept to cool. It is served cold next morning on Maghi with red-chili mixed curd. In some parts of Punjab, India, it is also traditional practice to eat khichdi mixed with lentils, consume raw sugarcane and jaggery, Fairs are held at many places in Punjab on Maghi. Maghi is observed across Punjab as - The beginning of the new agricultural year; A time for settling land leases and accounts; A marker of seasonal transition and renewed labour.",
    images: [maghi1, maghi2],
    source: "(src: wikipedia, incredibleindia.com)",
  },
  {
    name: "Karva Chauth",
    tagline: "Encapsulates the essence of Indian marital bonds",
    description:
      "It is a prominent, one-day festival where married women fast from sunrise to moonrise, praying for their husbands' longevity and prosperity. Traditions include pre-dawn sargi (meals), applying mehndi, dressing in red/bridal attire, listening to Katha, and breaking the fast by viewing the moon through a sieve. The day begins before dawn with a traditional meal sent by the mother-in-law, called Sargi, typically including pheni (vermicelli), sweets, fruits, and dry fruits. Women observe Strict, water-less (nir-jala) fast for the whole day starting after dawn till the moon is observed. Women dress in traditional, often bridal, red outfits, apply intricate mehndi (henna), and wear red glass bangles. In the evening, women gather to hear the traditional Karva Chauth story (Katha). They exchange baya (gifts, sweets, and pottery) with their mothers-in-law. The fast is broken at night after viewing the moon and the husband through a sieve (channi), offering water (Arghya) to the moon.",
    images: [karva1, karva2],
    source: "(src: wikipedia)",
  },
  {
    name: "",
    tagline: "",
    description:
      "Other Important festivals that are celebrated in Punjab are – Krishna Janmashtami, Mahashivratri, Sanjhi, Ram Navami, Dussehra, Diwali.",
    images: [karva1, karva2],
    source: "(src: wikipedia)",
  },
];

const historicalPlaces = [
  {
    name: "Golden Temple",
    description:
      "The Golden Temple / Sri Harmandir Sahib is a Gurdwara located in Amritsar, Punjab. It is the pre-eminent spiritual site of Sikhism and is one of its holiest sites, alongside the Gurdwara Darbar Sahib in Kartarpur and the Gurdwara Janam Asthan in Nankana Sahib, both in Punjab, Pakistan. The sarovar (holy pool) on the site of the gurdwara was completed by the fourth Sikh Guru, Guru Ram Das, in 1577. In 1604, Guru Arjan, the fifth Sikh Guru, placed a copy of the Adi Granth in the Golden Temple and played a prominent role in its development. The gurdwara was repeatedly rebuilt by the Sikhs after they became a target of persecution and was destroyed several times by the Mughal and invading Afghan armies. Maharaja Ranjit Singh, after founding the Sikh Empire, rebuilt it in marble and copper in 1809, and overlaid the sanctum with 24-karat gold leaf in 1830. This has led to the name the Golden Temple. Over 500 kg of gold was used during its 19th-century restoration and subsequent renovations in the 1990s. In 1984, Prime Minister Indira Gandhi sent in the Indian Army as part of Operation Blue Star, leading to the deaths of thousands of soldiers, militants and civilians, as well as causing significant damage to the gurdwara and the destruction of the nearby Akal Takht — the prime seat of authority for the Sikhs. The gurdwara complex was again rebuilt after the 1984 attack. The Golden Temple is an open house of worship for all people, from all walks of life and faiths. It has a square plan with four entrances, and a circumambulation path around the pool. The four entrances of the gurdwara symbolise the Sikh belief in equality and the Sikh view that people from all groups, castes and ethnicities are welcome at their holy place. Harmandir Sahib complex has a langar, a community-run free kitchen and dining hall. It is attached to the east side of the courtyard near the Dukh Bhanjani Ber, outside of the entrance. Food is served here to all visitors who want it, regardless of faith, gender or economic background. Vegetarian food is served and all people eat together as equals. Everyone sits on the floor in rows, which is called sangat. The meal is served by volunteers as part of their kar seva ethos. Over 100,000 meals are served at the langar every day. The gurdwara complex has been nominated as a UNESCO World Heritage Site, and its application is pending on the tentative list of UNESCO.",
    images: [golden1, golden2, golden3],
    source: "(src: Wikipedia, )",
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
