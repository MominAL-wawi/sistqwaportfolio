// Data for articles, poems, translations, and republished content
const articlesData = [
  {
    title: "Airdropped Aid Is Crushing Starving People in Gaza",
    url: "https://theintercept.com/2025/08/22/gaza-aid-airdrops/",
    publication: "The Intercept",
    date: "August 22, 2025",
  },
  {
    title: "Anas Al-Sharif's Enduring Legacy and the Gaza Genocide",
    url: "https://politicstoday.org/anas-al-sharifs-enduring-legacy-and-the-gaza-genocide/",
    publication: "Politics Today",
    date: "2025",
  },
  {
    title: "Those With Chronic Illness in Gaza Say They're Denied a Bare Minimum to Survive",
    url: "https://truthout.org/articles/those-with-chronic-illness-in-gaza-say-theyre-denied-a-bare-minimum-to-survive/",
    publication: "Truthout",
    date: "2025",
  },
  {
    title: "Hunger in Gaza Can't Be Explained Away by Preexisting Conditions",
    url: "https://theintercept.com/2025/08/04/gaza-famine-diabetes-illness-medication",
    publication: "The Intercept",
    date: "August 4, 2025",
  },

  {
    title: "Gaza's sick trapped between war, hunger, and lack of medicine",
    url: "https://www.newarab.com/features/gazas-sick-trapped-between-war-hunger-and-lack-medicine",
    publication: "The New Arab",
    date: "2025",
  },
  {
    title: "Hunger kills a child in Gaza, but it is world leaders who should be dying of shame",
    url: "https://www.middleeasteye.net/opinion/gaza-hunger-killing-us-where-is-world-not-forgive-or-forget ",
    publication: "Middle East Eyet",
    date: "2025",
  },

  {
    title: "Israel's digital siege of Gaza is another effort to wipe out proof of our existence",
    url: "https://prismreports.org/2025/07/24/israels-digital-siege-of-gaza-is-another-effort-to-wipe-out-proof-of-our-existence/",
    publication: "Prism Reports",
    date: "July 24, 2025",
  },
  {
    title: "'Did you eat today?': Voices of Gaza speak of starvation and survival",
    url: "https://www.aljazeera.com/features/2025/7/24/did-you-eat-today-voices-of-gaza-speak-of-starvation-and-survival",
    publication: "Al Jazeera",
    date: "July 24, 2025",
  },
  {
    title: "When the Classroom Is a Tent and the Dream Is Survival",
    url: "https://www.palestine-studies.org/en/node/1657624",
    publication: "Institute for Palestine Studies",
    date: "2025",
  },
  {
    title: "Tawjihi Under Fire: The Resilience of Gaza's Students",
    url: "https://massreview.org/2025/07/18/tawjihi-under-fire-the-resilience-of-gazas-students/",
    publication: "The Massachusetts Review",
    date: "July 18, 2025",
  },
  {
    title: "A true ceasefire, or just more waiting?",
    url: "https://www.middleeastmonitor.com/20250707-a-true-ceasefire-or-just-more-waiting/",
    publication: "Middle East Monitor",
    date: "July 7, 2025",
  },
  {
    title: "War on Gaza: When friends become names you whisper to the sky",
    url: "https://www.middleeasteye.net/opinion/war-gaza-when-friends-become-names-you-whisper-sky",
    publication: "Middle East Eye",
    date: "2025",
  },
  {
    title: "A Voice That Defied Silence: The Legacy of Dr. Refaat Al-Areer",
    url: "https://themarkaz.org/a-voice-that-defied-silence-the-legacy-of-dr-refaat-al-areer/",
    publication: "The Markaz Review",
    date: "2025",
  },
  {
    title: "In Gaza, the Israelis are staging Hunger Games",
    url: "https://aje.io/65q965",
    publication: "Al Jazeera",
    date: "2025",
  },
  {
    title: "From the Rubble of Gaza, I Still Search for Joy: An Eid without My Loved Ones",
    url: "https://www.palestinechronicle.com/from-the-rubble-of-gaza-i-still-search-for-joy-an-eid-without-my-loved-ones/",
    publication: "The Palestine Chronicle",
    date: "2025",
  },
  {
    title: "Children of Gaza: Growing Up Amid War and Hunger",
    url: "https://www.middleeastmonitor.com/20250531-children-of-gaza-growing-up-amid-war-and-hunger/",
    publication: "Middle East Monitor",
    date: "May 31, 2025",
  },
  {
    title: "Doaa: From a Dreamworld to the Ashes of Displacement",
    url: "https://themarkaz.org/doaa-from-a-dreamworld-to-the-ashes-of-displacement/",
    publication: "The Markaz Review",
    date: "2025",
  },
  {
    title: "E-learning under fire",
    url: "https://wearenotnumbers.org/e-learning-under-fire/",
    publication: "We Are Not Numbers",
    date: "2025",
  },
  {
    title: "My room is a time capsule",
    url: "https://wearenotnumbers.org/my-room-is-a-time-capsule/",
    publication: "We Are Not Numbers",
    date: "2025",
  },
  {
    title: "Longing for a bag of chips amid a famine",
    url: "https://wearenotnumbers.org/longing-for-a-bag-of-chips-amid-a-famine/",
    publication: "We Are Not Numbers",
    date: "2025",
  },
  {
    title: "Longing for a bag of chips amid a famine",
    url: "https://www.wrmea.org/dispatches-from-gaza/longing-for-a-bag-of-chips-amid-a-famine.html",
    publication: "Washington Report on Middle East Affairs",
    date: "2025",
  },
  {
    title: "We lost them in this life, but in the next, we will hold them forever",
    url: "https://wearenotnumbers.org/we-lost-them-in-this-life-but-in-the-next-we-will-hold-them-forever/",
    publication: "We Are Not Numbers",
    date: "2025",
  },
  {
    title: "An ode to Rafah, as Israel orders the city to evacuate once again",
    url: "https://mondoweiss.net/2025/04/an-ode-to-rafah-as-israel-orders-the-city-to-evacuate-once-again/",
    publication: "Mondoweiss",
    date: "April 2025",
  },
  {
    title: "Rain and ruin: life inside a Gaza tent",
    url: "https://wearenotnumbers.org/rain-and-ruin-life-inside-a-gaza-tent/",
    publication: "We Are Not Numbers",
    date: "2025",
  },
  {
    title: "The University of My Dreams",
    url: "https://wearenotnumbers.org/the-university-of-my-dreams/",
    publication: "We Are Not Numbers",
    date: "2025",
  },
  {
    title: "The University of My Dreams",
    url: "https://www.wrmea.org/israel-palestine/the-university-of-my-dreams.html",
    publication: "Washington Report on Middle East Affairs",
    date: "2025",
  },
  {
    title: "Gaza's children make-believe a better future",
    url: "https://wearenotnumbers.org/gazas-children-make-believe-a-better-future/",
    publication: "We Are Not Numbers",
    date: "2025",
  },
  {
    title: "Gaza will still be here when the nightmare ends",
    url: "https://mondoweiss.net/2025/03/gaza-will-still-be-here-when-the-nightmare-ends/",
    publication: "Mondoweiss",
    date: "March 2025",
  },
  {
    title: "Gaza Will Not Die': Faith and Resilience amidst the Carnage",
    url: "https://www.palestinechronicle.com/gaza-will-not-die-faith-and-resilience-amidst-the-carnage/",
    publication: "The Palestine Chronicle",
    date: "2025",
  },
  {
    title: "Celebrating Ramadan in Gaza with hope rooted in our hearts",
    url: "https://wearenotnumbers.org/celebrating-ramadan-in-gaza-with-hope-rooted-in-our-hearts/",
    publication: "We Are Not Numbers",
    date: "2025",
  },
  {
    title: "Eternal in our hearts – my uncle and his children",
    url: "https://wearenotnumbers.org/eternal-in-our-hearts-my-uncle-and-his-children/",
    publication: "We Are Not Numbers",
    date: "2025",
  },
  {
    title: "Marking a birthday amid a suspended life",
    url: "https://electronicintifada.net/content/marking-birthday-amid-suspended-life/50425",
    publication: "Electronic Intifada",
    date: "2025",
  },
  {
    title: "Immortal memories of my friend Shimaa Saidam",
    url: "https://wearenotnumbers.org/immortal-memories-of-my-friend-shimaa-saidam/",
    publication: "We Are Not Numbers",
    date: "2025",
  },
]

