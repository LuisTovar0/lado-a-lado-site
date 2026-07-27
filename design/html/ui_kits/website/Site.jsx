/* Lado a Lado — Conference site recreation ("Viver para amar").
   Composes the design-system components from window.<Namespace>. */
const DS = window.LadoALadoDesignSystem_313ead;
const { Button, Eyebrow, SectionHeading, Tag, Avatar, SpeakerCard, ScheduleRow,
        TestimonialCard, Card, FeatureBand, NavBar, Logo, HoldingHands, HandMic } = DS;

const SPEAKERS = [
  { name: "Francisco Vilhena", role: "Médico", org: "Sociedade & Família", initials: "FV" },
  { name: "Mª de Fátima Carioca", role: "Professora", org: "AESE Business School", initials: "FC" },
  { name: "Javier Calderón", role: "Conferencista", org: "Madrid", initials: "JC" },
  { name: "Vanessa Machado", role: "Psicóloga", org: "Clínica do Casal", initials: "VM" },
  { name: "Pe. Bernardo", role: "Capelão", org: "Universidade Católica", initials: "PB" },
  { name: "Alexandra Chumbo", role: "Coach familiar", org: "Lado a Lado", initials: "AC" },
];

const AGENDA = [
  { time: "15h00 — 15h30", title: "Abertura da conferência", subtitle: "Introdução", dots: 0 },
  { time: "15h30 — 15h45", title: "Problemas na sociedade", subtitle: "Francisco Vilhena da Cunha", dots: 1 },
  { time: "15h45 — 16h00", title: "Vocação: amar e ser amado", subtitle: "—", dots: 1 },
  { time: "16h00 — 16h30", title: "Masculinidade vs feminidade", subtitle: "Calderón e Vanessa Machado", dots: 2 },
  { time: "16h30 — 17h00", title: "Coffee break", subtitle: "", dots: 0 },
  { time: "17h00 — 17h15", title: "Do encantamento inicial ao amor", subtitle: "Abertura da conferência", dots: 1 },
  { time: "17h15 — 17h30", title: "O compromisso ainda faz sentido?", subtitle: "Mª de Fátima Carioca", dots: 1 },
  { time: "17h45 — 18h00", title: "Mensagem de esperança", subtitle: "Fátima Fonseca", dots: 2 },
];

function Hero({ onReserve }) {
  return (
    <header style={{ position: "relative", background: "var(--surface-page)", overflow: "hidden" }}>
      <NavBar cta="Inscrição" onCta={onReserve} />
      <div style={{ position: "absolute", top: -40, right: -60, opacity: 0.96, pointerEvents: "none" }}>
        <HoldingHands width={760} />
      </div>
      <div style={{ padding: "80px var(--container-pad) 110px", maxWidth: 760, position: "relative", zIndex: 1 }}>
        <Eyebrow align="start">Conferência • 3 Março 2024, Lisboa</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(3rem,7vw,6rem)", lineHeight: 1.04, color: "var(--text-strong)", margin: "18px 0 10px" }}>
          Viver para amar
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", color: "var(--text-body)", margin: "0 0 34px", maxWidth: 520 }}>
          Um evento sobre o namoro, o casamento e a família — para jovens que querem amar de verdade.
        </p>
        <Button variant="outline" size="lg" onClick={onReserve}>Reserva grátis aqui</Button>
      </div>
    </header>
  );
}

function Sobre() {
  const [playing, setPlaying] = React.useState(false);
  return (
    <section style={{ padding: "90px var(--container-pad)", maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <SectionHeading eyebrow="Sobre" align="center">Em que consiste?</SectionHeading>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", marginTop: 56 }}>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-body)", margin: 0 }}>
          Durante uma tarde, casais que contam a sua história e especialistas no tema juntam-se
          para responder às tuas perguntas sobre o amor, a fidelidade e a construção de uma família.
          Não nascemos ensinados — também temos de aprender a amar, lado a lado.
        </p>
        <button onClick={() => setPlaying(p => !p)} style={{ all: "unset", cursor: "pointer", aspectRatio: "16/10", background: "var(--lal-preto)", borderRadius: "var(--radius-card)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", boxShadow: "var(--shadow-md)" }}>
          <span style={{ width: 70, height: 70, borderRadius: "50%", background: playing ? "var(--lal-vermelho)" : "rgba(252,249,233,0.95)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s" }}>
            <span style={{ fontSize: 22, color: playing ? "var(--lal-bege)" : "var(--lal-preto)" }}>{playing ? "❚❚" : "▶"}</span>
          </span>
        </button>
      </div>
    </section>
  );
}

