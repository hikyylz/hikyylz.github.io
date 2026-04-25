const githubUsername = "hikyylz";
const featuredProjectNames = [
  "Book-Based-Story-Producer",
  "JokesApp-ASP.NET-core",
  "Python-Diabet-Probability-Calculator-Software",
  "Book_seperable_reading_project",
  "Axiom---Intellectual-Arbitrage-Engine",
  "Face-Detection-and-Alignment-ML-Project",
  "Web-Scraping-with-Scrapy",
  "TinderCloneLBTA"
];

const projectTopics = {
  "book-based-story-producer": {
    tr: "AI destekli web uygulamasi",
    en: "AI-powered web application"
  },
  "jokesapp-asp.net-core": {
    tr: "Web uygulamasi",
    en: "Web application"
  },
  "python-diabet-probability-calculator-software": {
    tr: "AI / veri bilimi projesi",
    en: "AI / data science project"
  },
  "book_seperable_reading_project": {
    tr: "NLP ve metin isleme projesi",
    en: "NLP and text processing project"
  },
  "axiom---intellectual-arbitrage-engine": {
    tr: "Finansal analiz ve AI projesi",
    en: "Financial analytics and AI project"
  },
  "face-detection-and-alignment-ml-project": {
    tr: "Bilgisayarli goru projesi",
    en: "Computer vision project"
  },
  "web-scraping-with-scrapy": {
    tr: "Veri kazima otomasyonu",
    en: "Web scraping automation"
  },
  tinderclonelbta: {
    tr: "Mobil uygulama",
    en: "Mobile application"
  }
};

