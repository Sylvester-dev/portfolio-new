export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a AI Voice Assistant",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Smart ESG Compliance Assistant",
    des: "Automated ESG reports and risk insights powered by AI — built for modern sustainability teams.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.wequity.app/",
  },
  {
    id: 2,
    title: "Childcare Intelligence Platform",
    des: "Real-time access to childcare data and dashboards tailored for policymakers and local governments.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://allupfront.com/",
  },
  {
    id: 3,
    title: "Solar proposal and design tool with HD map integration",
    des: "A dynamic tool for generating interactive solar proposals with HD maps and system layouts.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://pipe.solar/",
  },
  {
    id: 4,
    title: "Warehouse & Storage Marketplace",
    des: "A seamless B2B platform connecting businesses to flexible, verified storage providers.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://www.storoo.in/",
  },
  {
    id: 5,
    title: "Art Industry Talent Network",
    des: "A curated hiring platform helping studios and galleries connect with creative professionals.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://lanced.app/",
  },
  {
    id: 6,
    title: "AI Finance Match",
    des: "Smart consultant-matching for finance teams — powered by AI, tailored for results.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://yourchartered.ai",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Vineet was a game-changer. He understood the complexity of ESG compliance and built a platform that made reporting and analysis 10x faster. We now rely on it daily.",
    name: "",
    title: "",
  },
  {
    quote:
      "We needed a data hub that both parents and policymakers could use. Vineet nailed it. The live dashboards and search features are exactly what we needed — intuitive, reliable, and fast..",
    name: "",
    title: "",
  },
  {
    quote:
      "From the first demo, it was clear Vineet knew what he was doing. The solar proposal tool not only looks amazing but saves our sales team hours every week.",
    name: "",
    title: "",
  },
  {
    quote:
      "Vineet helped us launch a B2B marketplace in record time. The platform is slick, scalable, and our partners love the experience. Couldn’t have asked for better.",
    name: "",
    title: "",
  },
  {
    quote:
      "Collaborating with Vineet was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Vineet enthusiasm for every facet of development truly stands out. If you're seeking to build software, Vineet is the ideal partner.",
    name: "",
    title: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance No-Code Developer",
    desc: "Built full-scale web apps using Bubble for startups across finance, solar, and B2B marketplaces.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "AI Automation Consultant",
    desc: "Integrated OpenAI and automation workflows into client platforms to reduce manual tasks by 60%.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Product Engineer",
    desc: "Developed an AI-powered ESG compliance tool used by enterprises to streamline reporting and audits.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Sylvester-dev",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/MadebyVineet",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/vineet-linked/",
  },
];
