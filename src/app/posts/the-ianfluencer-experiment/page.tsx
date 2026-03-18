import Link from "next/link";
import Header from "../../../components/Header";

export default function ManifestoPostPage() {
  const categoryColor = "#3B82F6"; // Reflections color

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="max-w-3xl mx-auto px-8 py-16">
        <Link href="/" className="inline-block mb-8" style={{ color: categoryColor }}>
          ← Back to Posts
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-4" style={{ color: categoryColor }}>
            The Ianfluencer Experiment
          </h1>

          <div className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
            March 16, 2026
          </div>

          <div className="prose" style={{ color: 'var(--text-primary)' }}>
            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
              Building in Public at the Intersection of AI and Human Expertise
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: categoryColor }}>
              The Question That Started It
            </h3>

            <p className="mb-4">
              A few weeks ago, I found myself in a conversation that I've had dozens of times before. A senior engineer friend — brilliant, experienced, the kind of person you want on your most critical projects — confessed something that surprised me.
            </p>

            <p className="mb-4">
              "I'm falling behind," they said. "Not because I'm not working hard. I'm working harder than ever. But the pace of AI tooling... I can't keep up. And I'm terrified that if I start relying on these tools, I'll stop actually <em>thinking</em>."
            </p>

            <p className="mb-4">
              This wasn't imposter syndrome. This was a genuine dilemma with no clear answer.
            </p>

            <p className="mb-4">
              The AI tooling landscape is exploding. Every week brings a new "game-changing" model, IDE extension, or workflow automation tool. The hype is deafening. The fear is palpable. And the practical guidance for how to actually integrate these tools into a sustainable, skill-preserving workflow?
            </p>

            <p className="mb-4">
              Crickets.
            </p>

            <p className="mb-4">
              Most content falls into one of two unhelpful extremes:
            </p>

            <p className="mb-4">
              <strong>The AI Cheerleaders</strong> breathlessly announce that "AI will change everything" and that developers who don't adapt will be left behind. They showcase impressive demos but offer little practical guidance for how to actually work with these tools day-to-day. They're selling a vision of the future, not a workflow for today.
            </p>

            <p className="mb-4">
              <strong>The AI Skeptics</strong> dismiss the entire wave as overhyped nonsense, insisting that "real programmers" don't need AI assistance. They warn of skill atrophy and dependency, painting a picture of developers becoming helpless without their AI crutches. They're defending an idealized past, not engaging with the present reality.
            </p>

            <p className="mb-4">
              Both miss the point. The question isn't whether AI tools are "good" or "bad." It's not about choosing sides in some ideological battle. The question is: <strong>How do we integrate these powerful tools into our workflows in a way that amplifies our capabilities without eroding our expertise?</strong>
            </p>

            <p className="mb-4">
              This is the question that Ianfluencer exists to explore.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: categoryColor }}>
              The Experiment
            </h3>

            <p className="mb-4">
              Ianfluencer is a multi-faceted experiment in public learning, multi-agent collaboration, and sustainable content creation. It's an attempt to answer that core question — how to thrive as a developer in the age of AI — by actually building something in public, with all the messiness and iteration that entails.
            </p>

            <p className="mb-4">
              At its heart, Ianfluencer has three interlocking goals:
            </p>

            <h4 className="text-lg font-semibold mt-5 mb-2" style={{ color: categoryColor }}>
              1. To Create Valuable Content
            </h4>

            <p className="mb-4">
              The primary output of Ianfluencer is practical, substantive content for developers navigating the AI tooling landscape. This means:
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li>Rigorous technical evaluations of AI tools, measuring actual productivity gains rather than just listing features</li>
              <li>End-to-end workflow designs that integrate AI tools into sustainable, skill-preserving systems</li>
              <li>Honest analysis of limitations and trade-offs, including explicit discussions of where AI tools fall short</li>
              <li>Long-term skill development strategies that help developers maintain and deepen their expertise alongside AI adoption</li>
            </ul>

            <p className="mb-4">
              The content follows five core pillars:
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li><strong>AI Tool Deep-Dives:</strong> Comprehensive technical evaluations and comparisons</li>
              <li><strong>Workflow & Productivity Systems:</strong> End-to-end workflow design and optimization</li>
              <li><strong>Strategic & Organizational AI:</strong> Leadership-level decision-making frameworks</li>
              <li><strong>Human-Centered AI Philosophy:</strong> Maintaining human expertise alongside AI adoption</li>
              <li><strong>Career & Skill Development:</strong> Long-term career navigation with AI fluency</li>
            </ul>

            <h4 className="text-lg font-semibold mt-5 mb-2" style={{ color: categoryColor }}>
              2. To Model a New Kind of Content Creation Workflow
            </h4>

            <p className="mb-4">
              Ianfluencer is also an experiment in using AI tools to create content <em>about</em> AI tools — but doing so in a way that's transparent, sustainable, and additive rather than extractive.
            </p>

            <p className="mb-4">
              The project uses a multi-agent team (Codi, Desi, Rity, Mani) coordinated through a structured workflow. This isn't about replacing human creativity with AI generation. It's about using AI tools to amplify human capabilities — handling research, organization, and synthesis so that the human (me) can focus on judgment, framing, and voice.
            </p>

            <p className="mb-4">
              The goal is to model a sustainable approach to content creation in the age of AI — one that uses these powerful tools responsibly and transparently.
            </p>

            <h4 className="text-lg font-semibold mt-5 mb-2" style={{ color: categoryColor }}>
              3. To Learn in Public
            </h4>

            <p className="mb-4">
              Finally, Ianfluencer is an exercise in learning in public. I'm figuring this out as I go — experimenting with tools, iterating on workflows, discovering what works and what doesn't. Rather than waiting until I have it all figured out to start sharing, I'm building in public, with all the false starts, course corrections, and gradual refinements that entails.
            </p>

            <p className="mb-4">
              This serves two purposes. First, it keeps me accountable — when you say you're going to do something publicly, you're more likely to follow through. Second, the process itself is valuable — seeing how someone navigates the learning curve, makes decisions, and iterates based on feedback is often more instructive than polished final products.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: categoryColor }}>
              The Philosophy
            </h3>

            <p className="mb-4">
              At its core, Ianfluencer is built on a few foundational beliefs about the future of work, learning, and creativity in the age of AI:
            </p>

            <h4 className="text-lg font-semibold mt-5 mb-2" style={{ color: categoryColor }}>
              1. AI is a Multiplier, Not a Replacement
            </h4>

            <p className="mb-4">
              The goal isn't to use AI to do less thinking. It's to use AI to handle routine cognitive tasks — research, organization, synthesis, pattern recognition — so that humans can focus on higher-order work: judgment, framing, creative problem-solving, and meaningful communication.
            </p>

            <h4 className="text-lg font-semibold mt-5 mb-2" style={{ color: categoryColor }}>
              2. Sustainability Beats Virality
            </h4>

            <p className="mb-4">
              The goal isn't to create content that blows up once and then fades. It's to build a sustainable practice — a system that produces valuable work consistently over time, compounding in value and audience as it goes.
            </p>

            <h4 className="text-lg font-semibold mt-5 mb-2" style={{ color: categoryColor }}>
              3. Transparency Builds Trust
            </h4>

            <p className="mb-4">
              In an era of AI-generated content flooding every channel, transparency is a differentiator. Being clear about how content is made — what tools are used, what the process looks like, where human judgment enters — builds trust with an audience that's increasingly skeptical of generic, AI-slop content.
            </p>

            <h4 className="text-lg font-semibold mt-5 mb-2" style={{ color: categoryColor }}>
              4. Systems Beat Goals
            </h4>

            <p className="mb-4">
              Rather than focusing on outcome goals ("get 10,000 subscribers"), the focus is on system goals ("publish one substantive piece per week"). You can't directly control outcomes, but you can control the systems that lead to outcomes — and over time, good systems produce good outcomes.
            </p>

            <h4 className="text-lg font-semibold mt-5 mb-2" style={{ color: categoryColor }}>
              5. Learning is the Product
            </h4>

            <p className="mb-4">
              In a world where information is commoditized, the value isn't in <em>having</em> information — it's in <em>synthesizing</em> information, drawing connections, developing insights, and communicating those insights clearly. The learning process itself — the questions asked, the paths explored, the conclusions drawn — is the value being created.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: categoryColor }}>
              What to Expect
            </h3>

            <p className="mb-4">
              If you follow along with Ianfluencer, here's what you can expect:
            </p>

            <h4 className="text-lg font-semibold mt-5 mb-2" style={{ color: categoryColor }}>
              Substantive, Practical Content
            </h4>

            <p className="mb-4">
              Not clickbait. Not surface-level "listicles." Not breathless hype about the latest AI tool. Real, substantive content that helps you make better decisions about AI tooling and integrate those tools into sustainable, skill-preserving workflows.
            </p>

            <h4 className="text-lg font-semibold mt-5 mb-2" style={{ color: categoryColor }}>
              Transparency About Process
            </h4>

            <p className="mb-4">
              I'll be clear about how content is made, what tools are used, and where human judgment enters the process. No pretending AI-generated content is human-written. No hiding the role of AI tools in the creation process. Full transparency.
            </p>

            <h4 className="text-lg font-semibold mt-5 mb-2" style={{ color: categoryColor }}>
              Iteration and Improvement
            </h4>

            <p className="mb-4">
              The early content will be rougher. The systems will be less refined. Over time, both will improve — and you'll see that improvement happening in real-time, with explanations of what's being changed and why.
            </p>

            <h4 className="text-lg font-semibold mt-5 mb-2" style={{ color: categoryColor }}>
              Community and Conversation
            </h4>

            <p className="mb-4">
              This isn't a broadcast — it's a conversation. I want to hear from you: what's working, what's not, what questions you have, what topics you want covered. The content will evolve based on that feedback.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: categoryColor }}>
              The Invitation
            </h3>

            <p className="mb-4">
              If you've read this far, you're probably the kind of person Ianfluencer is for: a developer who's trying to navigate the AI tooling landscape without losing your edge. Someone who wants to use these powerful tools to amplify your capabilities, not replace your judgment. Someone who cares about sustainable skill development, not just short-term productivity hacks.
            </p>

            <p className="mb-4">
              If that sounds like you, I invite you to follow along. Watch the experiment unfold. See what works and what doesn't. Learn from the mistakes and the breakthroughs. And hopefully, pick up some insights that help you navigate your own path through the AI tooling landscape.
            </p>

            <p className="mb-4">
              The next post will be the first substantive piece of content — a deep dive into a specific AI tool or workflow. Until then, thanks for reading, and welcome to the experiment.
            </p>

            <p className="text-sm mt-8" style={{ color: 'var(--text-secondary)' }}>
              Ian Xie<br />
              March 16, 2026<br />
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
