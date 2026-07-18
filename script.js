const DATA = {
  name: "Varsha Patlolla",
  eyebrow: "BCA Graduate, 2026 · Open to work",
  role: "Full-Stack Developer | Cybersecurity Enthusiast",
  about: "Bachelor of Computer Applications student at Pragathi Women's Degree College with a strong foundation in full-stack development and cybersecurity. I developed a machine learning-based system for detecting network cyber threats, and I'm proficient in Python, Java, C++, and ASP.NET with hands-on web development experience. Eager to contribute my technical skills in a dynamic professional environment.",
  links: [
    { label: "Email me", href: "mailto:patlollavarsha1@gmail.com", primary: true },
    { label: "Resume", href: "https://docs.google.com/document/d/1t1tC9HZO_TxCYQomLktMcqkhr9gmO4di/preview" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/varsha-patlolla-008a59299/" },
    { label: "GitHub", href: "https://github.com/patlollavarsha" }
  ],
  skillGroups: [
    { title: "Languages", items: ["Python", "Java", "C++"] },
    { title: "Web / Frameworks", items: ["ASP.NET", "HTML", "CSS", "JavaScript"] },
    { title: "Focus Areas", items: ["Full-Stack Development", "Cybersecurity", "Machine Learning"] }
  ],
  projects: [
    {
      title: "Network Cyber Threat Detection System",
      description: "A machine learning-based system that detects and flags potential cyber threats on a network in real time.",
      stack: ["Python", "Machine Learning"]
    },
    {
      title: "Expense Tracker",
      description: "An application to log, categorize, and track personal expenses.",
      stack: ["Java"]
    },
    {
      title: "Certificate Tracker",
      description: "A system to organize and manage certificates and credentials in one place.",
      stack: ["Java"]
    },
    {
      title: "Student Management System",
      description: "A C++ application to manage student records, including adding, updating, and searching student data.",
      stack: ["C++"]
    },
    {
      title: "Bank Management Application",
      description: "A C++ console application simulating core banking operations like account creation, deposits, withdrawals, and balance checks.",
      stack: ["C++"]
    },
    {
      title: "Library Management System",
      description: "A C++ application to manage book inventory, issue/return records, and member details for a library.",
      stack: ["C++"]
    }
  ],
  timeline: [
    {
      period: "2023 — 2026",
      title: "Bachelor of Computer Applications (BCA)",
      org: "Pragathi Women's Degree College",
      note: "CGPA: 8.4/10"
    },
    {
      period: "Apr 2026 — May 2026",
      title: "C++ Programming Intern",
      org: "Thiranex",
      note: "Completed a certified internship in C++ Programming, building hands-on projects including a Student Management System, Bank Management Application, Library Management System, and a mini game (Tic Tac Toe/Snake Game) — strengthening my understanding of data structures and algorithmic thinking."
    }
  ],
  contactLine: "Open to full-time roles and internships — feel free to reach out.",
  email: "patlollavarsha1@gmail.com"
};

document.getElementById('nav-name').textContent = DATA.name;
document.getElementById('hero-eyebrow').textContent = DATA.eyebrow;
document.getElementById('hero-name').textContent = DATA.name;
document.getElementById('hero-role').textContent = DATA.role;
document.getElementById('about-text').textContent = DATA.about;
document.getElementById('contact-line').textContent = DATA.contactLine;
document.getElementById('copyright').textContent = `© ${new Date().getFullYear()} ${DATA.name}`;

function renderLinks(containerId, links){
  const el = document.getElementById(containerId);
  el.innerHTML = links
    .filter(l => l.href)
    .map(l => `<a class="${l.primary ? 'primary' : ''}" href="${l.href}" target="${l.href.startsWith('http') ? '_blank' : '_self'}" rel="noopener">${l.label}</a>`)
    .join('');
}
renderLinks('hero-links', DATA.links);
renderLinks('contact-links', [
  { label: "Email me", href: `mailto:${DATA.email}`, primary: true },
  ...DATA.links.filter(l => l.label !== "Email me")
]);

document.getElementById('skill-groups').innerHTML = DATA.skillGroups.map(g => `
  <div class="skill-group">
    <span class="mono">${g.title}</span>
    <div class="skill-chips">${g.items.map(i => `<span>${i}</span>`).join('')}</div>
  </div>
`).join('');

document.getElementById('projects-list').innerHTML = DATA.projects.map(p => `
  <div class="project">
    <div class="project-top">
      <h3>${p.title}</h3>
      <div class="project-links">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">Code →</a>` : ''}
        ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Live →</a>` : ''}
      </div>
    </div>
    <p class="desc">${p.description}</p>
    <div class="project-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
  </div>
`).join('');

document.getElementById('timeline-list').innerHTML = DATA.timeline.map(t => `
  <div class="tl-item">
    <div class="period">${t.period}</div>
    <div>
      <h3>${t.title}</h3>
      <div class="org">${t.org}</div>
      <p>${t.note}</p>
    </div>
  </div>
`).join('');
// ---------- SCROLL REVEAL ANIMATION ----------
document.querySelectorAll('section, .project, .tl-item').forEach(el => {
  el.classList.add('reveal');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
