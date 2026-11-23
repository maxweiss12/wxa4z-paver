document.addEventListener("DOMContentLoaded", () => {
  console.log("Page TOC script loaded");

  // Find the main Just the Docs content area.
  const content = document.querySelector(".main-content");
  console.log("Main content found:", !!content);

  if (!content) {
    console.warn("Page TOC: .main-content was not found.");
    return;
  }

  // Collect page headings.
  const headings = [
    ...content.querySelectorAll("h2, h3")
  ].filter(heading => !heading.classList.contains("no_toc"));

  console.log("Headings found:", headings.length);

  if (headings.length === 0) {
    console.warn("Page TOC: no h2 or h3 headings found.");
    return;
  }

  // Create the TOC navigation.
  const toc = document.createElement("nav");
  toc.className = "page-toc";
  toc.setAttribute("aria-label", "On this page");

  const title = document.createElement("h2");
  title.textContent = "On this page";
  toc.appendChild(title);

  const list = document.createElement("ul");

  headings.forEach((heading, index) => {
    // Reuse the heading's existing anchor ID.
    if (!heading.id) {
      heading.id = `page-section-${index + 1}`;
    }

    const item = document.createElement("li");

    if (heading.tagName === "H3") {
      item.classList.add("page-toc-subheading");
    }

    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent.trim();

    item.appendChild(link);
    list.appendChild(item);
  });

  toc.appendChild(list);

  // Add the TOC to the document.
  document.body.appendChild(toc);
  document.body.classList.add("has-page-toc");

  console.log("Page TOC created successfully.");
});
