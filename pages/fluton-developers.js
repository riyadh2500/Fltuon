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

export default function FlutonDevelopers() {
  return (
    <>
      <Head>
        <title>Developers &amp; SDK — Fluton</title>
        <meta name="description" content="Integrate Fluton's privacy layer into any dApp. SDK docs, testnet access, API reference, and quickstart guides for developers." />
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
                  <Link href={l.href} data-active={l.href === "/fluton-developers" ? "true" : undefined}>
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
          <div className={styles.pageHeroGlow} style={{ background: "radial-gradient(ellipse at center, rgba(34,197,94,0.14) 0%, transparent 70%)" }} aria-hidden="true" />
          <div className={styles.pageHeroInner}>
            <div className={styles.heroBreadcrumb}>
              <Link href="/fluton">Fluton</Link>
              <span>›</span>
              <span>Developers</span>
            </div>
            <div className={styles.heroTag} style={{ color: "#4ade80", borderColor: "rgba(34,197,94,0.35)", background: "rgba(34,197,94,0.08)" }}>
              <span className={styles.heroTagDot} style={{ background: "#4ade80" }} />
              SDK · Testnet · API Reference
            </div>
            <h1 className={styles.heroTitle}>
              Build private DeFi apps<br />
              <span className={styles.heroGradientGreen}>with the Fluton SDK</span>
            </h1>
            <p className={styles.heroDesc}>
              The Fluton SDK gives any dApp access to FHE-encrypted intents,
              private swaps, cross-chain bridging, and Flutonized Vaults — in
              under 10 lines of code. Connect in minutes.
            </p>
            <div className={styles.heroBtns}>
              <a href="https://docs.fluton.io" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                Read Full Docs →
              </a>
              <a href={FLUTON_URL} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                Open App
              </a>
              <a href="https://github.com/Fluton-io" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                GitHub ↗
              </a>
            </div>

            {/* Stats — inline, no Fragment key issue */}
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "#4ade80" }}>npm</span>
                <span className={styles.heroStatLabel}>@fluton/sdk</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "var(--cyan)" }}>TS</span>
                <span className={styles.heroStatLabel}>Full TypeScript types</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "#4ade80" }}>Free</span>
                <span className={styles.heroStatLabel}>App access</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "var(--purple-bright)" }}>XP</span>
                <span className={styles.heroStatLabel}>Airdrop eligible</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUICKSTART ── */}
        <section className={styles.section} style={{ background: "var(--bg2)" }}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel} style={{ color: "#4ade80" }}>Quickstart</p>
            <h2 className={styles.sectionTitle}>From zero to private swap in 5 minutes</h2>
            <p className={styles.sectionSub}>Install the SDK, connect, and execute your first encrypted intent.</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--text-muted)", margin: "0 0 10px" }}>
                  <span style={{ color: "#4ade80", marginRight: "8px" }}>01</span> Install the SDK
                </p>
                <div className={styles.codeBlock}>
                  <div className={styles.codeBlockHeader}>
                    <span className={styles.codeBlockLang}>bash</span>
                    <div className={styles.codeBlockDots}>
                      <div className={styles.codeBlockDot} style={{ background: "#f87171" }} />
                      <div className={styles.codeBlockDot} style={{ background: "var(--yellow)" }} />
                      <div className={styles.codeBlockDot} style={{ background: "#4ade80" }} />
                    </div>
                  </div>
                  <div className={styles.codeBlockBody}>
                    <pre>{`npm install @fluton/sdk
# or
yarn add @fluton/sdk`}</pre>
                  </div>
                </div>
              </div>

              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--text-muted)", margin: "0 0 10px" }}>
                  <span style={{ color: "#4ade80", marginRight: "8px" }}>02</span> Initialize the client
                </p>
                <div className={styles.codeBlock}>
                  <div className={styles.codeBlockHeader}>
                    <span className={styles.codeBlockLang}>typescript</span>
                    <div className={styles.codeBlockDots}>
                      <div className={styles.codeBlockDot} style={{ background: "#f87171" }} />
                      <div className={styles.codeBlockDot} style={{ background: "var(--yellow)" }} />
                      <div className={styles.codeBlockDot} style={{ background: "#4ade80" }} />
                    </div>
                  </div>
                  <div className={styles.codeBlockBody}>
                    <pre>{`import { FlutonClient } from '@fluton/sdk';

const client = new FlutonClient({
  network: 'mainnet',
  rpcUrl:  'https://rpc.fluton.io',
  signer:  yourEthersSigner,   // ethers.js Signer
});

await client.connect();
console.log('Connected:', client.address);`}</pre>
                  </div>
                </div>
              </div>

              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--text-muted)", margin: "0 0 10px" }}>
                  <span style={{ color: "#4ade80", marginRight: "8px" }}>03</span> Execute a private swap
                </p>
                <div className={styles.codeBlock}>
                  <div className={styles.codeBlockHeader}>
                    <span className={styles.codeBlockLang}>typescript</span>
                    <div className={styles.codeBlockDots}>
                      <div className={styles.codeBlockDot} style={{ background: "#f87171" }} />
                      <div className={styles.codeBlockDot} style={{ background: "var(--yellow)" }} />
                      <div className={styles.codeBlockDot} style={{ background: "#4ade80" }} />
                    </div>
                  </div>
                  <div className={styles.codeBlockBody}>
                    <pre>{`// All fields are FHE-encrypted before submission
const result = await client.swap({
  tokenIn:   'USDC',
  tokenOut:  'ETH',
  amountIn:  '1000',           // encrypted client-side
  slippage:  0.5,              // encrypted — bots can't read
  chain:     'arbitrum',
});

console.log('Intent hash:', result.intentHash);
console.log('Status:',      result.status);     // 'pending' → 'settled'`}</pre>
                  </div>
                </div>
              </div>

              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--text-muted)", margin: "0 0 10px" }}>
                  <span style={{ color: "#4ade80", marginRight: "8px" }}>04</span> Deposit into a Flutonized Vault
                </p>
                <div className={styles.codeBlock}>
                  <div className={styles.codeBlockHeader}>
                    <span className={styles.codeBlockLang}>typescript</span>
                    <div className={styles.codeBlockDots}>
                      <div className={styles.codeBlockDot} style={{ background: "#f87171" }} />
                      <div className={styles.codeBlockDot} style={{ background: "var(--yellow)" }} />
                      <div className={styles.codeBlockDot} style={{ background: "#4ade80" }} />
                    </div>
                  </div>
                  <div className={styles.codeBlockBody}>
                    <pre>{`const vault = await client.vaults.open({
  strategy: 'stable',          // 'stable' | 'dynamic' | 'alpha'
  asset:    'USDC',
  amount:   '5000',
});

// Check encrypted position (only visible to you)
const position = await vault.getPosition();
console.log('Receipt token:', position.receiptToken);
console.log('Accrued yield:', position.yield);      // decrypted locally`}</pre>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SDK REFERENCE ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel} style={{ color: "#4ade80" }}>SDK Reference</p>
            <h2 className={styles.sectionTitle}>Core API methods</h2>
            <p className={styles.sectionSub}>Full TypeScript types available. All methods return Promises.</p>
            {sdkModules.map((mod) => (
              <div key={mod.module} style={{ marginBottom: "40px" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--text-muted)", padding: "10px 16px", background: "var(--bg3)", borderRadius: "var(--radius-sm) var(--radius-sm) 0 0", border: "1px solid var(--border)", borderBottom: "none", margin: 0 }}>
                  {mod.module}
                </p>
                <div style={{ overflowX: "auto", border: "1px solid var(--border)", borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
                  <table className={styles.methodTable} style={{ minWidth: "580px" }}>
                    <thead>
                      <tr>
                        <th>Method</th>
                        <th>Parameters</th>
                        <th>Returns</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mod.methods.map((m) => (
                        <tr key={m.name}>
                          <td><span className={styles.methodName}>{m.name}</span></td>
                          <td><span className={styles.methodType}>{m.params}</span></td>
                          <td><span className={styles.methodType}>{m.returns}</span></td>
                          <td>{m.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── APP & RESOURCES ── */}
        <section className={styles.section} style={{ background: "var(--bg3)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel} style={{ color: "#4ade80" }}>Access</p>
            <h2 className={styles.sectionTitle}>Get started with Fluton</h2>
            <p className={styles.sectionSub}>Everything you need to start building.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", marginBottom: "40px" }}>
              {appResources.map((r) => (
                <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex", gap: "16px", alignItems: "flex-start", padding: "22px", background: "var(--surface)", border: "1px solid rgba(34,197,94,0.15)", borderRadius: "var(--radius)", transition: "border-color 0.2s, transform 0.2s" }}>
                  <span style={{ fontSize: "1.8rem", flexShrink: 0 }}>{r.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--text)", margin: "0 0 5px" }}>{r.title}</p>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-dim)", lineHeight: 1.55, margin: "0 0 8px" }}>{r.desc}</p>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#4ade80" }}>{r.link} →</span>
                  </div>
                </a>
              ))}
            </div>

            <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--text-muted)", margin: "0 0 12px" }}>
              Network config
            </p>
            <div className={styles.codeBlock}>
              <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLang}>json</span>
                <div className={styles.codeBlockDots}>
                  <div className={styles.codeBlockDot} style={{ background: "#f87171" }} />
                  <div className={styles.codeBlockDot} style={{ background: "var(--yellow)" }} />
                  <div className={styles.codeBlockDot} style={{ background: "#4ade80" }} />
                </div>
              </div>
              <div className={styles.codeBlockBody}>
                <pre>{`{
  "appUrl":       "https://fluton.io/",
  "docsUrl":      "https://docs.fluton.io",
  "githubOrg":    "https://github.com/Fluton-io",
  "discordUrl":   "https://discord.gg/fluton",
  "twitterUrl":   "https://x.com/FlutonIO"
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* ── DEVELOPER RESOURCES ── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel} style={{ color: "#4ade80" }}>Resources</p>
            <h2 className={styles.sectionTitle}>Everything you need to build</h2>
            <div className={styles.cardsGrid}>
              {devResources.map((r) => (
                <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <div className={styles.card} style={{ borderColor: "rgba(34,197,94,0.15)", height: "100%" }}>
                    <div className={styles.cardIconWrap} style={{ background: "var(--green-dim)" }}>{r.icon}</div>
                    <h3 className={styles.cardTitle}>{r.title}</h3>
                    <p className={styles.cardDesc}>{r.desc}</p>
                    <span style={{ display: "inline-block", marginTop: "14px", fontSize: "0.78rem", fontWeight: 600, color: "#4ade80" }}>
                      {r.linkLabel} →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.ctaBanner} style={{ background: "linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(0,212,255,0.05) 100%)", borderTop: "1px solid var(--border)" }}>
          <div className={styles.ctaBannerGlow} style={{ background: "radial-gradient(ellipse at center bottom, rgba(34,197,94,0.14) 0%, transparent 60%)" }} aria-hidden="true" />
          <div className={styles.ctaBannerInner}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "#4ade80", margin: "0 0 12px" }}>Airdrop Eligible</p>
            <h2 className={styles.ctaBannerTitle}>Build on Fluton, earn XP</h2>
            <p className={styles.ctaBannerDesc}>
              Developer activity earns XP toward Fluton&apos;s confirmed airdrop.
              Every SDK call, every vault interaction, every swap counts.
            </p>
            <div className={styles.ctaBannerBtns}>
              <a href={FLUTON_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>Open Fluton →</a>
              <a href="https://docs.fluton.io" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>Full SDK Docs</a>
              <a href="https://discord.gg/fluton" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>Join Discord</a>
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
              <Link href="/fluton-mev">MEV Protection</Link>
              <a href="https://docs.fluton.io" target="_blank" rel="noopener noreferrer">Full Docs</a>
              <a href="https://github.com/Fluton-io" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://discord.gg/fluton" target="_blank" rel="noopener noreferrer">Discord</a>
            </div>
            <p className={styles.footerCopy}>© 2026 Fluton Labs. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </>
  );
}

const sdkModules = [
  {
    module: "client — FlutonClient",
    methods: [
      { name: "new FlutonClient(config)", params: "FlutonConfig", returns: "FlutonClient", desc: "Instantiate the SDK with network, RPC, and signer." },
      { name: ".connect()", params: "—", returns: "Promise<void>", desc: "Establish connection and derive the session smart account." },
      { name: ".disconnect()", params: "—", returns: "Promise<void>", desc: "Close the session and clean up smart account state." },
      { name: ".getAddress()", params: "—", returns: "string", desc: "Returns the derived smart account address for the session." },
    ],
  },
  {
    module: "swaps — client.swap()",
    methods: [
      { name: ".swap(intent)", params: "SwapIntent", returns: "Promise<IntentResult>", desc: "Submit a private swap intent. All fields FHE-encrypted before broadcast." },
      { name: ".swapStatus(hash)", params: "string", returns: "Promise<SwapStatus>", desc: "Poll the status of a submitted intent by its hash." },
      { name: ".quote(params)", params: "QuoteParams", returns: "Promise<Quote>", desc: "Get an estimated output and fee for a swap without submitting." },
      { name: ".cancel(hash)", params: "string", returns: "Promise<void>", desc: "Cancel a pending intent that has not yet been fulfilled." },
    ],
  },
  {
    module: "vaults — client.vaults",
    methods: [
      { name: ".open(config)", params: "VaultConfig", returns: "Promise<VaultSession>", desc: "Open a new Flutonized Vault with the specified strategy and asset." },
      { name: ".deposit(amount)", params: "string", returns: "Promise<IntentResult>", desc: "Deposit into an open vault. Amount is encrypted before submission." },
      { name: ".withdraw(amount)", params: "string | 'all'", returns: "Promise<IntentResult>", desc: "Withdraw a specific amount or full balance from the vault." },
      { name: ".getPosition()", params: "—", returns: "Promise<VaultPosition>", desc: "Decrypt and return your current balance and accrued yield." },
    ],
  },
  {
    module: "bridge — client.bridge()",
    methods: [
      { name: ".bridge(intent)", params: "BridgeIntent", returns: "Promise<IntentResult>", desc: "Submit a private cross-chain bridge intent via Union Protocol." },
      { name: ".getSupportedChains()", params: "—", returns: "Promise<Chain[]>", desc: "Returns all chains currently supported for bridging." },
      { name: ".estimateFee(params)", params: "BridgeFeeParams", returns: "Promise<Fee>", desc: "Estimate the relayer and settlement fee for a bridge intent." },
    ],
  },
  {
    module: "crypto — client.crypto",
    methods: [
      { name: ".encryptIntent(data)", params: "IntentData", returns: "EncryptedIntent", desc: "Manually encrypt an intent payload using TFHE (advanced use)." },
      { name: ".generateViewingKey()", params: "—", returns: "ViewingKey", desc: "Generate a viewing key to audit your own transaction history." },
      { name: ".verifyProof(proof)", params: "ZKProof", returns: "Promise<boolean>", desc: "Verify a ZK validity proof returned from a settled intent." },
    ],
  },
];

const appResources = [
  { icon: "🚀", title: "Fluton App", desc: "The main Fluton application — swap, vault, bridge, and earn.", href: "https://fluton.io/", link: "fluton.io" },
  { icon: "📚", title: "Documentation", desc: "Full SDK reference, architecture guides, FHE internals, and integration tutorials.", href: "https://docs.fluton.io", link: "docs.fluton.io" },
  { icon: "⌨️", title: "GitHub", desc: "Open-source SDK, example dApps, smart contract interfaces, and issue tracker.", href: "https://github.com/Fluton-io", link: "github.com/Fluton-io" },
  { icon: "💬", title: "Discord", desc: "Get help from the Fluton team and community in the #developers channel.", href: "https://discord.gg/fluton", link: "discord.gg/fluton" },
];

const devResources = [
  { icon: "📚", title: "Full Documentation", desc: "Complete SDK reference, architecture guides, FHE internals, and integration tutorials.", href: "https://docs.fluton.io", linkLabel: "docs.fluton.io" },
  { icon: "⌨️", title: "GitHub — Fluton-io", desc: "Open-source SDK, example dApps, smart contract interfaces, and issue tracker.", href: "https://github.com/Fluton-io", linkLabel: "github.com/Fluton-io" },
  { icon: "💬", title: "Developer Discord", desc: "Get help from the Fluton team and community in the #developers channel.", href: "https://discord.gg/fluton", linkLabel: "discord.gg/fluton" },
  { icon: "🐦", title: "Twitter / X", desc: "SDK updates, app announcements, and developer spotlights.", href: "https://x.com/FlutonIO", linkLabel: "@FlutonIO" },
  { icon: "✍️", title: "Blog", desc: "Technical deep-dives on FHE, intent architecture, and protocol design decisions.", href: "https://fluton.io/blog", linkLabel: "fluton.io/blog" },
  { icon: "💼", title: "LinkedIn", desc: "Company updates, partnership announcements, and ecosystem news.", href: "https://www.linkedin.com/company/flutonlabs/", linkLabel: "flutonlabs" },
];
