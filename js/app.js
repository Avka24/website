/* ============================================
   APP.JS — AkaStore AI Tools Directory
   ============================================ */

let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'featured';
let currentPricingFilter = [];
let visibleCount = 12;
const PAGE_SIZE = 12;

/* ── Stars Helper ── */
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

/* ── Badge class ── */
function getBadgeClass(badge) {
  if (badge.includes('Hot')) return 'hot';
  if (badge.includes('Popular')) return 'popular';
  if (badge.includes('New')) return 'new';
  if (badge.includes('Top')) return 'top';
  return '';
}

/* ── Format reviews ── */
function formatReviews(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return n.toString();
}

/* ── Filter tools ── */
function getFilteredTools() {
  let tools = [...toolsData];

  if (currentCategory !== 'all') {
    tools = tools.filter(t => t.category === currentCategory);
  }

  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase();
    tools = tools.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.tagline.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }

  if (currentPricingFilter.length > 0) {
    tools = tools.filter(t => currentPricingFilter.includes(t.pricing));
  }

  switch (currentSort) {
    case 'featured':
      tools.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating);
      break;
    case 'rating':
      tools.sort((a, b) => b.rating - a.rating);
      break;
    case 'reviews':
      tools.sort((a, b) => b.reviews - a.reviews);
      break;
    case 'name':
      tools.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  return tools;
}

/* ── Render Featured Cards ── */
function renderFeatured() {
  const featured = toolsData.filter(t => t.featured).slice(0, 3);
  const container = document.getElementById('featured-grid');
  if (!container) return;

  container.innerHTML = featured.map(tool => `
    <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="featured-card" data-id="${tool.id}">
      <div class="featured-card-top">
        <div class="tool-icon-large">${tool.icon}</div>
        <span class="tool-badge ${getBadgeClass(tool.badge)}">${tool.badge}</span>
      </div>
      <h3>${tool.name}</h3>
      <div class="tagline">${tool.tagline}</div>
      <div class="description">${tool.description}</div>
      <div class="card-meta">
        <div class="rating">
          <span class="stars">${renderStars(tool.rating)}</span>
          <span class="rating-num">${tool.rating}</span>
          <span class="rating-count">(${formatReviews(tool.reviews)})</span>
        </div>
        <span class="pricing-badge ${tool.pricing === 'Free' || tool.pricing === 'Freemium' ? 'free' : ''}">${tool.pricingStart}</span>
      </div>
      <div class="card-cta">
        <span class="visit-btn">
          Visit Tool <span>→</span>
        </span>
        ${tool.affiliate ? '<span class="affiliate-tag">★ Affiliate</span>' : '<span></span>'}
      </div>
    </a>
  `).join('');
}