const content = {
  tr: {
    pageTitle: "Kaan Yildiz | Veri Bilimi Yuksek Lisans Ogrencisi",
    pageDescription:
      "RWTH Aachen'da Veri Bilimi yuksek lisans ogrencisi Kaan Yildiz'in kisisel web sitesi ve GitHub projeleri.",
    langButton: "EN",
    nav: {
      about: "Hakkimda",
      experience: "Egitim",
      skills: "Yetenekler",
      projects: "Projeler",
      contact: "Iletisim"
    },
    hero: {
      eyebrow: "RWTH Aachen - Data Science MSc",
      title: "Merhaba, ben Kaan. Veriyle anlamli cozumler uretiyorum.",
      subtitle:
        "Makine ogrenmesi, veri analizi ve urun odakli cozumler uzerine calisiyorum. Bu sitede hem hakkimda bilgileri hem de GitHub projelerimi bulabilirsin.",
      ctaProjects: "Projeleri Incele",
      ctaResume: "CV Indir"
    },
    about: {
      title: "Kendimi Tanitayim",
      body:
        "RWTH Aachen'da Veri Bilimi yuksek lisans ogrencisiyim ve Bilgisayar Muhendisligi lisans mezunuyum. CV'mde oldugu gibi .NET ve Python tabanli yazilim gelistirme, ERP uygulamalari, Azure cloud CI/CD surecleri ve makine ogrenmesi entegrasyonlarinda (LangGraph, RAG) deneyim kazandim. Hedefim olceklenebilir, veri odakli ve is degeri ureten urunler gelistirmek."
    },
    experience: {
      title: "Egitim",
      items: [
        {
          title: "RWTH Aachen University",
          meta: "MSc in Data Science • 2025 - Devam Ediyor",
          description:
            "Istatistiksel ogrenme, olasiliksal modelleme, buyuk olcekli veri isleme ve yapay zeka odakli dersler."
        },
        {
          title: "Dokuz Eylul University",
          meta: "Bilgisayar Muhendisligi Lisans • 2020 - 2025",
          description:
            "Yazilim muhendisligi, algoritmalar, veri yapilari ve sistem gelistirme odakli lisans egitimi."
        }
      ]
    },
    skills: {
      title: "Teknik Yetkinlikler",
      categories: [
        { name: "Programlama", items: ["Python", ".NET", "SQL", "JavaScript"] },
        { name: "ML / AI", items: ["Scikit-learn", "Pandas", "NumPy", "PyTorch"] },
        { name: "Veri Araclari", items: ["Jupyter", "Git", "Docker", "Power BI"] },
        { name: "MLOps Temeli", items: ["FastAPI", "CI/CD", "Model Versioning"] }
      ]
    },
    projects: {
      title: "GitHub Projelerim",
      description:
        "Asagidaki kartlar GitHub hesabimdaki secili public repolardan otomatik yuklenir.",
      githubLink: "Tumunu GitHub'da Gor",
      loading: "Projeler yukleniyor...",
      error: "Projeler su an yuklenemiyor. Lutfen daha sonra tekrar dene.",
      empty: "Heniz gosterilecek public repo bulunmuyor.",
      topic: "Teknik konu",
      code: "Kod",
      demo: "Demo",
      lastUpdated: "Son guncelleme"
    },
    contact: {
      title: "Iletisim",
      description:
        "Is birligi, arastirma veya proje fikirleri icin bana ulasabilirsin."
    },
    footer: "© 2026 Kaan Yildiz. Tum haklari saklidir."
  },
  en: {
    pageTitle: "Kaan Yildiz | Data Science MSc Student",
    pageDescription:
      "Personal website of Kaan Yildiz, Data Science MSc student at RWTH Aachen, with selected GitHub projects.",
    langButton: "TR",
    nav: {
      about: "About",
      experience: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      eyebrow: "RWTH Aachen - Data Science MSc",
      title: "Hi, I am Kaan. I build meaningful solutions with data.",
      subtitle:
        "I work on machine learning, data analysis, and product-focused solutions. On this site, you can find my background and GitHub projects.",
      ctaProjects: "View Projects",
      ctaResume: "Download Resume"
    },
    about: {
      title: "About Me",
      body:
        "I am a Data Science MSc student at RWTH Aachen and a Computer Engineering graduate. As reflected in my CV, I have hands-on experience in .NET and Python development, ERP applications, Azure cloud CI/CD workflows, and machine learning integration with LangGraph and RAG. I focus on building scalable, data-driven software that creates clear business value."
    },
    experience: {
      title: "Education",
      items: [
        {
          title: "RWTH Aachen University",
          meta: "MSc in Data Science • 2025 - Present",
          description:
            "Coursework focused on statistical learning, probabilistic modeling, large-scale data processing, and AI systems."
        },
        {
          title: "Dokuz Eylul University",
          meta: "BSc in Computer Engineering • 2020 - 2025",
          description:
            "Undergraduate studies focused on software engineering, algorithms, data structures, and systems development."
        }
      ]
    },
    skills: {
      title: "Technical Skills",
      categories: [
        { name: "Programming", items: ["Python", ".NET", "SQL", "JavaScript"] },
        { name: "ML / AI", items: ["Scikit-learn", "Pandas", "NumPy", "PyTorch"] },
        { name: "Data Tools", items: ["Jupyter", "Git", "Docker", "Power BI"] },
        { name: "MLOps Basics", items: ["FastAPI", "CI/CD", "Model Versioning"] }
      ]
    },
    projects: {
      title: "My GitHub Projects",
      description:
        "The cards below are loaded from selected public repositories on my GitHub profile.",
      githubLink: "See All on GitHub",
      loading: "Loading projects...",
      error: "Projects cannot be loaded right now. Please try again later.",
      empty: "No public repositories to display yet.",
      topic: "Project type",
      code: "Code",
      demo: "Demo",
      lastUpdated: "Last updated"
    },
    contact: {
      title: "Contact",
      description: "Feel free to reach out for collaboration, research, or project ideas."
    },
    footer: "© 2026 Kaan Yildiz. All rights reserved."
  }
};

let currentLang = "tr";

function getByPath(object, path) {
  return path.split(".").reduce((acc, segment) => (acc ? acc[segment] : undefined), object);
}

function formatDate(dateString, lang) {
  if (!dateString) {
    return "";
  }
  const locale = lang === "tr" ? "tr-TR" : "en-US";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, { year: "numeric", month: "short" }).format(date);
}

function applyStaticTranslations() {
  const langContent = content[currentLang];

  document.documentElement.lang = currentLang;
  document.title = langContent.pageTitle;

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute("content", langContent.pageDescription);
  }

  const ogTitleTag = document.querySelector('meta[property="og:title"]');
  if (ogTitleTag) {
    ogTitleTag.setAttribute("content", langContent.pageTitle);
  }

  const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
  if (ogDescriptionTag) {
    ogDescriptionTag.setAttribute("content", langContent.pageDescription);
  }

  document.querySelectorAll("[data-i18n-key]").forEach((element) => {
    const key = element.getAttribute("data-i18n-key");
    const value = getByPath(langContent, key);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  const langToggle = document.getElementById("lang-toggle");
  langToggle.textContent = langContent.langButton;

  const footerText = document.getElementById("footer-text");
  footerText.textContent = langContent.footer;
}

function renderExperience() {
  const langContent = content[currentLang];
  const container = document.getElementById("experience-list");
  container.innerHTML = "";

  langContent.experience.items.forEach((item) => {
    const wrapper = document.createElement("article");
    wrapper.className = "timeline-item";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const meta = document.createElement("p");
    meta.className = "timeline-meta";
    meta.textContent = item.meta;

    const desc = document.createElement("p");
    desc.className = "muted";
    desc.textContent = item.description;

    wrapper.append(title, meta, desc);
    container.appendChild(wrapper);
  });
}

function renderSkills() {
  const langContent = content[currentLang];
  const container = document.getElementById("skills-grid");
  container.innerHTML = "";

  langContent.skills.categories.forEach((category) => {
    const card = document.createElement("article");
    card.className = "skill-card";

    const title = document.createElement("h3");
    title.textContent = category.name;

    const list = document.createElement("ul");
    list.className = "skill-items";

    category.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });

    card.append(title, list);
    container.appendChild(card);
  });
}

