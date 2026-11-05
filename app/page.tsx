import Image from "next/image";
import Link from "next/link";

const PHONE = "+40760249900";
const PHONE_DISPLAY = "+40 760 249 900";
const WHATSAPP_LINK = `https://wa.me/${PHONE.replace("+", "")}`;
const FACEBOOK_LINK = "https://www.facebook.com/profile.php?id=61587983070663";

const services = [
  {
    icon: "🏠",
    title: "Vanzare Proprietati",
    desc: "Te ajutam sa vinzi locuinta la cel mai bun pret, rapid si sigur.",
  },
  {
    icon: "🔑",
    title: "Cumparare Proprietati",
    desc: "Gasim imobilul ideal pentru tine – case, apartamente, terenuri.",
  },
  {
    icon: "📋",
    title: "Inchiriere",
    desc: "Servicii complete de inchiriere, atat pentru proprietari cat si chiriasi.",
  },
  {
    icon: "🏦",
    title: "Consultanta Bancara",
    desc: "Consiliere pentru credite ipotecare si finantare imobiliara.",
  },
  {
    icon: "📝",
    title: "Consultanta Juridica",
    desc: "Asistenta completa pana la semnarea contractului.",
  },
  {
    icon: "📍",
    title: "Evaluare Proprietati",
    desc: "Evaluare profesionala pentru a stabili valoarea corecta a proprietatii tale.",
  },
];

