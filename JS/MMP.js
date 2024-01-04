document.addEventListener("DOMContentLoaded", function () {
  const columns = document.querySelectorAll(".column");

  columns.forEach(function (column) {
      column.addEventListener("click", function () {
          const content = column.querySelector(".collapsible-content");

          if (content.style.maxHeight) {
              content.style.maxHeight = null;
          } else {
              // Close all other sections
              columns.forEach(function (otherColumn) {
                  if (otherColumn !== column) {
                      const otherContent = otherColumn.querySelector(".collapsible-content");
                      otherContent.style.maxHeight = null;
                  }
              });

              // Expand this section
              content.style.maxHeight = content.scrollHeight + "px";

              // Scroll smoothly to the clicked column
              const yOffset = -50; // Offset for header, adjust as needed
              const y = column.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
          }
      });
  });
});