function toProjectViewModel(repo) {
  const repoKey = repo.name.toLowerCase();
  const defaultTopic = {
    tr: "Yazilim projesi",
    en: "Software project"
  };

  return {
    name: repo.name,
    description: repo.description || "",
    language: repo.language || "-",
    topic: projectTopics[repoKey] || defaultTopic,
    updatedAt: repo.updated_at,
    htmlUrl: repo.html_url,
    homepage: repo.homepage || ""
  };
}

function renderProjects(projects, isError = false) {
  const langContent = content[currentLang];
  const container = document.getElementById("projects-grid");
  container.innerHTML = "";

  if (isError) {
    const warning = document.createElement("p");
    warning.className = "muted";
    warning.textContent = langContent.projects.error;
    container.appendChild(warning);
  }

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const main = document.createElement("div");
    main.className = "project-main";

    const aside = document.createElement("div");
    aside.className = "project-aside";

    const top = document.createElement("div");
    top.className = "project-top";

    const title = document.createElement("h3");
    title.textContent = project.name;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = project.language;

    top.append(title, badge);

    const desc = document.createElement("p");
    desc.className = "muted";
    desc.textContent = project.description || "-";

    const meta = document.createElement("p");
    meta.className = "project-meta";
    meta.textContent = `${langContent.projects.topic}: ${project.topic[currentLang]} • ${langContent.projects.lastUpdated}: ${formatDate(project.updatedAt, currentLang)}`;

    const links = document.createElement("div");
    links.className = "project-links";

    const codeLink = document.createElement("a");
    codeLink.href = project.htmlUrl;
    codeLink.target = "_blank";
    codeLink.rel = "noreferrer";
    codeLink.textContent = langContent.projects.code;

    links.appendChild(codeLink);

    if (project.homepage) {
      const demoLink = document.createElement("a");
      demoLink.href = project.homepage;
      demoLink.target = "_blank";
      demoLink.rel = "noreferrer";
      demoLink.textContent = langContent.projects.demo;
      links.appendChild(demoLink);
    }

    main.append(top, desc, links);
    aside.append(meta);
    card.append(main, aside);
    container.appendChild(card);
  });
}

async function loadProjects() {
  const langContent = content[currentLang];
  const projectsContainer = document.getElementById("projects-grid");
  projectsContainer.innerHTML = `<p class="muted">${langContent.projects.loading}</p>`;

  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
    const featuredOrder = new Map(
      featuredProjectNames.map((projectName, index) => [projectName.toLowerCase(), index])
    );

    const normalized = repos
      .filter((repo) => !repo.fork && !repo.private)
      .filter((repo) => featuredOrder.has(repo.name.toLowerCase()))
      .sort(
        (a, b) =>
          featuredOrder.get(a.name.toLowerCase()) - featuredOrder.get(b.name.toLowerCase())
      )
      .map(toProjectViewModel);

    if (normalized.length === 0) {
      projectsContainer.innerHTML = `<p class="muted">${langContent.projects.empty}</p>`;
      return;
    }

    renderProjects(normalized, false);
  } catch {
    projectsContainer.innerHTML = `<p class="muted">${langContent.projects.error}</p>`;
  }
}

function setActiveNavLink() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".site-nav a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => observer.observe(section));
}

function initLanguageToggle() {
  const button = document.getElementById("lang-toggle");
  button.addEventListener("click", async () => {
    currentLang = currentLang === "tr" ? "en" : "tr";
    applyStaticTranslations();
    renderExperience();
    renderSkills();
    await loadProjects();
  });
}

async function init() {
  applyStaticTranslations();
  renderExperience();
  renderSkills();
  setActiveNavLink();
  initLanguageToggle();
  await loadProjects();
}

init();