const poemsData = [
  {
    title: "What the body remembers",
    url: "https://wearenotnumbers.org/what-the-body-remembers/",
    publication: "We Are Not Numbers",
    description: "A powerful poem about memory and trauma",
  },
  {
    title: "I Long for My Old World – A Poem from Gaza",
    url: "https://www.palestinechronicle.com/i-long-for-my-old-world-a-poem-from-gaza/",
    publication: "The Palestine Chronicle",
    description: "A poem from Gaza about longing and loss",
  },
  {
    title: "I MISS MY OLD LIFE",
    url: "https://www.instagram.com/p/DKcrTsHto9A/",
    publication: "Instagram",
    description: "Reflecting on life before the war",
  },
  {
    title: "SAUDADE: A POEM OF GRIEF AND RESILIENCE",
    url: "https://www.instagram.com/p/DK2x5-RtkeP/",
    publication: "Instagram",
    description: "Featured on KPFA radio and read twice due to its powerful impact",
  },
  {
    title: "THREE DAYS OF ISOLATION",
    url: "https://www.instagram.com/p/DK7l_HstXK7/",
    publication: "Instagram",
    description: "Featured and read by Shambhavi on the platform Kindred 108",
  },
  {
    title: "Alone but Unbroken: Gaza's Cry Against Silence",
    url: "https://www.instagram.com/p/DLMhKL1Nfe-/",
    publication: "Instagram",
    description: "A cry against the world's silence",
  },
  {
    title: "A Battle No One Sees",
    url: "https://www.instagram.com/p/DLUHaA1NXks/",
    publication: "Instagram",
    description: "About invisible struggles",
  },
  {
    title: "TO BE OR NOT TO BE — THE ENDLESS DUEL",
    url: "https://www.instagram.com/p/DLk9oletAoW/",
    publication: "Instagram",
    description: "An existential reflection on survival",
  },
  {
    title: "This Is Slow Death",
    url: "https://www.instagram.com/p/DLw0L90tOg7/",
    publication: "Instagram",
    description: "About the gradual erosion of hope",
  },
  {
    title: "Blind world",
    url: "https://www.instagram.com/p/DL9j2bDtk-K/",
    publication: "Instagram",
    description: "Featured on KPFA radio in California",
  },
  {
    title: "Free bird",
    url: "https://www.instagram.com/p/DMM4-sINLk5/",
    publication: "Instagram",
    description: "About freedom and hope",
  },
  {
    title: "Alone but Unbroken: Gaza's Cry Against Silence",
    url: "https://baladimagazine.com/alone-but-unbroken-gazas-cry-against-silence/",
    publication: "Baladi Magazine",
    date: "July 19, 2025",
    description: "Published in Baladi Magazine",
  },
  {
    title: "Blind World",
    url: "https://www.gazapoets.org/blog/blind-world-taqwa-al-wawi",
    publication: "Gaza Poets Society",
    description: "Featured on Gaza Poets Society website",
  },
  {
    title: "I Miss My Old Life",
    url: "https://www.gazapoets.org/blog/i-miss-my-old-life-taqwa-al-wawi",
    publication: "Gaza Poets Society",
    description: "Featured on Gaza Poets Society website",
  },
  {
    title: "Famine by Design",
    url: "https://www.gazapoets.org/blog/dispatches-from-a-manmade-famine-taqwa-al-wawi",
    publication: "Gaza Poets Society",
    description: "Dispatches from a manmade famine",
  },
  {
    title: "Saudade: A Poem of Grief and Resilience",
    url: "https://baladimagazine.com/saudade-a-poem-of-grief-and-resilience/",
    publication: "Baladi Magazine",
    description: "A powerful poem about grief and resilience",
  },
  {
    title: "If I Must Fall, You Must Rise",
    url: "https://www.instagram.com/reel/DNhdQF0ursS/",
    publication: "Gaza's Creative Allies",
    description: "Read by Ary Madera-Reber as part of Gaza's Creative Allies",
  },
  {
    title: "Three Days of Isolation",
    url: "https://www.kindred108.love/p/reading-palestinian-poets",
    publication: "Kindred 108",
    description: "Reading starts at minute 2:00 and goes until 3:35",
  },
  {
    title: "Blind World - KPFA Reading",
    url: "https://kpfa.org/player/",
    publication: "KPFA Radio California",
    description: "Read on KPFA in California, starting at minute 54 of August 19 episode",
  },
  {
    title: "Saudade - KPFA Reading",
    url: "https://KPFA.org",
    publication: "KPFA Radio California",
    description: "Read on KPFA on August 12, about 40 minutes into the program, lasting 10 minutes",
  },
]

