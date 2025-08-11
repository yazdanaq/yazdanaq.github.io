// ===== Research Interests (rowed, 90/10 expand, with close button) =====
const riGrid = document.getElementById("ri-grid");

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function collapseAllRows() {
  document.querySelectorAll(".ri-row.has-expanded").forEach(row => {
    row.classList.remove("has-expanded");
    row.querySelectorAll(".ri-card").forEach(c => {
      c.classList.remove("is-expanded", "stack-top", "stack-bottom");
      c.setAttribute("aria-expanded", "false");
    });
  });
}

if (riGrid && typeof interestsData !== "undefined") {
  const rows = chunk(interestsData, 3);

  rows.forEach((rowData) => {
    const rowEl = document.createElement("div");
    rowEl.className = "ri-row";

    const cards = rowData.map((item) => {
      const card = document.createElement("div");
      card.className = "ri-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-expanded", "false");

      const img = document.createElement("img");
      img.src = item.image_url;
      img.alt = item.alt || item.title || "Research interest image";

      const caption = document.createElement("div");
      caption.className = "ri-caption";
      caption.textContent = item.title;

      // Frosted overlay panel
      const panel = document.createElement("div");
      panel.className = "ri-desc-panel";

      // Close button (X)
      const closeBtn = document.createElement("button");
      closeBtn.className = "ri-close";
      closeBtn.setAttribute("type", "button");
      closeBtn.setAttribute("aria-label", "Close");
      closeBtn.textContent = "×";

      const title = document.createElement("div");
      title.style.fontWeight = "800";
      title.style.fontSize = "1.05rem";
      title.style.marginBottom = "6px";
      title.textContent = item.title;

      const desc = document.createElement("div");
      desc.style.fontSize = "0.98rem";
      desc.style.lineHeight = "1.5";
      desc.textContent = item.description;

      panel.appendChild(closeBtn);
      panel.appendChild(title);
      panel.appendChild(desc);

      card.appendChild(img);
      card.appendChild(caption);
      card.appendChild(panel);

      const expandThis = (e) => {
        e.stopPropagation();

        // If already expanded, collapse
        if (card.classList.contains("is-expanded")) {
          collapseAllRows();
          return;
        }

        // Collapse everything first
        collapseAllRows();

        // Expand current row & arrange siblings
        rowEl.classList.add("has-expanded");
        card.classList.add("is-expanded");
        card.setAttribute("aria-expanded", "true");

        // Stack the other two in this row
        const siblings = Array.from(rowEl.querySelectorAll(".ri-card")).filter(c => c !== card);
        if (siblings.length >= 1) siblings[0].classList.add("stack-top");
        if (siblings.length >= 2) siblings[1].classList.add("stack-bottom");
      };

      // Card click/keyboard expand
      card.addEventListener("click", expandThis);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          expandThis(e);
        }
      });

      // Close button handler (don’t bubble)
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        collapseAllRows();
      });

      return card;
    });

    cards.forEach(c => rowEl.appendChild(c));
    riGrid.appendChild(rowEl);
  });

  // Click outside to collapse
  document.addEventListener("click", () => collapseAllRows());
  // Prevent grid clicks from bubbling up (so quick card switching feels natural)
  riGrid.addEventListener("click", (e) => e.stopPropagation());

  // ESC to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") collapseAllRows();
  });
}



const announcementContainer = document.getElementById("announcement-board");
updateData.forEach(update => {
    const updateItem = document.createElement("div");
    updateItem.classList.add("update-item");

    const updateDate = document.createElement("div");
    updateDate.classList.add("update-item-date");
    updateDate.textContent = update.date;

    const updateDescription = document.createElement("div");
    updateDescription.classList.add("update-item-description");
    updateDescription.textContent = update.description;

    updateItem.appendChild(updateDate);
    updateItem.appendChild(updateDescription);

    announcementContainer.appendChild(updateItem);
});


