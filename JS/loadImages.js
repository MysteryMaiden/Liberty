document.addEventListener("DOMContentLoaded", () => {
  fetch("../images.json")
    .then((response) => response.json())
    .then((images) => {
      const container = document.getElementById("img_section_images");

      images.forEach((image) => {
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.classList.add("home_portfolio_image");
        container.appendChild(img);
      });
    })
    .catch((error) => console.error("Error loading images:", error));
});
