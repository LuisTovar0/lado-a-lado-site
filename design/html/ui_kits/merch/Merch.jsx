/* Lado a Lado — Merch line recreation.
   Coffee + apparel collection built from the file's slogan compositions. */
const M = window.LadoALadoDesignSystem_313ead;
const { Button, Eyebrow, SectionHeading, Tag, Card, Logo, Icon, FeatureBand } = M;

// Slogan "products" — typographic compositions on brand colours, as in the .fig
const PRODUCTS = [
  { slogan: ["Made to love", "and be loved"], tag: "T-shirt", bg: "var(--lal-bordo)", fg: "var(--lal-bege)", icon: "Heart", price: "19€" },
  { slogan: ["Requires", "caffeine &", "perseverance"], tag: "Coffee", bg: "var(--lal-amarelo)", fg: "var(--lal-bordo)", icon: "CoffeeSize48", price: "9€" },
  { slogan: ["Fidelity", "advocate"], tag: "Hoodie", bg: "var(--lal-vermelho)", fg: "var(--lal-bege)", icon: "SmileSize48", price: "34€" },
  { slogan: ["Made", "with love"], tag: "Tote", bg: "var(--lal-bege)", fg: "var(--lal-bordo)", icon: "Heart", price: "12€" },
  { slogan: ["Handle", "with care"], tag: "Mug", bg: "var(--lal-salmao)", fg: "var(--lal-bordo)", icon: "SmileyHappyPlus", price: "11€" },
  { slogan: ["Family", "first"], tag: "Cap", bg: "var(--lal-castanho)", fg: "var(--lal-bege)", icon: "SmileSize48", price: "16€" },
];

function ProductCard({ p }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ borderRadius: "var(--radius-card)", overflow: "hidden", boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)", transform: hover ? "translateY(-4px)" : "none", transition: "all var(--dur-base) var(--ease-out)", background: "var(--surface-card)" }}>
      <div style={{ background: p.bg, color: p.fg, aspectRatio: "1/1", padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", opacity: .8 }}>Lado a Lado</span>
          <Icon name={p.icon} size={30} style={{ color: p.fg }} />
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.6rem,3vw,2.2rem)", lineHeight: 1.0, textTransform: "uppercase" }}>
          {p.slogan.map((l, i) => <div key={i}>{l}</div>)}
        </div>
      </div>
      <div style={{ padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, color: "var(--text-strong)" }}>{p.slogan.join(" ")}</span>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: ".85rem", color: "var(--text-muted)" }}>{p.tag}</span>
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--accent)" }}>{p.price}</span>
      </div>
    </div>
  );
}

function Merch() {
  return (
    <div style={{ background: "var(--surface-page)", minHeight: "100%" }}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px var(--container-pad)" }}>
        <Logo width={150} />
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Tag tone="outline">Coleção 2024</Tag>
          <Button size="sm" variant="primary">Carrinho · 0</Button>
        </div>
      </nav>

      <section style={{ padding: "50px var(--container-pad) 30px", maxWidth: "var(--container-max)", margin: "0 auto", textAlign: "center" }}>
        <SectionHeading eyebrow="Loja" size="l" align="center">Veste o que defendes</SectionHeading>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: "1.05rem", color: "var(--text-body)", maxWidth: 520, margin: "18px auto 0" }}>
          Peças com alma para quem acredita no amor verdadeiro, na fidelidade e na família. Feitas com amor — e bastante café.
        </p>
      </section>

      <section style={{ padding: "30px var(--container-pad) 70px", maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
          {PRODUCTS.map((p, i) => <ProductCard key={i} p={p} />)}
        </div>
      </section>

      <FeatureBand tone="bordo" action={<Button variant="outline-light" size="md">Ver tudo</Button>}>
        True love · stronger families · better society
      </FeatureBand>

      <footer style={{ background: "var(--surface-footer)", color: "var(--text-on-footer)", padding: "36px var(--container-pad)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <Logo width={140} color="var(--lal-bege)" />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: ".8rem", opacity: .85 }}>Made with love · 2024</span>
      </footer>
    </div>
  );
}

window.Merch = Merch;
