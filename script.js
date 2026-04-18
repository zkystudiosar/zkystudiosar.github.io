document.addEventListener("DOMContentLoaded", () => {

/* =========================
   HAMBURGER MENU
========================= */
const hamburgerBtn = document.getElementById("hamburger-btn")
const mobileMenu = document.getElementById("mobile-menu")

hamburgerBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("open")
  if(isOpen){
    closeMenu()
  } else {
    mobileMenu.classList.add("open")
    hamburgerBtn.classList.add("open")
  }
})

document.addEventListener("click", (e) => {
  if(!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)){
    closeMenu()
  }
})


/* =========================
   SMOOTH SCROLL WITH OFFSET
========================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href")
    if(targetId === "#") return
    const target = document.querySelector(targetId)
    if(!target) return
    e.preventDefault()
    const navbarHeight = document.querySelector(".navbar").offsetHeight
    const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20
    window.scrollTo({ top, behavior: "smooth" })
  })
})

/* =========================
   SCROLL REVEAL
========================= */
const sections = document.querySelectorAll(".section")
const revealSections = () => {
  sections.forEach(section => {
    if(section.getBoundingClientRect().top < window.innerHeight - 100){
      section.classList.add("visible")
    }
  })
}
window.addEventListener("scroll", revealSections)
revealSections()


/* =========================
   LANGUAGE TOGGLE
========================= */
const translations = {
  en: {
    ecosystemTitle: "Product Ecosystem",
    servicesTitle: "Professional Services",
    analyticsTitle: "Ecosystem Metrics",
    partnersTitle: "Exclusive Partners",
    partnersSub: "MULTIMEDIA DEVELOPMENT & STRATEGIC PARTNERS",
    heroSub: "Technology Venture Studio — Digital Ecosystems",
    backBtn: "← Back to Ecosystem",
    labelPublished: "PUBLISHED APPS",
    labelDev: "APPS IN DEVELOPMENT",
    labelProfiles: "PROFILES",
    labelChannels: "CHANNELS",
    chartLabels: ["Published Apps","Apps in Development","Profiles","Channels"],
  },
  es: {
    ecosystemTitle: "Ecosistema de Productos",
    servicesTitle: "Servicios Profesionales",
    analyticsTitle: "Métricas del Ecosistema",
    partnersTitle: "Socios Exclusivos",
    partnersSub: "DESARROLLO MULTIMEDIA Y SOCIOS ESTRATÉGICOS",
    heroSub: "Estudio de Ventures Tecnológico — Ecosistemas Digitales",
    backBtn: "← Volver al Ecosistema",
    labelPublished: "APPS PUBLICADAS",
    labelDev: "APPS EN DESARROLLO",
    labelProfiles: "PERFILES",
    labelChannels: "CANALES",
    chartLabels: ["Apps Publicadas","Apps en Desarrollo","Perfiles","Canales"],
  }
}

let currentLang = "en"
let chartInstance = null

const langBtn = document.getElementById("lang-btn")
const langLabel = document.getElementById("lang-label")
const langFlag = document.getElementById("lang-flag")

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en"
  langLabel.textContent = currentLang.toUpperCase()
  langFlag.textContent = currentLang === "es" ? "🇪🇸" : "🇺🇸"
  applyTranslations()
})

function applyTranslations(){
  const t = translations[currentLang]
  const titles = document.querySelectorAll(".section h2")
  titles[0].textContent = t.ecosystemTitle
  titles[1].textContent = t.partnersTitle
  titles[2].textContent = t.servicesTitle
  titles[3].textContent = t.analyticsTitle

  document.querySelector(".section-sub").textContent = t.partnersSub
  document.querySelector(".hero p").textContent = t.heroSub
  document.querySelector("#back-btn").textContent = t.backBtn

  const metricLabels = document.querySelectorAll(".metric-label")
  if(metricLabels[0]) metricLabels[0].textContent = t.labelPublished
  if(metricLabels[1]) metricLabels[1].textContent = t.labelDev
  if(metricLabels[2]) metricLabels[2].textContent = t.labelProfiles
  if(metricLabels[3]) metricLabels[3].textContent = t.labelChannels

  if(chartInstance){
    chartInstance.data.labels = t.chartLabels
    chartInstance.update()
  }
}


