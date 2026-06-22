import Head from "next/head";
import Link from "next/link";
import styles from "../styles/fluton.module.css";

export default function FlutonHome() {
  return (
    <>
      <Head>
        <title>Fluton — Universal Confidentiality Engine</title>
        <meta
          name="description"
          content="Fluton is the universal confidentiality engine for the digital economy. Private-by-default DeFi powered by FHE."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.root}>
        {/* ── NAV ── */}
        <nav className={styles.nav}>
          <div className={styles.navInner}>
            <Link href="/fluton" className={styles.logoLink}>
              <span className={styles.logoInner}>
                <img src="/fluton-logo.png" alt="ENCRYPTED" className={styles.logoImg} />
                <span className={styles.logoText}>ENCRYPTED</span>
              </span>
            </Link>
            <ul className={styles.navLinks}>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#technology">Technology</a></li>
              <li><a href="#how">How It Works</a></li>
              <li><a href="#compare">Compare</a></li>
              <li className={styles.navSep} aria-hidden="true">|</li>
              <li><Link href="/fluton-vaults">Vaults</Link></li>
              <li><Link href="/fluton-swaps">Private Swaps</Link></li>
              <li><Link href="/fluton-mev">MEV</Link></li>
              <li><Link href="/fluton-developers">Developers</Link></li>
            </ul>
            {/* Highlighted links */}
            <div className={styles.navHighlights}>
              <a href="https://fluton.io/roadmap" target="_blank" rel="noopener noreferrer" className={styles.navHighlight}>Roadmap</a>
              <a href="https://fluton.io/blog" target="_blank" rel="noopener noreferrer" className={styles.navHighlight}>Blog</a>
              <a href="https://docs.fluton.io/introduction" target="_blank" rel="noopener noreferrer" className={styles.navHighlight}>Docs</a>
              <a href="https://fluton.io/contact" target="_blank" rel="noopener noreferrer" className={styles.navHighlight}>Contact</a>
            </div>
            <a
              href="https://fluton.io/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navCta}
            >
              Launch App
            </a>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroGlow2} aria-hidden="true" />
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Testnet Live — Earn XP &amp; Airdrop Eligibility
            </div>
            <h1 className={styles.heroTitle}>
              The Universal
              <br />
              <span className={styles.heroGradient}>Confidentiality Engine</span>
              <br />
              for DeFi
            </h1>
            <p className={styles.heroSub}>
              Fluton enables private-by-default interactions across chains, apps,
              and assets — powered by Fully Homomorphic Encryption and encrypted
              intents. Swap, bridge, and earn without exposing a single detail.
            </p>
            <div className={styles.heroBtns}>
              <a
                href="https://fluton.io/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                Try the App
              </a>
              <a
                href="https://docs.fluton.io"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                Read the Docs
              </a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>FHE</span>
                <span className={styles.heroStatLabel}>Powered Encryption</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>EVM+</span>
                <span className={styles.heroStatLabel}>Cross-Chain Support</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>0</span>
                <span className={styles.heroStatLabel}>MEV Exposure</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>∞</span>
                <span className={styles.heroStatLabel}>Composability</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE TICKER ── */}
        <div className={styles.ticker}>
          <div className={styles.tickerTrack}>
            {[
              "Private Swaps",
              "Encrypted Intents",
              "Cross-Chain Privacy",
              "MEV Protection",
              "FHE Technology",
              "Private Yield Pools",
              "Smart Account Abstraction",
              "Zero Surveillance",
              "Private Swaps",
              "Encrypted Intents",
              "Cross-Chain Privacy",
              "MEV Protection",
              "FHE Technology",
              "Private Yield Pools",
              "Smart Account Abstraction",
              "Zero Surveillance",
            ].map((item, i) => (
              <span key={i} className={styles.tickerItem}>
                {item} <span className={styles.tickerDot}>✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── OVERVIEW ── */}
        <section id="overview" className={styles.overviewSection}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel}>What Fluton Does</p>
            <h2 className={styles.sectionTitle}>
              Cross-chain liquidity,{" "}
              <span className={styles.heroGradient}>private by default</span>
            </h2>
            <p className={styles.overviewIntro}>
              Every DeFi transaction today is fully public — your amounts, your
              wallet, your strategy. MEV bots exploit it. Analysts track it.
              Fluton encrypts your intent before it ever leaves your wallet and
              routes it across any chain through a decentralized solver network,
              so liquidity stays deep and privacy stays intact.
            </p>

            {/* ── TWO PILLARS ── */}
            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <div className={styles.pillarHeader}>
                  <span className={styles.pillarIconWrap} aria-hidden="true">🔒</span>
                  <h3 className={styles.pillarTitle}>Privacy Layer</h3>
                </div>
                <p className={styles.pillarDesc}>
                  Powered by{" "}
                  <strong className={styles.accentText}>
                    Fully Homomorphic Encryption (FHE)
                  </strong>
                  , Fluton wraps every intent in encryption before it touches
                  the network. Relayers, solvers, and validators process your
                  transaction without ever reading its contents. No surveillance.
                  No front-running. No on-chain linking of your activity.
                </p>
                <ul className={styles.pillarList}>
                  <li>
                    <span className={styles.pillarCheck}>✓</span>
                    Encrypted amounts — never visible in the mempool
                  </li>
                  <li>
                    <span className={styles.pillarCheck}>✓</span>
                    Hidden wallet identity via smart account abstraction
                  </li>
                  <li>
                    <span className={styles.pillarCheck}>✓</span>
                    Sealed yield strategies — no position exposure
                  </li>
                  <li>
                    <span className={styles.pillarCheck}>✓</span>
                    Zero MEV — bots have no plaintext to read
                  </li>
                </ul>
              </div>

              <div className={styles.pillarDivider} aria-hidden="true">
                <div className={styles.pillarDividerLine} />
                <span className={styles.pillarDividerBadge}>+</span>
                <div className={styles.pillarDividerLine} />
              </div>

              <div className={styles.pillar}>
                <div className={styles.pillarHeader}>
                  <span className={styles.pillarIconWrap} aria-hidden="true">🌊</span>
                  <h3 className={styles.pillarTitle}>Cross-Chain Liquidity</h3>
                </div>
                <p className={styles.pillarDesc}>
                  Built on{" "}
                  <strong className={styles.accentText}>Union Protocol</strong>
                  's IBC-inspired message-passing layer, Fluton routes liquidity
                  across EVM and non-EVM chains natively — not through wrapped
                  bridges that introduce slippage, delays, or trust assumptions.
                  Full composability with the protocols you already use.
                </p>
                <ul className={styles.pillarList}>
                  <li>
                    <span className={styles.pillarCheck}>✓</span>
                    EVM + non-EVM chains in a single intent
                  </li>
                  <li>
                    <span className={styles.pillarCheck}>✓</span>
                    No chain migration — works with existing DeFi
                  </li>
                  <li>
                    <span className={styles.pillarCheck}>✓</span>
                    Competitive solver network for best execution
                  </li>
                  <li>
                    <span className={styles.pillarCheck}>✓</span>
                    Unified liquidity access without fragmentation
                  </li>
                </ul>
              </div>
            </div>

            {/* ── ARCHITECTURE DIAGRAM ── */}
            <div className={styles.archWrap}>
              <p className={styles.archLabel}>How privacy meets liquidity</p>
              <div className={styles.arch}>

                {/* Row 1 — User */}
                <div className={styles.archRow}>
                  <div className={styles.archNode} data-type="user">
                    <span className={styles.archNodeIcon}>👤</span>
                    <span className={styles.archNodeLabel}>Your Wallet</span>
                    <span className={styles.archNodeSub}>Signs intent</span>
                  </div>
                </div>

                {/* Arrow down */}
                <div className={styles.archArrowDown}>
                  <div className={styles.archArrowLine} />
                  <div className={styles.archArrowBadge}>🔒 FHE Encryption</div>
                  <div className={styles.archArrowLine} />
                </div>

                {/* Row 2 — Encrypted Intent */}
                <div className={styles.archRow}>
                  <div className={styles.archNode} data-type="intent">
                    <span className={styles.archNodeIcon}>📦</span>
                    <span className={styles.archNodeLabel}>Encrypted Intent</span>
                    <span className={styles.archNodeSub}>Sealed payload</span>
                  </div>
                </div>

                {/* Arrow down */}
                <div className={styles.archArrowDown}>
                  <div className={styles.archArrowLine} />
                  <div className={styles.archArrowBadge}>Relayer Network</div>
                  <div className={styles.archArrowLine} />
                </div>

                {/* Row 3 — Solvers */}
                <div className={styles.archRow}>
                  <div className={styles.archNode} data-type="solver">
                    <span className={styles.archNodeIcon}>⚙️</span>
                    <span className={styles.archNodeLabel}>Solver Network</span>
                    <span className={styles.archNodeSub}>Best execution path</span>
                  </div>
                </div>

                {/* Arrow down */}
                <div className={styles.archArrowDown}>
                  <div className={styles.archArrowLine} />
                  <div className={styles.archArrowBadge}>Settlement</div>
                  <div className={styles.archArrowLine} />
                </div>

                {/* Row 4 — Chains */}
                <div className={styles.archChainRow}>
                  {chains.map((c) => (
                    <div key={c.name} className={styles.archChainNode}>
                      <span className={styles.archChainIcon}>{c.icon}</span>
                      <span className={styles.archChainName}>{c.name}</span>
                      <span className={styles.archChainType}>{c.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── CHAIN ECOSYSTEM STRIP ── */}
            <div className={styles.chainStrip}>
              <p className={styles.chainStripLabel}>Reaches across</p>
              <div className={styles.chainStripItems}>
                {chains.map((c) => (
                  <div key={c.name} className={styles.chainStripItem}>
                    <span>{c.icon}</span>
                    <span className={styles.chainStripName}>{c.name}</span>
                    <span className={styles.chainStripType}>{c.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel}>Core Features</p>
            <h2 className={styles.sectionTitle}>
              Privacy that doesn't break DeFi
            </h2>
            <p className={styles.sectionSub}>
              Every feature is designed to keep your data private while
              preserving full composability with the protocols you already use.
            </p>

            <div className={styles.featGrid}>
              {features.map((f) => (
                <div key={f.title} className={styles.featCard}>
                  <div className={styles.featIcon} aria-hidden="true">
                    {f.icon}
                  </div>
                  <h3 className={styles.featTitle}>{f.title}</h3>
                  <p className={styles.featDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how" className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel}>How It Works</p>
            <h2 className={styles.sectionTitle}>
              Encrypted from intent to settlement
            </h2>
            <p className={styles.sectionSub}>
              Your transaction never travels in plain text. From the moment you
              sign to the moment it settles, it stays wrapped in FHE.
            </p>

            <div className={styles.steps}>
              {steps.map((s, i) => (
                <div key={s.title} className={styles.step}>
                  <div className={styles.stepNum}>{i + 1}</div>
                  {i < steps.length - 1 && (
                    <div className={styles.stepLine} aria-hidden="true" />
                  )}
                  <div className={styles.stepContent}>
                    <div className={styles.stepIcon}>{s.icon}</div>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepDesc}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DISCLOSURE BUDGET CALLOUT ── */}
        <section className={styles.callout}>
          <div className={styles.calloutInner}>
            <div className={styles.calloutText}>
              <p className={styles.calloutLabel}>The Disclosure Budget</p>
              <h2 className={styles.calloutTitle}>
                Hide what needs hiding.
                <br />
                <span className={styles.heroGradient}>
                  Reveal what makes DeFi work.
                </span>
              </h2>
              <p className={styles.calloutDesc}>
                Total opacity breaks DeFi — liquidity, routing, and settlement
                need some transparency to function. Fluton introduces the{" "}
                <strong>Disclosure Budget</strong>: reveal only the minimum
                required for execution. Your amounts, strategies, and identity
                stay encrypted. The network stays trustless.
              </p>
            </div>
            <div className={styles.calloutCard}>
              <div className={styles.disclosureRow}>
                <span className={styles.disclosurePrivate}>🔒 Private</span>
                <span>Transaction amounts</span>
              </div>
              <div className={styles.disclosureRow}>
                <span className={styles.disclosurePrivate}>🔒 Private</span>
                <span>Token types</span>
              </div>
              <div className={styles.disclosureRow}>
                <span className={styles.disclosurePrivate}>🔒 Private</span>
                <span>Wallet identity</span>
              </div>
              <div className={styles.disclosureRow}>
                <span className={styles.disclosurePrivate}>🔒 Private</span>
                <span>Yield strategies</span>
              </div>
              <div className={styles.disclosureDivider} />
              <div className={styles.disclosureRow}>
                <span className={styles.disclosurePublic}>✓ Revealed</span>
                <span>Settlement validity</span>
              </div>
              <div className={styles.disclosureRow}>
                <span className={styles.disclosurePublic}>✓ Revealed</span>
                <span>Execution confirmation</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARE ── */}
        <section id="compare" className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel}>Comparison</p>
            <h2 className={styles.sectionTitle}>
              Why Fluton over the alternatives?
            </h2>
            <p className={styles.sectionSub}>
              Other privacy protocols force trade-offs. Fluton is the only
              solution that delivers privacy without leaving existing DeFi behind.
            </p>

            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Protocol</th>
                    <th>Technology</th>
                    <th>Composability</th>
                    <th>MEV Protection</th>
                    <th>Cross-Chain</th>
                    <th>No Migration</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr
                      key={row.name}
                      className={row.highlight ? styles.tableRowHighlight : ""}
                    >
                      <td>
                        <strong>{row.name}</strong>
                        {row.highlight && (
                          <span className={styles.tableBadge}>You are here</span>
                        )}
                      </td>
                      <td>{row.tech}</td>
                      <td>{row.composable}</td>
                      <td>{row.mev}</td>
                      <td>{row.crossChain}</td>
                      <td>{row.noMigration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── TECHNOLOGY (DEEP DIVE) ── */}
        <section id="technology" className={styles.techSection}>
          <div className={styles.techGlow} aria-hidden="true" />
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel}>Under the Hood</p>
            <h2 className={styles.sectionTitle}>
              Fluton&apos;s technology &amp;{" "}
              <span className={styles.heroGradient}>intent-based architecture</span>
            </h2>
            <p className={styles.sectionSub}>
              Three cryptographic primitives work in concert to deliver
              privacy without sacrificing composability, speed, or liquidity depth.
            </p>

            {/* ── PROTOCOL LAYER STACK ── */}
            <div className={styles.layerStack}>
              <p className={styles.layerStackTitle}>Protocol Layer Stack — top to bottom</p>
              {layerStack.map((layer) => (
                <div key={layer.name} className={styles.layerRow}>
                  <div className={styles.layerBadge} style={{ background: layer.color }}>
                    {layer.icon}
                  </div>
                  <div className={styles.layerContent}>
                    <div className={styles.layerTop}>
                      <span className={styles.layerName}>{layer.name}</span>
                      <span className={styles.layerTag}>{layer.tag}</span>
                    </div>
                    <p className={styles.layerDesc}>{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── DEEP DIVE GRID ── */}
            <div className={styles.deepGrid}>

              {/* ── FHE CARD ── */}
              <div className={styles.deepCard} data-accent="cyan">
                <div className={styles.deepCardHeader}>
                  <span className={styles.deepCardIcon}>🔐</span>
                  <div>
                    <p className={styles.deepCardLabel}>Core Cryptography</p>
                    <h3 className={styles.deepCardTitle}>
                      Fully Homomorphic Encryption
                    </h3>
                  </div>
                </div>
                <p className={styles.deepCardDesc}>
                  FHE allows arbitrary computation on ciphertext — encrypted data
                  is processed mathematically without being decrypted at any point.
                  Fluton uses Fhenix&apos;s TFHE library to implement this at the
                  smart contract level.
                </p>
                <div className={styles.deepCardBox}>
                  <p className={styles.deepCardBoxTitle}>How it works in practice</p>
                  <div className={styles.deepSteps}>
                    {fheSteps.map((s) => (
                      <div key={s.num} className={styles.deepStep}>
                        <span className={styles.deepStepNum}>{s.num}</span>
                        <div>
                          <strong>{s.title}</strong>
                          <p>{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.deepCardTags}>
                  <span>⚡ TFHE scheme</span>
                  <span>🔑 Public-key encryption</span>
                  <span>🤝 Powered by Fhenix</span>
                </div>
              </div>

              {/* ── INTENT ARCHITECTURE CARD ── */}
              <div className={styles.deepCard} data-accent="purple">
                <div className={styles.deepCardHeader}>
                  <span className={styles.deepCardIcon}>🎯</span>
                  <div>
                    <p className={styles.deepCardLabel}>Execution Model</p>
                    <h3 className={styles.deepCardTitle}>
                      Intent-Based Architecture
                    </h3>
                  </div>
                </div>
                <p className={styles.deepCardDesc}>
                  Traditional DeFi requires you to specify exact execution paths.
                  Fluton&apos;s intent model flips this: declare the desired outcome,
                  and a competitive solver network races to fulfill it optimally —
                  all while the intent stays encrypted.
                </p>

                {/* Intent lifecycle flow */}
                <div className={styles.intentDiagram}>
                  <p className={styles.intentDiagramTitle}>Intent Lifecycle</p>
                  <div className={styles.intentFlow}>
                    {intentLifecycle.map((stage, i) => (
                      <div key={stage.label} className={styles.intentStage}>
                        <div
                          className={styles.intentNode}
                          style={{ borderColor: stage.color }}
                        >
                          {stage.icon}
                        </div>
                        <p className={styles.intentNodeLabel}>{stage.label}</p>
                        <p className={styles.intentNodeSub}>{stage.sub}</p>
                        {i < intentLifecycle.length - 1 && (
                          <span className={styles.intentArrow} aria-hidden="true">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Intent vs Transaction comparison */}
                <div className={styles.deepCardBox}>
                  <p className={styles.deepCardBoxTitle}>Intent vs Traditional Transaction</p>
                  <div className={styles.intentVsTx}>
                    <div className={styles.intentVsCol} data-side="bad">
                      <p className={styles.intentVsColTitle}>❌ Traditional Tx</p>
                      <ul>
                        <li>Specify exact route</li>
                        <li>Broadcast in plaintext</li>
                        <li>MEV-exploitable</li>
                        <li>Fails if path changes</li>
                      </ul>
                    </div>
                    <div className={styles.intentVsDivider} />
                    <div className={styles.intentVsCol} data-side="good">
                      <p className={styles.intentVsColTitle}>✅ Fluton Intent</p>
                      <ul>
                        <li>Declare desired outcome</li>
                        <li>Encrypted end-to-end</li>
                        <li>MEV-proof by design</li>
                        <li>Solvers find best path</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── SMART ACCOUNT CARD ── */}
              <div className={styles.deepCard} data-accent="green">
                <div className={styles.deepCardHeader}>
                  <span className={styles.deepCardIcon}>👤</span>
                  <div>
                    <p className={styles.deepCardLabel}>Identity Layer</p>
                    <h3 className={styles.deepCardTitle}>
                      Smart Account Abstraction
                    </h3>
                  </div>
                </div>
                <p className={styles.deepCardDesc}>
                  Every Fluton interaction routes through a freshly derived smart
                  account, severing the deterministic link between your EOA and
                  your on-chain footprint. Combined with FHE, this provides both
                  confidentiality and anonymity simultaneously.
                </p>
                <div className={styles.deepCardBox}>
                  <p className={styles.deepCardBoxTitle}>Identity isolation flow</p>
                  <div className={styles.accountFlow}>
                    <div className={styles.accountNode} data-type="eoa">
                      <span>👛 Your EOA</span>
                      <span className={styles.accountSub}>Never touches the chain directly</span>
                    </div>
                    <div className={styles.accountArrow}>↓</div>
                    <div className={styles.accountNode} data-type="smart">
                      <span>🧩 Derived Smart Account</span>
                      <span className={styles.accountSub}>Per-session, disposable</span>
                    </div>
                    <div className={styles.accountArrow}>↓</div>
                    <div className={styles.accountNode} data-type="chain">
                      <span>⛓️ On-chain Settlement</span>
                      <span className={styles.accountSub}>No wallet linkability</span>
                    </div>
                  </div>
                </div>
                <div className={styles.deepCardTags}>
                  <span>🔗 EOA decoupled</span>
                  <span>♻️ Per-session accounts</span>
                  <span>🕵️ Unlinkable history</span>
                </div>
              </div>

              {/* ── CROSS-CHAIN CARD ── */}
              <div className={styles.deepCard} data-accent="cyan">
                <div className={styles.deepCardHeader}>
                  <span className={styles.deepCardIcon}>🌐</span>
                  <div>
                    <p className={styles.deepCardLabel}>Transport Layer</p>
                    <h3 className={styles.deepCardTitle}>
                      Cross-Chain via Union Protocol
                    </h3>
                  </div>
                </div>
                <p className={styles.deepCardDesc}>
                  Fluton uses Union Protocol&apos;s IBC-inspired ZK light client
                  message-passing to route encrypted intents natively across
                  chains — no centralized bridge operator, no wrapped asset risk,
                  no trust assumption beyond each destination chain&apos;s own consensus.
                </p>
                <div className={styles.deepCardBox}>
                  <p className={styles.deepCardBoxTitle}>Union Protocol vs wrapped bridge</p>
                  <div className={styles.bridgeTable}>
                    <div className={styles.bridgeTableHead}>
                      <span />
                      <span>Wrapped Bridge</span>
                      <span>Union Protocol</span>
                    </div>
                    {bridgeRows.map((r) => (
                      <div key={r.label} className={styles.bridgeTableRow}>
                        <span className={styles.bridgeRowLabel}>{r.label}</span>
                        <span className={styles.bridgeRowBad}>{r.bridge}</span>
                        <span className={styles.bridgeRowGood}>{r.union}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.deepCardTags}>
                  <span>🔒 ZK light clients</span>
                  <span>⚡ No trust assumptions</span>
                  <span>🔗 IBC-inspired</span>
                </div>
              </div>

            </div>{/* end deepGrid */}

            {/* ── SECURITY GUARANTEES ── */}
            <div className={styles.securityPanel}>
              <p className={styles.securityPanelTitle}>Security guarantees</p>
              <div className={styles.securityGrid}>
                {securityProps.map((s) => (
                  <div key={s.label} className={styles.securityItem}>
                    <span className={styles.securityIcon}>{s.icon}</span>
                    <div>
                      <p className={styles.securityLabel}>{s.label}</p>
                      <p className={styles.securityDesc}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── PARTNERS ── */}
        <section className={styles.partnersSection}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel}>Ecosystem</p>
            <h2 className={styles.sectionTitle}>Built with the best</h2>
            <div className={styles.partnersGrid}>
              {partners.map((p) => (
                <div key={p.name} className={styles.partnerCard}>
                  <span className={styles.partnerIcon}>{p.icon}</span>
                  <div>
                    <p className={styles.partnerName}>{p.name}</p>
                    <p className={styles.partnerRole}>{p.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURE PAGES ── */}
        <section className={styles.section} style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
          <div className={styles.sectionInner}>
            <p className={styles.sectionLabel}>Explore Fluton</p>
            <h2 className={styles.sectionTitle}>Deep-dive into each feature</h2>
            <p className={styles.sectionSub}>
              Each product area has its own dedicated page with full technical
              detail, code examples, and testnet access.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" }}>
              {featurePages.map((f) => (
                <Link key={f.href} href={f.href} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "var(--surface)", border: `1px solid ${f.border}`,
                    borderRadius: "var(--radius-lg)", padding: "28px",
                    transition: "border-color 0.2s, transform 0.2s", height: "100%",
                    display: "flex", flexDirection: "column", gap: "12px",
                  }}>
                    <span style={{ fontSize: "2rem" }}>{f.icon}</span>
                    <div>
                      <p style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: f.labelColor, margin: "0 0 5px" }}>{f.label}</p>
                      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)", margin: "0 0 8px" }}>{f.title}</h3>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-dim)", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                    </div>
                    <span style={{ fontSize: "0.8rem", fontWeight: 600, color: f.labelColor, marginTop: "auto" }}>
                      Explore →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            {/* Logo + FHE */}
            <div className={styles.footerBrand}>
              <img src="/fluton-logo.png" alt="FHE" className={styles.footerLogoImg} />
              <span className={styles.footerLogoText}>FHE</span>
            </div>
            <p className={styles.footerTagline}>
              Universal Confidentiality Engine for the Digital Economy
            </p>
            {/* Highlighted footer links */}
            <div className={styles.footerHighlights}>
              <a href="https://fluton.io/roadmap" target="_blank" rel="noopener noreferrer" className={styles.footerHighlightLink}>🗺️ Roadmap</a>
              <a href="https://fluton.io/blog" target="_blank" rel="noopener noreferrer" className={styles.footerHighlightLink}>✍️ Blog</a>
              <a href="https://docs.fluton.io/introduction" target="_blank" rel="noopener noreferrer" className={styles.footerHighlightLink}>📄 Docs</a>
              <a href="https://fluton.io/contact" target="_blank" rel="noopener noreferrer" className={styles.footerHighlightLink}>💬 Contact</a>
            </div>
            <div className={styles.footerLinks}>
              <Link href="/fluton-vaults">Vaults</Link>
              <Link href="/fluton-swaps">Private Swaps</Link>
              <Link href="/fluton-mev">MEV Protection</Link>
              <Link href="/fluton-developers">Developers</Link>
              <a href="https://github.com/Fluton-io" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://x.com/FlutonIO" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://discord.gg/fluton" target="_blank" rel="noopener noreferrer">Discord</a>
            </div>
            <p className={styles.footerCopy}>© 2026 Fluton Labs. All rights reserved.</p>
          </div>
        </footer>
        <section id="community" className={styles.ctaSection}>
          <div className={styles.ctaGlow} aria-hidden="true" />
          <div className={styles.ctaInner}>
            <p className={styles.sectionLabel}>Get Involved</p>
            <h2 className={styles.ctaTitle}>
              Join the privacy revolution
            </h2>
            <p className={styles.ctaSub}>
              Use the testnet, earn XP, and position yourself for the airdrop.
              Connect with the community and help shape the future of private DeFi.
            </p>
            <div className={styles.ctaBtns}>
              <a
                href="https://testnet.fluton.io"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                Try Testnet Now
              </a>
              <a
                href="https://discord.gg/fluton"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                Join Discord
              </a>
            </div>
            <div className={styles.socialLinks}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={s.label}
                >
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <img src="/fluton-logo.png" alt="Fluton" className={styles.footerLogoImg} />
              <span className={styles.footerLogoText}>luton</span>
            </div>
            <p className={styles.footerTagline}>
              Universal Confidentiality Engine for the Digital Economy
            </p>
            {/* Highlighted footer links */}
            <div className={styles.footerHighlights}>
              <a href="https://fluton.io/roadmap" target="_blank" rel="noopener noreferrer" className={styles.footerHighlightLink}>🗺️ Roadmap</a>
              <a href="https://fluton.io/blog" target="_blank" rel="noopener noreferrer" className={styles.footerHighlightLink}>✍️ Blog</a>
              <a href="https://docs.fluton.io/introduction" target="_blank" rel="noopener noreferrer" className={styles.footerHighlightLink}>📄 Docs</a>
              <a href="https://fluton.io/contact" target="_blank" rel="noopener noreferrer" className={styles.footerHighlightLink}>💬 Contact</a>
            </div>
            <div className={styles.footerLinks}>
              <Link href="/fluton-vaults">Vaults</Link>
              <Link href="/fluton-swaps">Private Swaps</Link>
              <Link href="/fluton-mev">MEV Protection</Link>
              <Link href="/fluton-developers">Developers</Link>
              <a href="https://github.com/Fluton-io" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://x.com/FlutonIO" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://discord.gg/fluton" target="_blank" rel="noopener noreferrer">Discord</a>
            </div>
            <p className={styles.footerCopy}>
              © 2026 Fluton Labs. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

// ── DATA ──────────────────────────────────────────────

const features = [
  {
    icon: "🔒",
    title: "Private Swaps",
    desc: "Swap tokens across any chain without broadcasting amounts, token types, or timing to bots or on-chain analysts.",
  },
  {
    icon: "🌉",
    title: "Private Bridge",
    desc: "Move assets cross-chain without the transfer appearing in public explorer data or being linked to your identity.",
  },
  {
    icon: "💸",
    title: "Private Payments",
    desc: "Send funds to any address without creating an on-chain link between sender and recipient wallets.",
  },
  {
    icon: "📈",
    title: "Private Yield Pools",
    desc: "Access DeFi yield strategies with AI-optimized routing — your positions, balances, and strategies stay encrypted.",
  },
  {
    icon: "🛡️",
    title: "MEV Protection",
    desc: "Encrypted intents mean MEV bots have nothing to read in the mempool. No front-running, no sandwich attacks, ever.",
  },
  {
    icon: "🔗",
    title: "Full Composability",
    desc: "Works with the DeFi protocols you already use. No chain migration. No liquidity fragmentation. Drop-in privacy.",
  },
  {
    icon: "🧩",
    title: "Smart Account Abstraction",
    desc: "Your real wallet is decoupled from your on-chain footprint. Each action is executed via an abstracted smart account.",
  },
  {
    icon: "⛓️",
    title: "EVM + Non-EVM Support",
    desc: "Privacy across both EVM-compatible chains and non-EVM ecosystems through Union Protocol's IBC-inspired layer.",
  },
];

const steps = [
  {
    icon: "✍️",
    title: "Sign Your Intent",
    desc: "You express what you want — swap X for Y, bridge to chain Z, earn yield. That intent is immediately wrapped in FHE encryption before leaving your wallet.",
  },
  {
    icon: "📡",
    title: "Relayer Forwards It",
    desc: "The encrypted intent is passed to Fluton's relayer network. They forward the payload without being able to read its contents.",
  },
  {
    icon: "⚙️",
    title: "Solver Executes",
    desc: "A solver in the network picks up your encrypted intent, computes the optimal execution path, and fulfills it — all without ever seeing your raw data.",
  },
  {
    icon: "✅",
    title: "Settlement On-Chain",
    desc: "The result is settled on-chain. Only the validity of execution is revealed — your amounts, tokens, and identity remain encrypted at the protocol level.",
  },
];

const comparison = [
  {
    name: "Fluton",
    tech: "FHE + Encrypted Intents",
    composable: "✅ High",
    mev: "✅ Full",
    crossChain: "✅ EVM + Non-EVM",
    noMigration: "✅ Yes",
    highlight: true,
  },
  {
    name: "Aztec",
    tech: "ZK-STARKs (Consensus)",
    composable: "⚠️ New chain required",
    mev: "✅ Full",
    crossChain: "⚠️ Aztec only",
    noMigration: "❌ Migration needed",
    highlight: false,
  },
  {
    name: "Railgun",
    tech: "ZK Shielded Pools",
    composable: "⚠️ Exit/re-entry required",
    mev: "⚠️ Partial",
    crossChain: "⚠️ Limited",
    noMigration: "✅ Yes",
    highlight: false,
  },
  {
    name: "Hinkal",
    tech: "ZK (Institutional)",
    composable: "⚠️ Moderate",
    mev: "⚠️ Partial",
    crossChain: "⚠️ EVM only",
    noMigration: "✅ Yes",
    highlight: false,
  },
  {
    name: "Tornado Cash",
    tech: "Mixing",
    composable: "❌ Breaks DeFi flow",
    mev: "❌ None",
    crossChain: "❌ No",
    noMigration: "⚠️ Exits required",
    highlight: false,
  },
];

const tech = [
  {
    icon: "🔐",
    name: "Fully Homomorphic Encryption (FHE)",
    desc: "Compute on encrypted data without ever decrypting it. Powered by Fhenix's FHE infrastructure, Fluton's smart contracts process your intents while they remain mathematically sealed.",
  },
  {
    icon: "🎯",
    name: "Intent-Centric Architecture",
    desc: "You declare what you want, not how to get there. Solvers compete to fulfill your encrypted intent along the optimal path, abstracting all execution complexity from you.",
  },
  {
    icon: "👤",
    name: "Smart Account Abstraction",
    desc: "Every interaction routes through an abstracted smart account that breaks the deterministic link between your EOA and on-chain activity — adding an anonymity layer over confidentiality.",
  },
  {
    icon: "🌐",
    name: "Cross-Chain via Union Protocol",
    desc: "Built on Union Protocol's IBC-inspired message-passing layer, Fluton reaches EVM and non-EVM ecosystems with native privacy, not wrapped bridges.",
  },
];

const partners = [
  {
    icon: "⚗️",
    name: "Fhenix",
    role: "FHE Infrastructure Partner",
  },
  {
    icon: "🔗",
    name: "Union Protocol",
    role: "Cross-Chain Message Passing",
  },
  {
    icon: "🏛️",
    name: "Union Foundation",
    role: "Ecosystem Grant Recipient",
  },
  {
    icon: "🤝",
    name: "Offchain Labs",
    role: "Strategic Ecosystem",
  },
];

const socials = [
  {
    label: "Twitter",
    href: "https://x.com/FlutonIO",
    icon: "𝕏",
  },
  {
    label: "Discord",
    href: "https://discord.gg/fluton",
    icon: "💬",
  },
  {
    label: "GitHub",
    href: "https://github.com/Fluton-io",
    icon: "⌨️",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/flutonlabs/",
    icon: "💼",
  },
  {
    label: "Docs",
    href: "https://docs.fluton.io",
    icon: "📄",
  },
  {
    label: "Blog",
    href: "https://fluton.io/blog",
    icon: "✍️",
  },
];

const chains = [
  { icon: "⟠", name: "Ethereum", type: "EVM" },
  { icon: "🔷", name: "Arbitrum", type: "EVM L2" },
  { icon: "🟣", name: "Polygon", type: "EVM L2" },
  { icon: "🔵", name: "Base", type: "EVM L2" },
  { icon: "🌊", name: "Cosmos", type: "Non-EVM" },
  { icon: "◎", name: "Solana", type: "Non-EVM" },
];

const featurePages = [
  {
    href: "/fluton-vaults",
    icon: "🏦",
    label: "Yield · Privacy",
    labelColor: "var(--purple-bright)",
    title: "Flutonized Vaults",
    desc: "FHE-encrypted yield pools. Deposit, earn, and withdraw across chains without exposing your position, balance, or strategy.",
    border: "rgba(167,139,250,0.2)",
  },
  {
    href: "/fluton-swaps",
    icon: "🔄",
    label: "Swap · Cross-Chain",
    labelColor: "var(--cyan)",
    title: "Private Swaps",
    desc: "Swap any token on any chain without broadcasting amounts, token types, slippage, or timing to the public mempool.",
    border: "rgba(0,212,255,0.2)",
  },
  {
    href: "/fluton-mev",
    icon: "🛡️",
    label: "Security · Structural",
    labelColor: "#f87171",
    title: "MEV Protection",
    desc: "Encrypted intents give bots zero readable data. Front-running and sandwich attacks are eliminated at the protocol level — not reduced.",
    border: "rgba(239,68,68,0.15)",
  },
  {
    href: "/fluton-developers",
    icon: "⌨️",
    label: "SDK · Testnet · API",
    labelColor: "#4ade80",
    title: "Developers & SDK",
    desc: "Install @fluton/sdk, connect to testnet, and integrate private swaps or vaults into any dApp in under 10 lines of TypeScript.",
    border: "rgba(34,197,94,0.2)",
  },
];

// ── TECHNICAL SECTION DATA ──────────────────

const layerStack = [
  {
    icon: "👤",
    name: "User Intent Layer",
    tag: "Client",
    color: "rgba(167,139,250,0.2)",
    desc: "User signs a desired outcome (swap, bridge, yield). The intent is FHE-encrypted client-side before any network transmission occurs.",
  },
  {
    icon: "🔒",
    name: "FHE Encryption Layer",
    tag: "Cryptography",
    color: "rgba(0,212,255,0.18)",
    desc: "TFHE scheme wraps the intent payload. All fields — amounts, tokens, destination — become ciphertext from this point forward. Nothing is ever decrypted mid-flight.",
  },
  {
    icon: "📡",
    name: "Relayer Network",
    tag: "Transport",
    color: "rgba(251,191,36,0.18)",
    desc: "Decentralized relayers forward the encrypted bundle to the solver mempool. They handle routing but cannot read any payload data.",
  },
  {
    icon: "⚙️",
    name: "Solver Execution Layer",
    tag: "Execution",
    color: "rgba(34,197,94,0.18)",
    desc: "Competitive solvers bid to fulfill the intent via homomorphic computation. Best price wins. Front-running is structurally impossible — the intent remains encrypted throughout.",
  },
  {
    icon: "⛓️",
    name: "Cross-Chain Settlement",
    tag: "Settlement",
    color: "rgba(0,212,255,0.12)",
    desc: "Settlement occurs via Union Protocol's ZK light client bridges. Only validity proofs post publicly — transaction specifics remain sealed until the intended recipient decrypts.",
  },
];

const fheSteps = [
  {
    num: "01",
    title: "Client-side encryption",
    desc: "Your intent is encrypted locally with a public key before any data leaves your device.",
  },
  {
    num: "02",
    title: "Homomorphic computation",
    desc: "The FHE smart contract performs swap routing, fee calculation, and path resolution on the encrypted values — outputs stay encrypted.",
  },
  {
    num: "03",
    title: "Decrypt-on-settle",
    desc: "Only the final settlement result is decrypted, and only to the intended recipient. Intermediate values never touch plaintext.",
  },
];

const intentLifecycle = [
  { icon: "✍️", label: "Declare", sub: "State outcome", color: "rgba(167,139,250,0.7)" },
  { icon: "🔒", label: "Encrypt", sub: "FHE wraps it", color: "rgba(0,212,255,0.7)" },
  { icon: "📡", label: "Relay", sub: "Forwarded sealed", color: "rgba(251,191,36,0.7)" },
  { icon: "🏁", label: "Compete", sub: "Solvers bid", color: "rgba(34,197,94,0.7)" },
  { icon: "✅", label: "Settle", sub: "On-chain final", color: "rgba(0,212,255,0.7)" },
];

const bridgeRows = [
  { label: "Trust model",  bridge: "Multisig operators", union: "ZK light clients"   },
  { label: "Asset risk",   bridge: "Wrapped token risk",  union: "Native assets"      },
  { label: "Privacy",      bridge: "Public transfers",    union: "Encrypted intents"  },
  { label: "Failure mode", bridge: "Bridge hack / rug",   union: "Chain consensus"    },
];

const securityProps = [
  {
    icon: "🔐",
    label: "Semantic Security",
    desc: "FHE ciphertext is indistinguishable from random data — no partial information is leaked even under chosen-plaintext attacks.",
  },
  {
    icon: "🛡️",
    label: "MEV Immunity",
    desc: "Encrypted intents give bots zero plaintext to read in the mempool. Front-running and sandwich attacks are structurally impossible.",
  },
  {
    icon: "🕵️",
    label: "Unlinkability",
    desc: "Per-session smart accounts decouple your EOA from every on-chain action — no analyst can build a transaction graph from your wallet.",
  },
  {
    icon: "🔗",
    label: "Trust-Minimised Bridging",
    desc: "ZK light client proofs replace bridge operators. Cross-chain settlement inherits the security of each destination chain's own consensus.",
  },
  {
    icon: "⚖️",
    label: "Selective Disclosure",
    desc: "The Disclosure Budget model reveals only what execution requires. Audit trails can be generated by the user alone via viewing keys.",
  },
  {
    icon: "🧱",
    label: "Composability Preserved",
    desc: "Privacy is applied at the intent layer, not the protocol layer. Existing DeFi contracts require zero modification to work with Fluton.",
  },
];
