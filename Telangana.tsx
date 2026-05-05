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
import punjabMap from "@assets/punjabMap.jpg";
const lohri1 = "https://i.postimg.cc/Gt12ckgn/image.png";
const lohri2 = "https://i.postimg.cc/Mprpckr2/image.png";
const lohri3 = "https://i.postimg.cc/C1bh6RhX/image.png";
const lohri4 = "https://i.postimg.cc/nc3H5bxj/image.png";
const baisakhi1 = "https://i.postimg.cc/YC4wsv89/image.png";
const baisakhi2 = "https://i.postimg.cc/mkZvNktt/image.png";
const holamoh1 = "";
const holamoh2 = "";
const holamoh3 = "";
const holamoh4 = "";
const gurupurab1 = "";
const gurupurab2 = "";
const gurupurab3 = "@assets/image_1776788482041.png";
const teej1 = "@assets/image_1776788764847.png";
const teej2 = "@assets/image_1776788772553.png";
const teej3 = "@assets/image_1776788788721.png";
const bandi1 = "@assets/image_1776788797545.png";
const bandi2 = "@assets/image_1776788805779.png";
const shaheedi1 = "@assets/image_1776788811412.png";
const rakhi1 = "@assets/image_1776788817244.png";
const rakhi2 = "@assets/image_1776788825797.png";
const maghi1 = "@assets/image_1776788831894.png";
const maghi2 = "@assets/image_1776788840602.png";
const karva1 = "@assets/image_1776788847901.png";
const karva2 = "@assets/image_1776788856768.png";
const golden1 = "@assets/image_1776788865143.png";
const golden2 = "@assets/image_1776788870905.png";
const golden3 = "@assets/image_1776788878018.png";
const jallian1 = "@assets/image_1776788887081.png";
const jallian2 = "@assets/image_1776788895857.png";
const jallian3 = "@assets/image_1776788902350.png";
const wagah1 = "@assets/image_1776788909064.png";
const wagah2 = "@assets/image_1776788916164.png";
const wagah3 = "@assets/image_1776789530181.png";
const wagah4 = "@assets/image_1776789548589.png";
const qila1 = "@assets/image_1776789554420.png";
const qila2 = "@assets/image_1776789558971.png";
const qila3 = "@assets/image_1776789565292.png";
const ranjit1 = "@assets/image_1776789575242.png";
const ranjit2 = "@assets/image_1776789580153.png";
const ranjit3 = "@assets/image_1776789590790.png";
const gobindgarh1 = "@assets/image_1776789610085.png";
const gobindgarh2 = "@assets/image_1776789615338.png";
const anandpur1 = "@assets/image_1776789624415.png";
const anandpur2 = "@assets/image_1776789631296.png";
const partition1 = "@assets/image_1776789638782.png";
const partition2 = "@assets/download_1777100508255.png";
const partition3 = "@assets/download_1777100514323.png";
const guru1 = "@assets/download_1777100516025.png";
const guru2 = "@assets/download_1777100518481.png";
const guru3 = "@assets/download_1777100520664.png";
const durgiana1 = "@assets/download_1777100523842.png";
const durgiana2 = "@assets/image_1777102241686.png";
const durgiana3 = "@assets/image_1777102257711.png";
const akaltakht1 = "@assets/download_1777100525385.png";
const akaltakht2 = "@assets/download_1777100526870.png";
const akaltakht3 = "@assets/download_1777100529380.png";
const jang1 = "@assets/download_1777100531237.png";
const jang2 = "@assets/download_1777100532535.png";
const jang3 = "@assets/download_1777100537305.png";
const gJutti = "@assets/image_1777100917162.png";
const gBhangra = "@assets/image_1777100921467.png";
const gPhulkari = "@assets/image_1777100927953.png";
const gGiddha = "@assets/image_1777100932602.png";
const gFields1 = "@assets/image_1777100937948.png";
const gFields2 = "@assets/image_1777100946447.png";
const gSarson = "@assets/image_1777100950953.png";
const gKulcha = "@assets/image_1777100955650.png";
const gLassi = "@assets/image_1777100960783.png";
const gAlooparatha = "@assets/image_1777100965689.png";
const gBharwamirch = "@assets/image_1777100975810.png";
const gButterchicken = "@assets/image_1777100982364.png";
const gCholebhature = "@assets/image_1777100987731.png";
const gDalmakhni = "@assets/image_1777100994118.png";
const gThali = "@assets/image_1777101000988.png";
const gFishfry = "@assets/image_1777101005896.png";
const gParandha = "@assets/image_1777101012951.png";

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
export default function Telangana() {
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
                South India
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Telangana
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Land of Koh-i-Noor
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Hyderabad" },
                  { label: "Population", value: "" },
                  { label: "Area", value: "sq km" },
                  { label: "Founded", value: "2 June 2014" },
                  { label: "Language", value: "Telugu" },
                  { label: "Districts", value: "33 Districts" },
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
              Hyderabad
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Tamil Nadu — The City of Nawabs
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of Telangana" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(tnMap, "Map of Telangana")}
            >
              <img
                src={telanganaMap}
                alt="Map of Telangana"
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
              Telangana is a state in Southern India on the Deccan Plateau bordering Maharashtra and Chhattisgarh to the north and Andhra Pradesh and Karnataka to the south. Telangana is the country's eleventh largest and twelfth most populated state. 
            </p>
            <p className="text-foreground">
              Telangana is a state in Southern India on the Deccan Plateau bordering Maharashtra and Chhattisgarh to the north and Andhra Pradesh and Karnataka to the south. Telangana is the country's eleventh largest and twelfth most populated state. 
            </p>
            <p className="text-foreground">
             The state is governed from its capital, Hyderabad, where Telugu serves as the primary official language alongside Urdu as the second official language. This cultural landscape is further enriched by several tribal languages such as Gondi and Lambadi. Economically, Telangana has risen to hold the eighth-highest GDP among Indian states, driven largely by its role as a major hub for IT, industry, and the services sector. Furthermore, it serves as a critical administrative center for India's defense and aerospace research, hosting prominent institutions like the DRDO and Bharat Dynamics Limited. 
            </p>
            <p className="text-foreground">
              The name "Telangana" is traditionally linked to "Trilinga desha," the land of three sacred Shaivite shrines, though historian Jayadheer Tirumala Rao argues for a 2,000-year-old Gondi origin meaning "south." Historical references appear as early as the 14th century with Malik Maqbul Tilangani and in 16th-century accounts describing the region as a prosperous global trade hub. Ultimately, the term "Telangana" emerged to distinguish the Telugu-speaking regions of the Hyderabad State from Marathi-speaking areas, a name that persisted even after the Seemandhra region was ceded to the British. 
            </p>
            <p className="text-foreground">
              Throughout antiquity and the Middle Ages, Telangana was governed by several major Indian empires, including the Mauryas, Satavahanas, Chalukyas, and the Kakatiyas, before coming under the rule of various Sultanates and later the Mughals and the Nizams of Hyderabad. In 1823, the Nizams ceded coastal and inland territories to the British, transforming Hyderabad into a landlocked princely state. After Indian Independence in 1947, the state joined the Union of India following police action in 1948 and was eventually merged with Andhra State in 1956 to form Andhra Pradesh. 
            </p>
            <p className="text-foreground">
              Despite this merger, a persistent peasant-driven movement for separation began in the early 1950s, finally resulting in the achievement of statehood on 2 June 2014. Historically, the region is also famous for the city of Golconda, which served as the world’s premier diamond trading center until the late 19th century. This legacy made "Golconda Diamonds" globally synonymous with the finest gems, underscoring the region's long-standing economic and historical significance. 
            </p>
            <p className="text-foreground italic text-primary font-medium">
              It stands as the vibrant bridge between the North and South, where the rugged grandeur of the Deccan meets a legacy of royal sophistication. Its landscape is adorned with the architectural marvels of the Kakatiyas, the regal splendor of the Nizams, and the spiritual serenity of ancient Buddhist sites, all woven into a society that celebrates a seamless fusion of diverse cultures and languages.
            </p>
            <p className="text-xs text-muted-foreground">
              (src:mapsofindia.com)
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
        <Section title="Facts about Telangana" icon="💡">
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
            Scroll horizontally to explore Telangana's iconic foods, crafts,
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
    name: "Bathukamma",
    tagline: "Celebrating the Spirit of Womanhood.",
    description:
      'Bathukamma is a vibrant nine-day floral festival celebrated primarily by the Hindu women of Telangana, symbolizing "Mother Goddess come alive." Occurring annually during September and October, the festivities begin on Mahalaya Amavasya and run concurrently with Sharad Navratri, culminating in the grand "Saddula Bathukamma." The festival marks the transition between seasons, following the 7-day Boddemma festival which ends the monsoon, while Bathukamma heralds the beginning of autumn.The hallmark of the celebration is the creation of the Bathukamma itself—a magnificent flower stack arranged in seven concentric layers to resemble a temple gopuram. These stacks consist of unique seasonal flowers, many of which possess medicinal properties. Traditionally, brothers gather these flowers and bring them home for their mothers and sisters to arrange. The festival serves as a profound celebration of femininity and life in the Deccan region, with women and young girls dressing in traditional saris and Langa-Onis to showcase the cultural grace of the attire. Each of the nine nights carries a distinct name and ritual: Day 1: Engili pula Bathukamma . Day 2: Atukula Bathukamma . Day 3: Muddapappu Bathukamma . Day 4: Nanabiyyam Bathukamma . Day 5: Atla Bathukamma . Day 6: Aligina Bathukamma . Day 7: Vepakayala Bathukamma . Day 8: Vennela muddala Bathukamma  . Day 9: Saddhula Bathukamma . Beyond its religious significance, Bathukamma represents the cultural spirit and regional pride of Telangana. Along with Bonalu and the Sammakka Saralamma Jatara, it became a powerful symbol of a separate cultural identity during the Telangana movement, gaining even greater prominence and state-wide recognition after the formation of the state in 2014.
    images: [Bathukamma1,Bathukamma2,Bathukamma3],
    source: "(src: Wikipedia,nripulse.com)",
  },
  {
    name: "Bonalu",
    tagline:
      "The Thanksgiving Festival of Telangana",
    description:
      "Bonalu is a traditional Hindu festival dedicated to Goddess Mahakali, celebrated with immense fervor in Hyderabad, Secunderabad, and across Telangana. The word Bonam comes from the Sanskrit Bhojanam, meaning feast or meal, symbolizing the food offering made to the Mother Goddess. The festival traces back to 1813, when a deadly plague struck Hyderabad. A military battalion stationed in Ujjain prayed to Goddess Mahakali, promising to install her idol if the plague ended. When the plague subsided, they fulfilled their vow by installing the idol of Ujjaini Mahakali in Secunderabad, marking the beginning of Bonalu. The central ritual involves women preparing offerings in earthen or brass pots filled with cooked rice, milk, jaggery, and sometimes curd. These pots are adorned with neem leaves, turmeric, vermilion, and a small lamp, then carried in procession to temples as a gesture of gratitude. Key figures include Pothuraju, regarded as the Goddess’s brother, who dances energetically to drumbeats while clearing the path for the deity’s spirit. Another highlight is the Ghatam, a decorated copper pot symbolizing the Goddess, carried in a grand procession often accompanied by an elephant. Rituals also feature Rangam, where a woman in trance delivers prophecies, and Thottelu, colorful bamboo-and-paper structures resembling temple towers offered to the Goddess. In 2014, Bonalu was declared a State Festival of Telangana. It is celebrated during the Hindu lunar month of Ashada (July–August), with major festivities at Golconda Fort, Ujjaini Mahakali Temple in Secunderabad, and the Old City of Hyderabad.
",
    images: [Bonalu1,Bonalu2,Bonalu3,Bonalu4],
    source: "doingsociology.com,newsd.in,The times of India,india Tv news",
  },
  {
    name: "Sammakka Saralamma Jathara",
    tagline:
      "Medaram Jathara",
    description:
      "The Sammakka Saralamma Jathara also known as the- Medaram Jathara is one of the world's largest tribal religious congregations. Often called the 'Kumbh Mela of the South,' it is a biennial festival celebrated in the remote forest village of Medaram in the Mulugu district of Telangana, India. Unlike many mainstream festivals, it does not involve stone idols or permanent temples. Instead, it honors the bravery and sacrifice of a mother and daughter duo who fought against the unjust taxes of the Kakatiya rulers in the 13th century.The festival commemorates a 13th-century rebellion led by Sammakka and her daughter Saralamma. According to Koya tribal lore, Sammakka was a woman of extraordinary courage who married a local chieftain. When the Kakatiya rulers imposed unjust taxes during a period of severe drought, Sammakka’s family chose to fight rather than submit. After her family fell in battle, a wounded Sammakka retreated into the forest and disappeared near Chilukalagutta, leaving behind only a casket of vermilion. To the devotees, she did not die; she became a guardian goddess of the people. No Idols, Only Nature: The goddesses are represented by bamboo sticks decorated with turmeric and vermilion. There are no Vedic priests; the rituals are conducted entirely by Koya tribal priests.Offering 'Gold' (Jaggery): A unique tradition involves offering jaggery, referred to as Bangaram (Gold). Devotees often offer a quantity of jaggery equal to their own body weight to the goddesses as a sign of gratitude. Holy Dip in Jampanna Vagu: Before visiting the deities, pilgrims bathe in the Jampanna Vagu stream. This act is believed to wash away sins and heal various ailments. Edurukolla Ghattam: This is a spectacular event where the deity Sammakka is welcomed with traditional music, drums, and official government honors (including a ceremonial gunshot into the air by the Superintendent of Police). Sammakka Saralamma Jathara was declared a State Festival of Telangana to honor its historical importance and its celebration of women’s empowerment, bravery, and the enduring bond between the people and the forest. ",
    images: [Jathara1,Jathara2,Jathara3,Jathara4],
    source: "(src: wikipedia,hellotravel,newsmeter,ABP news",
  },
  {
    name: "Sankranti",
    tagline:
      "Harvesting Hopes, Celebrating Heritage.",
    description:
      "In Telangana, Sankranti or Makara Sankranti is much more than a harvest festival, it is a three-day celebration of nature, lineage, and the unique agrarian spirit of the Deccan plateau. While it shares some similarities with other South Indian states, Telangana adds its own distinct flavor through local customs and culinary traditions.The Three Days of Celebration: Bhogi: The festivities begin with the Bhogi Mantalu (ritual bonfires) at dawn. Families gather to burn old wooden items and clothes, symbolizing the discarding of past negativity to make room for new beginnings. A heartwarming tradition on this day is Bhogi Pallu, where seasonal fruits like jujubes (Regu Pallu), flower petals, and coins are showered over children to bless them and ward off the 'evil eye.'Sankranti: The main day is dedicated to the Sun God. Homes are decorated with elaborate Muggulu (rangoli) in the courtyards, often featuring Gobbemmalu—small balls of cow dung decorated with turmeric, vermilion, and flowers. This day is about family reunions and the flying of kites, which fill the skies of Hyderabad and other towns with vibrant colors.Kanuma: This day is focused on cattle, the backbone of farming. In Telangana, Kanuma is celebrated with immense fervor. Farmers bathe their bulls and cows, decorate their horns with bright colors, and offer them special prayers.The Iconic Figures of the Festival Two figures are synonymous with a traditional Telangana Sankranti:The Haridasu: Moving through the streets with a copper vessel (Akshaya Patram) on his head, the Haridasu sings devotional songs of Lord Vishnu. It is a tradition for households to offer him rice or grains as he passes, never stopping to ask but accepting what is given.The Gangireddu: These are beautifully decorated bulls led by performers who play the Nadaswaram. The bulls are trained to perform tricks and 'nod' in blessing to the households, symbolizing prosperity and a good harvest.The Telangana Menu: From Sweets to Savorie.The food in Telangana during Sankranti is a mix of tradition and indulgence. Ariselu (sweet cakes made of rice flour and jaggery) are the staple sweet, alongside Gareealu (savory lentil donuts). A unique aspect of the Telangana celebration occurs on Kanuma or the day after, known as Mukkanu. While the first two days are typically vegetarian, this day often features a grand non-vegetarian feast. It is a local custom to prepare spicy meat dishes, often enjoyed in the agricultural fields or cattle sheds, marking a joyful end to the harvest rituals.  

Ugadi:   ",
    images: [Sankranti1,Sankranti2,Sankranti3,Sankranti4,Sankranti5],
    source: "(src:Tha hans india,flickr,prokerala,Hyderabad mail,Times food)",
  },
  {
    name: "Ugadi",
    tagline:
      "Telugu New Year",
    description:
      'In Telangana, Ugadi marks the beginning of the Telugu New Year and is celebrated with a blend of spiritual reflection and culinary symbolism. It falls on the first day of the month of Chaitra, representing the start of the spring season and the rejuvenation of nature. The Symbolism of Ugadi Pachadi : The most defining element of the festival is Ugadi Pachadi, a unique chutney that combines six distinct flavors. Each ingredient represents a different emotion or experience that one will encounter in the coming year: 1.Neem Buds (Bitterness): For the difficulties and sadness in life. 2.Jaggery (Sweetness): For happiness and joy. 3.Green Chili (Piquancy): For moments of anger. 4.Salt (Saltiness): For fear or the "spice" of life. 5.Tamarind (Sourness): For the unpleasant or sour challenges. 6.Raw Mango (Tanginess): For surprise and new beginnings. By consuming this mixture, people symbolically accept that the upcoming year will be a mix of all these experiences, encouraging a balanced and resilient outlook. Panchanga Sravanam: A significant communal event in Telangana is the Panchanga Sravanam, or the reading of the new almanac. Families gather at temples or social centers to hear a priest or scholar predict the year ahead. These readings cover everything from general social trends and weather patterns for agriculture to individual astrological forecasts based on moon signs (Rasis). It is a moment of shared curiosity and hope for the community. Traditions and Festive Food: The day begins with a ritual oil bath, followed by decorating the entrance of the house with Mango leaves (Thoranalu) and colorful Muggulu (rangoli). Mango leaves are considered highly auspicious and represent a fruitful harvest. In terms of food, while the Pachadi is the ritual starter, the star of the Telangana Ugadi meal is often Bhakshalu (also known as Polelu or Bobbatlu). These are sweet flatbreads stuffed with a mixture of lentils and jaggery, served warm with a generous amount of ghee. Kavi Sammelanam: In cities like Hyderabad and across various districts, Ugadi is also a day for celebrating the Telugu language. Kavi Sammelanams (poetry recitals) are organized where poets gather to share new works, often blending traditional themes with contemporary social commentary. This keeps the literary heritage of the region alive and vibrant as the new year begins. ',
    images: [Ugadi1,Ugadi2],
    source: "outlook india",
  },
  {
    name: "Deepavali",
    tagline: "Festival of Lights",
    description:
      "Deepavali (Diwali) in Telangana is a vibrant festival that combines traditional Vedic rituals with unique local flavors and community bonding. While it shares the core theme of the victory of light over darkness, the Telangana celebration has several distinct elements.   Harathulu (Morning Blessings): The festival often starts very early in the morning. After a ritual oil bath, family members (particularly children) receive Harathulu—a traditional blessing with a camphor flame—from the elders.Naraka Chaturdashi: Many in the state place great importance on the day before the main Diwali, celebrating the victory of Lord Krishna and Satyabhama over the demon Narakasura. It is common to burst a few crackers at dawn on this day to symbolize the end of evil. Lakshmi Puja: On the main night, homes are illuminated with dozens of earthen diyas (clay lamps) and elaborate Muggulu (rangoli) patterns at the entrance to welcome Goddess Lakshmi, the bringer of prosperity.Traditional Food & Sweets 1.Garijalu: These are the quintessential Telangana Diwali sweets. They are crescent-shaped, deep-fried dumplings made of flour and stuffed with a delicious mixture of sugar, dry coconut, poppy seeds, and cardamom. 2.Pheni: A very popular local tradition involves eating Pheni—fine, thread-like circles of fried dough. It is typically served by crushing it into a bowl, sprinkling powdered sugar, and pouring warm milk over it.3.Murukulu & Chekkalu: For a savory crunch, households prepare Murukulu (spiral rice snacks) and Chekkalu (spicy rice crackers flavored with ginger and curry leaves).4.Ariselu: Often made during the harvest season, these jaggery-based rice cakes are a staple for festive celebrations in many homes. Games & Community Events: 1.Vaikuntapali (Snakes and Ladders): This ancient Indian board game (originally Moksha Patam) is a classic choice for families to play late into the night during the festival. 2.Ashta Chamma: A traditional board game similar to Ludo, played with shells (Gidde) instead of dice, which remains a favorite in rural and semi-urban Telangana.Kite Flying: While the main kite season is Sankranti, many in Hyderabad and surrounding districts start flying kites during the Diwali break as the skies clear up post-monsoon.Community Firework Displays: In many colonies, families gather in a central spot to watch collective firework displays, sharing sweets and greeting one another. ",
    images: [Deepavali1,Deepavali2,Deepavali3,Deepavali4,Deepavali5],
    source: "(src:Wikipedia,indiafacts.org,pinterest,99acres.com,Apartment therapy)",
  },
  {
    name: "Dasara",
    tagline:
      "Attracts thousands, clad in orange robes, to the sacred spot where the ship landed.",
    description:
      "Dasara (Vijayadashami) in Telangana is perhaps the most significant festival for the region, celebrated as a day of 'Victory' (Vijaya). It marks the culmination of the nine-day Navaratri and the grand Bathukamma festival.The Unique Ritual: Jammi Chettu & 'Gold'.Jammi Pooja: People flock to local temples or open grounds to worship the Jammi Chettu (Prosopis cineraria). According to legend, the Pandavas hid their divine weapons in this tree during their exile.Exchanging 'Gold': After the prayer, people pluck the leaves of the Jammi tree and exchange them with friends and elders. These leaves are referred to as 'Bangaram'(Gold). Alai Balai: This is a beautiful social custom where people hug each other (Alai Balai) while exchanging the Jammi leaves, symbolizing the burying of old grievances and the start of new friendships.Ayudha Puja (Worship of Tools) :  Professional Respect: Farmers clean their plows and tractors, drivers decorate their vehicles with flower garlands and lime, and professionals (like engineers or tailors) worship their laptops or machines.Decoration: Items are smeared with turmeric and vermilion dots, and pumpkins (Gummadikaya) are often broken in front of vehicles to ward off evil.The feast on Dasara is usually grand and often marks the return to non-vegetarian food after the nine days of Navaratri: Non-Veg Feast: Many households prepare Spicy Mutton Curry or Natukodi Pulusu (country chicken gravy) served with Gareealu (savory lentil donuts). Polelu/Bhakshalu: These sweet flatbreads stuffed with lentils and jaggery remain a staple for the vegetarian part of the meal.Pulagam: A simple yet ritualistic dish made of rice and green gram, often offered as Prasadam.Festive Games & Events .Pala Pitta Spotting: It is considered extremely lucky to spot a Pala Pitta (Indian Roller bird) on Dasara day. People often head to the outskirts of towns just to get a glimpse of this 'blue bird of victory.'Shami Pooja Processions: In many villages, the local deity is taken out in a grand palanquin procession (Utsavam) to the outskirts for the 'hunting' ritual (Paruveta).Effigy Burning: While the burning of Ravana effigies is common in cities like Hyderabad, the rural tradition focuses more on the Jammi ritual and the communal Alai Balai. ",
    images: [Dasara1,Dasara2,Dasara3],
    source: "vidaatha,Namasthe telangana,namstegod.com,pinterest",
  },
];