/* =========================
   PRODUCT DATA
========================= */
const products = {
  fitgotchi: {
    name: "FitGotchi",
    sector: "Health & Wellness",
    status: "dev",
    statusLabel: "In Development",
    release: "Q3 2026",
    desc: "FitGotchi merges the world of virtual pets with your daily fitness routine. Your pet grows as you move, encouraging a healthier lifestyle through play.",
    features: ["Step tracking integration","Virtual pet evolution","Social challenges"],
    link: null,
    iconType: "pulse"
  },
  mychecklist: {
    name: "MyCheckList",
    sector: "Health & Wellness",
    status: "beta",
    statusLabel: "Beta",
    release: null,
    desc: "A streamlined tool designed to help you organize your daily tasks and build lasting habits with a focus on mental well-being.",
    features: ["Custom habit loops","Progress analytics","Smart notifications"],
    link: "#",
    iconType: "pulse"
  },
  parabien: {
    name: "ParaBienSalud",
    sector: "Health & Wellness",
    status: "active",
    statusLabel: "Active",
    release: null,
    desc: "A comprehensive health ecosystem bringing together wellness tools, resources and a community focused on holistic well-being.",
    features: ["Health dashboard","Community forums","Expert content"],
    link: "#",
    iconType: "pulse"
  },
  perspectiveapp: {
    name: "PerspectiveApp",
    sector: "Media & Information",
    status: "active",
    statusLabel: "Active",
    release: null,
    desc: "A new way to consume media. PerspectiveApp surfaces diverse viewpoints on any topic, helping you build a fuller picture of the world.",
    features: ["Multi-source feed","Bias detection","Personalized topics"],
    link: "#",
    iconType: "screen"
  },
  perspectivnews: {
    name: "PerspectiveNews",
    sector: "Media & Information",
    status: "active",
    statusLabel: "Active",
    release: null,
    desc: "Unbiased global news aggregation. PerspectiveNews delivers stories from across the political and geographic spectrum.",
    features: ["Global coverage","Topic clustering","Daily digest"],
    link: "#",
    iconType: "screen"
  },
  perspectivecrypto: {
    name: "PerspectiveCrypto",
    sector: "Media & Information",
    status: "active",
    statusLabel: "Active",
    release: null,
    desc: "Real-time crypto market insights with contextual news, sentiment analysis and portfolio tracking.",
    features: ["Live market data","Sentiment analysis","Portfolio tracker"],
    link: "#",
    iconType: "screen"
  },
  greenharvest: {
    name: "GreenHarvest",
    sector: "AgroTech",
    status: "beta",
    statusLabel: "Beta",
    release: null,
    desc: "A smart agriculture platform connecting farmers with data-driven insights, weather forecasting and market intelligence.",
    features: ["Crop monitoring","Weather integration","Market prices"],
    link: "https://greenharvest-1068068752191.us-west1.run.app",
    iconType: "globe"
  },
  clubdepromos: {
    name: "ClubDePromos",
    sector: "Digital Platforms",
    status: "active",
    statusLabel: "Active",
    release: null,
    desc: "Exclusive promotions hub aggregating the best deals, discounts and offers from brands across Latin America.",
    features: ["Deal aggregation","Push alerts","Brand partnerships"],
    link: "https://www.clubdepromos.com",
    iconType: "globe"
  },
  zkymusic: {
    name: "ZkyMusic.mp3",
    sector: "Music & Entertainment",
    status: "active",
    statusLabel: "Active",
    release: null,
    desc: "An independent music channel showcasing emerging artists and curated playlists across multiple streaming platforms.",
    features: ["Artist showcasing","Curated playlists","Multi-platform"],
    link: "https://www.youtube.com/@zkymusic.mp3",
    iconType: "music"
  },
  orb: {
    name: "Orb Travel",
    sector: "Tools & Extensions",
    status: "beta",
    statusLabel: "Beta",
    release: null,
    desc: "A powerful travel companion app bringing smart itineraries, local discovery and AI assistance wherever you go.",
    features: ["Smart itineraries","Local discovery","AI assistance"],
    link: "https://orbtravel-111168948930.us-west1.run.app/",
    iconType: "pulse"
  },
  mychecklist: {
    name: "MyCheckList",
    sector: "Health & Wellness",
    status: "beta",
    statusLabel: "Beta",
    release: null,
    desc: "A streamlined tool designed to help you organize your daily tasks and build lasting habits with a focus on mental well-being.",
    features: ["Custom habit loops","Progress analytics","Smart notifications"],
    link: "https://mychecklist-575689633340.us-west1.run.app",
    iconType: "pulse"
  },
  parabien: {
    name: "ParaBienSalud",
    sector: "Health & Wellness",
    status: "active",
    statusLabel: "Active",
    release: null,
    desc: "A comprehensive health ecosystem bringing together wellness tools, resources and a community focused on holistic well-being.",
    features: ["Health dashboard","Community forums","Expert content"],
    link: "https://www.facebook.com/ParaBienSalud",
    iconType: "pulse"
  },
  perspectiveapp: {
    name: "PerspectiveApp",
    sector: "Media & Information",
    status: "active",
    statusLabel: "Active",
    release: null,
    desc: "A new way to consume media. PerspectiveApp surfaces diverse viewpoints on any topic, helping you build a fuller picture of the world.",
    features: ["Multi-source feed","Bias detection","Personalized topics"],
    link: "https://www.youtube.com/@PerspectiveApp",
    iconType: "screen"
  },
  perspectivnews: {
    name: "PerspectiveNews",
    sector: "Media & Information",
    status: "active",
    statusLabel: "Active",
    release: null,
    desc: "Unbiased global news aggregation. PerspectiveNews delivers stories from across the political and geographic spectrum.",
    features: ["Global coverage","Topic clustering","Daily digest"],
    link: "https://www.youtube.com/@Perspective-news",
    iconType: "screen"
  },
  perspectivecrypto: {
    name: "PerspectiveCrypto",
    sector: "Media & Information",
    status: "active",
    statusLabel: "Active",
    release: null,
    desc: "Real-time crypto market insights with contextual news, sentiment analysis and portfolio tracking.",
    features: ["Live market data","Sentiment analysis","Portfolio tracker"],
    link: "https://www.youtube.com/@PerspectiveCrypto",
    iconType: "screen"
  },
  bonsai: {
    name: "The Bonsai Collection",
    sector: "Web3 & Metaverse",
    status: "dev",
    statusLabel: "In Development",
    release: "2026",
    desc: "A unique NFT metaverse project featuring generative bonsai art. Each piece is a living digital artifact with its own story, rarity and on-chain provenance.",
    features: ["Generative NFT art","Metaverse integration","On-chain provenance","Rarity system"],
    link: "https://the-bonsai-collection-995883041292.us-west1.run.app",
    iconType: "bonsai"
  }
}

