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
import andhraMap from "@assets/andhraMap.jpg";
const holamoh1 = "";
const holamoh2 = "";
const holamoh3 = "";
const holamoh4 = "";
const gurupurab1 = "";
const gurupurab2 = "";



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
export default function AndhraPradeshPage() {
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
                Andhra Pradesh
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Rice Bowl of India
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Amravati" },
                  { label: "Population", value: "4.94 Crore" },
                  { label: "Area", value: "1,62,975 sq km" },
                  { label: "Founded", value: "1 November 1956" },
                  { label: "Language", value: "Telugu" },
                  { label: "Districts", value: "26 Districts" },
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
              Amravati
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Andhra Pradesh — Kashi of the South
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of Andhra Pradesh" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(andhraMap, "Map of Andhra Pradesh")}
            >
              <img
                src={andhraMap}
                alt="Map of Andhra Pradesh"
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
              Andhra Pradesh is a state on the east coast of southern India. It is the seventh-largest state and the tenth-most populous in the country. Telugu, one of the classical languages of India, is the most widely spoken language in the state, as well as its official language. Amaravati is the state capital, while the largest city is Visakhapatnam. Amaravati is a greenfield capital city developed near Vijayawada. Geographically both Amaravati and Vijayawada can be seen as Twin cities. 
            </p>
            <p className="text-foreground">
              Andhra Pradesh shares borders with Odisha to the northeast, Chhattisgarh to the north, Karnataka to the west, Tamil Nadu to the south, Telangana to northwest and the Bay of Bengal to the east. It has the longest coastline in India at about 1,000 kilometers.
 Andhra Pradesh holds about one-third of India's limestone reserves and significant deposits of baryte and granite. Agriculture and related activities employ 62.17% of the population, with rice being the staple crop. The state contributes 30% to India's fish production and accounts for 35% of the country's seafood exports. The Sriharikota  Range, located on sriharikota island in Tirupati district, serves as India's primary satellite launch center.
            </p>
            <p className="text-foreground">
              Major rivers that flow through the state are : Godavari River, Krishna River, Tunghabhadra River, Penna River. Andhra Pradesh has been inhabited for over 247,000 years, showing evidence of early human settlements. The earliest mention of the Andhras appears in the Aitareya Brahmana of the Rigveda (around 800 BCE). Around 300 BCE, people in the Godavari River and Krishna River regions were known for their military strength. Andhra Pradesh was ruled by a succession of major and minor dynasties that shaped its cultural and political identity. The history is generally categorized into the ancient, medieval, and late-medieval periods.
Satavahana Dynasty (230 BCE – 220 CE): The first major native dynasty to unify the Deccan. They were known as "Andhras" and established Amaravati as their capital.
            </p>
            <p className="text-foreground">
              Andhra Ikshvakus (225 – 340 CE): Successors to the Satavahanas in the Krishna River valley, they ruled from Vijayapuri (Nagarjunakonda).
Early Regional Kingdoms: Following the Ikshvakus, the region saw various smaller powers, including the Brihatpalayanas, Anandagotrikas, and the Salankayanas who ruled from Vengi.
Pallava Dynasty (4th – 9th century CE): Ruled southern Andhra Pradesh and northern Tamil Nadu from their capital at Kanchipuram.
Vishnukundina Dynasty (5th – 6th century CE): A major imperial presence that held sway over the entire Andhra region and parts of Odisha. 
Medieval Dynasties (7th century CE – 14th century CE)    Eastern Chalukyas of Vengi (624 – 1189 CE): A branch of the Badami
Chalukyas that ruled for over five centuries. This era saw the emergence of Telugu as a significant literary medium.
Kakatiya Dynasty (1083 – 1323 CE): Based in Warangal, they were the first since the Satavahanas to bring nearly all Telugu-speaking lands under one rule.
Musunuri Nayaks: Led by Prolaya and Kapaya Nayaka, they briefly liberated the region from the Delhi Sultanate in the 14th century.
            </p>
            <p className="text-foreground">
              Before independence, the Telugu speaking regions were not united under one administration. The coastal Andhra and Rayalaseema areas were a part of the madras presidency under British rule. The Telangana region was part of Hyderabad State ruled by the Nizam.
After independence in 1947,Telugu speaking people demanded a separate state based on language. 
            </p>
            <p className="text-foreground">
             To gain an independent state based on linguistic identity and to protect the interests of the Telugu-speaking people of Madras State, Potti Sreeramulu fasted to death on  15 December 1952 after 58 days of fasting. His death led to widespread protests and public unrest.
Due to public pressure, the Government of India created new state. The Telugu-speaking area of Andhra state  was carved out of Madras state on 1 October 1953,. It included coastal Andhra and Rayalaseema which was capital of Kurnool. Later, the Government passed the States Reorganisation Act to reorganize states based on language.
On 1 November 1956, the Telangana region from Hyderabad State was merged with Andhra State.This merger created Andhra Pradesh.Hyderabad became the capital. In the unified state of Andhra Pradesh, the Indian National Congress (INC) dominated politics until 1983. In that year, the Telugu Desam Party (TDP), led by N. T. Rama Rao (NTR), came to power, ending Congress dominance and becoming a major political force. Important development projects included the Nagarjuna Sagar Dam (1967) and the Srisailam Hydroelectric Project (1982), which improved irrigation and electricity supply.

            </p>
            <p className="text-foreground italic text-primary font-medium">
              Andhra Pradesh is widely known as the "Rice Bowl of India" for its massive agricultural productivity in the Godavari and Krishna river deltas. Furthermore, the state tourism board officially promotes it as the "Koh-i-Noor of India" to highlight its rich cultural heritage, ancient temples, and vast natural resources.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of AP, mapsofindia.com)
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
        <Section title="Facts about Andhra Pradesh" icon="💡">
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
            Scroll horizontally to explore Andhra Pradesh's iconic foods, crafts,
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
    name: "Sankranthi",
    tagline: "The Harvest Festival of Andhra Pradesh",
    description:
      "Sankranti is the major harvest festival celebrated across the state. It is celebrated for four days in the second week of January.  It marks the Sun’s transition into the zodiac sign Makara (Capricorn) and the beginning of Uttarayana —the northward movement of the Sun. The festival expresses gratitude for nature’s bounty, heralds longer days, and unites diverse regions through shared agricultural and spiritual observances. It is a major festival for farmers, celebrating the harvest season with joy and gratitude. People decorate their homes with colorful rangoli (muggulu), fly kites, and prepare traditional sweets like Ariselu and pongal. In Andhra Pradesh, it is celebrated for three days as Bhogi, Sankranti, and Kanuma. Makar Sankranti’s roots lie in ancient Vedic astronomy and agrarian life. It marks the end of winter and the arrival of the spring harvest. The festival also commemorates mythological events—such as Bhishma Pitamah’s departure during Uttarayan in the Mahabharata—signifying the day’s spiritual auspiciousness. Because it follows the solar calendar, its date remains almost fixed each year, unlike most Hindu festivals. Common observances include early-morning ritual baths in sacred rivers like the Ganges or Yamuna, prayers to Surya, and acts of charity. Families prepare sweets made of sesame and jaggery , believed to foster warmth and goodwill.",
    images: [sankranthi1, sankranthi2, sankranthi3, sankranthi4, sankranthi5],
    source: "(src: telangana.com, indianeagle.com, shutterstock.com, news18.com)",
  },
  {
    name: "Ugadi",
    tagline:
      "",
    description:
      "Ugadi is the first day of the Hindu lunar calendar and marks the beginning of the Telugu New Year. The word “Ugadi” is derived from the Sanskrit terms “Yuga” (era) and “Adi” (beginning), meaning “the start of a new era.” It is also known as Yugadi or Samvatsaradi. Ugadi is mainly celebrated by people in Andhra Pradesh, Telangana, and Karnataka, as well as by Telugu and Kannada communities in other parts of India and abroad. The festival usually falls in March or April and signifies the arrival of spring and a new agricultural cycle. The day is observed by drawing colourful patterns on the floor called Muggulu/Rangoli, mango leaf decorations on doors called torana, buying and giving gifts such as new clothes, giving charity to the poor, oil massages followed by special baths, preparing and sharing a special food called pachadi, and visiting Hindu temples. A special dish called Ugadi Pachadi is prepared, which contains six different tastes-sweet, sour, salty, bitter, spicy, and tangy representing the various emotions of life such as happiness, sadness, anger, and surprise. Another important tradition is listening to Panchanga Sravanam, where predictions for the upcoming year are read. Ugadi symbolizes new beginnings, hope, and prosperity, and is an important cultural and religious festival in South India.",
    images: [ugadi1, ugadi2, ugadi3],
    source: "(src: britannica.com, freepik.com, loknattimes.com)",
  },
  {
    name: "Gangamma Jatara: The Fierce Celebration of Tirupati's Guardian",
    tagline:
      "",
    description:
      "The Tirupati Ganga Jatara is one of the most vibrant and ancient folk festivals in Andhra Pradesh. While Tirupati is globally famous for the Lord Venkateswara Temple, this week-long festival celebrates his 'sister', Grama Devatha (Goddess of the Land) Sri Thathaya Gunta Gangamma, who protects the city. The festival is rooted in a powerful legend from the era of the Palegars (local petty kings). A local Palegar was notorious for harassing women. The Goddess took birth as Gangamma to end his tyranny. Terrified of her divine form, the Palegar went into hiding. To lure him out, Gangamma and the people of Tirupati donned various veshams (guises) over seven days, eventually tricking him into appearing so she could slay him and restore peace. The most distinctive feature of the Jatara is the tradition where devotees wear different 'guises' each day to mock the Palegar and please the Goddess. Day 1: Bairagi Vesham On the first day, devotees smear their bodies with white clay (Namam) and carry neem branches. They walk the streets in a meditative yet primal state, symbolizing the beginning of the search for the Palegar. Day 2: Banda Vesham The second day sees a shift to bold colors. Devotees cover themselves in a mixture of bright vermillion and turmeric. This 'Banda' look is meant to appear intimidating and powerful to provoke the hiding villain. Day 3: Thoti Vesham This day is a tribute to the community cleaners and workers. Devotees dress in humble attire, often using charcoal or dark colors to represent the ground-level protectors of the city, showing that the Goddess is present in every social layer. Day 4: Dora Vesham In a theatrical twist, devotees dress as the 'Dora' (the landlord or ruler). They wear jewelry and traditional headgear to mock the arrogance of the Palegar, hoping his ego will draw him out of hiding. Day 5: Matangi Vesham This day is dedicated to the fierce, feminine power of the Goddess. The Matangi guise represents the divine feminine in her most protective and aggressive form, signaling that the end of the tyrant is near. Day 6: Sunnapu Kundalu Devotees carry pots smeared with white lime and charcoal. The visual contrast is striking, and the 'Sunnapu Kundalu' (Lime Pots) are carried as part of a purification ritual before the final battle. Day 7: Perantalu & The Grand Finale On the final day, the town reaches a fever pitch. Some men dress as 'Perantalu' (noble women). This is the day the 'Viswaroopam' clay idol is built, the 'Palegar' is symbolically slain, and the festival concludes with the crushing of the clay idol, distributing the sacred earth to the crowds.",
    images: [gangamma1, gangamma2, gangamma3],
    source: "(src: youtube, sakshi.com, thehandsindiia.com)",
  },
  {
    name: "Srivari Brahmotsavam: The Festival of Nine Days",
    tagline:
      "",
    description:
      "The Srivari Brahmotsavam stands as the most magnificent and spiritually charged event at the Tirumala Venkateswara Temple, drawing millions of pilgrims to the sacred hills over nine days. This 'Festival of Brahma' is believed to have been first performed by Lord Brahma himself to thank Lord Venkateswara for protecting mankind. The entire festival is a masterclass in ancient Vedic traditions, where the temple’s surroundings are transformed into a sea of lights, flowers, and devotional music. Each day is marked by the grand Vahana Seva, where the processional deity, Lord Malayappa Swamy, is taken through the streets on various gold and silver vehicles—such as the mighty Garuda (Eagle), the majestic Gaja (Elephant), and the celestial Hanumantha—symbolizing different virtues and cosmic powers.The atmosphere during Brahmotsavam is one of pure ecstasy, peaking during the Garuda Seva on the fifth night, which is considered the most auspicious moment of the entire celebration. Devotees wait for hours in the galleries just to catch a glimpse of the Lord adorned in rare, precious jewels like the Makarakanti and the Sahasranama Mala. The festival concludes with the Chakrasnanam, a holy dip of the Sudarshana Chakra in the temple tank (Pushkarini), where thousands of devotees bathe simultaneously in an act of spiritual purification. Brahmotsavam is a highly structured, regal affair that showcases the pinnacle of Hindu temple architecture, ritualistic precision, and communal faith.",
    images: [srivari1, srivari2],
    source: "(src: pinterest, safarmentor.com)",
  },
  {
    name: "Vinayaka Chavithi",
    tagline:
      "The festival of Padhinettam Perukku, also known as 'Aadi Perukku', held on the 18th day of the Tamil month of Aadi.",
    description:
      "Vinayaka Chavithi (also known as Ganesh Chaturthi) is a vibrant festival that celebrates the birth of Lord Ganesha, the deity of wisdom, prosperity, and the remover of obstacles. In regions like Andhra Pradesh and Telangana, the festivities begin with the installation of beautifully crafted clay idols of Ganesha in homes and large public marquees called Pandals. Families perform traditional prayers (Shodashopachara Puja) and offer the Lord his favorite sweets, most notably Undrallu and Kudumulu (steamed rice flour dumplings). The air is filled with the scent of incense and the sound of Vedic chants, creating a deep sense of community and spiritual renewal.The festival often spans several days, culminating in a spectacular procession known as Ganesh Nimajjanam. During this grand finale, the idols are carried through the streets amidst music, dance, and clouds of colorful gulal powder toward a nearby river, lake, or the sea. As the idols are immersed in the water, devotees give a heartfelt plea for the Lord to return early the following year. This act of immersion symbolizes the cycle of creation and dissolution, reminding us that while the form changes, the divine energy remains eternal.",
    images: [vinayak1, vinayak2, vinayak3, vinayak4],
    source: "(src: pinterest, fifty.com, hindustanitimes.com)",
  },
  {
    name: "Sri Rama Navami",
    tagline: "Celebrates the birth of Lord Rama, especially grand at Bhadrachalam",
    description:
      "Sri Rama Navami is a joyous festival celebrating the birth of Lord Rama, the seventh incarnation of Lord Vishnu and the embodiment of dharma. While the festival is observed in homes across the country with the reading of the Ramayana and the distribution of Panakam (a refreshing jaggery and pepper drink), it takes on a magnificent scale at the Sita Ramachandra Swamy Temple in Bhadrachalam. Known as the 'Ayodhya of the South', this temple becomes the center of spiritual gravity as it hosts the Sitarama Kalyanam, the celestial wedding ceremony of Rama and Sita, which is performed with royal grandeur on this auspicious day.The celebrations in Bhadrachalam are unique due to their historical connection to the devotee Bhakta Ramadasu and the tradition of the state government offering Mutyala Talambralu (pearls mixed with rice) for the wedding ritual. Thousands of pilgrims gather along the banks of the Godavari River to witness the beautifully decorated idols placed on a grand stage. The air is filled with rhythmic chants and devotional songs, creating an atmosphere of profound peace and devotion. This festival serves as a powerful reminder of the virtues of truth and righteousness that Lord Rama’s life represents, bringing people together in a shared spirit of harmony and celebration.",
    images: [],
    source: "",
  },
  {
    name: "Dasara",
    tagline:
      "Celebrates the victory of good over evil with cultural events and rituals",
    description:
      "Dasara in Andhra Pradesh is a grand ten-day celebration that culminates in Vijayadashami, marking the triumphant victory of Goddess Durga over the demon Mahishasura. While the festival is celebrated across the state, it reaches its peak of splendor at the Kanakadurga Temple in Vijayawada. Perched atop the Indrakeeladri Hill, the Goddess is adorned in a different 'Alankaram' (guise) each day, such as Saraswati Devi, Mahalakshmi, and Raja Rajeswari Devi, attracting hundreds of thousands of devotees who climb the hill to seek her blessings. The atmosphere is electric with Vedic chants, traditional music, and the vibrant energy of people celebrating the feminine power of the Divine.In various regions, the festival is also a showcase of rich cultural heritage through the tradition of Bommala Koluvu, where families arrange elaborate tiers of dolls and figurines in their homes, depicting mythological stories and village life. The festivities often include local folk performances and the ritual of Shami Puja, where the Jammi tree is worshipped as a symbol of victory and prosperity. The celebrations conclude with a spectacular river procession known as Teppotsavam, where the processional deities are taken on a swan-shaped boat along the Krishna River. This blend of intense spiritual devotion and colorful community traditions makes Dasara a powerful reflection of the state's cultural identity and enduring faith.",
    images: [dasara1, dasara2, dasara3, dasara4],
    source: "(src: wikipedia, reddit)",
  },
];

