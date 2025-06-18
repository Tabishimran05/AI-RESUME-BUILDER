   function generateResume() {
  const input = document.getElementById("userInput").value;
  const outputDiv = document.getElementById("output");

  // Basic extraction from input
  const lines = input.split("\n").map(line => line.trim()).filter(line => line);

  let name = "";
  let initials = "";
  let education = "";
  let experience = "";
  let age = "";
  let others = "";

  lines.forEach(line => {
    const lower = line.toLowerCase();
    if (lower.startsWith("name:")) {
      name = line.replace(/name:/i, "").trim();
      const parts = name.split(" ");
      if (parts.length >= 2) {
        initials = parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
      } else {
        initials = name.slice(0, 2).toUpperCase();
      }
    } else if (lower.startsWith("education:")) {
      education += line.replace(/education:/i, "").trim() + "\n";
    } else if (lower.startsWith("experience:")) {
      experience += line.replace(/experience:/i, "").trim() + "\n";
    } else if (lower.startsWith("age:")) {
      age += line.replace(/age:/i, "").trim();
    } else {
      others += line + "\n";
    }
  });

  // Build HTML
  let html = `<div class="resume-card">`;
  html += `<div class="resume-header">
             <div class="logo-circle">${initials}</div>
             <h2>${name}</h2>
           </div>`;

  if (age) {
    html += `<h3>Age</h3><p>${age}</p>`;
  }
  if (education) {
    html += `<h3>Education</h3><p>${education.replace(/\n/g, "<br>")}</p>`;
  }
  if (experience) {
    html += `<h3>Experience</h3><p>${experience.replace(/\n/g, "<br>")}</p>`;
  }
  if (others) {
    html += `<h3>Additional Info</h3><p>${others.replace(/\n/g, "<br>")}</p>`;
  }

  html += `</div>`;

  outputDiv.innerHTML = html;
}