const translationsData = [
  {
    title: "Ode à Rafah",
    url: "https://www.chroniquepalestine.com/ode-a-rafah-alors-que-israeliens-ordonnent-nouvelle-fois-evacuation-ville/",
    publication: "Chronique Palestine",
    language: "French",
  },
  {
    title: "Gaza ne mourra pas",
    url: "https://www.chroniquepalestine.com/gaza-ne-mourra-pas-sa-foi-et-sa-resilience-survivront-aux-massacres/",
    publication: "Chronique Palestine",
    language: "French",
  },
  {
    title: "Al Jazeera Balkans Articles",
    url: "https://balkans.aljazeera.net/author/taqwa-ahmed-al-wawi",
    publication: "Al Jazeera Balkans",
    language: "Bosnian",
  },
  {
    title: "A Gaza gli israeliani stanno organizzando dei giochi della fame",
    url: "https://www.assopacepalestina.org/2025/07/02/a-gaza-gli-israeliani-stanno-organizzando-dei-giochi-della-fame/",
    publication: "Assopace Palestina",
    language: "Italian",
  },
  {
    title: "Gazzeden açlık ve hayatta kalma mücadelesi sesleri",
    url: "https://www.haksozhaber.net/gazzeden-aclik-ve-hayatta-kalma-mucadelesi-sesleri-siz-bugun-yemek-yediniz-mi-192717h.htm",
    publication: "Haksoz Haber",
    language: "Turkish",
  },
  {
    title: "Als eten niet meer naar thuis smaakt",
    url: "https://marcada.nl/podiumvoorpalestina/2025/04/01/als-eten-niet-meer-naar-thuis-smaakt-doha-kahlout-2/",
    publication: "Marcada",
    language: "Dutch",
  },
  {
    title: "Arkadaşların isimlere dönüştüğünde gökyüzüne fısıldarsın",
    url: "https://www.haksozhaber.net/arkadaslarin-isimlere-donustugunde-gokyuzune-fisildarsin-192060h.htm",
    publication: "Haksoz Haber",
    language: "Turkish",
  },
  {
    title: "On samo želi jedan mali komad hljeba",
    url: "https://n1info.ba/svijet/on-samo-zeli-jedan-mali-komad-hljeba-doha-kahlout-2/",
    publication: "N1 Info",
    language: "Bosnian",
  },
  {
    title: "Gaza war whisper sky israeli bombs futures",
    url: "https://erudite.news/fr/technologie/articles/1016576201751728415/gaza_war_whisper_sky_israeli_bombs_futures/",
    publication: "Erudite News",
    language: "French",
  },
]