function Band() {
  return (
    <FeatureBand action={<Button variant="deep" size="md">Inscrição</Button>}>
      E viveram <span style={{ fontFamily: "var(--font-script)", fontStyle: "normal", fontSize: "1.3em" }}>lado a lado</span> para sempre
    </FeatureBand>
  );
}

function Oradores() {
  return (
    <section style={{ padding: "90px var(--container-pad)", maxWidth: "var(--container-max)", margin: "0 auto", position: "relative" }}>
      <SectionHeading eyebrow="Oradores" align="center">Quem são os oradores?</SectionHeading>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "36px 40px", marginTop: 56 }}>
        {SPEAKERS.map(s => <SpeakerCard key={s.name} {...s} />)}
      </div>
      <div style={{ position: "absolute", right: 20, bottom: -30, opacity: 0.95, pointerEvents: "none" }}>
        <HandMic width={210} />
      </div>
    </section>
  );
}

function Horario() {
  return (
    <section style={{ padding: "70px var(--container-pad) 100px", maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <SectionHeading eyebrow="Horário" align="center">Que programa temos para oferecer?</SectionHeading>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", margin: "48px 0 4px" }}>
        <Eyebrow align="start" color="var(--accent)">Sábado, 2 Março</Eyebrow>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: ".85rem", color: "var(--text-muted)" }}>Auditório Católica, Lisboa</span>
      </div>
      {AGENDA.map((r, i) => <ScheduleRow key={i} {...r} />)}
    </section>
  );
}

function Reserva({ onReserve }) {
  return (
    <section style={{ background: "var(--surface-band)", padding: "70px var(--container-pad)", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 20, bottom: -20, transform: "scaleX(-1)", opacity: 0.9 }}><HandMic width={150} /></div>
      <Eyebrow align="center" color="var(--lal-bordo)">Reserva</Eyebrow>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(2.2rem,4vw,3.4rem)", color: "var(--lal-bordo)", margin: "14px 0 28px" }}>Viver para amar</h2>
      <Button variant="deep" size="lg" onClick={onReserve}>Inscrição</Button>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--surface-footer)", color: "var(--text-on-footer)", padding: "40px var(--container-pad)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
      <Logo width={150} color="var(--lal-bege)" />
      <span style={{ fontFamily: "var(--font-mono)", fontSize: ".85rem", opacity: 0.85 }}>2024</span>
      <div style={{ display: "flex", gap: 14, fontFamily: "var(--font-mono)", fontSize: ".8rem", letterSpacing: ".1em", textTransform: "uppercase" }}>
        <span>Spotify</span><span>YouTube</span><span>Instagram</span>
      </div>
    </footer>
  );
}

function Modal({ open, onClose }) {
  if (!open) return null;
  const [done, setDone] = React.useState(false);
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(45,18,30,0.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50, padding: 20 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: "var(--surface-raised)", borderRadius: "var(--radius-card)", padding: 40, width: "min(440px,100%)", boxShadow: "var(--shadow-lg)" }}>
        {done ? (
          <div style={{ textAlign: "center" }}>
            <SectionHeading eyebrow="Confirmado" size="m" align="center">Até já!</SectionHeading>
            <p style={{ fontFamily: "var(--font-ui)", color: "var(--text-body)", margin: "16px 0 26px" }}>Enviámos os detalhes para o teu email.</p>
            <Button variant="primary" onClick={onClose}>Fechar</Button>
          </div>
        ) : (
          <>
            <SectionHeading eyebrow="Inscrição gratuita" size="m" align="start">Reserva o teu lugar</SectionHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, margin: "24px 0" }}>
              {["O teu nome", "Email"].map(p => (
                <input key={p} placeholder={p} style={{ font: "inherit", fontFamily: "var(--font-ui)", padding: "14px 16px", border: "1.5px solid var(--border-hairline)", borderRadius: "var(--radius-md)", background: "var(--surface-card)", outline: "none" }} />
              ))}
            </div>
            <Button variant="primary" size="md" onClick={() => setDone(true)} style={{ width: "100%" }}>Confirmar inscrição</Button>
          </>
        )}
      </div>
    </div>
  );
}

function Site() {
  const [open, setOpen] = React.useState(false);
  const reserve = () => setOpen(true);
  return (
    <div style={{ background: "var(--surface-page)", minHeight: "100%" }}>
      <Hero onReserve={reserve} />
      <Sobre />
      <Band />
      <Oradores />
      <Horario />
      <Reserva onReserve={reserve} />
      <Footer />
      <Modal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

window.Site = Site;
