document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  themeToggle.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "light") {
      body.setAttribute("data-theme", "dark");
      themeToggle.textContent = "☀️ Light Mode";
    } else {
      body.setAttribute("data-theme", "light");
      themeToggle.textContent = "🌙 Dark Mode";
    }
  });

  // Typing Effect
  const roles = [
    "Full‑Stack Developer",
    "JavaScript Enthusiast",
    "React Learner",
  ];
  let i = 0;
  const typingText = document.getElementById("typing");
  function typeRole() {
    typingText.textContent = roles[i];
    i = (i + 1) % roles.length;
  }
  setInterval(typeRole, 2000);

  // Skills Section
  const skillsList = document.getElementById("skillsList");
  const addSkillBtn = document.getElementById("addSkillBtn");
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];
  skills.forEach((skill) => {
    const div = document.createElement("div");
    div.className = "badge badge-accent p-4";
    div.textContent = skill;
    skillsList.appendChild(div);
  });
  addSkillBtn.addEventListener("click", () => {
    const newSkill = prompt("Enter a new skill:");
    if (newSkill) {
      const div = document.createElement("div");
      div.className = "badge badge-secondary p-4";
      div.textContent = newSkill;
      skillsList.appendChild(div);
    }
  });

  // Project Filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      projects.forEach((project) => {
        if (
          filter === "all" ||
          project.getAttribute("data-category") === filter
        ) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });

  // Scroll Animation
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.classList.add("animate-fadeIn");
      }
    });
  });
});