const historicalPlaces = [
  {
    name: "Six Abodes of Murugan (Arupadai Veedu)",
    description:
      "Six abodes of murgan -- The Six Abodes of Murugan, known as ‘Arupadai Veedu’, are sacred temples in Tamil Nadu, India, celebrating different stages of Lord Murugan's life, victories, and legends. ",
    images: [sixAbodes],
    subPlaces: [
      {
        name: "Subramaniyaswamy Temple – Thiruparankundram",
        location: "Madurai district",
        description:
          "Subramaniyaswamy Temple – Thiruparankundram, Madurai district – Located on a hillock, it is first of the Aarupadaiveedu. Murugan's marriage with Deivanai took place here.",
        images: [thiruparankundram],
        source: "(src: Tumblr)",
      },
      {
        name: "Arulmigu Senthilnathar Temple – Tiruchendur",
        location: "Thoothukudi district",
        description:
          "Arulmigu Senthilnathar Temple – Tiruchendur, Thoothukudi district - Located along the coast of Bay of Bengal, the temple commemorates the place where Murugan won a victory over the demon Surapadman. ",
        images: [thiruchendur],
        source: "(src: cottage9)",
      },
      {
        name: "Arulmigu Dandayudhapani Temple – Palani",
        location: "Dindigul district",
        description:
          "Arulmigu Dandayudhapani Temple – Palani, Dindigul district - Located at the foothills of a hillock, the deity known as 'Kulanthai Velayuthaswami' is depicted as a young form of Murugan, and said to have been worshipped by the goddess Lakshmi. In the temple on the hilltop where 'Dhandayuthapani' is the main deity, Murugan is depicted as a hermit carrying a staff ('danda'). This is the place where Murugan is said to have arrived after his feud with his family over a divine fruit. Divine story of how and why Murugan came to Palani ----  Once upon a time, the revered sage Devrishi Narad paid a visit to Lord Shiva and Maa Parvati. During his visit, he presented Maa Parvati with a unique mango, claiming that whoever consumed it would gain extraordinary qualities and powers. Being the loving mother she is, Mata Parvati wished to share this special fruit between her two sons, Lord Ganesha and Lord Kartikeya. Devarishi Narad proposed that the mango could only be consumed by one person, prompting them to organize a contest between the two brothers. The challenge was set: each had to complete three rounds of the world, and the one who returned first would be declared the winner. Eager to claim the mango, Lord Kartikeya swiftly mounted his peacock and soared into the skies to complete the three rounds. Meanwhile, Lord Ganesha, without a flying mount, contemplated his approach. Undeterred, he began walking around his seated parents, Lord Shiva and Maa Parvati, completing three rounds. When Lord Ganesha finished, he humbly claimed his reward. Perplexed, Lord Shiva and Maa Parvati reminded him that the competition was to encircle the entire world three times. In response, Ganesha, with a wise smile, declared that his parents are his world, and by encircling them, he had indeed completed three rounds of his world. Thus, he emerged as the true victor in the competition of devotion and wisdom.Upon Lord Kartikeya’s triumphant return, expectations of victory filled the air. With his peacock Vahana, he had swiftly traversed the world, confident of securing the divine mango. However, as he approached Lord Shiva and Maa Parvati, the atmosphere shifted. The revelation that Lord Ganesha was declared the winner, not due to physical prowess, but through a profound display of devotion. Due to this, Lord Murugan feeling betrayed and angry at his parents leaves to Palani. ",
        images: [palani1, palani2],
        source: "(src: Cottage9, southern travels)",
      },
      {
        name: "Swaminatha Swamy Temple – Swamimalai",
        location: "Thanjavur district",
        description:
          'Swaminatha Swamy Temple – Swamimalai, Thanjavur district - Located atop a small hillock, the temple commemorates the incident where Murugan is regarded to have explained the essence of the Pranava mantra "Om" to his father Shiva. Story ---- Once Brahma, the Lord of all creation, disrespected Murugan when he was visiting Mount Kailash. Then, the ever-playful Murugan boldly asked Brahma the meaning of the Pranava Mantra “OM”. Failing to answer the question, Brahma admitted his ignorance. Murugan knocked his forehead, and imprisoned Brahma, bringing the whole of creation to a standstill. The demigods prayed to Lord Shiva for the release of Brahma. But Murugan insisted the imprisonment was a just punishment for Brahma\'s ignorance. Lord Shiva then asked Murugan whether he Himself knew the meaning of Pranava “Aum”. Murugan said he knew its meaning, but would only explain it if Lord Shiva accepted him as a guru and listened to him as a devoted disciple. Shiva accepted the request, and the son became the teacher. He then imparted upon the father the meaning of the sacred Pranava mantra “Aum” and the divine father, proud of understanding the significance, conferred respect to Murugan for his wisdom. You will see in the main shrine in the temple complex in Swamimalai that Murugan is depicted as a teacher and Shiva is listening as a disciple and, in this temple, the son is on a higher pedestal than the father.',
        images: [swamimalai],
        source: "(src: casual walker)",
      },
      {
        name: "Subramanya Swamy Temple – Tiruttani",
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
  "Seed Bowl of India: Telangana is often called the 'Seed Bowl of India' because it produces a huge percentage of the country’s agricultural seeds, especially for rice, maize, and cotton." 
"The Pharma Hub: Hyderabad, the capital, is known as the 'Vaccine Capital of the World' and a global hub for life sciences. It produces nearly one-third of all global vaccines."
"The state has one of India’s largest populations of sheep and goat rearing, making it important for rural livelihoods." 
"Telangana has many artificial lakes and tanks built during the Kakatiya period for water conservation—an early example of smart water management." 
"Urdu is widely spoken along with Telugu, especially in cities like Hyderabad, reflecting the region’s cultural diversity." 
"Telangana cuisine is known for its spicy and millet-based dishes, such as jowar roti and sarva pindi." 
"Telangana is famous for Pochampally Ikat, a traditional weaving technique where threads are dyed before weaving to create patterns. ",
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
