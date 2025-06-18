  function generateResume() {
  const input = document.getElementById("userInput").value.trim();
  const outputDiv = document.getElementById("output");

  if (!input) {
    outputDiv.innerHTML = "<p class='error'>⚠️ Please enter your information.</p>";
    return;
  }

  const lines = input.split("\n").map(line => line.trim()).filter(line => line !== "");

  const nameLine = lines[0];
  const [firstName, lastName] = nameLine.split(" ");
  const initials = (firstName?.[0] || "") + (lastName?.[0] || "");

  const sections = {
    Education: [],
    Experience: [],
    Skills: [],
    Contact: [],
    Other: []
  };

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.toLowerCase().includes("education")) {
      sections.Education.push(line);
    } else if (line.toLowerCase().includes("experience")) {
      sections.Experience.push(line);
    } else if (line.toLowerCase().includes("skill")) {
      sections.Skills.push(line);
    } else if (line.toLowerCase().includes("email") || line.toLowerCase().includes("phone")) {
      sections.Contact.push(line);
    } else {
      sections.Other.push(line);
    }
  }

  const buildSection = (emoji, title, items) =>
    items.length
      ? `<div class="section"><h3>${emoji} ${title}</h3><div class="section-content"><br>${items.map(item => `<p>${item}</p>`).join("")}</div></div>`
      : "";

  const formattedResume = `
    <div class="resume-card">
      <div class="resume-header">
        <div class="logo-circle">${initials.toUpperCase()}</div>
        <h2>${nameLine}</h2>
      </div>
      <hr />
      <div class="resume-body">
        ${buildSection("🎓", "Education", sections.Education)}
        ${buildSection("💼", "Experience", sections.Experience)}
        ${buildSection("📋", "Skills", sections.Skills)}
        ${buildSection("📞", "Contact Info", sections.Contact)}
        ${buildSection("📝", "Other", sections.Other)}
      </div>
    </div>
  `;

  outputDiv.innerHTML = formattedResume;
}