const publicationHolder = document.getElementById("publication-holder")
publicationData.forEach((publication) => {
    console.log('i', publication)
    const publicationContainer = document.createElement("div");
    publicationContainer.classList.add("publication-item");

    // Create and set image
    const imgElement = document.createElement("img");
    imgElement.src = publication.image_url;
    imgElement.alt = "project-image";
    publicationContainer.appendChild(imgElement);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("publication-description");

    // Create title link
    const titleLink = document.createElement("a");
    titleLink.href = publication.publication_link;
    titleLink.target = '_blank'
    const titleElement = document.createElement("p");
    titleElement.classList.add("title");
    titleElement.textContent = publication.title;
    titleLink.appendChild(titleElement);
    descriptionContainer.appendChild(titleLink);

    // Styled Author List for Publications
// Styled Author List for Publications
const authorList = document.createElement("p");
authorList.classList.add("description");

publication.collaborators.forEach((collaborator, idx) => {
    const authorSpan = document.createElement("span");

    const authorLink = document.createElement("a");
    authorLink.href = collaborator.link || "#";
    authorLink.target = "_blank";

    let nameHTML = collaborator.name;

    // Bold if it's Yazdan
    if (collaborator.name === "Yazdan Ahmad Qadri") {
        authorLink.innerHTML = `<b>${collaborator.name}</b>`;
    } else {
        authorLink.textContent = collaborator.name;
    }

    // Italic if presenting (wrapped after bolding)
    if (collaborator.presenting) {
        const italicWrapper = document.createElement("i");
        italicWrapper.appendChild(authorLink);
        authorSpan.appendChild(italicWrapper);
    } else {
        authorSpan.appendChild(authorLink);
    }

    authorList.appendChild(authorSpan);

    if (idx < publication.collaborators.length - 1) {
        authorList.appendChild(document.createTextNode(", "));
    }
});

descriptionContainer.appendChild(authorList);


    // Create description
    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("description");
    descriptionElement.textContent = publication.description;
    descriptionContainer.appendChild(descriptionElement);

    publicationContainer.appendChild(descriptionContainer)

    const links = document.createElement("div")
    links.classList.add("project-links")

    if (publication.codeLink) {
        const githubLink = document.createElement('a')
        githubLink.classList.add("button-type")
        githubLink.innerText = 'GitHub'
        githubLink.href = publication.codeLink
        githubLink.target = '_blank'
        links.appendChild(githubLink)
    }
    if (publication.pdfLink) {
        const pdfLink = document.createElement('a')
        pdfLink.classList.add("button-type")
        pdfLink.href = publication.pdfLink
        pdfLink.innerText = 'PDF'
        pdfLink.target = '_blank'
        links.appendChild(pdfLink)
    }

    const bibtex = document.createElement('p')
    bibtex.classList.add("button-type")
    bibtex.innerText = 'Bibtex'

    links.appendChild(bibtex)

    const bibTexCitation = document.createElement('p')
    bibTexCitation.classList.add('bibtex')
    bibTexCitation.style.display = 'none'
    bibTexCitation.innerText = publication.citation

    descriptionContainer.appendChild(links)
    descriptionContainer.appendChild(bibTexCitation)

    bibtex.addEventListener('click', () => {
        const currentState = window.getComputedStyle(bibTexCitation).getPropertyValue('display')
        console.log('cuyre', currentState)

        if (currentState === 'none') {
            bibTexCitation.style.display = 'block'
        } else {
            bibTexCitation.style.display = 'none'
        }
    })

    publicationHolder.appendChild(publicationContainer)
})

const presentationHolder = document.getElementById("presentation-holder");
presentationData.forEach((pres) => {
    const container = document.createElement("div");
    container.classList.add("publication-item");

    const description = document.createElement("div");
    description.classList.add("publication-description");

    // Title
    const titleLink = document.createElement("a");
    titleLink.href = pres.presentation_link || "#";
    titleLink.target = "_blank";
    const titleEl = document.createElement("p");
    titleEl.classList.add("title");
    titleEl.textContent = pres.title;
    titleLink.appendChild(titleEl);
    description.appendChild(titleLink);


    // Conference + Year + Location
    const meta = document.createElement("p");
    meta.classList.add("description");
    meta.textContent = `${pres.conference}, ${pres.year} – ${pres.location}`;
    description.appendChild(meta);

    // Author List
    const authorList = document.createElement("p");
    authorList.classList.add("description");

    pres.authors.forEach((author, idx) => {
        const authorSpan = document.createElement("span");
        let authorNameHTML = author.name;

        if (author.name.includes("Yazdan Ahmad Qadri")) {
            authorNameHTML = `<b>${authorNameHTML}</b>`;
        }
        if (author.presenting) {
            authorNameHTML = `<i>${authorNameHTML}</i>`;
        }

        const authorLink = document.createElement("a");
        authorLink.href = author.link || "#";
        authorLink.target = "_blank";
        authorLink.innerHTML = authorNameHTML;

        authorSpan.appendChild(authorLink);
        authorList.appendChild(authorSpan);


        if (idx < pres.authors.length - 1) {
            authorList.appendChild(document.createTextNode(", "));
        }
    });

    description.appendChild(authorList);

    // Code / PDF / Bibtex Links
    const links = document.createElement("div");
    links.classList.add("project-links");

    if (pres.codeLink) {
        const codeBtn = document.createElement("a");
        codeBtn.classList.add("button-type");
        codeBtn.innerText = "GitHub";
        codeBtn.href = pres.codeLink;
        codeBtn.target = "_blank";
        links.appendChild(codeBtn);
    }

    if (pres.pdfLink) {
        const pdfBtn = document.createElement("a");
        pdfBtn.classList.add("button-type");
        pdfBtn.innerText = "PDF";
        pdfBtn.href = pres.pdfLink;
        pdfBtn.target = "_blank";
        links.appendChild(pdfBtn);
    }

    const bibBtn = document.createElement("p");
    bibBtn.classList.add("button-type");
    bibBtn.innerText = "Bibtex";

    const bibText = document.createElement("p");
    bibText.classList.add("bibtex");
    bibText.style.display = "none";
    bibText.innerText = pres.citation;

    bibBtn.addEventListener("click", () => {
        bibText.style.display = bibText.style.display === "none" ? "block" : "none";
    });

    links.appendChild(bibBtn);

    description.appendChild(links);
    description.appendChild(bibText);

    container.appendChild(description);
    presentationHolder.appendChild(container);
});

