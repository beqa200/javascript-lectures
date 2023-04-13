const section = document.getElementsByClassName("section");
const sectionArray = [...section];

let openSection = null;

sectionArray.forEach((section) => {
  section.addEventListener("click", () => {
    if (section == openSection) {
      section.nextElementSibling.style.display = "none";
      openSection = null;
    } else {
      if (openSection != null) {
        openSection.nextElementSibling.style.display = "none";
      }

      section.nextElementSibling.style.display = "block";
      openSection = section;
    }
  });
});