/* ── Render Tool Cards ── */
function renderTools() {
  const filtered = getFilteredTools();
  const visible = filtered.slice(0, visibleCount);
  const container = document.getElementById('tools-grid');
  const resultsEl = document.getElementById('results-count');
  const loadMoreWrap = document.getElementById('load-more-wrap');

  if (resultsEl) {
    resultsEl.innerHTML = `Showing <strong>${Math.min(visibleCount, filtered.length)}</strong> of <strong>${filtered.length}</strong> tools`;
  }

  if (!container) return;

  if (visible.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <span class="emoji">🔍</span>
        <h3>No tools found</h3>
        <p>Try a different search term or category.</p>
      </div>`;
    if (loadMoreWrap) loadMoreWrap.style.display = 'none';
    return;
  }

  container.innerHTML = visible.map((tool, i) => `
    <a href="${tool.url}" target="_blank" rel="noopener noreferrer"
       class="tool-card animate-in"
       style="animation-delay:${(i % PAGE_SIZE) * 0.05}s"
       data-id="${tool.id}">
      <div class="card-top">
        <div class="tool-icon">${tool.icon}</div>
        <div class="card-badges">
          <span class="tool-badge ${getBadgeClass(tool.badge)}" style="font-size:10px;padding:3px 8px">${tool.badge}</span>
          <span class="pricing-badge ${tool.pricing === 'Free' || tool.pricing === 'Freemium' ? 'free' : ''}" style="font-size:10px">${tool.pricingStart}</span>
        </div>
      </div>
      <div class="card-info">
        <h3>${tool.name}</h3>
        <div class="card-tagline">${tool.tagline}</div>
        <div class="card-description">${tool.description}</div>
      </div>
      <div class="card-tags">
        ${tool.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="card-footer">
        <div class="card-rating">
          <span class="card-stars">★★★★★</span>
          <span class="card-rating-num">${tool.rating}</span>
          <span class="card-reviews">(${formatReviews(tool.reviews)})</span>
        </div>
        <div class="card-actions">
          <span class="btn-visit">Visit →</span>
        </div>
      </div>
    </a>
  `).join('');

  if (loadMoreWrap) {
    loadMoreWrap.style.display = visibleCount >= filtered.length ? 'none' : 'block';
  }
}

/* ── Render Category Tabs ── */
function renderCategories() {
  const container = document.getElementById('category-tabs');
  if (!container) return;

  container.innerHTML = categories.map(cat => `
    <button class="cat-tab ${cat.id === currentCategory ? 'active' : ''}"
            data-cat="${cat.id}">
      ${cat.label}
      <span class="cat-count">${cat.count}</span>
    </button>
  `).join('');

  container.querySelectorAll('.cat-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.cat;
      visibleCount = PAGE_SIZE;
      renderCategories();
      renderTools();
      window.scrollTo({ top: document.getElementById('tools-section')?.offsetTop - 100 || 600, behavior: 'smooth' });
    });
  });
}

/* ── Render Sidebar Sponsored ── */
function renderSponsored() {
  const sponsored = toolsData.filter(t => t.affiliate).slice(0, 4);
  const container = document.getElementById('sponsored-tools');
  if (!container) return;

  container.innerHTML = sponsored.map(tool => `
    <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="sponsored-tool">
      <div class="sponsored-tool-top">
        <div class="sponsored-icon">${tool.icon}</div>
        <div>
          <div class="sponsored-tool-name">${tool.name}</div>
          <div class="sponsored-tool-cat">${tool.pricingStart}</div>
        </div>
      </div>
      <div class="sponsored-tool-desc">${tool.tagline}</div>
    </a>
  `).join('');
}

/* ── Search Handler ── */
function initSearch() {
  const inputs = document.querySelectorAll('.search-input');
  inputs.forEach(input => {
    input.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      visibleCount = PAGE_SIZE;
      // Sync all inputs
      inputs.forEach(i => { if (i !== e.target) i.value = currentSearch; });
      renderTools();
    });
  });
}

/* ── Sort Handler ── */
function initSort() {
  const select = document.getElementById('sort-select');
  if (!select) return;
  select.addEventListener('change', e => {
    currentSort = e.target.value;
    renderTools();
  });
}

/* ── Pricing Filter ── */
function initPricingFilter() {
  document.querySelectorAll('.pricing-filter').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      currentPricingFilter = Array.from(document.querySelectorAll('.pricing-filter:checked'))
        .map(cb => cb.value);
      visibleCount = PAGE_SIZE;
      renderTools();
    });
  });
}

/* ── Load More ── */
function initLoadMore() {
  const btn = document.getElementById('load-more-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    visibleCount += PAGE_SIZE;
    renderTools();
  });
}

/* ── Hero Search ── */
function initHeroSearch() {
  const heroForm = document.getElementById('hero-search-form');
  if (!heroForm) return;
  heroForm.addEventListener('submit', e => {
    e.preventDefault();
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ── Newsletter Form ── */
function initNewsletter() {
  document.querySelectorAll('.newsletter-form-el').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input?.value) return;
      showToast('🎉 You\'re subscribed! Welcome to AkaStore.');
      input.value = '';
    });
  });
}

/* ── Toast ── */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ── Animate stats counter ── */
function animateCounters() {
  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current).toLocaleString() + suffix;
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

/* ── Intersection Observer for animations ── */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.sidebar-card, .newsletter-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderFeatured();
  renderTools();
  renderSponsored();
  initSearch();
  initSort();
  initPricingFilter();
  initLoadMore();
  initHeroSearch();
  initNewsletter();
  initScrollAnimations();

  // Animate stats after short delay
  setTimeout(animateCounters, 500);
});
