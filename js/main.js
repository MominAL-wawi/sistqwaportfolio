// Data for articles, poems, translations, and republished content
// المصفوفات العالمية
let articlesData = [];
let poemsData = [];
let translationsData = [];
let republishedArticlesData = [];
let podcastsData = [];
let journeyLinksData = [];

// عدادات العرض لكل نوع
let articlesDisplayed = 0;
let poemsDisplayed = 0;
let translationsDisplayed = 0;
let republishedDisplayed = 0;
let podcastsDisplayed = 0;

const itemsPerLoad = 6;

function loadJourneyLinks() {
  fetch(
    "https://sistqwaportfolio-default-rtdb.asia-southeast1.firebasedatabase.app/journeyLinks.json"
  )
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        journeyLinksData = Object.values(data);
        // Sort by display order
        journeyLinksData.sort(
          (a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)
        );

        // Build the links HTML
        const container = document.getElementById("dynamic-links-container");
        if (container) {
          let linksHTML = "";
          journeyLinksData.forEach((link, index) => {
            linksHTML += `<a href="${link.url}" target="_blank" class="card-link">${link.linkText}</a>`;
            // Add comma or "and" separator
            if (index < journeyLinksData.length - 2) {
              linksHTML += ", ";
            } else if (index === journeyLinksData.length - 2) {
              linksHTML += ", and ";
            }
          });
          container.innerHTML = linksHTML;
        }
      }
    })
    .catch((error) => {
      console.error("Error loading journey links:", error);
    });
}

loadJourneyLinks();

// جلب البيانات

fetch(
  "https://sistqwaportfolio-default-rtdb.asia-southeast1.firebasedatabase.app/articlesData.json"
)
  .then((res) => res.json())
  .then((data) => {
    if (data) {
      articlesData = Object.values(data);
      // عرض أول دفعة لكل قسم
      articlesData.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      loadArticles();
    }

    // ربط أزرار Load More
    document
      .getElementById("load-more-articles")
      .addEventListener("click", loadArticles);
  });

fetch(
  "https://sistqwaportfolio-default-rtdb.asia-southeast1.firebasedatabase.app/poemsData.json"
)
  .then((res) => res.json())
  .then((data) => {
    if (data) {
      poemsData = Object.values(data);
      // عرض أول دفعة لكل قسم
      poemsData.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      loadPoems();
    }
    // ربط أزرار Load More

    document
      .getElementById("load-more-poems")
      .addEventListener("click", loadPoems);
  });

fetch(
  "https://sistqwaportfolio-default-rtdb.asia-southeast1.firebasedatabase.app/translationsData.json"
)
  .then((res) => res.json())
  .then((data) => {
    if (data) {
      translationsData = Object.values(data);
      // عرض أول دفعة لكل قسم
      translationsData.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      loadTranslations();
    }

    // ربط أزرار Load More
    document
      .getElementById("load-more-translations")
      ?.addEventListener("click", loadTranslations);
  });

fetch(
  "https://sistqwaportfolio-default-rtdb.asia-southeast1.firebasedatabase.app/republishedArticlesData.json"
)
  .then((res) => res.json())
  .then((data) => {
    if (data) {
      republishedArticlesData = Object.values(data);
      // عرض أول دفعة لكل قسم
      republishedArticlesData.sort(
        (a, b) => (b.createdAt || 0) - (a.createdAt || 0)
      );
      loadRepublishedArticles();
    }
    // ربط أزرار Load More
    document
      .getElementById("load-more-republished")
      ?.addEventListener("click", loadRepublishedArticles);
  });

fetch(
  "https://sistqwaportfolio-default-rtdb.asia-southeast1.firebasedatabase.app/podcastsData.json"
)
  .then((res) => res.json())
  .then((data) => {
    if (data) {
      podcastsData = Object.values(data);
      // عرض أول دفعة لكل قسم
      podcastsData.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      loadPodcasts();
    }

    // ربط أزرار Load More
    document
      .getElementById("load-more-podcasts")
      ?.addEventListener("click", loadPodcasts);
  });

// دوال التحميل
function loadArticles() {
  const container = document.getElementById("articles-container");
  const items = articlesData.slice(
    articlesDisplayed,
    articlesDisplayed + itemsPerLoad
  );
  items.forEach((item) => container.appendChild(createCard(item, "article")));
  articlesDisplayed += items.length;
  if (articlesDisplayed >= articlesData.length)
    document.getElementById("load-more-articles").style.display = "none";
}