const historicalPlaces = [
  {
    name: "SRI VENKATESWARA TEMPLE, TIRUMULA ,TIRUPATI",
    description:
      "The Sri Venkateswara Temple is one of the most famous and sacred temples in India, located on the Tirumala hills near Tirupati in Andhra Pradesh. Dedicated to Lord Venkateswara, a form of Lord Vishnu, this temple attracts millions of devotees from all over the world every year and is considered one of the richest and most visited religious sites globally. The temple has a long history and was developed by South Indian dynasties like the Pallavas, Cholas, and Vijayanagara rulers. These rulers played an important role in expanding the temple and preserving its cultural heritage. .Architecturally, the temple is built in the traditional Dravidian style, featuring beautifully carved pillars, intricate sculptures, and a magnificent golden dome known as the Ananda Nilayam. The temple complex is well-organized and showcases the richness of South Indian temple architecture, reflecting both artistic excellence and deep spiritual significance. The temple holds immense religious importance, as devotees believe that Lord Venkateswara fulfills wishes and blesses those who visit with faith. One of the most unique traditions followed here is the offering of hair by devotees, symbolizing the surrender of ego. The temple is also known for its well-managed systems and rituals that are performed daily with great devotion. Among the many festivals celebrated at the temple, the Brahmotsavam is the most prominent and grand event, attracting a huge number of pilgrims. The temple remains crowded throughout the year, but the best time to visit is during the cooler months when the weather is pleasant. Tirumala is well-connected by road, rail, and air, making it easily accessible for tourists and pilgrims. Visitors are required to follow certain rules and guidelines to maintain the sanctity and discipline of the temple. Overall, the Sri Venkateswara Temple is not only a place of worship but also a symbol of rich history, culture, and architectural brilliance.",
    images: [tirupati1, tirupati2],
    source: "(src:inspiredpencil.com, pinterest)",
  },
  {
    name: "Srisailam",
    description:
      "Srisailam is a revered hill town in Andhra Pradesh, India, situated in the Nallamala Hills on the banks of the Krishna River. It is renowned as one of the twelve Jyotirlingas of Lord Shiva and one of the eighteen Shakti Peethas of Goddess Parvati, making it a major center for Hindu pilgrimage and heritage tourism. The town harmoniously combines spiritual devotion with natural splendor.Spiritual significance:At the heart of Srisailam lies the Mallikarjuna Swamy Temple, housing both a Jyotirlinga and a Shakti Peetha—an uncommon dual sanctity in Hindu tradition. According to legend, the temple commemorates the divine union of Lord Shiva and Goddess Parvati as Mallikarjuna and Bhramaramba. Pilgrims perform rituals, circumambulations, and festival observances, especially during Maha Shivaratri, when thousands gather to seek blessings. Natural attractions:Srisailam’s setting amid the Nallamala forest range enhances its appeal. The Nagarjunasagar–Srisailam Tiger Reserve, India’s largest tiger reserve, surrounds the area, offering wildlife safaris and eco-tourism experiences. Other scenic highlights include the Srisailam Dam, the serene Pathala Ganga ghats on the Krishna backwaters, the limestone Akkamahadevi Caves, and panoramic lookouts like Octopus Viewpoint. Cultural and ecological context:The region’s culture is intertwined with the Chenchu tribe, whose heritage is showcased at the Chenchu Lakshmi Tribal Museum. Locally, vegetarian South Indian cuisine and temple offerings dominate, sustaining the traditional pilgrimage character. Srisailam’s ecology—lush forests, rocky valleys, and river gorges—also supports diverse flora and fauna, underscoring its dual identity as both a sacred kshetra and a protected natural sanctuary.",
    images: [rames1, rames2, rames3],
    source: "(src: wikimedia, travelshrine.com)",
  },
  {
    name: "Srikalahasti",
    description:
      "Srikalahasti is a historic temple town in Andhra Pradesh, India, celebrated as a major pilgrimage site for followers of Lord Shiva. Situated along the Swarnamukhi River about 36 km from Tirupati, it is best known for the Srikalahasti Temple, one of South India’s oldest and most revered Shaivite shrines.Historical background:The town’s sacred center, the Srikalahasti Temple, traces its origins to early Pallava patronage and was later expanded by the Chola kings and Vijayanagara Empire. Inscriptions and architecture record contributions from rulers such as Rajendra Chola I and Krishnadevaraya (who built the 120-ft gopuram in 1516). The temple’s name derives from a local legend of a spider (“Sri”), snake (“Kala”), and elephant (“Hasti”) whose devotion to Shiva earned salvation.Religious and architectural significance:The shrine represents Vāyu, the wind element, making it one of the five Pancha Bhuta Sthalams.(The other four Pancha Bhoota Sthalams are in Tamil Nadu state and can be found in the respective page.) Its sanctum houses the self-manifest Vayu Lingam, symbolizing the invisible life-breath. The complex features classic Dravidian design—massive gateways, the hundred-pillared mandapam, and finely carved stone sculptures blending Chola precision with Vijayanagara grandeur. A continuously flickering lamp in the inner sanctum is said to burn without air movement, reinforcing the temple’s elemental association. Cultural heritage:Beyond the temple, Srikalahasti is noted for Kalamkari art—hand-painted textiles using natural dyes—and for related shrines such as Bhakta Kannappa Temple, Sahasra Linga Temple, and Durgambika Temple. Festivals like Maha Shivaratri and Brahmotsavam draw thousands of pilgrims each year, transforming the town into a vibrant devotional hub. ",
    images: [kalahasti1, kalahasti2],
    source: "(src: tfispot.com, templediary.com)",
  },
  {
    name: "Lepakshi Temple",
    description:
      "The Veerabhadra Temple, also known as Lepakshi Temple, is a famous historical temple located in Andhra Pradesh, about 112 km from Anantapur. It is dedicated to Lord Veerabhadra, a form of Lord Shiva, and is recognized as one of the 108 important Shiva temples in India. Built during the 16th century under the Vijayanagara Empire, the temple is a fine example of classical Vijayanagara architecture. It is situated on a low hill called Kumarasailam, which is believed to resemble a tortoise. The temple complex is divided into sections such as the Natya Mandapa (dance hall), Ardha Mandapa, and the sanctum with Kalyana Mandapa. One of the most unique features of this temple is the hanging pillar, which does not touch the ground, showing the advanced engineering skills of that time. Another highlight is the large Nandi (bull) statue located nearby, which is one of the biggest monolithic Nandi statues in India. The Natya Mandapa, which is supported by beautifully carved pillars featuring figures of dancing gods, with a central dome shaped like a lotus. The ceilings of the temple are decorated with colorful murals depicting scenes from the Ramayana, Mahabharata, and Puranas.",
    images: [lepkashi1, lepakshi2, lepkashi3, lepakshi4],
    source: "(src: thestatesman.com, quickywander.com, cities2explore.com, bigstockphoto.com)",
  },
  {
    name: "Amaravathi Stupa",
    description:
      "The Amaravati Stupa is an ancient Buddhist monument located in Amaravati, Guntur district, Andhra Pradesh. It is one of the most important stupas in India and represents the rich Buddhist heritage of the region. The Amaravati Stupa, also known as the Amaravathi Mahachaitya.  It was one of the most important Buddhist centers in South India.The stupa was originally built around the 3rd century BCE and later expanded during the Satavahana period. It served as a major center for Buddhist learning and attracted monks and pilgrims from different parts of the world .Architecturally, the stupa was known for its large circular dome and beautifully carved limestone panels depicting scenes from the life of Buddha and various Jataka tales. Though much of the structure is now in ruins, its sculptures are preserved in museums. Amaravati Stupa exhibits a classic hemispherical stupa design with a pronounced drum at its base, adorned with elaborately carved panels depicting scenes from the life of the Buddha, Jataka tales (stories of the Buddha’s previous births), and divine beings. These panels are exemplary of the Amaravati school of sculpture, known for highrelief carvings, delicate lines, and intricate storytelling in stone. The stupa follows a circular plan with multiple terraces leading up to the central dome.The stupa complex included a harmika (a square railing atop the dome symbolizing the heaven of the Buddha) and a chatra (an umbrella-like structure) representing the axis mundi, connecting the heavens and earth. The base also contains sculpted friezes showing scenes of daily life, processions, and royal figures, illustrating the interplay between religion and society during that era.",
    images: [stupa1, stupa2],
    source: "(src: buddhistpilgrimagetours.com, fifty.club)",
  },
  {
    name: "Undavalli Caves",
    description:
      "The Undavalli Caves are situated in  Vijayawada, Guntur district, approximately 6 km southwest of Vijayawada. The caves are located on the banks of the Krishna River, surrounded by lush greenery, providing a serene atmosphere for visitors .They were carved out of solid sandstone during the reign of the Vishnukundina dynasty, which ruled from 420 to 620 CE. Initially, these caves served as a Jain abode but later became a site for Buddhist monks and eventually transformed into Hindu temples. This evolution reflects the diverse spiritual history of the region.The caves are known for their impressive rock-cut architecture, which includes multiple levels and intricate sculptures. The main cave features a large reclining statue of Lord Vishnu, sculpted from a single block of granite, which is a major attraction. The caves also exhibit elements of Gupta architecture, characterized by their monolithic design and detailed carvings. The largest cave features four storeys carved into sandstone, about 29 meters long and 16 meters wide. The ground floor forms an unfinished pillared hall; the first level retains Jain elements with Tirthankara reliefs. The second level contains the main sanctuary with a five-meter granite statue of Lord Vishnu reclining on Adisesha, crafted from a single block . Higher levels include shrines dedicated to the Trimurti—Brahma, Vishnu, and Shiva—and Chalukyan-period sculptures of lions, elephants, and Vaishnava saints. The walls of the caves are adorned with intricate carvings, including depictions of deities and scenes from mythology, reflecting the artistic skills of ancient craftsmen.The Undavalli Caves are not only a significant historical site but also a testament to India's rich cultural heritage. They attract history enthusiasts, architecture lovers, and tourists alike, making them a must-visit destination in Andhra Pradesh.",
    images: [undavalli1, undavalli2, undavalli3, undavalli4],
    source: "(src: Wikipedia)",
  },
  {
    name: "Borra Caves",
    description:
      "Borra Caves, locally called Borra Ghuhalu, are located in the Ananthagiri hills of the Araku Valley in the Alluri Sitharama Raju district of Andhra Pradesh, India, at an elevation of about 705 meters (2,313 ft) above sea level. These caves are among the largest and deepest limestone caves in India, extending to a depth of approximately 80 meters (260 ft) and spanning around 200 meters (660 ft) in length. They were discovered in 1807 by British geologist William King during a geological survey. The caves are formed from karstic limestone, shaped over millions of years by the Gosthani River, which originates from the caves themselves. Continuous water percolation has created stalactites (0.1–3.5 m long) and stalagmites (average 1.2 m long), along with impressive columns up to 6 m high and 0.75 m wide. Some formations resemble Shiva Linga, Crocodile, Mother-Child, Rishi’s Beard, and Human Brain, adding both natural and cultural intrigue. The caves maintain a cool internal temperature of around 16 °C. Local tribal legends describe the discovery of the caves when a cow fell through a hole in the roof, leading to the finding of a Shiva Lingam inside. A small temple near the entrance is dedicated to Lord Shiva, and the caves are visited by devotees, especially during Shivaratri. Archaeological excavations have revealed Middle Paleolithic stone tools, indicating human habitation dating back 30,000–50,000 years. The caves host bats, including the fulvous fruit bat, and the golden gecko. Microbial mats and biofilms contribute to the formation of speleothems, while the surrounding hills are rich in flora and wildlife. The area also contains mica formations with precious stones like rubies.The site is maintained by the Andhra Pradesh Tourism Development Corporation and features guided tours, lighting displays, and walkways. The caves are open daily (approx. 10 AM–5 PM) and accessible by road or rail from Visakhapatnam via the scenic Kothavalasa–Kirandul line through the Eastern Ghats. Nearby attractions include the Araku Valley, Katiki Waterfalls, and coffee plantations. Illuminated chambers, cool air, and echoing chambers create a surreal atmosphere.",
    images: [borra1, borra2, borra3],
    source: "(src: Wikipedia, thehindu.com)",
  },
  {
    name: "Ahobilam",
    description:
      "Ahobilam is a revered Hindu pilgrimage complex located in the Nallamala Hills of Andhra Pradesh, India. It is dedicated to Lord Narasimha, an incarnation of Vishnu, and holds deep significance in Vaishnavism for housing the sacred Nava Narasimha (nine forms of Narasimha) shrines.Religious significance:Ahobilam is one of the 108 Divya Desams—holy Vishnu temples celebrated in Tamil Alvar hymns. The site marks where Vishnu is believed to have appeared as Narasimha to protect his devotee Prahlada and destroy the demon Hiranyakashipu. The nine shrines represent different aspects of the deity, ranging from fierce to benevolent.Geography and layout:The complex lies in two parts: Upper (Eguva) Ahobilam, nestled in dense forested hills, and Lower (Diguva) Ahobilam in the plains. The shrines are spread across rugged terrain, linked by trails, caves, and waterfalls, making pilgrimage both spiritual and physical. The landscape contributes to its reputation as one of the most scenic temple clusters in South India.Architecture and heritage:Temples at Ahobilam display a blend of Chola and Vijayanagara architectural influences, with intricate carvings and towering gopurams. The Ahobila Math, an ancient monastic institution, is closely associated with the site’s maintenance and religious traditions. Stone inscriptions within the complex record royal patronage dating back centuries.Pilgrimage and festivals:Ahobilam draws devotees year-round, with peak visitation during Narasimha Jayanti and Brahmotsavam festivals. Trekking between the Nava Narasimha temples—traditionally viewed as a sacred yatra—symbolizes the devotee’s spiritual ascent and perseverance.",
    images: [ahobilam1, ahobilam2],
    source: "(src: Wikipedia, pinterest)",
  },
  {
    name: "Annavaram",
    description:
      "Annavaram is a renowned pilgrimage town located in the East Godavari district of Andhra Pradesh, India. It is celebrated for the Sri Veera Venkata Satyanarayana Swamy Temple, dedicated to Lord Vishnu’s form Veera Venkata Satyanarayana Swamy. The temple’s unique setting atop Ratnagiri Hill overlooking the Pampa River makes it a major religious and scenic attraction.Spiritual Significance:Annavaram ranks among Andhra Pradesh’s most visited pilgrimage centers, second only to Tirumala in prominence. The temple complex enshrines Lord Satyanarayana along with Goddess Ananta Lakshmi Satyavathi Devi. Devotees perform the Satyanarayana Vratam ritual here to seek divine blessings for prosperity, marriage, and new beginnings. The temple architecture combines Dravidian and traditional styles, symbolizing harmony between divinity and nature. Situated about 142 kilometers from Vishakhapatnam and near the Godavari River basin, Annavaram offers panoramic views of lush paddy fields and the winding Pampa River. Visitors can reach the hilltop by a stepped pathway or via a ghat road suitable for vehicles. The nearby railway station on the South Central Railway network makes it accessible for pilgrims traveling from across southern India.Culture and Tourism:The area surrounding the temple blends spirituality with natural beauty, offering boating on the Pampa River and tranquil viewpoints. The town’s name is said to derive from “Anna” (food or sustenance) and “Varam” (boon), reflecting the belief that the presiding deity grants every sincere wish. Local cuisine is strictly vegetarian, with Udupi-style eateries serving South Indian delicacies to pilgrims. Annavaram maintains a peaceful ambience year-round, with annual temple fairs and devotional programs drawing thousands. Devotees often combine visits with other regional shrines such as Draksharamam Temple and Pithapuram Temple. The site’s combination of spiritual depth, scenic landscape, and cultural tradition makes it a distinctive highlight of Andhra Pradesh’s religious tourism circuit.",
    images: [annavaram1, annavaram2],
    source: "(src: jaishabarisha.blogspot.com, hindupad.com)",
  },
  {
    name: "Simhachalam",
    description:
      "Simhachalam is a revered hill shrine and suburb in Visakhapatnam, Andhra Pradesh, India. Best known for the Sri Varaha Lakshmi Narasimha Swamy Temple, it is one of South India’s most important pilgrimage centers dedicated to Lord Vishnu in his Varaha–Narasimha form. The site combines spiritual devotion, medieval architecture, and scenic hilltop views overlooking Visakhapatnam.Historical and religious significance:Simhachalam’s sanctity arises from the legend of Prahlada and Hiranyakashipu, where Lord Narasimha appeared to protect his devotee. The deity here merges the boar (Varaha) and lion-man (Narasimha) incarnations of Vishnu. The temple’s earliest inscriptions date to the Chola period around the 11th century CE, with later patronage from the Eastern Ganga and Vijayanagara dynasties. These influences enriched both its liturgy and its sculptural tradition.Architecture and layout:The hilltop temple complex exemplifies medieval South Indian design. The sanctum’s vimana rises about 80 feet, ornamented with pancharatha projections typical of Odishan art. Intricately carved pillars, mandapas for dance and marriage rituals, and a fortified enclosure define the site. Notably, the main idol remains covered in sandalwood paste year-round; only on Akshaya Tritiya during the Chandanotsavam festival is the original form revealed to devotees.Environment and access:Surrounded by the forested Eastern Ghats, Simhachalam Hill reaches roughly 523 m at its peak and hosts medicinal flora. Pilgrims reach the temple via a motorable ghat road or by ascending stone steps from the base. The nearby Simhachalam Road railway station and Visakhapatnam International Airport provide convenient access.",
    images: [simha1, simha2, simha3, simha4],
    source: "(src: templewalks.com, wikipedia, dreamstime.com)",
  },
  {
    name: "Araku Valley",
    description:
      "Araku Valley is a scenic hill station and coffee-growing region in the Eastern Ghats, located about 110 kilometers from Visakhapatnam in southeastern India. Known for its lush forests, waterfalls, and tribal heritage, it is a popular eco-tourism and cultural destination in Andhra Pradesh. Araku Valley lies in the Eastern Ghats mountain range and features rolling hills covered with dense forests. The valley enjoys a moderate climate year-round, with misty mornings and cool evenings. Numerous streams, waterfalls, and caves punctuate its landscape, contributing to its reputation as the “Ooty of Andhra Pradesh.”The valley’s scenic train route from Visakhapatnam, featuring 58 tunnels and 84 bridges, is considered one of India’s most picturesque. The Tribal Museum showcases the art, crafts, and traditions of local tribes. Araku is renowned for its organic coffee, cultivated primarily by tribal farmers through cooperatives like the Araku Coffee project. The blend has gained international recognition for its sustainable production and distinct flavor profile. Annual festivals and markets celebrate indigenous arts, dance, and cuisine, offering insight into the cultural fabric of the region. Tourism and coffee cultivation drive Araku’s local economy. Initiatives promoting eco-tourism and fair-trade coffee have enhanced livelihoods while preserving the valley’s biodiversity and tribal heritage. Improved infrastructure has made Araku more accessible while maintaining its tranquil, nature-centric appeal.",
    images: [araku1, araku2, araku3, araku4],
    source: "(src: wikipedia)",
  },
  {
    name: "RK Beach",
    description:
      "Ramakrishna Beach, popularly known as RK Beach, is a major seaside attraction in Visakhapatnam along the Bay of Bengal. Stretching for about three kilometers, it combines golden sands, scenic sea views, and a lively promenade that reflects the coastal spirit of the city. It is both a leisure hub and a cultural landmark for residents and visitors alike. Named after the nearby Ramakrishna Mission Ashram, the beach reflects the spiritual legacy of Swami Vivekananda and Sri Ramakrishna Paramahamsa. Since the mid-20th century, it has hosted major city events such as Navy Day celebrations, air shows, and the annual Coastal Festival, integrating faith, heritage, and public life. The shoreline offers an unbroken view of the Bay of Bengal, framed by the Eastern Ghats in the distance. The beach is known for calm mornings and energetic evenings when the promenade fills with walkers, joggers, and food stalls selling roasted corn, chaat, and seafood. Although swimming is discouraged due to strong currents, visitors enjoy sunrises, photography, and leisurely strolls. Several notable landmarks line the adjoining Beach Road. The INS Kurusura Submarine Museum displays a decommissioned naval submarine; the Victory at Sea Memorial honors the 1971 war victory; and the Visakha Museum showcases regional maritime history. The nearby Kali Temple adds a devotional element to the coastal walk. RK Beach is open year-round and free to access, with well-maintained walkways, lighting, and police presence ensuring safety. The local administration and civic volunteers regularly organize clean-up drives to combat littering and protect the marine ecosystem, as pollution and over-crowding remain ongoing challenges.",
    images: [rk1, rk2, rk3, rk4],
    source: "(src: Wikipedia)",
  },
  {
    name: "Gandikota",
    description:
      "Gandikota, often called the “Grand Canyon of India,” is a historic fort village in Kadapa district, Andhra Pradesh. It is renowned for its breathtaking gorge formed by the Penna River cutting through the Erramala hills, combining striking natural scenery with centuries-old architecture.Historical background:Gandikota derives its name from the Telugu words gandi (gorge) and kota (fort). The fort was established around the 12th century under the Kalyani Chalukyas and later flourished under the Kakatiya and Vijayanagara Empires. French traveler Jean-Baptiste Tavernier described it as one of the strongest citadels of Golconda. The site’s governance passed through the Qutb Shahi, Mughal, and British rulers before independence. The fort complex encloses Hindu and Islamic monuments illustrating Gandikota’s multicultural past. Natural landscapeThe Penna River gorge—about 200 meters wide and over 300 feet deep—reveals striking red quartzite cliffs that glow at sunrise and sunset. From the fort’s edge, the panoramic Penna River Viewpoint provides sweeping vistas often compared to the Grand Canyon of Arizona.Tourism and activities:Gandikota is a hub for history and adventure tourism. Visitors can explore fort ruins, trek the canyon rim, or kayak on the Pennar. Camping and stargazing at the canyon edge are popular, especially during the cool winter months. Nearby attractions include Belum Caves, Yaganti Temple, and Mylavaram Dam.Access:The site lies about 85 km from Kadapa and 15 km from Jammalamadugu. The nearest railhead is Yerraguntla, and the closest airport is Kadapa Airport. Well-connected roads make Gandikota a convenient weekend destination from Bengaluru, Hyderabad, or Chennai.",
    images: [gandikota1, gandikota2, gandikota3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Horsley Hills",
    description:
      "Horsley Hills is a scenic hill station located in the Chittoor district of Andhra Pradesh, India. Nestled at about 1,265 meters (4,150 feet) above sea level, it serves as a tranquil getaway known for its cool climate, dense vegetation, and panoramic views over the surrounding plains.Geography and climate:Horsley Hills lies in the Eastern Ghats and features rolling terrain covered with eucalyptus, gulmohar, and sandalwood trees. The region maintains mild temperatures throughout the year, offering relief from the surrounding plains’ summer heat. Seasonal mists and monsoon greenery add to its appeal as a year-round nature retreat.History and significance:The hills were named after W.D. Horsley, a British civil servant who established his summer residence here in the 19th century to escape the hot climate of the Deccan plains. The bungalow he built remains a landmark. Since then, Horsley Hills has grown into a modest tourist center maintained by the Andhra Pradesh Tourism Development Corporation (APTDC). Visitors are drawn to viewpoints such as Gali Bandalu (Wind Rocks), Whisper Wind View Point, and Gangotri Lake. Adventure options include trekking, ziplining, and rock climbing. The Environmental Park and small zoo preserve native species like deer and peacocks, complementing the area’s ecological charm. The hill station’s accessibility from Bengaluru and Tirupati makes it a popular weekend destination for nature lovers.",
    images: [hh1, hh2],
    source: "(src: tripzygo.com)",
  },
  {
    name: "Lambasingi",
    description:
      "Lambasingi is a hill village in the Eastern Ghats of the Andhra Pradesh, located in the Alluri Sitharama Raju district. Perched about 1,000 meters above sea level, it is famed as the “Kashmir of Andhra Pradesh” for its unusually cold winters and mist-covered landscapes. Known locally as Korra Bayalu, it is the only place in South India known to occasionally experience frost or light snowfall. Lambasingi sits in the Chintapalli Mandal amid the Eastern Ghats’ moist deciduous forests. The altitude gives it a cool, misty climate distinct from nearby plains, with winter temperatures sometimes dipping below freezing. The area remains enveloped in fog until late morning, creating a strikingly alpine feel rare in southern India. The region’s scenic highlights include Lambasingi Viewpoint, offering sunrise panoramas over rolling valleys, the Thajangi Reservoir with calm waters ideal for photography, and Kothapalli Waterfalls, a seasonal cascade surrounded by forest. Dense coffee and pepper plantations dominate the slopes, while smaller farms grow apples, strawberries, and pineapples. Visitors often enjoy trekking, birdwatching, and overnight camping under starlit skies. Lambasingi is home to tribal communities whose crafts, dances, and local cuisine enrich the visitor experience. Andhra Pradesh Tourism has promoted the hamlet as an eco-tourism site, balancing accessibility with preservation of its fragile environment. Homestays, small resorts, and government lodges like the Haritha Hill Resort provide simple accommodations, with bonfire evenings and local meals as common highlights.The nearest transport hub is Visakhapatnam International Airport; buses and taxis connect the 3-hour route via Anakapalle and Narsipatnam. Trains to Anakapalle or Narsipatnam Road offer additional options. The prime travel season runs November–February, when clear skies and chill air reveal Lambasingi’s famed mists and, on rare mornings, traces of frost.Lambasingi remains an offbeat retreat for nature lovers seeking cool weather, serene forests, and a glimpse of South India’s most unexpected winter landscape.",
    images: [ls1, ls2, ls3, ls4, ls5, ls6],
    source: "(src: Themergingindia.com, Wikipedia)",
  },
  {
    name: "Talakona Waterfalls",
    description:
      "Talakona Waterfalls is a scenic cascade located in the dense forests of the Sri Venkateswara National Park, near Nerabailu village in the Chittoor district of Andhra Pradesh, India. Known as the highest waterfall in the state, it is a prominent natural attraction and a popular pilgrimage and eco-tourism site.Geography and setting:Talakona lies within the Eastern Ghats, surrounded by rich tropical forest and biodiversity. The waterfall is formed by a perennial stream that plunges from a steep cliff, particularly impressive during the monsoon season. The surrounding region hosts numerous plant and animal species, some considered rare and endemic to the Eastern Ghats. The waterfall and its surrounding forest are part of a declared biosphere zone within the Sri Venkateswara National Park. The area is also home to the Siddheswara Swamy Temple, a small shrine dedicated to Lord Shiva, which attracts pilgrims, especially during the festival of Shivaratri. Local tradition regards the waters as having medicinal properties. The Andhra Pradesh Forest Department manages Talakona as an eco-tourism destination, offering guided treks, canopy walks, and basic forest guesthouses. Efforts are in place to balance visitor access with habitat preservation, as the area supports species such as sambar deer, Indian giant squirrels, and a variety of birds and reptiles. The site is best visited between September and January, when the water flow and greenery are at their peak.",
    images: [talakona1],
    source: "(src: Wikipedia)",
  },
  {
      name: "Belum Caves",
    description:
      "Belum Caves is an extensive underground cave system located near Belum Village in the Kurnool district of Andhra Pradesh, India. Known for its long passages, spacious chambers, and striking stalactite–stalagmite formations, it is one of the largest and most spectacular cave networks on the Indian subcontinent.Formation and geology:Belum Caves were formed over millions of years by the action of underground water on limestone deposits of the Cretaceous period. The cave’s interiors display naturally sculpted formations—stalactites, stalagmites, and flowstones—created by calcium carbonate deposits. The passages exhibit typical karst topography, with sinkholes and water-formed galleries.Archaeological and cultural significance:Archaeological evidence indicates the caves were used by Buddhist monks for meditation centuries ago. Excavations have unearthed relics such as vessels and tools, linking the site to ancient habitation. A large chamber known as the 'Meditation Hall' and a Buddha statue near the entrance commemorate this heritage. Belum Caves was opened to the public in 2002 after infrastructure development by APTDC, which installed pathways, lighting, and ventilation systems. The site attracts both tourists and speleologists interested in its natural beauty and geological features. Conservation efforts focus on maintaining air circulation and preventing damage from moisture and human activity. Visitor experience:The main entry lies near Belum Village, roughly 30 km from Tadipatri town. Visitors traverse illuminated tunnels and chambers, such as Simhadwaram (“Lion’s Gate”) and Dhyan Mandir (“Meditation Hall”). The caves maintain a moderate temperature year-round, enhancing accessibility for exploration.",
    images: [belum1, belum2, belum3, belum4, belum5],
    source: "(src: Wikipedia)",
  },
  {
    name: "Nagarjunakonda",
    description:
      "Nagarjunakonda is an ancient archaeological site and historical island located in the Andhra Pradesh, within the Palnadu district near the Krishna River valley. Named after the Buddhist scholar Nagarjuna, it preserves remnants of a major Buddhist learning center that flourished between the 2nd and 4th centuries CE.Historical significance:Before submergence by the Nagarjuna Sagar Dam project, the valley was one of South India’s richest archaeological zones. Excavations uncovered stupas, chaityas, and viharas belonging to the Ikshvaku dynasty era, revealing a vibrant Buddhist scholastic community with international links to Sri Lanka and Central Asia. The site reflects the spread of Mahayana Buddhism across the Deccan.Relocation and preservation:In the 1960s, much of Nagarjunakonda was submerged under the reservoir formed by the Nagarjuna Sagar Dam. Archaeologists relocated key monuments and artifacts to higher ground, creating an island museum that replicates parts of the ancient landscape. This preservation effort is considered one of India’s earliest large-scale archaeological relocations.The site museum:The Nagarjunakonda Museum, managed by the Archaeological Survey of India, exhibits sculptural panels, inscriptions in Brahmi and Prakrit, and relics of the Buddha. The museum’s architecture echoes a stupa design, housing both original artifacts and reconstructed structures.Modern relevance:Today, Nagarjunakonda remains a significant cultural and tourist attraction, accessible by boat from the Nagarjuna Sagar Dam area. It offers a rare glimpse into early South Indian Buddhist heritage, illustrating the confluence of religion, art, and hydraulic engineering that shaped the Krishna River civilization",
    images: [nk1, nk2, nk3, nk4],
    source: "(src: Wikipedia)",
  },
];

const facts = [
  "Kuchipudi is one of India’s eight classical dance forms and originated from a village of the same name. ",
  "Kalamkari uses natural dyes and hand-drawing techniques, and can take several weeks to complete a single piece. ",
  "Andhra Pradesh is known for having one of the spiciest cuisines in India, especially due to extensive use of chilies. ",
  "The state is one of India’s largest producers of tobacco and chillies, playing a major role in agriculture.",
  "Guntur is globally renowned as the 'Spice Capital of India', home to Asia's largest red chili market yard",
  "The ancient Amaravati School of Art influenced early Buddhist sculpture and architecture in India. ",
  "Tirumala Tirupati Temple is one of the richest and most visited temples in the world. ",
  "Satish Dhawan Space Centre at Sriharikota is India’s main space launch center.",
  "The Koh-i-Noor Connection:  The world-famous Koh-i-Noor diamond, along with many other legendary stones, was originally unearthed in the Kollur Mines of the Guntur district.",
  "The Largest Banyan Tree: The Thimmamma Marrimanu in Anantapur district is recorded as one of the largest banyan trees in the world, with a canopy that covers over five acres. It is said to be abiout 550 years old.",
  "Borra Caves’ Ancient Roots: The Borra Caves in the Araku Valley are over 150 million years old and are among the largest and deepest speleothems (cave formations) in the country.",
  "The tricolor Indian National Flag was originally designed by Pingali Venkayya, a freedom fighter born in the Krishna district of Andhra Pradesh.",
  "The state contributes a staggering 70% of India's shrimp production and accounts for a massive chunk of the country's overall seafood exports. It is also affectionately called the 'Chocolate State of India' due to its high cocoa production.",
  "Historically, Andhra State was the first state in independent India to be formed purely on the basis of language (established in 1953)",
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
