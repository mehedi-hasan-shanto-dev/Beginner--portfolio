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

// Add Skill button functionality
document.addEventListener("DOMContentLoaded", () => {
  const addSkillBtn = document.querySelector("#addSkillBtn");
  const skillsGrid = document.querySelector("#skillsGrid");

  // Skill → Icon mapping
  const skillIcons = {
    HTML: '<i class="fa-brands fa-html5 text-orange-600 text-xl"></i>',
    CSS: '<i class="fa-brands fa-css3-alt text-blue-600 text-xl"></i>',
    JavaScript: '<i class="fa-brands fa-js text-yellow-500 text-xl"></i>',
    React: '<i class="fa-brands fa-react text-cyan-400 text-xl"></i>',
    "Node.js": '<i class="fa-brands fa-node-js text-green-600 text-xl"></i>',
    MongoDB: '<i class="fa-solid fa-database text-green-700 text-xl"></i>',
    Python: '<i class="fa-brands fa-python text-blue-500 text-xl"></i>',
    Java: '<i class="fa-brands fa-java text-red-600 text-xl"></i>',
    PHP: '<i class="fa-brands fa-php text-indigo-600 text-xl"></i>',
    C: '<i class="fa-solid fa-c text-blue-700 text-xl"></i>', // ✅ C icon
    "C++": '<i class="fa-solid fa-code text-gray-700 text-xl"></i>',
    SQL: '<i class="fa-solid fa-database text-purple-600 text-xl"></i>',
    TypeScript: '<i class="fa-solid fa-code-branch text-blue-500 text-xl"></i>',
  };

  addSkillBtn.addEventListener("click", () => {
    const skillName = prompt("Enter a skill name (e.g., Python, C, Java):");

    if (skillName && skillName.trim() !== "") {
      const newSkill = document.createElement("div");
      newSkill.className = "flex items-center gap-2 badge badge-outline p-4";

      const icon =
        skillIcons[skillName] ||
        '<i class="fa-solid fa-star text-yellow-500 text-xl"></i>';

      newSkill.innerHTML = `${icon} ${skillName}`;
      skillsGrid.appendChild(newSkill);
    }
  });
});