const republishedArticlesData = [
  {
    title: "Featured on Qoshe",
    url: "https://qoshe.com/yazar/taqwa-ahmed-al-wawi/3185989",
    originalPublication: "Various",
    republishedIn: "Qoshe",
    description: "Multiple Languages - Author profile featuring multiple articles",
  },
  {
    title: "PRDAD Feature",
    url: "https://www.dci.plo.ps/en/article/26045/June-6,-2025---The-Palestine-Chronicle-From-the-Rubb",
    originalPublication: "The Palestine Chronicle",
    republishedIn: "Palestinian Return and Diaspora Affairs Department",
    description: "From the Rubble of Gaza article featured by PRDAD",
  },
  {
    title: "Gaza: Marking a Birthday Amid a Suspended Life",
    url: "https://palestina-komitee.nl/gaza-marking-a-birthday-amid-a-suspended-life/",
    originalPublication: "Electronic Intifada",
    republishedIn: "Palestina Komitee",
    description: "Article republished by Palestina Komitee in Dutch",
  },
  {
    title: "Muck Rack Profile",
    url: "https://muckrack.com/taqwa-ahmed-al-wawi/articles",
    originalPublication: "Various",
    republishedIn: "Muck Rack",
    description: "Journalist profile with comprehensive article collection",
  },
  {
    title: "Gaza Will Not Die: Faith and Resilience Amidst the Carnage",
    url: "https://israel.timesofnews.com/political/gaza-will-not-die-faith-and-resilience-amidst-the-carnage.html",
    originalPublication: "The Palestine Chronicle",
    republishedIn: "Israel Times of News",
    description: "Article republished by Israel Times of News",
  },
  {
    title: "Al Jazeera YouTube Feature",
    url: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://m.youtube.com/post/Ugkx4sxL8wJVGP07_JZwYgqBiEmGibuhgMNr&ved=2ahUKEwjxz4m34NeOAxWfHRAIHWbvHV44HhAWegQILhAB&sqi=2&usg=AOvVaw2WL_gSOgXALrrSDUqk1qKG",
    originalPublication: "Various",
    republishedIn: "Al Jazeera YouTube",
    description: "Article featured on Al Jazeera's YouTube channel in Arabic",
  },
  {
    title: "A True Ceasefire, or Just More Waiting?",
    url: "https://www.qatar-tribune.com/article/184537/opinion/a-true-ceasefire-or-just-more-waiting",
    originalPublication: "Middle East Monitor",
    republishedIn: "Qatar Tribune",
    description: "Opinion piece republished by Qatar Tribune",
  },
  {
    title: "Israelis Are Staging Hunger Games in Gaza",
    url: "https://www.stopwar.org.uk/article/israelis-are-staging-hunger-games-in-gaza/",
    originalPublication: "Al Jazeera",
    republishedIn: "The Stop The War Coalition",
    description: "Article republished by Stop The War Coalition",
  },
  {
    title: "Middle East Mentor YouTube Feature",
    url: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/post/UgkxzwE3ZSqnb-9pkT99tXaUGo9MJpYikBFc&ved=2ahUKEwjzs8Xf49eOAxWIIBAIHQ27Nlc4MhAWegQIJBAB&sqi=2&usg=AOvVaw2eMvTmZGV7NCcjo2lM0-U2",
    originalPublication: "Various",
    republishedIn: "Middle East Mentor YouTube",
    description: "Article featured on Middle East Mentor's YouTube channel in Arabic",
  },
  {
    title: "Did You Eat Today?: Voices of Gaza",
    url: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.yahoo.com/news/articles/did-eat-today-voices-gaza-072422137.html&ved=2ahUKEwj-lLz_49eOAxWMKhAIHQ27Nlc4PBAWegQIJBAB&sqi=2&usg=AOvVaw0HwYuYXcmLBH2JWTlWaq20",
    originalPublication: "Al Jazeera",
    republishedIn: "Yahoo News",
    description: "Voices of Gaza speak of starvation and survival - republished by Yahoo News",
  },
  {
    title: "Academic Profile",
    url: "https://www.semanticscholar.org/author/Taqwa-Ahmed/3025423",
    originalPublication: "Various",
    republishedIn: "Semantic Scholar",
    description: "Academic profile with research publications and citations",
  },
]

