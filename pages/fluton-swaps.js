import Head from "next/head";
import Link from "next/link";
import styles from "../styles/fluton-pages.module.css";

const FLUTON_URL = "https://fluton.io/";

const NAV_LINKS = [
  { href: "/fluton", label: "Home" },
  { href: "/fluton-vaults", label: "Vaults" },
  { href: "/fluton-swaps", label: "Private Swaps" },
  { href: "/fluton-mev", label: "MEV Protection" },
  { href: "/fluton-developers", label: "Developers" },
];

export default function FlutonSwaps() {
  return (
    <>
      <Head>
        <title>Private Swaps — Fluton</title>
        <meta name="description" content="Swap any token across any chain without exposing amounts, token types, or timing. Fluton Private Swaps use FHE-encrypted intents for complete transaction privacy." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.root}>

        {/* ── NAV ── */}
        <nav className={styles.nav}>
          <div className={styles.navInner}>
            <Link href="/fluton" className={styles.navLogo}>
              <span className={styles.navLogoInner}>
                <img src="/fluton-logo.png" alt="ENCRYPTED" className={styles.navLogoImg} />
                <span className={styles.navLogoText}>ENCRYPTED</span>
              </span>
            </Link>
            <ul className={styles.navLinks}>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} data-active={l.href === "/fluton-swaps" ? "true" : undefined}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.navHighlights}>
              <a href="https://fluton.io/roadmap" target="_blank" rel="noopener noreferrer" className={styles.navHighlight}>Roadmap</a>
              <a href="https://fluton.io/blog" target="_blank" rel="noopener noreferrer" className={styles.navHighlight}>Blog</a>
              <a href="https://docs.fluton.io/introduction" target="_blank" rel="noopener noreferrer" className={styles.navHighlight}>Docs</a>
              <a href="https://fluton.io/contact" target="_blank" rel="noopener noreferrer" className={styles.navHighlight}>Contact</a>
            </div>
            <a href={FLUTON_URL} target="_blank" rel="noopener noreferrer" className={styles.navCta}>
              Launch App
            </a>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className={styles.pageHero}>
          <div className={styles.pageHeroGlow} style={{ background: "radial-gradient(ellipse at center, rgba(0,212,255,0.16) 0%, transparent 70%)" }} aria-hidden="true" />
          <div className={styles.pageHeroInner}>
            <div className={styles.heroBreadcrumb}>
              <Link href="/fluton">Fluton</Link>
              <span>›</span>
              <span>Private Swaps</span>
            </div>
            <div className={styles.heroTag} style={{ color: "var(--cyan)", borderColor: "rgba(0,212,255,0.35)", background: "var(--cyan-dim)" }}>
              <span className={styles.heroTagDot} style={{ background: "var(--cyan)" }} />
              Cross-Chain · MEV-Proof · Composable
            </div>
            <h1 className={styles.heroTitle}>
              Swap anything, anywhere<br />
              <span className={styles.heroGradientCyan}>without leaving a trace</span>
            </h1>
            <p className={styles.heroDesc}>
              Fluton Private Swaps let you exchange any token across any supported chain
              without broadcasting amounts, token types, or timing to the public. Powered
              by FHE-encrypted intents and a competitive solver network, you get best-price
              execution with zero surveillance.
            </p>
            <div className={styles.heroBtns}>
              <a href={FLUTON_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                Try a Private Swap →
              </a>
              <Link href="/fluton-developers" className={styles.btnSecondary}>
                Integrate via SDK
              </Link>
            </div>

            {/* Stats — inline, no Fragment key issue */}
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "#4ade80" }}>0</span>
                <span className={styles.heroStatLabel}>Exposed fields</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "var(--cyan)" }}>6+</span>
                <span className={styles.heroStatLabel}>Supported chains</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "#4ade80" }}>0%</span>
                <span className={styles.heroStatLabel}>MEV leakage</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT GETS HIDDEN ── */}
        <section className={styles.section} style={{ background: "var(--bg2)" }}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel} style={{ color: "var(--cyan)" }}>Privacy Scope</p>
            <h2 className={styles.sectionTitle}>What a private swap hides</h2>
            <p className={styles.sectionSub}>
              Every field that could compromise you is encrypted before the intent leaves your device.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
              {swapPrivacy.map((p) => (
                <div key={p.field} style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "20px", background: "var(--surface)", border: "1px solid rgba(0,212,255,0.12)", borderRadius: "var(--radius)" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text)", margin: "0 0 4px" }}>{p.field}</p>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-dim)", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                    <span style={{ display: "inline-block", marginTop: "8px", fontSize: "0.68rem", fontWeight: 700, color: "var(--cyan)", background: "var(--cyan-dim)", border: "1px solid rgba(0,212,255,0.25)", padding: "2px 8px", borderRadius: "100px" }}>🔒 FHE-encrypted</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SWAP LIFECYCLE ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.featureBlockInner}>
              <div className={styles.featureBlockText}>
                <p className={styles.featureBlockLabel} style={{ color: "var(--cyan)" }}>How It Works</p>
                <h2 className={styles.featureBlockTitle}>A private swap from signature to settlement</h2>
                <p className={styles.featureBlockDesc}>
                  Your intent is sealed client-side, forwarded by relayers who cannot read it,
                  executed by solvers competing on homomorphically computed data, and settled
                  with only a validity proof on-chain.
                </p>
                <div className={styles.stepList}>
                  {swapSteps.map((s, i) => (
                    <div key={s.title} className={styles.stepItem}>
                      <div className={styles.stepNum} style={{ background: "var(--cyan-dim)", border: "2px solid var(--cyan)", color: "var(--cyan)" }}>{i + 1}</div>
                      <div className={styles.stepBody}>
                        <p className={styles.stepTitle}>{s.title}</p>
                        <p className={styles.stepDesc}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.featureBlockVisual}>
                <p className={styles.diagramTitle}>Swap execution flow</p>
                {swapFlow.map((step, i) => (
                  <div key={step.label}>
                    <div className={styles.flowRow}>
                      <div className={styles.flowNode} style={{ borderColor: step.border }}>
                        <span className={styles.flowNodeIcon}>{step.icon}</span>
                        <div>
                          <span className={styles.flowNodeText}>{step.label}</span>
                          <span className={styles.flowNodeSub}>{step.sub}</span>
                        </div>
                      </div>
                      {i < swapFlow.length - 1 && <span className={styles.flowArrow}>↓</span>}
                    </div>
                    {i < swapFlow.length - 1 && <div className={styles.flowConnector} style={{ background: step.border }} />}
                  </div>
                ))}
                <div className={styles.badgeStrip}>
                  <span className={styles.badge} style={{ color: "var(--cyan)", borderColor: "var(--border-accent)", background: "var(--cyan-dim)" }}>🔒 FHE sealed</span>
                  <span className={styles.badge} style={{ color: "#4ade80", borderColor: "rgba(34,197,94,0.3)", background: "rgba(34,197,94,0.06)" }}>0 MEV</span>
                  <span className={styles.badge} style={{ color: "var(--purple-bright)", borderColor: "rgba(167,139,250,0.3)", background: "rgba(167,139,250,0.06)" }}>Best price</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAINS ── */}
        <section className={styles.section} style={{ background: "var(--bg3)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel} style={{ color: "var(--cyan)" }}>Coverage</p>
            <h2 className={styles.sectionTitle}>What you can swap</h2>
            <p className={styles.sectionSub}>Any token on any supported chain in a single encrypted intent.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px", marginBottom: "32px" }}>
              {swapChains.map((c) => (
                <div key={c.name} style={{ display: "flex", alignItems: "center", gap: "12px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "16px 20px" }}>
                  <span style={{ fontSize: "1.6rem" }}>{c.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", margin: 0 }}>{c.name}</p>
                    <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", margin: "2px 0 0" }}>{c.type}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Cross-chain swaps are routed natively through{" "}
              <strong style={{ color: "var(--cyan)" }}>Union Protocol</strong>&apos;s
              ZK light client bridges — no wrapped assets, no custodians.
            </p>
          </div>
        </section>

        {/* ── COMPARE ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel} style={{ color: "var(--cyan)" }}>Comparison</p>
            <h2 className={styles.sectionTitle}>Private Swaps vs the alternatives</h2>
            <div style={{ overflowX: "auto", border: "1px solid var(--border)", borderRadius: "var(--radius)" }}>
              <table className={styles.methodTable} style={{ minWidth: "560px" }}>
                <thead>
                  <tr>
                    <th>Protocol</th>
                    <th>Privacy method</th>
                    <th>Amount hidden</th>
                    <th>Cross-chain</th>
                    <th>MEV-free</th>
                  </tr>
                </thead>
                <tbody>
                  {swapComparison.map((r) => (
                    <tr key={r.name} style={r.highlight ? { background: "rgba(0,212,255,0.05)", borderLeft: "3px solid var(--cyan)" } : {}}>
                      <td>
                        <strong style={{ color: r.highlight ? "var(--text)" : "inherit" }}>
                          {r.name}
                          {r.highlight && <span style={{ marginLeft: "8px", fontSize: "0.65rem", fontWeight: 700, background: "var(--cyan)", color: "#000", padding: "2px 7px", borderRadius: "100px" }}>You are here</span>}
                        </strong>
                      </td>
                      <td>{r.method}</td>
                      <td style={{ color: r.amount === "✅ Yes" ? "#4ade80" : r.amount === "⚠️ Partial" ? "var(--yellow)" : "#f87171" }}>{r.amount}</td>
                      <td style={{ color: r.cross === "✅ Yes" ? "#4ade80" : r.cross === "⚠️ Limited" ? "var(--yellow)" : "#f87171" }}>{r.cross}</td>
                      <td style={{ color: r.mev === "✅ Yes" ? "#4ade80" : r.mev === "⚠️ Reduced" ? "var(--yellow)" : "#f87171" }}>{r.mev}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.ctaBanner} style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(123,94,167,0.06) 100%)", borderTop: "1px solid var(--border)" }}>
          <div className={styles.ctaBannerGlow} style={{ background: "radial-gradient(ellipse at center bottom, rgba(0,212,255,0.14) 0%, transparent 60%)" }} aria-hidden="true" />
          <div className={styles.ctaBannerInner}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "var(--cyan)", margin: "0 0 12px" }}>Start Swapping</p>
            <h2 className={styles.ctaBannerTitle}>Your first private swap is free</h2>
            <p className={styles.ctaBannerDesc}>
              Connect a wallet, get started, and execute a fully encrypted
              cross-chain swap in under two minutes.
            </p>
            <div className={styles.ctaBannerBtns}>
              <a href={FLUTON_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>Swap on Fluton →</a>
              <Link href="/fluton-mev" className={styles.btnSecondary}>MEV Protection</Link>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <img src="/fluton-logo.png" alt="FHE" className={styles.footerLogoImg} />
              <span className={styles.footerLogo}>FHE</span>
            </div>
            <div className={styles.footerHighlights}>
              <a href="https://fluton.io/roadmap" target="_blank" rel="noopener noreferrer" className={styles.footerHighlightLink}>🗺️ Roadmap</a>
              <a href="https://fluton.io/blog" target="_blank" rel="noopener noreferrer" className={styles.footerHighlightLink}>✍️ Blog</a>
              <a href="https://docs.fluton.io/introduction" target="_blank" rel="noopener noreferrer" className={styles.footerHighlightLink}>📄 Docs</a>
              <a href="https://fluton.io/contact" target="_blank" rel="noopener noreferrer" className={styles.footerHighlightLink}>💬 Contact</a>
            </div>
            <div className={styles.footerLinks}>
              <Link href="/fluton">Home</Link>
              <Link href="/fluton-vaults">Vaults</Link>
              <Link href="/fluton-mev">MEV Protection</Link>
              <Link href="/fluton-developers">Developers</Link>
              <a href="https://docs.fluton.io" target="_blank" rel="noopener noreferrer">Docs</a>
              <a href="https://discord.gg/fluton" target="_blank" rel="noopener noreferrer">Discord</a>
            </div>
            <p className={styles.footerCopy}>© 2026 Fluton Labs. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </>
  );
}

const swapPrivacy = [
  { icon: "💰", field: "Swap Amount", desc: "The exact token quantity you are exchanging is FHE-encrypted. Solvers compute routes without reading the value." },
  { icon: "🪙", field: "Token Types", desc: "Input and output token identifiers are sealed. On-chain observers cannot determine what you are trading." },
  { icon: "⏱️", field: "Timing & Frequency", desc: "Your swap cadence is unlinkable. There is no pattern for analysts to correlate across sessions." },
  { icon: "👤", field: "Wallet Identity", desc: "Per-session smart accounts decouple your EOA from the on-chain settlement address." },
  { icon: "📉", field: "Slippage Tolerance", desc: "Bots cannot read your slippage setting — one of the primary front-running attack vectors is removed." },
  { icon: "🌉", field: "Destination Chain", desc: "The target chain for cross-chain swaps is encrypted until settlement, preventing chain-level analysis." },
];

const swapSteps = [
  { title: "You specify the intent", desc: "Input token, output token, max slippage, and destination chain. These values are encrypted client-side before submission." },
  { title: "Intent is FHE-sealed", desc: "TFHE encryption wraps all intent fields into a ciphertext payload. Nothing is readable in transit." },
  { title: "Relayer forwards sealed bundle", desc: "The relayer passes the payload to the solver network without reading or modifying it." },
  { title: "Solvers compete homomorphically", desc: "Multiple solvers bid to fill your intent by computing on the ciphertext. Best execution wins." },
  { title: "Settlement with validity proof", desc: "The result settles on-chain with a ZK proof of correct execution — amounts remain sealed to all but you." },
];

const swapFlow = [
  { icon: "✍️", label: "Intent Created", sub: "Token, amount, chain — all encrypted", border: "rgba(167,139,250,0.4)" },
  { icon: "🔒", label: "FHE Encryption", sub: "TFHE seals payload client-side", border: "rgba(0,212,255,0.4)" },
  { icon: "📡", label: "Relayer Network", sub: "Forwards without reading", border: "rgba(245,158,11,0.4)" },
  { icon: "⚙️", label: "Solver Execution", sub: "Homomorphic best-price routing", border: "rgba(34,197,94,0.4)" },
  { icon: "✅", label: "On-Chain Settlement", sub: "Validity proof only — no plaintext", border: "rgba(0,212,255,0.4)" },
];

const swapChains = [
  { icon: "⟠", name: "Ethereum", type: "EVM · Mainnet" },
  { icon: "🔷", name: "Arbitrum", type: "EVM · L2" },
  { icon: "🟣", name: "Polygon", type: "EVM · L2" },
  { icon: "🔵", name: "Base", type: "EVM · L2" },
  { icon: "🌊", name: "Cosmos", type: "Non-EVM · IBC" },
  { icon: "◎", name: "Solana", type: "Non-EVM" },
];

const swapComparison = [
  { name: "Fluton", method: "FHE encrypted intents", amount: "✅ Yes", cross: "✅ Yes", mev: "✅ Yes", highlight: true },
  { name: "Uniswap", method: "None", amount: "❌ No", cross: "❌ No", mev: "❌ No", highlight: false },
  { name: "Railgun", method: "ZK shielded pools", amount: "✅ Yes", cross: "⚠️ Limited", mev: "⚠️ Reduced", highlight: false },
  { name: "1inch", method: "None / partial RPC", amount: "❌ No", cross: "⚠️ Limited", mev: "⚠️ Reduced", highlight: false },
  { name: "CoW Swap", method: "Batch auctions", amount: "⚠️ Partial", cross: "❌ No", mev: "⚠️ Reduced", highlight: false },
];