const patentHolder = document.getElementById("patent-holder");
patentData.forEach(patent => {
    const container = document.createElement("div");
    container.classList.add("publication-item");

    const desc = document.createElement("div");
    desc.classList.add("publication-description");

    // Title
    const titleEl = document.createElement("p");
    titleEl.classList.add("title");
    titleEl.textContent = patent.title;
    desc.appendChild(titleEl);

    // Inventors
    const inventorLine = document.createElement("p");
    inventorLine.classList.add("description");

    patent.inventors.forEach((inventor, idx) => {
        const inventorSpan = document.createElement("span");

        let nameHTML = inventor.name;
        const isSelf = inventor.name.toLowerCase().includes("yazdan") && inventor.name.toLowerCase().includes("qadri");

        if (isSelf) {
            nameHTML = `<b>${nameHTML}</b>`;
        }

        const inventorLink = document.createElement("a");
        inventorLink.href = inventor.link || "#";
        inventorLink.target = "_blank";
        inventorLink.innerHTML = nameHTML;

        inventorSpan.appendChild(inventorLink);
        inventorLine.appendChild(inventorSpan);

        if (idx < patent.inventors.length - 1) {
            inventorLine.appendChild(document.createTextNode(", "));
        }
    });

    desc.appendChild(inventorLine);

    // Patent Number and Country
    const meta = document.createElement("p");
    meta.classList.add("description");
    meta.innerText = `Patent No: ${patent.patentNumber} | Country: ${patent.country}`;
    desc.appendChild(meta);

    container.appendChild(desc);
    patentHolder.appendChild(container);
});

const bookHolder = document.getElementById("book-holder");
bookData.forEach(book => {
    const container = document.createElement("div");
    container.classList.add("publication-item");

    const desc = document.createElement("div");
    desc.classList.add("publication-description");

    // Chapter Title
// Dynamic Descriptor: Book Chapter / Authored Book / Edited Book
// Role descriptor and clickable chapter title
const chapterTitle = document.createElement("p");
chapterTitle.classList.add("title");

let roleDescriptor = "Book Chapter:"; // default
if (book.role === "author") {
    roleDescriptor = "Authored Book:";
} else if (book.role === "editor") {
    roleDescriptor = "Edited Book:";
}

// Create chapter link
const chapterLink = document.createElement("a");
chapterLink.href = book.chapter_link || "#";
chapterLink.target = "_blank";
chapterLink.innerHTML = `${book.chapter}`;

chapterTitle.innerHTML = `<strong>${roleDescriptor}</strong> `;
chapterTitle.appendChild(chapterLink);
desc.appendChild(chapterTitle);

// Book title (separate link)
const bookLine = document.createElement("p");
bookLine.classList.add("description");
bookLine.innerHTML = `<strong>Book:</strong> <a href="${book.link}" target="_blank">${book.book}</a>`;
desc.appendChild(bookLine);


    // Authors
    const authorLine = document.createElement("p");
    authorLine.classList.add("description");
    authorLine.innerHTML = `<strong>Authors:</strong> `;

    book.authors.forEach((author, idx) => {
        const span = document.createElement("span");
        let nameHTML = author.name;
        const isSelf = nameHTML.toLowerCase().includes("yazdan") && nameHTML.toLowerCase().includes("qadri");

        if (isSelf) nameHTML = `<b>${nameHTML}</b>`;

        const authorLink = document.createElement("a");
        authorLink.href = author.link || "#";
        authorLink.target = "_blank";
        authorLink.innerHTML = nameHTML;

        span.appendChild(authorLink);
        authorLine.appendChild(span);

        if (idx < book.authors.length - 1) {
            authorLine.appendChild(document.createTextNode(", "));
        }
    });

    desc.appendChild(authorLine);

    // Publisher
    const publisherLine = document.createElement("p");
    publisherLine.classList.add("description");
    publisherLine.textContent = `Publisher: ${book.publisher}, ${book.location}`;
    desc.appendChild(publisherLine);

    // Fix: Create missing links container
    const links = document.createElement("div");
    links.classList.add("project-links");

    const bibBtn = document.createElement("p");
    bibBtn.classList.add("button-type");
    bibBtn.innerText = "Bibtex";

    const bibText = document.createElement("p");
    bibText.classList.add("bibtex");
    bibText.style.display = "none";
    bibText.innerText = book.citation;

    bibBtn.addEventListener("click", () => {
        bibText.style.display = bibText.style.display === "none" ? "block" : "none";
    });

    links.appendChild(bibBtn);
    desc.appendChild(links);
    desc.appendChild(bibText);

    container.appendChild(desc);
    bookHolder.appendChild(container);
});



const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        const target = button.dataset.tab;

        // Switch tab button
        tabButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Switch visible content
        tabContents.forEach(content => {
            content.classList.remove("active-tab");
            if (content.id === `${target}-holder`) {
                content.classList.add("active-tab");
            }
        });
    });
});


// Dynamically set the "Last Updated" date
document.getElementById("last-updated").textContent = new Date(document.lastModified).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});