const reviews = [
  {
    name: "Larisa Popa",
    text: "Am cumparat o casa cu GeoImob, foarte multumita. A fost eficienta, comunicativa si ajutatoare. Recomand cu toata caldura.",
    stars: 5,
  },
  {
    name: "Moni Em",
    text: "Seriozitate maxima, implicare si un vibe pozitiv. 😊",
    stars: 5,
  },
  {
    name: "Andreea Elena",
    text: "Am avut consultanta atat bancara cat si imob pana la semnarea contractului! Recomand cu incredere! 🤗",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">★</span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-inter)]">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.avif"
              alt="GeoImob Logo"
              width={120}
              height={48}
              className="object-contain h-12 w-auto"
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#servicii" className="hover:text-[#c9a84c] transition-colors">Servicii</a>
            <a href="#despre" className="hover:text-[#c9a84c] transition-colors">Despre Noi</a>
            <a href="#recenzii" className="hover:text-[#c9a84c] transition-colors">Recenzii</a>
            <a href="#contact" className="hover:text-[#c9a84c] transition-colors">Contact</a>
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="bg-[#c9a84c] hover:bg-[#a8893e] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.avif"
            alt="GeoImob Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/40 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#c9a84c] text-sm font-medium">Agentie Imobiliara Valcea</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Casa ta de vis
              <br />
              <span className="text-[#c9a84c]">incepe aici</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              GeoImob — partenerul tau de incredere pentru cumpararea, vanzarea sau inchirierea
              proprietatilor in Valcea. Consultanta profesionala de la inceput pana la semnatura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-8 py-4 rounded-full font-semibold text-base transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L0 24l6.345-1.504A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.78 9.78 0 01-5.002-1.374l-.358-.214-3.767.892.952-3.676-.234-.375A9.773 9.773 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base transition-colors backdrop-blur-sm"
              >
                Contacteaza-ne
              </a>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#1a1a2e] py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "100+", label: "Proprietati Tranzactionate" },
            { num: "5★", label: "Rating Mediu Clienti" },
            { num: "100%", label: "Transparenta" },
            { num: "24/7", label: "Suport si Consultanta" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-[#c9a84c]">{s.num}</div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICII */}
      <section id="servicii" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest">Ce oferim</span>
            <h2 className="text-4xl font-bold text-[#1a1a2e] mt-2">Serviciile Noastre</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Oferim o gama completa de servicii imobiliare pentru a-ti face experienta cat mai usoara si placuta.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2 group-hover:text-[#c9a84c] transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESPRE NOI */}
      <section id="despre" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest">Echipa noastra</span>
              <h2 className="text-4xl font-bold text-[#1a1a2e] mt-2 mb-6">Despre GeoImob</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                GeoImob este o agentie imobiliara din Valcea, fondată cu misiunea de a oferi servicii imobiliare
                de calitate, bazate pe incredere, transparenta si profesionalism.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Oferim consultanta completa — de la identificarea proprietatii potrivite, negociere, consultanta
                bancara pentru finantare, pana la semnarea contractului final.
              </p>
              <div className="bg-[#c9a84c]/10 border-l-4 border-[#c9a84c] rounded-r-xl p-5">
                <p className="font-semibold text-[#1a1a2e] text-lg">Avramescu Ionita Nicoleta-Georgiana</p>
                <p className="text-gray-500 text-sm mt-1">Fondator & Director GeoImob</p>
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-2 bg-[#1a1a2e] hover:bg-[#c9a84c] text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Suna Acum
                </a>
                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#1565d8] text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#c9a84c]/20 to-[#1a1a2e]/10 rounded-3xl p-1">
                <Image
                  src="/logo.avif"
                  alt="GeoImob"
                  width={500}
                  height={400}
                  className="rounded-2xl w-full object-contain bg-white p-8"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#c9a84c] text-white rounded-2xl p-5 shadow-xl">
                <div className="text-2xl font-bold">Valcea</div>
                <div className="text-xs opacity-80">Acoperire completa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENZII */}
      <section id="recenzii" className="py-20 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest">Ce spun clientii</span>
            <h2 className="text-4xl font-bold text-white mt-2">Recenzii</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors"
              >
                <StarRating count={r.stars} />
                <p className="text-gray-300 leading-relaxed mb-5 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center text-white font-bold text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{r.name}</div>
                    <div className="text-gray-500 text-xs">Client verificat</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-white border border-[#c9a84c]/40 hover:border-[#c9a84c] px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Vezi toate recenziile pe Facebook
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest">Hai sa vorbim</span>
            <h2 className="text-4xl font-bold text-[#1a1a2e] mt-2">Contact</h2>
            <p className="text-gray-500 mt-4">Suntem disponibili pentru orice intrebare sau consultanta gratuita.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-[#c9a84c] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#1a1a2e]">Telefon / WhatsApp</div>
                  <a href={`tel:${PHONE}`} className="text-[#c9a84c] hover:underline font-medium text-lg">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#1a1a2e]">Facebook</div>
                  <a
                    href={FACEBOOK_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1877F2] hover:underline font-medium"
                  >
                    GeoImob Valcea
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-[#1a1a2e] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#1a1a2e]">Localizare</div>
                  <div className="text-gray-600">Valcea, Romania</div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-3xl p-8 flex flex-col items-center justify-center text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-white mb-3">Consultanta Gratuita</h3>
              <p className="text-gray-400 mb-7 leading-relaxed">
                Contacteaza-ne acum si primesti o consultanta gratuita pentru proprietatea ta.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white py-4 rounded-full font-semibold text-base transition-colors mb-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L0 24l6.345-1.504A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.78 9.78 0 01-5.002-1.374l-.358-.214-3.767.892.952-3.676-.234-.375A9.773 9.773 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Trimite mesaj WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="w-full flex items-center justify-center gap-2 border border-white/20 hover:border-[#c9a84c] text-white py-4 rounded-full font-semibold text-base transition-colors"
              >
                Suna: {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a2e] py-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.avif"
                alt="GeoImob Logo"
                width={100}
                height={40}
                className="object-contain h-10 w-auto brightness-0 invert"
              />
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm">
                © 2025 GeoImob — Agentie Imobiliara Valcea
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Fondator: Avramescu Ionita Nicoleta-Georgiana
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L0 24l6.345-1.504A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.78 9.78 0 01-5.002-1.374l-.358-.214-3.767.892.952-3.676-.234-.375A9.773 9.773 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
