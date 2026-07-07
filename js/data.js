const toolsData = [
  // === CHATBOTS ===
  {
    id: 1, name: "ChatGPT", tagline: "The world's most popular AI assistant",
    description: "OpenAI's flagship conversational AI. Write code, analyze data, draft emails, and brainstorm ideas with GPT-4o — the most capable model yet.",
    category: "chatbot", pricing: "Freemium", pricingStart: "Free",
    rating: 4.9, reviews: 48200, url: "https://chat.openai.com",
    icon: "🤖", featured: true, badge: "🔥 Hot", affiliate: true,
    tags: ["GPT-4", "Code", "Writing", "Analysis"]
  },
  {
    id: 2, name: "Claude", tagline: "Anthropic's thoughtful AI companion",
    description: "Claude excels at nuanced writing, analysis, and long-context tasks with a 200K token window. Great for documents and research.",
    category: "chatbot", pricing: "Freemium", pricingStart: "Free",
    rating: 4.8, reviews: 31400, url: "https://claude.ai",
    icon: "🧠", featured: true, badge: "⭐ Top Pick", affiliate: true,
    tags: ["Long Context", "Writing", "Research", "Safe AI"]
  },
  {
    id: 3, name: "Gemini Ultra", tagline: "Google's most capable multimodal AI",
    description: "Google's best AI with deep Workspace integration. Analyze images, generate code, and get real-time Google Search answers.",
    category: "chatbot", pricing: "Freemium", pricingStart: "Free",
    rating: 4.7, reviews: 22100, url: "https://gemini.google.com",
    icon: "✨", featured: false, badge: "🆕 New", affiliate: false,
    tags: ["Multimodal", "Google", "Real-time", "Images"]
  },
  {
    id: 4, name: "Perplexity AI", tagline: "Real-time AI search with citations",
    description: "AI-powered search engine that delivers instant answers with cited sources. Perfect for research and staying up to date.",
    category: "chatbot", pricing: "Freemium", pricingStart: "Free",
    rating: 4.7, reviews: 18900, url: "https://perplexity.ai",
    icon: "🔍", featured: false, badge: "🔥 Hot", affiliate: true,
    tags: ["Search", "Citations", "Research", "Real-time"]
  },
  {
    id: 5, name: "Microsoft Copilot", tagline: "AI built into Microsoft 365",
    description: "AI assistant deeply integrated across Word, Excel, Teams, and Outlook. Summarize meetings and generate reports automatically.",
    category: "chatbot", pricing: "Freemium", pricingStart: "Free",
    rating: 4.5, reviews: 19300, url: "https://copilot.microsoft.com",
    icon: "💼", featured: false, badge: "💎 Popular", affiliate: false,
    tags: ["Microsoft", "Office", "Teams", "Enterprise"]
  },

  // === IMAGE GENERATION ===
  {
    id: 6, name: "Midjourney", tagline: "World's #1 AI art generator",
    description: "Create breathtaking, photorealistic and artistic images from text prompts. The go-to tool for designers, artists, and creatives worldwide.",
    category: "image", pricing: "Paid", pricingStart: "$10/mo",
    rating: 4.9, reviews: 56700, url: "https://midjourney.com",
    icon: "🎨", featured: true, badge: "🔥 Hot", affiliate: true,
    tags: ["Art", "Photorealistic", "Design", "Creative"]
  },
  {
    id: 7, name: "DALL-E 3", tagline: "OpenAI's precision image creator",
    description: "Generate highly detailed, prompt-accurate images. Best for creating images with specific details and text. Accessible via ChatGPT Plus.",
    category: "image", pricing: "Freemium", pricingStart: "Free",
    rating: 4.7, reviews: 24500, url: "https://openai.com/dall-e-3",
    icon: "🖼️", featured: false, badge: "💎 Popular", affiliate: false,
    tags: ["OpenAI", "Photorealistic", "ChatGPT", "Detailed"]
  },
  {
    id: 8, name: "Adobe Firefly", tagline: "Commercial-safe AI image generation",
    description: "100% commercially safe images by Adobe. Natively integrated into Photoshop and Illustrator for professional creative workflows.",
    category: "image", pricing: "Freemium", pricingStart: "Free",
    rating: 4.6, reviews: 17800, url: "https://firefly.adobe.com",
    icon: "🔥", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["Adobe", "Commercial", "Photoshop", "Safe"]
  },
  {
    id: 9, name: "Ideogram", tagline: "AI images with perfect text",
    description: "The only AI image generator that reliably renders readable text. Perfect for logos, posters, social media, and branded content.",
    category: "image", pricing: "Freemium", pricingStart: "Free",
    rating: 4.7, reviews: 13200, url: "https://ideogram.ai",
    icon: "💡", featured: false, badge: "🆕 New", affiliate: true,
    tags: ["Text in Images", "Logos", "Design", "Branding"]
  },
  {
    id: 10, name: "Leonardo AI", tagline: "AI art for game & creative assets",
    description: "Generate game assets, concept art, and character designs. Features ControlNet, fine-tuned models, and consistent character generation.",
    category: "image", pricing: "Freemium", pricingStart: "Free",
    rating: 4.6, reviews: 21000, url: "https://leonardo.ai",
    icon: "🦁", featured: false, badge: "🔥 Hot", affiliate: true,
    tags: ["Game Assets", "Characters", "ControlNet", "Art"]
  },
  {
    id: 11, name: "Flux AI", tagline: "Next-gen open-source image model",
    description: "Black Forest Labs' powerful image model rivaling Midjourney. Exceptional prompt adherence, detail, and photorealism.",
    category: "image", pricing: "Freemium", pricingStart: "Free",
    rating: 4.8, reviews: 9800, url: "https://blackforestlabs.ai",
    icon: "⚡", featured: false, badge: "🆕 New", affiliate: false,
    tags: ["Open Source", "Photorealistic", "Fast", "Detailed"]
  },

  // === VIDEO AI ===
  {
    id: 12, name: "Runway ML", tagline: "Hollywood-grade AI video generation",
    description: "Gen-3 Alpha creates cinematic AI videos from text or images. Industry standard for filmmakers, YouTubers, and creative studios.",
    category: "video", pricing: "Freemium", pricingStart: "Free",
    rating: 4.8, reviews: 28900, url: "https://runwayml.com",
    icon: "🎬", featured: true, badge: "🔥 Hot", affiliate: true,
    tags: ["Text-to-Video", "Cinematic", "Creative", "Effects"]
  },
  {
    id: 13, name: "HeyGen", tagline: "Create videos with realistic AI avatars",
    description: "Professional AI avatar videos in 175+ languages. Perfect for marketing, training, and corporate communications without a camera.",
    category: "video", pricing: "Freemium", pricingStart: "Free",
    rating: 4.7, reviews: 19200, url: "https://heygen.com",
    icon: "👤", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["Avatar", "Multilingual", "Marketing", "Corporate"]
  },
  {
    id: 14, name: "Kling AI", tagline: "Hyper-realistic video from text",
    description: "Kuaishou's powerful video generation AI produces smooth, realistic motion. Excellent for product showcases and cinematic scenes.",
    category: "video", pricing: "Freemium", pricingStart: "Free",
    rating: 4.7, reviews: 11400, url: "https://klingai.com",
    icon: "🌊", featured: false, badge: "🔥 Hot", affiliate: false,
    tags: ["Text-to-Video", "Realistic", "Motion", "Cinematic"]
  },
  {
    id: 15, name: "Pika Labs", tagline: "Instantly animate your ideas",
    description: "Create and edit videos from text, images, or existing footage. Easy-to-use interface with style controls and lip-sync.",
    category: "video", pricing: "Freemium", pricingStart: "Free",
    rating: 4.5, reviews: 14300, url: "https://pika.art",
    icon: "🎥", featured: false, badge: "🆕 New", affiliate: false,
    tags: ["Animation", "Editing", "Lip-sync", "Easy"]
  },
  {
    id: 16, name: "Synthesia", tagline: "AI video creation at enterprise scale",
    description: "Create professional training and explainer videos with 160+ AI avatars in 130+ languages — no camera or studio needed.",
    category: "video", pricing: "Paid", pricingStart: "$22/mo",
    rating: 4.6, reviews: 16700, url: "https://synthesia.io",
    icon: "🎭", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["Enterprise", "Training", "Avatars", "Multilingual"]
  },

  // === WRITING & CONTENT ===
  {
    id: 17, name: "Jasper AI", tagline: "Enterprise AI content platform",
    description: "Write marketing copy, blogs, ads, and social content at scale. Features brand voice training and team collaboration tools.",
    category: "writing", pricing: "Paid", pricingStart: "$49/mo",
    rating: 4.6, reviews: 22400, url: "https://jasper.ai",
    icon: "✍️", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["Marketing", "Copywriting", "SEO", "Brand Voice"]
  },
  {
    id: 18, name: "Copy.ai", tagline: "AI copywriting in seconds",
    description: "Generate marketing copy, product descriptions, and sales emails with 90+ templates. Free plan with unlimited words.",
    category: "writing", pricing: "Freemium", pricingStart: "Free",
    rating: 4.5, reviews: 18900, url: "https://copy.ai",
    icon: "📝", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["Copywriting", "Templates", "Marketing", "Free"]
  },
  {
    id: 19, name: "Grammarly", tagline: "AI writing assistant trusted by 30M+",
    description: "Real-time grammar, spelling, style, and tone suggestions. Works everywhere — Google Docs, Gmail, Slack, and more.",
    category: "writing", pricing: "Freemium", pricingStart: "Free",
    rating: 4.7, reviews: 67800, url: "https://grammarly.com",
    icon: "✅", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["Grammar", "Editing", "Tone", "Browser Extension"]
  },
  {
    id: 20, name: "QuillBot", tagline: "Paraphrase and summarize with AI",
    description: "The most popular AI paraphrasing tool. Rewrite sentences, summarize documents, and improve your writing style instantly.",
    category: "writing", pricing: "Freemium", pricingStart: "Free",
    rating: 4.5, reviews: 43200, url: "https://quillbot.com",
    icon: "🪶", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["Paraphrase", "Summarize", "Student", "Academic"]
  },
  {
    id: 21, name: "Writesonic", tagline: "SEO-optimized AI content writer",
    description: "Create SEO blog posts, social media content, and ads with AI. Features Chatsonic with real-time web access.",
    category: "writing", pricing: "Freemium", pricingStart: "Free",
    rating: 4.5, reviews: 15600, url: "https://writesonic.com",
    icon: "📄", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["SEO", "Blog", "Social Media", "Real-time Web"]
  },

  // === AUDIO & MUSIC ===
  {
    id: 22, name: "ElevenLabs", tagline: "Most realistic AI voice on earth",
    description: "Generate ultra-realistic AI voiceovers in 29 languages. Clone any voice with just 1 minute of audio. Used by Netflix and Spotify.",
    category: "audio", pricing: "Freemium", pricingStart: "Free",
    rating: 4.9, reviews: 34100, url: "https://elevenlabs.io",
    icon: "🎙️", featured: true, badge: "🔥 Hot", affiliate: true,
    tags: ["Voice Clone", "Multilingual", "Podcast", "Audiobook"]
  },
  {
    id: 23, name: "Suno AI", tagline: "Full songs from a text prompt",
    description: "Generate complete songs with lyrics, melody, and full production in any genre in under 30 seconds. No musical skills required.",
    category: "audio", pricing: "Freemium", pricingStart: "Free",
    rating: 4.8, reviews: 22700, url: "https://suno.ai",
    icon: "🎵", featured: false, badge: "🔥 Hot", affiliate: false,
    tags: ["Music Generation", "Lyrics", "Any Genre", "Fast"]
  },
  {
    id: 24, name: "Udio", tagline: "Studio-quality AI music creator",
    description: "Generate, remix, and extend tracks in any musical style. Produces radio-quality music with stunning instrumental detail.",
    category: "audio", pricing: "Freemium", pricingStart: "Free",
    rating: 4.6, reviews: 11300, url: "https://udio.com",
    icon: "🎶", featured: false, badge: "🆕 New", affiliate: false,
    tags: ["Music", "Remix", "Instrumental", "Studio Quality"]
  },
  {
    id: 25, name: "Mubert", tagline: "Royalty-free AI music for creators",
    description: "Generate royalty-free background music tailored to your content duration and mood. API available for developers.",
    category: "audio", pricing: "Freemium", pricingStart: "Free",
    rating: 4.4, reviews: 8900, url: "https://mubert.com",
    icon: "🎼", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["Royalty-free", "Background Music", "API", "Content"]
  },

  // === CODING ===
  {
    id: 26, name: "GitHub Copilot", tagline: "The original AI pair programmer",
    description: "AI coding assistant by GitHub & OpenAI. Autocomplete, explain code, fix bugs, and generate tests in 70+ languages.",
    category: "coding", pricing: "Paid", pricingStart: "$10/mo",
    rating: 4.8, reviews: 89200, url: "https://github.com/features/copilot",
    icon: "💻", featured: true, badge: "💎 Popular", affiliate: true,
    tags: ["Autocomplete", "Multi-language", "VS Code", "JetBrains"]
  },
  {
    id: 27, name: "Cursor", tagline: "The AI-first code editor",
    description: "VS Code fork rebuilt for AI. Chat with your codebase, apply multi-file edits, and generate entire features with natural language.",
    category: "coding", pricing: "Freemium", pricingStart: "Free",
    rating: 4.9, reviews: 31400, url: "https://cursor.sh",
    icon: "⌨️", featured: false, badge: "🔥 Hot", affiliate: false,
    tags: ["VS Code", "Chat with Code", "Multi-file", "Fast"]
  },
  {
    id: 28, name: "Bolt.new", tagline: "Build full-stack apps by chatting",
    description: "Prompt, run, edit, and deploy full-stack web applications directly in your browser. No setup or local environment needed.",
    category: "coding", pricing: "Freemium", pricingStart: "Free",
    rating: 4.7, reviews: 18600, url: "https://bolt.new",
    icon: "⚡", featured: false, badge: "🔥 Hot", affiliate: false,
    tags: ["No-code", "Full-stack", "Browser", "Deploy"]
  },
  {
    id: 29, name: "Replit AI", tagline: "Code, build, and deploy in the cloud",
    description: "Browser-based IDE with built-in AI. Build and deploy full-stack apps without any local setup. Great for beginners.",
    category: "coding", pricing: "Freemium", pricingStart: "Free",
    rating: 4.5, reviews: 24300, url: "https://replit.com",
    icon: "🔄", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["Browser IDE", "Hosting", "Collaboration", "Beginner"]
  },
  {
    id: 30, name: "Codeium", tagline: "Free AI code completion forever",
    description: "Completely free AI coding assistant with autocomplete for 70+ languages. Works in 40+ IDEs including VS Code and JetBrains.",
    category: "coding", pricing: "Free", pricingStart: "Free",
    rating: 4.6, reviews: 15800, url: "https://codeium.com",
    icon: "🆓", featured: false, badge: "💎 Popular", affiliate: false,
    tags: ["Free", "70+ Languages", "VS Code", "JetBrains"]
  },

  // === PRODUCTIVITY ===
  {
    id: 31, name: "Notion AI", tagline: "AI built into your second brain",
    description: "AI assistance natively inside Notion. Summarize pages, generate content, auto-fill databases, and translate — without switching tabs.",
    category: "productivity", pricing: "Freemium", pricingStart: "Free",
    rating: 4.6, reviews: 38900, url: "https://notion.so",
    icon: "📓", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["Notes", "Database", "Summarize", "Workspace"]
  },
  {
    id: 32, name: "Fireflies.ai", tagline: "AI notetaker for every meeting",
    description: "Automatically records, transcribes, and summarizes meetings on Zoom, Teams, and Meet. Search your meeting history in seconds.",
    category: "productivity", pricing: "Freemium", pricingStart: "Free",
    rating: 4.7, reviews: 21200, url: "https://fireflies.ai",
    icon: "🦋", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["Meeting", "Transcription", "Zoom", "Teams"]
  },
  {
    id: 33, name: "Otter.ai", tagline: "Live AI meeting transcription",
    description: "Real-time transcription with speaker identification. Works with Zoom, Google Meet, and Microsoft Teams. 95%+ accuracy.",
    category: "productivity", pricing: "Freemium", pricingStart: "Free",
    rating: 4.6, reviews: 17400, url: "https://otter.ai",
    icon: "🦦", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["Transcription", "Real-time", "Speaker ID", "Meetings"]
  },
  {
    id: 34, name: "Motion", tagline: "AI that plans your entire workday",
    description: "AI automatically schedules your tasks, meetings, and projects into your calendar. Always know what to work on next.",
    category: "productivity", pricing: "Paid", pricingStart: "$19/mo",
    rating: 4.5, reviews: 9800, url: "https://usemotion.com",
    icon: "🗓️", featured: false, badge: "🆕 New", affiliate: true,
    tags: ["Scheduling", "Calendar", "Tasks", "Time Management"]
  },

  // === SEO & MARKETING ===
  {
    id: 35, name: "Surfer SEO", tagline: "Rank faster with AI content optimization",
    description: "Analyze top-ranking pages, optimize your content score, and build topic clusters with AI. The #1 on-page SEO tool.",
    category: "seo", pricing: "Paid", pricingStart: "$89/mo",
    rating: 4.7, reviews: 24600, url: "https://surferseo.com",
    icon: "🏄", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["On-page SEO", "Content Score", "Keywords", "SERP"]
  },
  {
    id: 36, name: "Semrush", tagline: "All-in-one AI marketing toolkit",
    description: "The ultimate SEO and marketing platform. Keyword research, competitor analysis, backlink audit, and AI content writing.",
    category: "seo", pricing: "Paid", pricingStart: "$139/mo",
    rating: 4.7, reviews: 41200, url: "https://semrush.com",
    icon: "📊", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["SEO", "Competitor Analysis", "Keywords", "Backlinks"]
  },
  {
    id: 37, name: "AdCreative.ai", tagline: "AI ad creatives that convert",
    description: "Generate conversion-optimized ad banners and social media creatives with AI. Proven to deliver 14x better CTR than human-made ads.",
    category: "seo", pricing: "Paid", pricingStart: "$29/mo",
    rating: 4.6, reviews: 12300, url: "https://adcreative.ai",
    icon: "📣", featured: false, badge: "🔥 Hot", affiliate: true,
    tags: ["Ad Creatives", "Social Media", "CTR", "Design"]
  },
  {
    id: 38, name: "Pictory", tagline: "Turn articles into viral videos",
    description: "Automatically convert blog posts, scripts, and articles into professional short videos for YouTube, TikTok, and Instagram.",
    category: "seo", pricing: "Freemium", pricingStart: "Free",
    rating: 4.5, reviews: 9700, url: "https://pictory.ai",
    icon: "🎞️", featured: false, badge: "💎 Popular", affiliate: true,
    tags: ["Blog to Video", "Social Media", "Repurpose", "YouTube"]
  },
];

const categories = [
  { id: "all", label: "🌐 All Tools", count: toolsData.length },
  { id: "chatbot", label: "🤖 Chatbots", count: toolsData.filter(t => t.category === "chatbot").length },
  { id: "image", label: "🎨 Image AI", count: toolsData.filter(t => t.category === "image").length },
  { id: "video", label: "🎬 Video AI", count: toolsData.filter(t => t.category === "video").length },
  { id: "writing", label: "✍️ Writing", count: toolsData.filter(t => t.category === "writing").length },
  { id: "audio", label: "🎵 Audio & Music", count: toolsData.filter(t => t.category === "audio").length },
  { id: "coding", label: "💻 Coding", count: toolsData.filter(t => t.category === "coding").length },
  { id: "productivity", label: "⚡ Productivity", count: toolsData.filter(t => t.category === "productivity").length },
  { id: "seo", label: "📈 SEO & Marketing", count: toolsData.filter(t => t.category === "seo").length },
];
