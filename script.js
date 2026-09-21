function waLink(number, message) {
  return "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
}

function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}

function setupCommon() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  const bio = document.getElementById("heroBio");
  if (bio) bio.textContent = SITE.bio;

  const about = document.getElementById("aboutBio");
  if (about) about.textContent = SITE.bio;

  const contact = document.getElementById("contactBio");
  if (contact) contact.textContent = SITE.bio;

  const email = document.getElementById("email");
  if (email) email.textContent = SITE.email;

  const heroImg = document.getElementById("heroImage");
  if (heroImg) heroImg.src = SITE.heroImage;

  const heroWa = document.getElementById("heroWhatsApp");
  if (heroWa) {
    heroWa.href = waLink(
      SITE.whatsapp1,
      SITE.whatsappMessage
    );
  }

  const w1 = document.getElementById("wa1");
  if (w1) {
    w1.href = waLink(
      SITE.whatsapp1,
      SITE.whatsappMessage
    );
  }

  const w2 = document.getElementById("wa2");
  if (w2) {
    w2.href = waLink(
      SITE.whatsapp2,
      SITE.whatsappMessage
    );
  }
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");

  if (!grid) return;

  if (!PRODUCTS.length) {
    grid.innerHTML = `
      <div class="empty">
        <strong>Your products will appear here.</strong>
        <span class="muted">
          Open <b>config.js</b> and add your product details when you're ready.
        </span>
      </div>
    `;
    return;
  }

  grid.innerHTML = PRODUCTS.map((p, i) => `
    <article class="product">
      <img
        src="${p.image}"
        alt="${p.name}"
        onerror="this.src='assets/logo.jpg'"
      >

      <div class="product-body">

        ${
          p.badge
            ? `<div class="eyebrow">${p.badge}</div>`
            : ""
        }

        <h3>${p.name}</h3>

        <div class="price">
          ${p.price}
          ${
            p.oldPrice
              ? `<span class="old">${p.oldPrice}</span>`
              : ""
          }
        </div>

        <p>${p.description || ""}</p>

        <div class="buttons">

          <a
            class="btn btn-primary"
            target="_blank"
            href="${waLink(
              SITE.whatsapp1,
              `Hi! I want to order ${p.name}.`
            )}"
          >
            Order Now
          </a>

          <a
            class="btn btn-secondary"
            target="_blank"
            href="${waLink(
              SITE.whatsapp2,
              `Hi! I want to order ${p.name}.`
            )}"
          >
            WhatsApp 2
          </a>

        </div>
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  setupCommon();
  renderProducts();
});
