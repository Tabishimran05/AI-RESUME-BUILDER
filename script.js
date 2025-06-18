 function generateResume() {
  const input = document.getElementById("userInput").value.trim();
  const outputDiv = document.getElementById("output");

  if (!input) {
    outputDiv.innerHTML = "<p class='error'>⚠️ Please enter your information.</p>";
    return;
  }

  const lines = input.split("\n").map(line => line.trim()).filter(line => line !== "");

  // Try to detect name from first line
  const nameLine = lines[0];
  const [firstName, lastName] = nameLine.split(" ");
  const initials = (firstName?.charAt(0) || "") + (lastName?.charAt(0) || "");

  const formattedResume = `
    <div class="resume-card">
      <div class="resume-header">
        <div class="logo-circle">${initials.toUpperCase()}</div>
        <h2>${nameLine}</h2>
      </div>
      <hr />
      <div class="resume-body">
        ${lines.slice(1).map(line => `<p>• ${line}</p>`).join("")}
      </div>
    </div>
  `;

  outputDiv.innerHTML = formattedResume;
}