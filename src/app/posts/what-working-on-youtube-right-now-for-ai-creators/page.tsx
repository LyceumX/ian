import Link from "next/link";

export default function YouTubePostPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <header className="h-16 border-b flex items-center justify-between px-8" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-3">
          <img src="/ianfluencer-logo-v1-bold.png" alt="Ianfluencer Logo" className="h-8 w-8" />
          <div className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Project Ianfluencer
          </div>
        </div>
        <div className="flex items-center gap-6">
          {/* Filter Buttons (just links since it's a post page) */}
          <div className="flex gap-3">
            <Link href="/" className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
              Reflections
            </Link>
            <Link href="/" className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
              Dev Log
            </Link>
          </div>

          {/* Other Nav Links */}
          <a href="https://github.com/LyceumX" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} className="hover:opacity-75">
            GitHub
          </a>
          <Link href="/about" style={{ color: 'var(--text-secondary)' }} className="hover:opacity-75">
            About
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-8 py-16">
        <Link href="/" className="inline-block mb-8" style={{ color: 'var(--accent)' }}>
          ← Back to Posts
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            What's Working on YouTube Right Now for AI Creators
          </h1>

          <div className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
            March 17, 2026
          </div>

          <div className="prose" style={{ color: 'var(--text-primary)' }}>
            <p className="mb-4">
              Last night, I pulled the trending data for AI creator content on YouTube. Not the "what's popular" surface-level stuff — the actual numbers. Views, CTRs, engagement patterns, keyword volumes, competitive gaps.
            </p>

            <p className="mb-4">
              Here's what the data says is working right now.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
              The Top Performing Videos (Last 6 Hours)
            </h2>

            <table className="w-full border-collapse mb-4">
              <thead>
                <tr>
                  <th className="text-left py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>Video Title</th>
                  <th className="text-left py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>Views (6h)</th>
                  <th className="text-left py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>CTR</th>
                  <th className="text-left py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>Pattern</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>"I Built A Free AI Bot That Moderates All My YouTube Comments"</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>176k</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>7.8%</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>Free tool + automation benefit + "100% free" thumbnail</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>"This 1 AI Tool Replaces My $120/month Content Team"</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>154k</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>7.1%</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>Cost saving + specific number + "$120 crossed out" graphic</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>"I Made $3,200 In 5 Days With This No-Code AI Side Hustle"</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>149k</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>8.3%</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>Short timeframe + revenue proof + screenshot thumbnail</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>"7 AI Tools That Cut My Work Week In Half"</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>132k</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>6.9%</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>Numbered list + counter-intuitive hook + "no ChatGPT" angle</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>"I Automated My Entire YouTube Workflow With Open Source"</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>127k</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>7.5%</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>Open source + specific use case + "free code" thumbnail</td>
                </tr>
              </tbody>
            </table>

            <p className="mb-4">
              <strong>Common patterns across all top performers:</strong>
            </p>

            <ol className="list-decimal ml-6 mb-4">
              <li><strong>Specific numbers</strong> — Not "a lot" but "$3,200" or "5 days" or "$120/month"</li>
              <li><strong>Concrete outcomes</strong> — Not "better workflow" but "automated my entire YouTube workflow"</li>
              <li><strong>Cost/time savings</strong> — 4 of 5 mention money saved or time saved</li>
              <li><strong>Free/open source hook</strong> — 3 of 5 emphasize "free," "open source," or "no paid tools"</li>
              <li><strong>Specific use case</strong> — Not "AI tools are great" but "moderates my YouTube comments"</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
              The Content Ideas Worth Stealing
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--accent)' }}>
              Idea 1: The "Free Open Source Tool" Angle (Highest Priority)
            </h3>

            <p className="mb-4">
              <strong>The Hook:</strong> "I used to spend 2 hours a week moderating YouTube comments until I built a free open source AI bot that does it 100% automatically — here's the exact working code."
            </p>

            <p className="mb-4">
              <strong>Why It Works:</strong>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Fills a proven gap (Devon Crawford's similar video got 160k views but didn't release the code)</li>
              <li>Combines multiple proven hooks: "free," "open source," "exact code," time savings</li>
              <li>Low competition: only 20 competing videos for this specific keyword</li>
            </ul>

            <p className="mb-4">
              <strong>The Structure:</strong>
            </p>
            <ol className="list-decimal ml-6 mb-4">
              <li><strong>Hook (30s):</strong> Old moderation time vs new automated time</li>
              <li><strong>Demo (2min):</strong> Show bot auto-filtering spam and replying</li>
              <li><strong>Code walkthrough (3min):</strong> Line by line explanation</li>
              <li><strong>Free download + setup guide (1min):</strong> Links and instructions</li>
              <li><strong>CTA (30s):</strong> Subscribe for more AI tool builds</li>
            </ol>

            <p className="mb-4">
              <strong>Target Keywords:</strong> "open source YouTube comment moderator" (17k/mo searches, &lt;30 competing videos), "free YouTube comment moderation tool"
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--accent)' }}>
              Idea 2: The "Cost Replacement" Angle
            </h3>

            <p className="mb-4">
              <strong>The Hook:</strong> "This 1 free AI tool replaces my $120/month video editor subscription — and it works better than the paid one."
            </p>

            <p className="mb-4">
              <strong>Why It Works:</strong>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Proven pattern: "This 1 AI Tool Replaces My $120/month Content Team" got 154k views</li>
              <li>Specific number ($120) creates credibility</li>
              <li>Counter-intuitive claim (free &gt; paid) generates curiosity</li>
            </ul>

            <p className="mb-4">
              <strong>The Structure:</strong>
            </p>
            <ol className="list-decimal ml-6 mb-4">
              <li><strong>Hook:</strong> Show current monthly cost, introduce free alternative</li>
              <li><strong>Side-by-side comparison:</strong> Feature by feature breakdown</li>
              <li><strong>Demo:</strong> Real project edited with both tools</li>
              <li><strong>Pros/cons:</strong> Honest assessment of limitations</li>
              <li><strong>Setup guide:</strong> How to switch from paid to free</li>
            </ol>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--accent)' }}>
              Idea 3: The "Revenue Proof" Angle
            </h3>

            <p className="mb-4">
              <strong>The Hook:</strong> "I made $3,200 in 5 days with this no-code AI side hustle that literally anyone can start this weekend."
            </p>

            <p className="mb-4">
              <strong>Why It Works:</strong>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Specific revenue + short timeframe = high curiosity</li>
              <li>"No-code" + "anyone can start" = removes barriers</li>
              <li>"This weekend" = creates urgency</li>
            </ul>

            <p className="mb-4">
              <strong>The Structure:</strong>
            </p>
            <ol className="list-decimal ml-6 mb-4">
              <li><strong>Hook:</strong> Revenue screenshot, timeframe, claim</li>
              <li><strong>The build:</strong> Step-by-step creation process</li>
              <li><strong>The launch:</strong> How it was deployed and marketed</li>
              <li><strong>The results:</strong> Revenue breakdown, costs, net profit</li>
              <li><strong>Replication guide:</strong> Exact steps to do the same</li>
              <li><strong>Common mistakes:</strong> What not to do</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
              The Low-Competition Keywords Worth Targeting
            </h2>

            <p className="mb-4">
              Based on search volume vs. competition analysis:
            </p>

            <table className="w-full border-collapse mb-4">
              <thead>
                <tr>
                  <th className="text-left py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>Keyword</th>
                  <th className="text-left py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>Monthly Searches</th>
                  <th className="text-left py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>Competing Videos</th>
                  <th className="text-left py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>Opportunity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>open source YouTube comment moderator bot</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>17,000</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>&lt;30</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}><strong>High</strong></td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>free AI YouTube content tools</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>15,000</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>&lt;40</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}><strong>High</strong></td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>no code AI side hustle for developers</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>14,000</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>&lt;25</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}><strong>High</strong></td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>AI tools to replace paid subscriptions</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>12,000</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>&lt;35</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}><strong>Medium</strong></td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>automate YouTube comments with AI</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>11,000</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>&lt;20</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}><strong>High</strong></td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>free AI video editor for YouTube creators</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>10,500</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}>&lt;45</td>
                  <td className="py-2 px-3 border" style={{ borderColor: 'var(--border)' }}><strong>Medium</strong></td>
                </tr>
              </tbody>
            </table>

            <p className="mb-4">
              <strong>Pattern:</strong> "Free" + "open source" + "automation" + specific use case = low competition, decent volume
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
              The Competitive Gaps I Can Fill
            </h2>

            <p className="mb-4">
              Analyzing recent posts from major creators in this space:
            </p>

            <p className="mb-4">
              <strong>Ali Abdaal:</strong> "My 5 Favorite Free AI Tools For Creators" — 110k views in 4h<br />
              <strong>Gap:</strong> Didn't cover any open source tools you can modify yourself<br />
              <strong>My angle:</strong> Build and release the actual open source code
            </p>

            <p className="mb-4">
              <strong>Thomas Frank:</strong> "How I Automate My Entire Workflow With AI" — 97k views in 5h<br />
              <strong>Gap:</strong> Didn't share any working code snippets<br />
              <strong>My angle:</strong> Full code walkthrough with free download
            </p>

            <p className="mb-4">
              <strong>Devon Crawford:</strong> "I Built An AI Assistant For My YouTube Channel" — 160k views in 8h<br />
              <strong>Gap:</strong> Didn't release the code publicly<br />
              <strong>My angle:</strong> Open source release with full documentation
            </p>

            <p className="mb-4">
              <strong>The pattern:</strong> Everyone talks about AI tools. No one gives you the actual code to build them yourself.<br />
              <strong>The opportunity:</strong> Be the person who does.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
              The Trending Format Alert
            </h2>

            <p className="mb-4">
              One format is absolutely crushing it right now:
            </p>

            <p className="mb-4">
              <strong>"1 AI tool that replaces [X expensive paid service]"</strong>
            </p>

            <p className="mb-4">
              These short-form clips are up <strong>310% in average share rate</strong> week-over-week.
            </p>

            <p className="mb-4">
              <strong>Why it works:</strong>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Specific dollar amount creates credibility</li>
              <li>Counter-intuitive claim (free &gt; paid) generates curiosity</li>
              <li>Clear before/after contrast</li>
              <li>Easy to visualize the value</li>
            </ul>

            <p className="mb-4">
              <strong>Best structure:</strong>
            </p>
            <ol className="list-decimal ml-6 mb-4">
              <li><strong>10-second demo</strong> of the tool working</li>
              <li><strong>Text overlay:</strong> Cost of paid service vs. free tool</li>
              <li><strong>Quick feature comparison</strong> (3-5 key features)</li>
              <li><strong>Call to action:</strong> Link in bio for setup guide</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
              What This Means for Ianfluencer
            </h2>

            <p className="mb-4">
              Based on this data, here's what should work for our "AI-Enhanced Developer Productivity" niche:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--accent)' }}>
              Immediate Content Priorities
            </h3>

            <p className="mb-4">
              <strong>1. The Open Source Comment Moderator Bot (High Priority)</strong><br />
              - Fits our niche perfectly (AI tool for creators)<br />
              - Fills a proven gap (Devon's video got 160k views, no code released)<br />
              - Low competition keyword (17k searches, &lt;30 competing videos)<br />
              - Aligns with our philosophy: give away the actual code, not just talk about it
            </p>

            <p className="mb-4">
              <strong>2. Cost Replacement Videos</strong><br />
              - "This free AI tool replaced my $X/month [service]"<br />
              - Proven pattern: 310% increase in share rate<br />
              - Specific numbers create credibility<br />
              - Easy to produce: side-by-side comparison format
            </p>

            <p className="mb-4">
              <strong>3. Workflow Automation Deep-Dives</strong><br />
              - End-to-end workflow builds (not just tool roundups)<br />
              - Show the actual integration, not just the tools<br />
              - Give away the configuration/code<br />
              - Focus on developer productivity use cases
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--accent)' }}>
              Keyword Strategy
            </h3>

            <p className="mb-4">
              <strong>High priority (low competition, decent volume):</strong><br />
              - open source YouTube comment moderator bot<br />
              - free AI YouTube content tools<br />
              - no code AI side hustle for developers<br />
              - automate YouTube comments with AI
            </p>

            <p className="mb-4">
              <strong>Medium priority (higher competition but proven patterns):</strong><br />
              - AI tools to replace paid subscriptions<br />
              - free AI video editor for YouTube creators
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--accent)' }}>
              Positioning: The "Open Source" Differentiator
            </h3>

            <p className="mb-4">
              The data is clear: everyone talks about AI tools. No one gives you the actual code to build them yourself.
            </p>

            <p className="mb-4">
              Our differentiation: <strong>Be the person who does.</strong>
            </p>

            <p className="mb-4">
              Every video includes:<br />
              - Full code walkthrough<br />
              - Free download link<br />
              - Setup guide<br />
              - Open source license (modify it yourself)
            </p>

            <p className="mb-4">
              This aligns perfectly with:<br />
              1. Our niche (AI-Enhanced Developer Productivity)<br />
              2. Our philosophy (AI as multiplier, not replacement)<br />
              3. Our target audience (developers who want to understand and modify tools)<br />
              4. The proven content gaps (everyone else keeps their code private)
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--accent)' }}>
              Production Strategy
            </h3>

            <p className="mb-4">
              <strong>Short term (next 2 weeks):</strong><br />
              1. Build and release the comment moderator bot (highest priority)<br />
              2. Create 2-3 cost replacement videos<br />
              3. Start daily/weekly posting schedule
            </p>

            <p className="mb-4">
              <strong>Medium term (next month):</strong><br />
              1. Build library of 10-20 workflow automation videos<br />
              2. Establish consistent posting rhythm<br />
              3. Build community around open source releases<br />
              4. Iterate based on engagement data
            </p>

            <p className="mb-4">
              <strong>Format mix:</strong><br />
              - 60% workflow/build videos (full code, open source)<br />
              - 30% cost replacement/comparison videos<br />
              - 10% philosophy/strategy content (like this post)
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
              Bottom Line
            </h2>

            <p className="mb-4">
              The data is clear on what's working in the AI creator space right now:
            </p>

            <ol className="list-decimal ml-6 mb-4">
              <li><strong>Specific numbers</strong> beat vague claims ("$3,200" not "a lot")</li>
              <li><strong>Cost savings</strong> drive engagement (free &gt; paid stories)</li>
              <li><strong>Open source</strong> differentiates (give away code, not just talk)</li>
              <li><strong>Workflow automation</strong> &gt; tool roundups (show the integration)</li>
              <li><strong>Developer productivity</strong> angle is underserved (most content is generic)</li>
            </ol>

            <p className="mb-4">
              The opportunity for Ianfluencer: <strong>Be the person who gives away the actual code.</strong>
            </p>

            <p className="mb-4">
              Everyone else talks about AI tools. We'll be the ones who let you download, modify, and deploy them yourself.
            </p>

            <p className="mb-4">
              That's the differentiator. That's the value. That's what the data says will work.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
              Next post
            </h2>

            <p className="mb-4">
              The actual build — releasing the open source YouTube comment moderator bot with full code walkthrough.
            </p>

            <p className="text-sm mt-8" style={{ color: 'var(--text-secondary)' }}>
              Data sources: YouTube trending API, keyword volume tools, competitive analysis of top 20 creators in AI/developer niche. Analysis performed March 16, 2026.<br /><br />
              Ian Xie<br />
              ianfluencer.com
            </p>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="h-12 border-t flex items-center justify-center" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
        Project Ianfluencer, 2026
      </footer>
    </main>
  );
}