const iconSVGs = {
  pulse: `<svg viewBox="0 0 24 24" fill="none" stroke="#2F6BFF" stroke-width="1.5" width="32" height="32"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  screen: `<svg viewBox="0 0 24 24" fill="none" stroke="#2F6BFF" stroke-width="1.5" width="32" height="32"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="#2F6BFF" stroke-width="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>`,
  music: `<svg viewBox="0 0 24 24" fill="none" stroke="#2F6BFF" stroke-width="1.5" width="32" height="32"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  bonsai: `<svg viewBox="0 0 24 24" fill="none" stroke="#2F6BFF" stroke-width="1.5" width="32" height="32"><path d="M12 22v-7"/><path d="M12 15c0 0-4-2-4-6a4 4 0 0 1 8 0c0 4-4 6-4 6z"/><path d="M12 10c0 0-2.5-1-2.5-4A2.5 2.5 0 0 1 12 3.5a2.5 2.5 0 0 1 2.5 2.5C14.5 9 12 10 12 10z"/><line x1="9" y1="22" x2="15" y2="22"/></svg>`
}


/* =========================
   PRODUCT OVERLAY
========================= */
const overlay = document.getElementById("product-overlay")
const backBtn = document.getElementById("back-btn")

document.querySelectorAll(".card[data-product]").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.product
    const p = products[key]
    if(!p) return
    openOverlay(p)
  })
})

function openOverlay(p){
  document.getElementById("ov-name").textContent = p.name
  document.getElementById("ov-sector").textContent = p.sector
  document.getElementById("ov-desc").textContent = p.desc
  document.getElementById("ov-icon").innerHTML = iconSVGs[p.iconType] || iconSVGs.pulse

  // Status badge
  const statusBadge = document.getElementById("ov-status-badge")
  const dotClass = p.status
  statusBadge.innerHTML = `<span class="dot ${dotClass}"></span> ${p.statusLabel}`

  // Release date
  const releaseWrap = document.getElementById("ov-release-wrap")
  if(p.release){
    releaseWrap.classList.remove("hidden")
    document.getElementById("ov-release").innerHTML =
      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F6BFF" stroke-width="2" style="margin-right:6px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${p.release}`
  } else {
    releaseWrap.classList.add("hidden")
  }

  // Action button
  const actionBtn = document.getElementById("ov-action-btn")
  if(p.link){
    actionBtn.textContent = "Open Project ↗"
    actionBtn.classList.remove("disabled")
    actionBtn.onclick = () => window.open(p.link, "_blank", "noopener,noreferrer")
  } else {
    actionBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> In Development`
    actionBtn.classList.add("disabled")
    actionBtn.onclick = null
  }

  // Features
  const grid = document.getElementById("ov-features-grid")
  grid.innerHTML = p.features.map(f =>
    `<div class="feature-item">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      ${f}
    </div>`
  ).join("")

  overlay.classList.remove("hidden")
  document.body.style.overflow = "hidden"
  requestAnimationFrame(() => overlay.classList.add("active"))
}

backBtn.addEventListener("click", closeOverlay)
overlay.addEventListener("click", (e) => {
  if(e.target === overlay) closeOverlay()
})
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeOverlay()
})

function closeOverlay(){
  overlay.classList.remove("active")
  setTimeout(() => {
    overlay.classList.add("hidden")
    document.body.style.overflow = ""
  }, 400)
}


/* =========================
   CHART.JS BAR CHART
========================= */
const chartCanvas = document.getElementById("ecosystemChart")
if(chartCanvas && typeof Chart !== "undefined"){
  chartInstance = new Chart(chartCanvas, {
    type: "bar",
    data: {
      labels: translations[currentLang].chartLabels,
      datasets: [{
        label: "ZKY Ecosystem",
        data: [8, 12, 5, 4],
        backgroundColor: [
          "rgba(47,107,255,0.75)",
          "rgba(47,107,255,0.9)",
          "rgba(47,107,255,0.6)",
          "rgba(47,107,255,0.5)"
        ],
        hoverBackgroundColor: "#2F6BFF",
        borderRadius: 8,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1600, easing: "easeOutQuart" },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(10,10,10,0.9)",
          borderColor: "rgba(47,107,255,0.3)",
          borderWidth: 1,
          titleColor: "#fff",
          bodyColor: "#9aa0aa",
          padding: 12
        }
      },
      scales: {
        x: {
          ticks: { color: "#666", font: { size: 13 } },
          grid: { display: false }
        },
        y: {
          beginAtZero: true,
          ticks: { color: "#666", stepSize: 3 },
          grid: { color: "rgba(255,255,255,0.04)" }
        }
      }
    }
  })
}


/* =========================
   NETWORK BACKGROUND
========================= */
const canvas = document.getElementById("network-bg")
if(canvas){
  const ctxNet = canvas.getContext("2d")
  let mouse = { x: null, y: null }

  function resizeCanvas(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resizeCanvas()
  window.addEventListener("resize", resizeCanvas)
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  })

  let particles = []
  const particleCount = 110
  for(let i = 0; i < particleCount; i++){
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4
    })
  }

  function animateNetwork(){
    ctxNet.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach(p => {
      p.x += p.vx
      p.y += p.vy
      if(p.x < 0 || p.x > canvas.width) p.vx *= -1
      if(p.y < 0 || p.y > canvas.height) p.vy *= -1

      ctxNet.beginPath()
      ctxNet.arc(p.x, p.y, 2, 0, Math.PI * 2)
      ctxNet.fillStyle = "rgba(47,107,255,0.85)"
      ctxNet.fill()

      particles.forEach(p2 => {
        const dx = p.x - p2.x
        const dy = p.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if(dist < 160){
          ctxNet.beginPath()
          ctxNet.moveTo(p.x, p.y)
          ctxNet.lineTo(p2.x, p2.y)
          ctxNet.strokeStyle = `rgba(47,107,255,${(1 - dist / 160) * 0.2})`
          ctxNet.stroke()
        }
      })

      if(mouse.x){
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if(dist < 180){
          ctxNet.beginPath()
          ctxNet.moveTo(p.x, p.y)
          ctxNet.lineTo(mouse.x, mouse.y)
          ctxNet.strokeStyle = `rgba(47,107,255,${(1 - dist / 180) * 0.35})`
          ctxNet.stroke()
        }
      }
    })
    requestAnimationFrame(animateNetwork)
  }
  animateNetwork()
}

})

function closeMenu(){
  const btn = document.getElementById("hamburger-btn")
  const menu = document.getElementById("mobile-menu")
  if(btn) btn.classList.remove("open")
  if(menu) menu.classList.remove("open")
}