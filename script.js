let pledgeData = [];
let pledgeId = 1;

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const state = document.getElementById("state").value;
  const profile = document.getElementById("profile").value;
  const commitments = Array.from(document.querySelectorAll("#commitments input:checked")).map(c => c.value);

  const stars = "⭐".repeat(commitments.length);
  const date = new Date().toLocaleDateString();

  // Add to pledge data
  pledgeData.push({ id: pledgeId++, name, date, state, profile, stars });

  // Update KPIs
  document.getElementById("pledge-count").textContent = pledgeData.length;
  document.getElementById("student-count").textContent = pledgeData.filter(p => p.profile === "Student").length;
  document.getElementById("pro-count").textContent = pledgeData.filter(p => p.profile === "Professional").length;

  // Show certificate
  document.getElementById("cert-name").textContent = `Congratulations, ${name}!`;
  document.getElementById("cert-stars").textContent = stars;
  document.getElementById("certificate").style.display = "block";

  // Update pledge wall
  const row = document.createElement("tr");
  row.innerHTML = `<td>${pledgeId - 1}</td><td>${name}</td><td>${date}</td><td>${state}</td><td>${profile}</td><td>${stars}</td>`;
  document.getElementById("wall-body").appendChild(row);

  // Reset form
  document.getElementById("form").reset();
});
