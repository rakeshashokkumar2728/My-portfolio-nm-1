// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Button alert example
document.getElementById("learnMore").addEventListener("click", () => {
  alert("Explore my portfolio to know more about my web development journey!");
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields!");
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent successfully.`);
  e.target.reset();
});