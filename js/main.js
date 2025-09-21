// Data for articles, poems, translations, and republished content
// المصفوفات العالمية
let articlesData = [];
let poemsData = [];
let translationsData = [];
let republishedArticlesData = [];
let podcastsData = [];

// عدادات العرض لكل نوع
let articlesDisplayed = 0;
let poemsDisplayed = 0;
let translationsDisplayed = 0;
let republishedDisplayed = 0;
let podcastsDisplayed = 0;

const itemsPerLoad = 6;

// جلب البيانات

// جلب البيانات
fetch(
  "https://sistqwaportfolio-default-rtdb.asia-southeast1.firebasedatabase.app/articlesData.json"
)
  .then((res) => res.json())
  .then((data) => {
    // articlesData = data.articlesData;

    if (data) {
      articlesData = Object.values(data);
      // عرض أول دفعة لكل قسم
      loadArticles();
    }

    // loadArticles();

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
    // poemsData = data.poemsData;
    if (data) {
      poemsData = Object.values(data);
      // عرض أول دفعة لكل قسم
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
    // translationsData = data.translationsData;
    // translationsData = Array.isArray(data) ? data : data.translationsData;
    if (data) {
      translationsData = Object.values(data);
      // عرض أول دفعة لكل قسم
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
    // republishedArticlesData = data.republishedArticlesData;

    if (data) {
      republishedArticlesData = Object.values(data);
      // عرض أول دفعة لكل قسم
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
    // podcastsData = data.podcastsData;
    if (data) {
      podcastsData = Object.values(data);
      // عرض أول دفعة لكل قسم
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
                        <i class="fas fa-podcast me-2"></i>podcast
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

function loadArticles() {
  const container = document.getElementById("articles-container");
  const articlesToShow = articlesData.slice(
    articlesDisplayed,
    articlesDisplayed + itemsPerLoad
  );

  articlesToShow.forEach((article) => {
    const card = createCard(article, "article");
    container.appendChild(card);
  });

  articlesDisplayed += articlesToShow.length;

  // Hide load more button if all articles are displayed
  if (articlesDisplayed >= articlesData.length) {
    document.getElementById("load-more-articles").style.display = "none";
  }
}

function loadMoreArticles() {
  loadArticles();
}

function loadPoems() {
  const container = document.getElementById("poems-container");
  const poemsToShow = poemsData.slice(
    poemsDisplayed,
    poemsDisplayed + itemsPerLoad
  );

  poemsToShow.forEach((poem) => {
    const card = createCard(poem, "poem");
    container.appendChild(card);
  });

  poemsDisplayed += poemsToShow.length;

  // Hide load more button if all poems are displayed
  if (poemsDisplayed >= poemsData.length) {
    document.getElementById("load-more-poems").style.display = "none";
  }
}

function loadMorePoems() {
  loadPoems();
}

function loadTranslations() {
  const container = document.getElementById("translations-container");
  const translationsToShow = translationsData.slice(
    translationsDisplayed,
    translationsDisplayed + itemsPerLoad
  );

  translationsToShow.forEach((translation) => {
    const card = createCard(translation, "translation");
    container.appendChild(card);
  });

  translationsDisplayed += translationsToShow.length;

  // Hide load more button if all translations are displayed
  const loadMoreBtn = document.getElementById("load-more-translations");
  if (loadMoreBtn && translationsDisplayed >= translationsData.length) {
    loadMoreBtn.style.display = "none";
  }
}

function loadMoreTranslations() {
  loadTranslations();
}

function loadRepublishedArticles() {
  const container = document.getElementById("republished-container");
  if (!container) return; // Exit if container doesn't exist

  const articlesToShow = republishedArticlesData.slice(
    republishedDisplayed,
    republishedDisplayed + itemsPerLoad
  );

  articlesToShow.forEach((article) => {
    const card = createCard(article, "republished");
    container.appendChild(card);
  });
  republishedDisplayed += articlesToShow.length;

  // Hide load more button if all republished articles are displayed
  const loadMoreBtn = document.getElementById("load-more-republished");
  if (loadMoreBtn && republishedDisplayed >= republishedArticlesData.length) {
    loadMoreBtn.style.display = "none";
  }
}

function loadMoreRepublishedArticles() {
  loadRepublishedArticles();
}

function loadPodcasts() {
  const container = document.getElementById("podcasts-container");
  if (!container) return; // Exit if container doesn't exist

  const podcastsToShow = podcastsData.slice(
    podcastsDisplayed,
    podcastsDisplayed + itemsPerLoad
  );

  podcastsToShow.forEach((podcast) => {
    const card = createCard(podcast, "podcast");
    container.appendChild(card);
  });

  podcastsDisplayed += podcastsToShow.length;

  // Hide load more button if all podcasts are displayed
  const loadMoreBtn = document.getElementById("load-more-podcasts");
  if (loadMoreBtn && podcastsDisplayed >= podcastsData.length) {
    loadMoreBtn.style.display = "none";
  }
}

function loadMorePodcasts() {
  loadPodcasts();
}
