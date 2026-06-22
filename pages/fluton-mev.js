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

export default function FlutonMEV() {
  return (
    <>
      <Head>
        <title>MEV Protection — Fluton</title>
        <meta name="description" content="Fluton's encrypted intent architecture makes front-running, sandwich attacks, and MEV extraction structurally impossible." />
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
                  <Link href={l.href} data-active={l.href === "/fluton-mev" ? "true" : undefined}>
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
          <div className={styles.pageHeroGlow} style={{ background: "radial-gradient(ellipse at center, rgba(239,68,68,0.14) 0%, transparent 70%)" }} aria-hidden="true" />
          <div className={styles.pageHeroInner}>
            <div className={styles.heroBreadcrumb}>
              <Link href="/fluton">Fluton</Link>
              <span>›</span>
              <span>MEV Protection</span>
            </div>
            <div className={styles.heroTag} style={{ color: "#f87171", borderColor: "rgba(239,68,68,0.35)", background: "rgba(239,68,68,0.08)" }}>
              <span className={styles.heroTagDot} style={{ background: "#f87171" }} />
              Structural · Not Probabilistic
            </div>
            <h1 className={styles.heroTitle}>
              MEV is impossible when<br />
              <span className={styles.heroGradientCyan}>bots have nothing to read</span>
            </h1>
            <p className={styles.heroDesc}>
              Most MEV solutions try to hide transactions after they are broadcast.
              Fluton never broadcasts them in plaintext at all. Encrypted intents mean
              the mempool contains zero exploitable information — front-running and
              sandwich attacks are eliminated at the protocol level.
            </p>
            <div className={styles.heroBtns}>
              <a href={FLUTON_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                Try MEV-Free Swaps →
              </a>
              <Link href="/fluton-developers" className={styles.btnSecondary}>
                SDK Integration
              </Link>
            </div>

            {/* Stats — inline, no Fragment key issue */}
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "#4ade80" }}>0</span>
                <span className={styles.heroStatLabel}>Plaintext in mempool</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "var(--cyan)" }}>100%</span>
                <span className={styles.heroStatLabel}>Intents encrypted</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "#4ade80" }}>0</span>
                <span className={styles.heroStatLabel}>Front-run surface</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE MEV PROBLEM ── */}
        <section className={styles.section} style={{ background: "var(--bg2)" }}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel} style={{ color: "#f87171" }}>The Problem</p>
            <h2 className={styles.sectionTitle}>How MEV attacks destroy your trades</h2>
            <p className={styles.sectionSub}>
              Every public mempool transaction is readable by bots before it confirms.
              They exploit this in three main ways.
            </p>
            <div className={styles.cardsGrid}>
              {mevAttacks.map((a) => (
                <div key={a.title} className={styles.card} style={{ borderColor: "rgba(239,68,68,0.2)", background: "rgba(239,68,68,0.03)" }}>
                  <div className={styles.cardIconWrap} style={{ background: "rgba(239,68,68,0.1)" }}>{a.icon}</div>
                  <h3 className={styles.cardTitle}>{a.title}</h3>
                  <p className={styles.cardDesc}>{a.desc}</p>
                  <div className={styles.badgeStrip} style={{ marginTop: "14px" }}>
                    <span className={styles.badge} style={{ color: "#f87171", borderColor: "rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.06)", fontSize: "0.68rem" }}>{a.cost}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW FLUTON SOLVES IT ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.featureBlockInner}>
              <div className={styles.featureBlockText}>
                <p className={styles.featureBlockLabel} style={{ color: "var(--cyan)" }}>The Solution</p>
                <h2 className={styles.featureBlockTitle}>Encrypted intents give bots zero surface area</h2>
                <p className={styles.featureBlockDesc}>
                  Fluton wraps your transaction in FHE before it touches the network.
                  The relayer forwards a sealed ciphertext — no amount, no token type,
                  no slippage tolerance is ever exposed. MEV extraction requires
                  readable data. Fluton provides none.
                </p>
                <ul className={styles.featureBlockList}>
                  {mevSolution.map((s) => (
                    <li key={s}>
                      <span className={styles.featureBlockCheck} style={{ color: "var(--cyan)" }}>✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.featureBlockVisual}>
                <p className={styles.diagramTitle}>Mempool: Before vs After Fluton</p>
                <div style={{ marginBottom: "20px" }}>
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#f87171", margin: "0 0 10px" }}>❌ Standard Transaction (readable)</p>
                  <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "var(--radius-sm)", padding: "14px 16px" }}>
                    <pre style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#9ab0c8", margin: 0, lineHeight: 1.7 }}>{`{
  from:   "0xYourWallet",
  to:     "0xUniswapV3",
  amount: 5000 USDC,
  token:  ETH,
  slippage: 0.5%
}
← bots read this and front-run`}</pre>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#4ade80", margin: "0 0 10px" }}>✅ Fluton Encrypted Intent (unreadable)</p>
                  <div style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "var(--radius-sm)", padding: "14px 16px" }}>
                    <pre style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#9ab0c8", margin: 0, lineHeight: 1.7 }}>{`{
  payload: "a3f9d2...c8b1e4",   // FHE ciphertext
  proof:   "zk_proof_0x...",
  relayer: "0xRelayer"
}
← bots see random bytes. nothing to exploit.`}</pre>
                  </div>
                </div>
                <div className={styles.badgeStrip} style={{ marginTop: "16px" }}>
                  <span className={styles.badge} style={{ color: "var(--cyan)", borderColor: "var(--border-accent)", background: "var(--cyan-dim)" }}>TFHE encrypted</span>
                  <span className={styles.badge} style={{ color: "#4ade80", borderColor: "rgba(34,197,94,0.3)", background: "rgba(34,197,94,0.06)" }}>Zero plaintext</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STRUCTURAL VS PROBABILISTIC ── */}
        <section className={styles.section} style={{ background: "var(--bg3)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel} style={{ color: "var(--cyan)" }}>Why It&apos;s Different</p>
            <h2 className={styles.sectionTitle}>Structural protection vs probabilistic protection</h2>
            <p className={styles.sectionSub}>
              Other MEV solutions reduce the probability of being attacked.
              Fluton makes attacks structurally impossible.
            </p>
            <div style={{ overflowX: "auto", border: "1px solid var(--border)", borderRadius: "var(--radius)" }}>
              <table className={styles.methodTable} style={{ minWidth: "600px" }}>
                <thead>
                  <tr>
                    <th>Solution</th>
                    <th>Approach</th>
                    <th>Plaintext exposed?</th>
                    <th>Attack eliminated?</th>
                    <th>Composable?</th>
                  </tr>
                </thead>
                <tbody>
                  {mevComparison.map((r) => (
                    <tr key={r.name} style={r.highlight ? { background: "rgba(0,212,255,0.05)", borderLeft: "3px solid var(--cyan)" } : {}}>
                      <td><strong style={{ color: r.highlight ? "var(--text)" : "inherit" }}>{r.name}</strong></td>
                      <td>{r.approach}</td>
                      <td style={{ color: r.exposed === "No" ? "#4ade80" : "#f87171" }}>{r.exposed}</td>
                      <td style={{ color: r.eliminated === "✅ Yes" ? "#4ade80" : r.eliminated === "⚠️ Reduced" ? "var(--yellow)" : "#f87171" }}>{r.eliminated}</td>
                      <td style={{ color: r.composable === "✅ Yes" ? "#4ade80" : "#f87171" }}>{r.composable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── MECHANISMS ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel} style={{ color: "var(--cyan)" }}>Under the Hood</p>
            <h2 className={styles.sectionTitle}>How MEV protection works technically</h2>
            <p className={styles.sectionSub}>Four protocol-level mechanisms work together to seal every transaction.</p>
            <div className={styles.cardsGrid}>
              {mevMechanisms.map((m) => (
                <div key={m.title} className={styles.card} style={{ borderColor: "rgba(0,212,255,0.15)" }}>
                  <div className={styles.cardIconWrap} style={{ background: "var(--cyan-dim)" }}>{m.icon}</div>
                  <h3 className={styles.cardTitle}>{m.title}</h3>
                  <p className={styles.cardDesc}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.ctaBanner} style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.05) 0%, rgba(34,197,94,0.04) 100%)", borderTop: "1px solid var(--border)" }}>
          <div className={styles.ctaBannerGlow} style={{ background: "radial-gradient(ellipse at center bottom, rgba(0,212,255,0.12) 0%, transparent 60%)" }} aria-hidden="true" />
          <div className={styles.ctaBannerInner}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "var(--cyan)", margin: "0 0 12px" }}>Start Trading</p>
            <h2 className={styles.ctaBannerTitle}>Trade without MEV tax</h2>
            <p className={styles.ctaBannerDesc}>
              Every swap on Fluton is MEV-proof by default. No configuration,
              no RPC switching — just structural protection.
            </p>
            <div className={styles.ctaBannerBtns}>
              <a href={FLUTON_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>Try Fluton →</a>
              <Link href="/fluton-swaps" className={styles.btnSecondary}>Private Swaps</Link>
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
              <Link href="/fluton-swaps">Private Swaps</Link>
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

const mevAttacks = [
  { icon: "🏃", title: "Front-Running", desc: "A bot detects your pending buy order, submits an identical trade with higher gas to execute first, pushing the price up before your transaction lands.", cost: "Avg loss: 0.3–2% per trade" },
  { icon: "🥪", title: "Sandwich Attack", desc: "Bot places a buy order before yours and a sell order immediately after. You buy at a worse price; the bot profits the spread from both sides.", cost: "Avg loss: 0.5–3% per trade" },
  { icon: "🔄", title: "Back-Running", desc: "Bots exploit large trades by following them immediately after with correlated positions, extracting value from the price impact your trade created.", cost: "Indirect value drain" },
];

const mevSolution = [
  "Intent encrypted with FHE before any network broadcast",
  "Relayers and solvers process ciphertext — never plaintext",
  "No amount, token, or slippage visible in mempool",
  "Solver competition happens on encrypted data via homomorphic compute",
  "Settlement reveals only validity proof — not transaction details",
];

const mevComparison = [
  { name: "Fluton", approach: "FHE-encrypted intents", exposed: "No", eliminated: "✅ Yes", composable: "✅ Yes", highlight: true },
  { name: "Flashbots Protect", approach: "Private mempool RPC", exposed: "To builder", eliminated: "⚠️ Reduced", composable: "✅ Yes", highlight: false },
  { name: "CoW Protocol", approach: "Batch auctions", exposed: "Batch aggregated", eliminated: "⚠️ Reduced", composable: "⚠️ Partial", highlight: false },
  { name: "MEV Blocker", approach: "Order flow auction", exposed: "To searchers", eliminated: "⚠️ Reduced", composable: "✅ Yes", highlight: false },
  { name: "Slippage limits", approach: "Tx parameter", exposed: "Yes", eliminated: "❌ No", composable: "✅ Yes", highlight: false },
];

const mevMechanisms = [
  { icon: "🔐", title: "FHE Payload Encryption", desc: "The transaction payload — including token, amount, direction, and slippage — is encrypted using TFHE before the intent leaves your wallet. The mempool contains only ciphertext." },
  { icon: "📡", title: "Opaque Relayer Forwarding", desc: "Relayers forward the encrypted bundle to the solver pool. They cannot read, modify, or exploit the payload — they are transport-only." },
  { icon: "⚙️", title: "Homomorphic Solver Execution", desc: "Solvers compute optimal execution paths on encrypted data using homomorphic operations. They fulfill the intent without knowing the underlying values." },
  { icon: "✅", title: "Validity-Only Settlement", desc: "Only a zero-knowledge validity proof is published on-chain at settlement. The original transaction details remain encrypted and are decrypted solely by the recipient." },
];
