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

export default function FlutonVaults() {
  return (
    <>
      <Head>
        <title>Flutonized Vaults — Fluton</title>
        <meta name="description" content="Flutonized Vaults let you deposit, earn yield, and withdraw across chains with your positions, strategies, and balances fully encrypted via FHE." />
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
                  <Link href={l.href} data-active={l.href === "/fluton-vaults" ? "true" : undefined}>
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
          <div className={styles.pageHeroGlow} style={{ background: "radial-gradient(ellipse at center, rgba(167,139,250,0.18) 0%, transparent 70%)" }} aria-hidden="true" />
          <div className={styles.pageHeroInner}>
            <div className={styles.heroBreadcrumb}>
              <Link href="/fluton">Fluton</Link>
              <span>›</span>
              <span>Flutonized Vaults</span>
            </div>
            <div className={styles.heroTag} style={{ color: "var(--purple-bright)", borderColor: "rgba(167,139,250,0.35)", background: "rgba(167,139,250,0.08)" }}>
              <span className={styles.heroTagDot} style={{ background: "var(--purple-bright)" }} />
              Yield · Privacy · Cross-Chain
            </div>
            <h1 className={styles.heroTitle}>
              Earn yield across chains<br />
              <span className={styles.heroGradientPurple}>without exposing a position</span>
            </h1>
            <p className={styles.heroDesc}>
              Flutonized Vaults are FHE-encrypted yield pools. Deposit any supported asset,
              access cross-chain liquidity strategies, and earn optimized yields — your
              balance, strategy, and identity are mathematically sealed throughout.
            </p>
            <div className={styles.heroBtns}>
              <a href={FLUTON_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                Open a Vault →
              </a>
              <a href="https://docs.fluton.io" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                Read the Docs
              </a>
            </div>

            {/* Stats — no fragment key issue */}
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "var(--purple-bright)" }}>FHE</span>
                <span className={styles.heroStatLabel}>Encrypted positions</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "var(--cyan)" }}>3</span>
                <span className={styles.heroStatLabel}>Vault strategies</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "#4ade80" }}>0</span>
                <span className={styles.heroStatLabel}>Exposed balances</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "var(--cyan)" }}>∞</span>
                <span className={styles.heroStatLabel}>Composability</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT ARE FLUTONIZED VAULTS ── */}
        <section className={styles.section} style={{ background: "var(--bg2)" }}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel} style={{ color: "var(--purple-bright)" }}>What they are</p>
            <h2 className={styles.sectionTitle}>Vaults designed for the privacy era</h2>
            <p className={styles.sectionSub}>
              Traditional yield vaults broadcast your every move — entry amount, strategy
              allocation, exit timing. Flutonized Vaults change the model entirely.
            </p>
            <div className={styles.cardsGrid}>
              {vaultFeatures.map((f) => (
                <div key={f.title} className={styles.card} style={{ borderColor: "rgba(167,139,250,0.15)" }}>
                  <div className={styles.cardIconWrap} style={{ background: "rgba(167,139,250,0.1)" }}>{f.icon}</div>
                  <h3 className={styles.cardTitle}>{f.title}</h3>
                  <p className={styles.cardDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW A VAULT WORKS ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.featureBlockInner}>
              <div className={styles.featureBlockText}>
                <p className={styles.featureBlockLabel} style={{ color: "var(--purple-bright)" }}>Vault Lifecycle</p>
                <h2 className={styles.featureBlockTitle}>From deposit to withdrawal — fully sealed</h2>
                <p className={styles.featureBlockDesc}>
                  Every vault interaction — deposit, strategy rebalance, yield claim,
                  and withdrawal — is wrapped in an FHE-encrypted intent. No on-chain
                  observer can link your wallet, balance, or strategy at any stage.
                </p>
                <ul className={styles.featureBlockList}>
                  {vaultSteps.map((s) => (
                    <li key={s}>
                      <span className={styles.featureBlockCheck} style={{ color: "var(--purple-bright)" }}>✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <a href={FLUTON_URL} target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>
                  Try the app →
                </a>
              </div>
              <div className={styles.featureBlockVisual}>
                <div className={styles.diagramTitle}>Vault interaction flow</div>
                {vaultFlow.map((step, i) => (
                  <div key={step.label}>
                    <div className={styles.flowRow}>
                      <div className={styles.flowNode} style={{ borderColor: step.border }}>
                        <span className={styles.flowNodeIcon}>{step.icon}</span>
                        <div>
                          <span className={styles.flowNodeText}>{step.label}</span>
                          <span className={styles.flowNodeSub}>{step.sub}</span>
                        </div>
                      </div>
                    </div>
                    {i < vaultFlow.length - 1 && (
                      <div className={styles.flowConnector} style={{ background: step.border, margin: "0 24px 0" }} />
                    )}
                  </div>
                ))}
                <div className={styles.badgeStrip}>
                  <span className={styles.badge} style={{ color: "var(--purple-bright)", borderColor: "rgba(167,139,250,0.3)", background: "rgba(167,139,250,0.06)" }}>🔒 FHE-sealed</span>
                  <span className={styles.badge} style={{ color: "var(--cyan)", borderColor: "var(--border-accent)", background: "var(--cyan-dim)" }}>⛓️ Cross-chain</span>
                  <span className={styles.badge} style={{ color: "#4ade80", borderColor: "rgba(34,197,94,0.3)", background: "rgba(34,197,94,0.06)" }}>📈 AI-optimized</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VAULT TYPES ── */}
        <section className={styles.section} style={{ background: "var(--bg3)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel} style={{ color: "var(--purple-bright)" }}>Vault Types</p>
            <h2 className={styles.sectionTitle}>Pick the strategy that fits</h2>
            <p className={styles.sectionSub}>Three profiles — each optimized for a different risk/return preference, all private by default.</p>
            <div className={styles.cardsGrid}>
              {vaultTypes.map((v) => (
                <div key={v.name} className={styles.card} style={{ borderColor: v.border, background: v.bg }}>
                  <div className={styles.cardIconWrap} style={{ background: v.iconBg }}>{v.icon}</div>
                  <h3 className={styles.cardTitle}>{v.name}</h3>
                  <p className={styles.cardDesc}>{v.desc}</p>
                  <div className={styles.badgeStrip} style={{ marginTop: "16px" }}>
                    {v.tags.map((t) => (
                      <span key={t} className={styles.badge} style={{ color: "var(--text-muted)", borderColor: "var(--border)", fontSize: "0.68rem" }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECURITY ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel} style={{ color: "var(--purple-bright)" }}>Security Model</p>
            <h2 className={styles.sectionTitle}>What the vault protects</h2>
            <p className={styles.sectionSub}>FHE ensures no party in the execution chain can read your vault state.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
              {vaultSecurity.map((s) => (
                <div key={s.label} style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "20px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)" }}>
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{s.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text)", margin: "0 0 5px" }}>{s.label}</p>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-dim)", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.ctaBanner} style={{ background: "linear-gradient(135deg, rgba(123,94,167,0.08) 0%, rgba(0,212,255,0.05) 100%)", borderTop: "1px solid var(--border)" }}>
          <div className={styles.ctaBannerGlow} style={{ background: "radial-gradient(ellipse at center bottom, rgba(167,139,250,0.15) 0%, transparent 60%)" }} aria-hidden="true" />
          <div className={styles.ctaBannerInner}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "var(--purple-bright)", margin: "0 0 12px" }}>Get Started</p>
            <h2 className={styles.ctaBannerTitle}>Open your first Flutonized Vault</h2>
            <p className={styles.ctaBannerDesc}>
              Deposit assets, try the strategy selector, and earn while your
              position stays fully encrypted.
            </p>
            <div className={styles.ctaBannerBtns}>
              <a href={FLUTON_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>Open Vault →</a>
              <Link href="/fluton-developers" className={styles.btnSecondary}>SDK Docs</Link>
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
              <Link href="/fluton-swaps">Private Swaps</Link>
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

const vaultFeatures = [
  { icon: "🔒", title: "Encrypted Balances", desc: "Your deposit amount is encrypted the moment it enters the vault. No explorer, analyst, or competitor can read your position size." },
  { icon: "🧠", title: "AI-Optimized Routing", desc: "An intent solver network routes your capital to the highest-yield opportunities across chains automatically, without revealing your strategy." },
  { icon: "⛓️", title: "Cross-Chain by Default", desc: "A single deposit can access yield sources on Ethereum, Arbitrum, Polygon, and non-EVM chains through Union Protocol's ZK bridge layer." },
  { icon: "♻️", title: "Auto-Rebalancing", desc: "Vaults rebalance silently as market conditions shift. Each rebalance is a new encrypted intent — no pattern is ever visible on-chain." },
  { icon: "🧩", title: "Composable", desc: "Vault receipts are standard ERC-20 tokens. They can be used as collateral, swapped, or bridged without breaking the underlying privacy." },
  { icon: "🛡️", title: "Non-Custodial", desc: "You hold the keys. Smart account abstraction means no central party ever controls your assets — withdrawal is always permissionless." },
];

const vaultSteps = [
  "Deposit is FHE-encrypted before on-chain submission",
  "Solver network routes to best yield strategy silently",
  "Rebalances are encrypted intents — no pattern exposure",
  "Yield accumulates as encrypted vault receipts",
  "Withdrawal decrypts only at the point of settlement",
];

const vaultFlow = [
  { icon: "💰", label: "Deposit Intent", sub: "FHE-sealed before submission", border: "rgba(167,139,250,0.4)" },
  { icon: "🔒", label: "Encrypted in Transit", sub: "Relayer forwards sealed payload", border: "rgba(0,212,255,0.4)" },
  { icon: "⚙️", label: "Solver Allocates", sub: "Best yield path via homomorphic compute", border: "rgba(34,197,94,0.4)" },
  { icon: "📈", label: "Yield Accumulates", sub: "Encrypted vault receipt minted", border: "rgba(167,139,250,0.4)" },
  { icon: "✅", label: "Withdrawal Settled", sub: "Decrypts only to your wallet", border: "rgba(0,212,255,0.4)" },
];

const vaultTypes = [
  { icon: "🌊", name: "Stable Vault", desc: "USDC/USDT-denominated vault targeting steady yields from lending protocols and liquidity pools. Lowest volatility, highest predictability.", border: "rgba(0,212,255,0.2)", bg: "rgba(0,212,255,0.03)", iconBg: "rgba(0,212,255,0.1)", tags: ["USDC · USDT", "Low risk", "~8–14% APY"] },
  { icon: "⚡", name: "Dynamic Vault", desc: "Mixed allocation across stablecoins and blue-chip assets. AI routing shifts allocations based on yield signals across EVM and non-EVM chains.", border: "rgba(167,139,250,0.2)", bg: "rgba(167,139,250,0.03)", iconBg: "rgba(167,139,250,0.1)", tags: ["Multi-asset", "Medium risk", "~18–32% APY"] },
  { icon: "🚀", name: "Alpha Vault", desc: "High-conviction positions in emerging yield sources — new protocol launches, incentive programs, and leveraged strategies. Private so competitors can't copy.", border: "rgba(34,197,94,0.2)", bg: "rgba(34,197,94,0.03)", iconBg: "rgba(34,197,94,0.1)", tags: ["DeFi native", "Higher risk", "Variable APY"] },
];

const vaultSecurity = [
  { icon: "🔐", label: "Balance Privacy", desc: "Your deposit, current balance, and accrued yield are FHE-encrypted. The vault contract computes returns without ever seeing your amount in plaintext." },
  { icon: "🕵️", label: "Strategy Secrecy", desc: "Allocation decisions happen inside encrypted intents. No on-chain analyst can replicate or front-run your vault's strategy." },
  { icon: "👤", label: "Identity Isolation", desc: "Per-session smart accounts break the link between your EOA and vault activity. Deposit and withdrawal addresses are unlinkable." },
  { icon: "⚖️", label: "Viewing Keys", desc: "You can generate a viewing key to audit your own vault history or share it with a trusted party — without granting withdrawal rights." },
];