const podcastsData = [
  {
    title: "We have education as our weapon' - EAP for Social Justice podcast from Gaza",
    podcastName: "From Activism to Actionable: EAP for Social Justice",
    url: "https://open.spotify.com/episode/6P3RcD6uQJFJZWZ0aiAI3B?si=0Be_wq0CRzWlXmCn_qV75w",
    date: "11/2/2025",
    platform: "Spotify",
  },
  {
    title: "Writing Our Stories – Taqwa Al-Wawi",
    podcastName: "The Echo Chamber from Tortoise Shack",
    url: "https://open.spotify.com/episode/284wz5m8vx7LH7GBi0Ikiq?si=g1SpOYFiS22BIZuZ8y0cLA",
    date: "7/8/2025",
    platform: "Spotify",
  },
  {
    title: "We hear about the warnings of mass starvation in Gaza",
    podcastName: "BBC World Service - BBC OS, Gaza mass starvation warning",
    url: "https://www.bbc.co.uk/programmes/w173067qhlkv23r",
    date: "2/5/2025",
    platform: "BBC",
  },
  {
    title: "Peaceful sleep is a dream in war zones",
    podcastName: "International public radio news program",
    url: "https://theworld.org/segments/2025/08/26/peaceful-sleep-is-a-dream-in-war-zones",
    date: "26/8/2025",
    platform: "The World",
  },
]

// Variables for pagination
let articlesDisplayed = 0
let poemsDisplayed = 0
let translationsDisplayed = 0
let republishedDisplayed = 0
let podcastsDisplayed = 0
const itemsPerLoad = 6

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  loadArticles()
  loadPoems()
  loadTranslations()
  loadRepublishedArticles()
  loadPodcasts()

  // Add event listeners for load more buttons
  document.getElementById("load-more-articles").addEventListener("click", loadMoreArticles)
  document.getElementById("load-more-poems").addEventListener("click", loadMorePoems)
  document.getElementById("load-more-translations")?.addEventListener("click", loadMoreTranslations)
  document.getElementById("load-more-republished")?.addEventListener("click", loadMoreRepublishedArticles)
  document.getElementById("load-more-podcasts")?.addEventListener("click", loadMorePodcasts)

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        /* Increased navbar height offset for better section visibility */
        const navbarHeight = 100
        const targetPosition = target.offsetTop - navbarHeight
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
})

