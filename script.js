document.getElementById("download-resume-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default action of the link
  document.getElementById("resume").scrollIntoView({ behavior: "smooth" }); // Smooth scroll to resume section
});

// Navbar scrolling smooth
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId && targetId !== "#") {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => item.classList.remove("active")); // Remove active class from all links
    this.classList.add("active"); // Add active class to the clicked link
  });
});

// form listener
const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const subscribe = document.getElementById("subscribe").checked;

  Swal.fire({
    title: "Are you sure?",
    text: "You want to submit the form?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, submit it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Submitted!",
        text: `You ${subscribe ? "have" : "have not"} subscribed to the newsletter.`,
        icon: "success",
      });

      // Continue handling the form logic
      console.log("Email:", email);
      console.log("Message:", message);
      console.log("Subscribe:", subscribe);

      // Reset the form fields after successful submission
      form.reset();
    }
  });
});
