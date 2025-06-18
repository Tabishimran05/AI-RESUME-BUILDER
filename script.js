  function generateResume() {
  const input = document.getElementById("userInput").value;
  
  if (!input.trim()) {
    document.getElementById("output").innerText = "⚠️ Please enter your information.";
    return;
  }

  const resume = `
======= RESUME =======

${input}

=======================
Thanks for using AI Resume Builder!
`;

  document.getElementById("output").innerText = resume;
}