function createCard(item, type) {
  const card = document.createElement("div")
  card.className = "col-lg-4 col-md-6 mb-4"

  let cardContent = ""

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
            `
      break

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
            `
      break

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
                            Read Article <i class="fas fa-external-link-alt ms-1"></i>
                        </a>
                    </div>
                </div>
            `
      break

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
                            Read Article <i class="fas fa-external-link-alt ms-1"></i>
                        </a>
                    </div>
                </div>
            `
      break

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
            `
      break
  }

  card.innerHTML = cardContent
  return card
}

function loadArticles() {
  const container = document.getElementById("articles-container")
  const articlesToShow = articlesData.slice(articlesDisplayed, articlesDisplayed + itemsPerLoad)

  articlesToShow.forEach((article) => {
    const card = createCard(article, "article")
    container.appendChild(card)
  })

  articlesDisplayed += articlesToShow.length

  // Hide load more button if all articles are displayed
  if (articlesDisplayed >= articlesData.length) {
    document.getElementById("load-more-articles").style.display = "none"
  }
}

function loadMoreArticles() {
  loadArticles()
}

function loadPoems() {
  const container = document.getElementById("poems-container")
  const poemsToShow = poemsData.slice(poemsDisplayed, poemsDisplayed + itemsPerLoad)

  poemsToShow.forEach((poem) => {
    const card = createCard(poem, "poem")
    container.appendChild(card)
  })

  poemsDisplayed += poemsToShow.length

  // Hide load more button if all poems are displayed
  if (poemsDisplayed >= poemsData.length) {
    document.getElementById("load-more-poems").style.display = "none"
  }
}

function loadMorePoems() {
  loadPoems()
}

function loadTranslations() {
  const container = document.getElementById("translations-container")
  const translationsToShow = translationsData.slice(translationsDisplayed, translationsDisplayed + itemsPerLoad)

  translationsToShow.forEach((translation) => {
    const card = createCard(translation, "translation")
    container.appendChild(card)
  })

  translationsDisplayed += translationsToShow.length

  // Hide load more button if all translations are displayed
  const loadMoreBtn = document.getElementById("load-more-translations")
  if (loadMoreBtn && translationsDisplayed >= translationsData.length) {
    loadMoreBtn.style.display = "none"
  }
}

function loadMoreTranslations() {
  loadTranslations()
}

function loadRepublishedArticles() {
  const container = document.getElementById("republished-container")
  if (!container) return // Exit if container doesn't exist

  const articlesToShow = republishedArticlesData.slice(republishedDisplayed, republishedDisplayed + itemsPerLoad)

  articlesToShow.forEach((article) => {
    const card = createCard(article, "republished")
    container.appendChild(card)
  })
  republishedDisplayed += articlesToShow.length

  // Hide load more button if all republished articles are displayed
  const loadMoreBtn = document.getElementById("load-more-republished")
  if (loadMoreBtn && republishedDisplayed >= republishedArticlesData.length) {
    loadMoreBtn.style.display = "none"
  }
}

function loadMoreRepublishedArticles() {
  loadRepublishedArticles()
}

function loadPodcasts() {
  const container = document.getElementById("podcasts-container")
  if (!container) return // Exit if container doesn't exist

  const podcastsToShow = podcastsData.slice(podcastsDisplayed, podcastsDisplayed + itemsPerLoad)

  podcastsToShow.forEach((podcast) => {
    const card = createCard(podcast, "podcast")
    container.appendChild(card)
  })

  podcastsDisplayed += podcastsToShow.length

  // Hide load more button if all podcasts are displayed
  const loadMoreBtn = document.getElementById("load-more-podcasts")
  if (loadMoreBtn && podcastsDisplayed >= podcastsData.length) {
    loadMoreBtn.style.display = "none"
  }
}

function loadMorePodcasts() {
  loadPodcasts()
}

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(33, 37, 41, 0.95)"
  } else {
    navbar.style.backgroundColor = "#212529"
  }
})