function loadPoems() {
  const container = document.getElementById("poems-container");
  const items = poemsData.slice(poemsDisplayed, poemsDisplayed + itemsPerLoad);
  items.forEach((item) => container.appendChild(createCard(item, "poem")));
  poemsDisplayed += items.length;
  if (poemsDisplayed >= poemsData.length)
    document.getElementById("load-more-poems").style.display = "none";
}

function loadTranslations() {
  const container = document.getElementById("translations-container");
  const items = translationsData.slice(
    translationsDisplayed,
    translationsDisplayed + itemsPerLoad
  );
  items.forEach((item) =>
    container.appendChild(createCard(item, "translation"))
  );
  translationsDisplayed += items.length;
  if (translationsDisplayed >= translationsData.length)
    document.getElementById("load-more-translations").style.display = "none";
}

function loadRepublishedArticles() {
  const container = document.getElementById("republished-container");
  const items = republishedArticlesData.slice(
    republishedDisplayed,
    republishedDisplayed + itemsPerLoad
  );
  items.forEach((item) =>
    container.appendChild(createCard(item, "republished"))
  );
  republishedDisplayed += items.length;
  if (republishedDisplayed >= republishedArticlesData.length)
    document.getElementById("load-more-republished").style.display = "none";
}

function loadPodcasts() {
  const container = document.getElementById("podcasts-container");
  const items = podcastsData.slice(
    podcastsDisplayed,
    podcastsDisplayed + itemsPerLoad
  );
  items.forEach((item) => container.appendChild(createCard(item, "podcast")));
  podcastsDisplayed += items.length;
  if (podcastsDisplayed >= podcastsData.length)
    document.getElementById("load-more-podcasts").style.display = "none";
}

function createCard(item, type) {
  const card = document.createElement("div");
  card.className = "col-lg-4 col-md-6 mb-4";

  let cardContent = "";

  switch (type) {
    case "article":
      cardContent = `
                <div class="content-card">
                    <div class="card-header">
                        <i class="fas fa-newspaper me-2"></i>Article
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">
                            <strong>Published in:</strong> ${item.publication}<br>
                            <strong>Date:</strong> ${item.date}
                        </p>
                        <a href="${item.url}" target="_blank" class="card-link">
                            Read Article <i class="fas fa-external-link-alt ms-1"></i>
                        </a>
                    </div>
                </div>
            `;
      break;

    case "poem":
      cardContent = `
                <div class="content-card">
                    <div class="card-header">
                        <i class="fas fa-feather-alt me-2"></i>Poetry
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">
                            <strong>Published in:</strong> ${item.publication}<br>
                            ${item.description}
                        </p>
                        <a href="${item.url}" target="_blank" class="card-link">
                            Read Poem <i class="fas fa-external-link-alt ms-1"></i>
                        </a>
                    </div>
                </div>
            `;
      break;

    case "translation":
      cardContent = `
                <div class="content-card">
                    <div class="card-header">
                        <i class="fas fa-language me-2"></i>Translation
                        <span class="language-badge float-end">${item.language}</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">
                            <strong>Published in:</strong> ${item.publication}
                        </p>
                        <a href="${item.url}" target="_blank" class="card-link">
                            Read translations <i class="fas fa-external-link-alt ms-1"></i>
                        </a>
                    </div>
                </div>
            `;
      break;

    case "republished":
      cardContent = `
                <div class="content-card">
                    <div class="card-header">
                        <i class="fas fa-retweet me-2"></i>Republished Article
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">
                            <strong>Originally published in:</strong> ${item.originalPublication}<br>
                            <strong>Republished by:</strong> ${item.republishedIn}<br>
                            ${item.description}
                        </p>
                        <a href="${item.url}" target="_blank" class="card-link">
                            Read Republished Articles <i class="fas fa-external-link-alt ms-1"></i>
                        </a>
                    </div>
                </div>
            `;
      break;

    case "podcast":
      cardContent = `
                <div class="content-card">
                    <div class="card-header">
                        <i class="fas fa-podcast me-2"></i>Podcast
                        <span class="language-badge float-end">${item.platform}</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">
                            <strong>Program:</strong> ${item.podcastName}<br>
                            <strong>Date:</strong> ${item.date}
                        </p>
                        <a href="${item.url}" target="_blank" class="card-link">
                            Listen to the episode <i class="fas fa-external-link-alt ms-1"></i>
                        </a>
                    </div>
                </div>
            `;
      break;
  }

  card.innerHTML = cardContent;
  return card;
}

// Initialize the page
window.onload = () => {
  loadArticles();
  loadPoems();
  loadTranslations();
  loadRepublishedArticles();
  loadPodcasts();
  loadJourneyLinks();
};
