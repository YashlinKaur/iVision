import react from 'react'
import "./MacAccessories.css"

const MacAccessories = () => {
    return (
    <div>
{/* <!-- NAVBAR --> */}
<nav class="nav">
  <div class="nav-inner">
    <a class="logo" href="#">iVision</a>
    <div class="nav-tabs">
      <a class="tab" href="#">Store</a>
      <a class="tab active" href="#">Accessories</a>
      <a class="tab" href="#">About</a>
    </div>
    <div class="nav-actions">
      <button class="btn-login">Log in</button>
      <button class="btn-reg">Register</button>
    </div>
  </div>
</nav>
 
{/* <!-- HERO --> */}
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-particles" id="particles"></div>
  <div class="hero-content">
    <p class="hero-eyebrow">Mac Accessories</p>
    <h1 class="hero-title">Power Your<br><span>Mac Experience.</span></h1>
    <p class="hero-sub">Premium accessories, curated and authenticated — everything your Mac deserves.</p>
    <div class="hero-cta">
      <button class="btn-primary" onclick="document.querySelector('.section').scrollIntoView({behavior:'smooth'})">Shop Now</button>
      <button class="btn-ghost">Explore All</button>
    </div>
  </div>
</section>
 
{/* <!-- FILTER BAR --> */}
<div class="filter-bar">
  <div class="filter-inner">
    <span class="filter-label">Filter:</span>
    <span class="filter-chip active" onclick="filterProducts('all',this)">All</span>
    <span class="filter-chip" onclick="filterProducts('keyboard',this)">Keyboards</span>
    <span class="filter-chip" onclick="filterProducts('mouse',this)">Mice &amp; Trackpads</span>
    <span class="filter-chip" onclick="filterProducts('hub',this)">Hubs &amp; Docks</span>
    <span class="filter-chip" onclick="filterProducts('display',this)">Displays</span>
    <span class="filter-chip" onclick="filterProducts('audio',this)">Audio</span>
    <span class="filter-chip" onclick="filterProducts('protection',this)">Protection</span>
  </div>
</div>
 
{/* <!-- FEATURED HERO CARD --> */}
<div class="featured">
  <div class="featured-card fade-up">
    <div class="featured-text">
      <span class="badge">✦ Editor's Pick</span>
      <h2 class="featured-title">Magic Keyboard<br>with Touch ID</h2>
      <p class="featured-desc">The most advanced Mac keyboard ever. Wireless. Rechargeable. Secure fingerprint authentication built right in.</p>
      <p class="featured-price">₹9,900 <span>Free Delivery</span></p>
      <button class="btn-primary">Add to Cart →</button>
    </div>
    <div class="featured-img">
      <div class="mac-visual">
        <div class="mac-screen">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <rect x="10" y="10" width="60" height="8" rx="2" fill="rgba(255,255,255,0.15)"/>
            <rect x="10" y="24" width="45" height="5" rx="2" fill="rgba(255,255,255,0.1)"/>
            <rect x="10" y="34" width="52" height="5" rx="2" fill="rgba(255,255,255,0.1)"/>
            <rect x="10" y="44" width="30" height="5" rx="2" fill="rgba(0,113,227,0.5)"/>
          </svg>
        </div>
        <div class="mac-base"></div>
        <div class="mac-stand"></div>
      </div>
    </div>
  </div>
</div>
 
{/* <!-- KEYBOARDS --> */}
<div class="section" id="products">
  <div class="section-header">
    <h2 class="section-title">Mac <em>Keyboards</em></h2>
    <span class="see-all">See all →</span>
  </div>
  <div class="product-grid">
 
    <div class="product-card fade-up" data-cat="keyboard">
      <div class="card-img">
        <span class="card-tag new">New</span>
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 60">
            <rect x="5" y="10" width="90" height="40" rx="8" fill="#e8e8ed" stroke="#c7c7cc" stroke-width="1.5"/>
            <rect x="12" y="18" width="10" height="7" rx="2" fill="#8e8e93"/>
            <rect x="26" y="18" width="10" height="7" rx="2" fill="#8e8e93"/>
            <rect x="40" y="18" width="10" height="7" rx="2" fill="#8e8e93"/>
            <rect x="54" y="18" width="10" height="7" rx="2" fill="#8e8e93"/>
            <rect x="68" y="18" width="15" height="7" rx="2" fill="#8e8e93"/>
            <rect x="12" y="30" width="12" height="7" rx="2" fill="#8e8e93"/>
            <rect x="28" y="30" width="34" height="7" rx="2" fill="#8e8e93"/>
            <rect x="66" y="30" width="12" height="7" rx="2" fill="#007aff" opacity="0.8"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Keyboard</p>
        <h3 class="card-name">Magic Keyboard with Touch ID</h3>
        <p class="card-desc">Wireless, rechargeable with secure fingerprint login.</p>
        <div class="color-dots">
          <span class="dot" style="background:#f5f5f7;border:1.5px solid #c8c8c8"></span>
          <span class="dot" style="background:#1d1d1f"></span>
          <span class="dot" style="background:#e8d5c0"></span>
        </div>
        <div class="card-footer">
          <div><span class="card-price">₹9,900</span><span class="card-price-sub">Free delivery</span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
    <div class="product-card fade-up" data-cat="keyboard">
      <div class="card-img" style="background:#f5f5f7">
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 60">
            <rect x="5" y="8" width="90" height="42" rx="8" fill="#1d1d1f" stroke="#333"/>
            <rect x="12" y="16" width="10" height="8" rx="2" fill="#2c2c2e"/>
            <rect x="26" y="16" width="10" height="8" rx="2" fill="#2c2c2e"/>
            <rect x="40" y="16" width="10" height="8" rx="2" fill="#2c2c2e"/>
            <rect x="54" y="16" width="10" height="8" rx="2" fill="#2c2c2e"/>
            <rect x="68" y="16" width="15" height="8" rx="2" fill="#2c2c2e"/>
            <rect x="12" y="29" width="10" height="8" rx="2" fill="#2c2c2e"/>
            <rect x="26" y="29" width="40" height="8" rx="2" fill="#2c2c2e"/>
            <rect x="70" y="29" width="12" height="8" rx="2" fill="#0a84ff" opacity="0.9"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Keyboard</p>
        <h3 class="card-name">Magic Keyboard — Space Gray</h3>
        <p class="card-desc">Sleek dark finish with numeric keypad for power users.</p>
        <div class="color-dots">
          <span class="dot" style="background:#1d1d1f"></span>
          <span class="dot" style="background:#3a3a3c"></span>
        </div>
        <div class="card-footer">
          <div><span class="card-price">₹12,900</span><span class="card-price-sub">With Numeric Keypad</span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
    <div class="product-card fade-up" data-cat="keyboard">
      <div class="card-img" style="background:linear-gradient(135deg,#f0f4ff,#e8eeff)">
        <span class="card-tag sale">Sale</span>
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 60">
            <rect x="5" y="10" width="90" height="40" rx="8" fill="#e0e5ff" stroke="#c5cdff" stroke-width="1.5"/>
            <rect x="12" y="18" width="10" height="7" rx="2" fill="#8896cc"/>
            <rect x="26" y="18" width="10" height="7" rx="2" fill="#8896cc"/>
            <rect x="40" y="18" width="10" height="7" rx="2" fill="#8896cc"/>
            <rect x="54" y="18" width="10" height="7" rx="2" fill="#8896cc"/>
            <rect x="12" y="30" width="62" height="7" rx="2" fill="#8896cc"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Keyboard</p>
        <h3 class="card-name">Magic Keyboard — Midnight</h3>
        <p class="card-desc">Deep rich color with anodized aluminum for elegant desks.</p>
        <div class="color-dots">
          <span class="dot" style="background:#2c3d6b"></span>
          <span class="dot" style="background:#1c2951"></span>
        </div>
        <div class="card-footer">
          <div><span class="card-price">₹8,499 <del style="font-size:12px;color:#86868b;font-weight:400">₹9,900</del></span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
  </div>
</div>
 
{/* <!-- MARQUEE --> */}
<div class="marquee-wrap">
  <div class="marquee">
    <span class="marquee-item">Magic Keyboard</span><span class="marquee-item">·</span>
    <span class="marquee-item">Magic Mouse</span><span class="marquee-item">·</span>
    <span class="marquee-item">Magic Trackpad</span><span class="marquee-item">·</span>
    <span class="marquee-item">Thunderbolt Hub</span><span class="marquee-item">·</span>
    <span class="marquee-item">Studio Display</span><span class="marquee-item">·</span>
    <span class="marquee-item">AirPods Pro</span><span class="marquee-item">·</span>
    <span class="marquee-item">MagSafe Charger</span><span class="marquee-item">·</span>
    <span class="marquee-item">Magic Keyboard</span><span class="marquee-item">·</span>
    <span class="marquee-item">Magic Mouse</span><span class="marquee-item">·</span>
    <span class="marquee-item">Magic Trackpad</span><span class="marquee-item">·</span>
    <span class="marquee-item">Thunderbolt Hub</span><span class="marquee-item">·</span>
    <span class="marquee-item">Studio Display</span><span class="marquee-item">·</span>
    <span class="marquee-item">AirPods Pro</span><span class="marquee-item">·</span>
    <span class="marquee-item">MagSafe Charger</span><span class="marquee-item">·</span>
  </div>
</div>
 
{/* <!-- MICE & TRACKPADS --> */}
<div class="section">
  <div class="section-header">
    <h2 class="section-title">Mice <em>&amp; Trackpads</em></h2>
    <span class="see-all">See all →</span>
  </div>
  <div class="product-grid">
 
    <div class="product-card fade-up" data-cat="mouse">
      <div class="card-img">
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 100">
            <ellipse cx="50" cy="55" rx="28" ry="38" fill="#e8e8ed" stroke="#c7c7cc" stroke-width="1.5"/>
            <line x1="50" y1="28" x2="50" y2="78" stroke="#c7c7cc" stroke-width="1"/>
            <ellipse cx="50" cy="45" rx="8" ry="5" fill="rgba(0,113,227,0.3)"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Mouse</p>
        <h3 class="card-name">Magic Mouse — Silver</h3>
        <p class="card-desc">Multi-Touch surface with smooth scrolling and gestures.</p>
        <div class="color-dots">
          <span class="dot" style="background:#f5f5f7;border:1.5px solid #c8c8c8"></span>
          <span class="dot" style="background:#1d1d1f"></span>
          <span class="dot" style="background:#e8d5c0"></span>
        </div>
        <div class="card-footer">
          <div><span class="card-price">₹7,900</span><span class="card-price-sub">5 colors</span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
    <div class="product-card fade-up" data-cat="mouse">
      <div class="card-img" style="background:#f0f4ff">
        <span class="card-tag new">New</span>
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 70">
            <rect x="15" y="10" width="70" height="50" rx="10" fill="#e8e8ed" stroke="#c7c7cc" stroke-width="1.5"/>
            <rect x="25" y="20" width="50" height="30" rx="6" fill="#d1d1d6"/>
            <circle cx="50" cy="35" r="8" fill="#c7c7cc"/>
            <rect x="30" y="28" width="12" height="2" rx="1" fill="#86868b"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Trackpad</p>
        <h3 class="card-name">Magic Trackpad — Large</h3>
        <p class="card-desc">Expansive glass surface with Force Touch and haptic feedback.</p>
        <div class="color-dots">
          <span class="dot" style="background:#f5f5f7;border:1.5px solid #c8c8c8"></span>
          <span class="dot" style="background:#1d1d1f"></span>
        </div>
        <div class="card-footer">
          <div><span class="card-price">₹11,900</span><span class="card-price-sub">Force Touch enabled</span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
    <div class="product-card fade-up" data-cat="mouse">
      <div class="card-img" style="background:#fff8f0">
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 100">
            <ellipse cx="50" cy="55" rx="28" ry="38" fill="#1d1d1f" stroke="#333"/>
            <line x1="50" y1="28" x2="50" y2="78" stroke="#444" stroke-width="1"/>
            <ellipse cx="50" cy="42" rx="8" ry="5" fill="rgba(0,113,227,0.5)"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Mouse</p>
        <h3 class="card-name">Magic Mouse — Space Black</h3>
        <p class="card-desc">Premium anodized aluminum in a bold midnight finish.</p>
        <div class="color-dots">
          <span class="dot" style="background:#1d1d1f"></span>
          <span class="dot" style="background:#2c3d6b"></span>
        </div>
        <div class="card-footer">
          <div><span class="card-price">₹8,900</span><span class="card-price-sub">2 dark colors</span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
  </div>
</div>
 
{/* <!-- HUBS & DOCKS --> */}
<div class="section">
  <div class="section-header">
    <h2 class="section-title">Hubs <em>&amp; Docks</em></h2>
    <span class="see-all">See all →</span>
  </div>
  <div class="product-grid">
 
    <div class="product-card fade-up" data-cat="hub">
      <div class="card-img" style="background:#f5f5f7">
        <span class="card-tag">Popular</span>
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 60">
            <rect x="10" y="20" width="80" height="20" rx="6" fill="#e8e8ed" stroke="#c7c7cc" stroke-width="1.5"/>
            <rect x="16" y="27" width="8" height="6" rx="1" fill="#0071e3" opacity="0.8"/>
            <rect x="28" y="27" width="8" height="6" rx="1" fill="#86868b"/>
            <rect x="40" y="27" width="8" height="6" rx="1" fill="#86868b"/>
            <rect x="52" y="27" width="8" height="6" rx="1" fill="#34c759" opacity="0.8"/>
            <rect x="64" y="27" width="8" height="6" rx="1" fill="#86868b"/>
            <rect x="76" y="27" width="8" height="6" rx="1" fill="#86868b"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Hub</p>
        <h3 class="card-name">Thunderbolt 4 Hub — 6-in-1</h3>
        <p class="card-desc">USB-C, HDMI 4K, SD Card, ethernet in one compact hub.</p>
        <div class="card-footer">
          <div><span class="card-price">₹5,499</span><span class="card-price-sub">Compatible with all Macs</span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
    <div class="product-card fade-up" data-cat="hub">
      <div class="card-img" style="background:linear-gradient(135deg,#fff8f0,#fff3e8)">
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 80">
            <rect x="20" y="10" width="60" height="60" rx="12" fill="#e8e8ed" stroke="#c7c7cc" stroke-width="1.5"/>
            <rect x="30" y="22" width="40" height="5" rx="2" fill="#8e8e93"/>
            <rect x="30" y="33" width="40" height="5" rx="2" fill="#8e8e93"/>
            <rect x="30" y="44" width="40" height="5" rx="2" fill="#0071e3" opacity="0.6"/>
            <rect x="30" y="55" width="20" height="5" rx="2" fill="#8e8e93"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Dock</p>
        <h3 class="card-name">CalDigit TS4 Thunderbolt Dock</h3>
        <p class="card-desc">18 ports, 98W charging, dual 6K displays supported.</p>
        <div class="card-footer">
          <div><span class="card-price">₹29,990</span><span class="card-price-sub">Pro workflow</span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
    <div class="product-card fade-up" data-cat="hub">
      <div class="card-img" style="background:#f5f5f7">
        <span class="card-tag new">New</span>
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 60">
            <rect x="5" y="15" width="90" height="30" rx="8" fill="#1d1d1f" stroke="#333"/>
            <rect x="14" y="23" width="7" height="14" rx="2" fill="#0071e3"/>
            <rect x="25" y="23" width="7" height="14" rx="2" fill="#2c2c2e"/>
            <rect x="36" y="23" width="7" height="14" rx="2" fill="#2c2c2e"/>
            <rect x="60" y="23" width="7" height="14" rx="2" fill="#34c759" opacity="0.8"/>
            <rect x="71" y="23" width="7" height="14" rx="2" fill="#2c2c2e"/>
            <rect x="82" y="23" width="7" height="14" rx="2" fill="#2c2c2e"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Hub</p>
        <h3 class="card-name">Space Bar USB-C Hub — Black</h3>
        <p class="card-desc">Sits under your Magic Keyboard. Powers all peripherals invisibly.</p>
        <div class="card-footer">
          <div><span class="card-price">₹8,200</span><span class="card-price-sub">Desk-friendly design</span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
  </div>
</div>
 
{/* <!-- PROMO BANNERS --> */}
<div class="promo-grid">
  <div class="promo-card dark fade-up">
    <p class="promo-tag">Display</p>
    <h3 class="promo-title">Apple Studio<br>Display</h3>
    <p class="promo-sub">5K Retina. 600 nits. True Tone.</p>
    <span class="promo-link">Shop Now →</span>
  </div>
  <div class="promo-card blue fade-up">
    <p class="promo-tag">Audio</p>
    <h3 class="promo-title">AirPods Max<br>for Mac</h3>
    <p class="promo-sub">Spatial Audio. Active Noise Cancellation.</p>
    <span class="promo-link">Explore →</span>
  </div>
</div>
 
{/* <!-- DISPLAYS --> */}
<div class="section">
  <div class="section-header">
    <h2 class="section-title">Displays <em>&amp; Monitors</em></h2>
    <span class="see-all">See all →</span>
  </div>
  <div class="product-grid">
 
    <div class="product-card fade-up" data-cat="display">
      <div class="card-img" style="background:linear-gradient(135deg,#e8f4ff,#d0e8ff)">
        <span class="card-tag new">New</span>
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 80">
            <rect x="5" y="5" width="90" height="55" rx="6" fill="#1d1d1f" stroke="#333"/>
            <rect x="10" y="10" width="80" height="45" rx="4" fill="linear-gradient(135deg,#1a237e,#0d47a1)"/>
            <rect x="10" y="10" width="80" height="45" rx="4" fill="#0a3d6b"/>
            <rect x="42" y="62" width="16" height="10" rx="2" fill="#2c2c2e"/>
            <rect x="30" y="72" width="40" height="4" rx="2" fill="#2c2c2e"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Display</p>
        <h3 class="card-name">Apple Studio Display</h3>
        <p class="card-desc">27-inch 5K Retina, 600 nits brightness, built-in webcam and speakers.</p>
        <div class="card-footer">
          <div><span class="card-price">₹1,59,900</span><span class="card-price-sub">5K Retina · True Tone</span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
    <div class="product-card fade-up" data-cat="display">
      <div class="card-img" style="background:#f5f5f7">
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 80">
            <rect x="8" y="8" width="84" height="52" rx="5" fill="#e8e8ed" stroke="#c7c7cc" stroke-width="1.5"/>
            <rect x="14" y="14" width="72" height="40" rx="3" fill="#d1d1d6"/>
            <rect x="40" y="62" width="20" height="8" rx="2" fill="#c7c7cc"/>
            <rect x="28" y="70" width="44" height="4" rx="2" fill="#c7c7cc"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Display</p>
        <h3 class="card-name">LG UltraFine 4K Display</h3>
        <p class="card-desc">24-inch 4K, USB-C one-cable solution, designed for Mac.</p>
        <div class="card-footer">
          <div><span class="card-price">₹54,900</span><span class="card-price-sub">4K · USB-C</span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
  </div>
</div>
 
{/* <!-- AUDIO --> */}
<div class="section">
  <div class="section-header">
    <h2 class="section-title">Audio <em>for Mac</em></h2>
    <span class="see-all">See all →</span>
  </div>
  <div class="product-grid">
 
    <div class="product-card fade-up" data-cat="audio">
      <div class="card-img" style="background:linear-gradient(135deg,#f0f0f5,#e8e8f0)">
        <span class="card-tag new">New</span>
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 100">
            <ellipse cx="50" cy="40" rx="30" ry="30" fill="#e8e8ed" stroke="#c7c7cc" stroke-width="2"/>
            <ellipse cx="50" cy="40" rx="20" ry="20" fill="#d1d1d6"/>
            <rect x="44" y="68" width="12" height="20" rx="3" fill="#c7c7cc"/>
            <rect x="32" y="86" width="36" height="5" rx="2" fill="#c7c7cc"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Headphones</p>
        <h3 class="card-name">AirPods Max — Midnight</h3>
        <p class="card-desc">Spatial Audio, ANC, premium metal build, perfect for Mac.</p>
        <div class="color-dots">
          <span class="dot" style="background:#2c3d6b"></span>
          <span class="dot" style="background:#f5f5f7;border:1.5px solid #c8c8c8"></span>
          <span class="dot" style="background:#8b6563"></span>
          <span class="dot" style="background:#3d6b3d"></span>
        </div>
        <div class="card-footer">
          <div><span class="card-price">₹59,900</span><span class="card-price-sub">4 colors</span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
    <div class="product-card fade-up" data-cat="audio">
      <div class="card-img" style="background:#f5f5f7">
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 80">
            <rect x="20" y="20" width="60" height="40" rx="10" fill="#e8e8ed" stroke="#c7c7cc" stroke-width="1.5"/>
            <circle cx="35" cy="40" r="8" fill="#c7c7cc"/>
            <circle cx="65" cy="40" r="8" fill="#c7c7cc"/>
            <rect x="33" y="36" width="4" height="8" rx="2" fill="#8e8e93"/>
            <rect x="63" y="36" width="4" height="8" rx="2" fill="#8e8e93"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Speakers</p>
        <h3 class="card-name">HomePod mini Desk Speaker</h3>
        <p class="card-desc">360° sound with spatial audio. Perfect companion for any Mac desk.</p>
        <div class="color-dots">
          <span class="dot" style="background:#f5f5f7;border:1.5px solid #c8c8c8"></span>
          <span class="dot" style="background:#1d1d1f"></span>
          <span class="dot" style="background:#f5c0a8"></span>
        </div>
        <div class="card-footer">
          <div><span class="card-price">₹10,900</span><span class="card-price-sub">3 colors</span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
  </div>
</div>
 
{/* <!-- PROTECTION --> */}
<div class="section">
  <div class="section-header">
    <h2 class="section-title">Protection <em>&amp; Cases</em></h2>
    <span class="see-all">See all →</span>
  </div>
  <div class="product-grid">
 
    <div class="product-card fade-up" data-cat="protection">
      <div class="card-img" style="background:#f0f4ff">
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 80">
            <rect x="10" y="10" width="80" height="55" rx="6" fill="#2c3d6b" stroke="#4a5d99" stroke-width="1.5"/>
            <rect x="18" y="18" width="64" height="40" rx="4" fill="#1c2951"/>
            <rect x="35" y="67" width="30" height="6" rx="3" fill="#2c3d6b"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Case</p>
        <h3 class="card-name">MacBook Sleeve — Midnight Blue</h3>
        <p class="card-desc">Premium felt with water-resistant lining. Fits 13" and 14".</p>
        <div class="color-dots">
          <span class="dot" style="background:#2c3d6b"></span>
          <span class="dot" style="background:#1d1d1f"></span>
          <span class="dot" style="background:#8b6563"></span>
          <span class="dot" style="background:#3d6b3d"></span>
        </div>
        <div class="card-footer">
          <div><span class="card-price">₹3,299</span><span class="card-price-sub">4 colors</span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
    <div class="product-card fade-up" data-cat="protection">
      <div class="card-img">
        <span class="card-tag new">New</span>
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 80">
            <rect x="8" y="8" width="84" height="58" rx="8" fill="rgba(0,113,227,0.1)" stroke="#0071e3" stroke-width="1.5" stroke-dasharray="4,3"/>
            <rect x="16" y="16" width="68" height="44" rx="5" fill="#f0f6ff"/>
            <rect x="22" y="20" width="56" height="36" rx="4" fill="#e0edff"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Skin</p>
        <h3 class="card-name">MacBook Crystal Clear Hardshell</h3>
        <p class="card-desc">Snap-on protection that shows off your Mac's design completely.</p>
        <div class="color-dots">
          <span class="dot" style="background:rgba(200,200,200,0.5);border:1.5px solid #c8c8c8"></span>
          <span class="dot" style="background:#0071e3;opacity:0.7"></span>
          <span class="dot" style="background:rgba(200,180,220,0.6);border:1.5px solid #c8c8c8"></span>
        </div>
        <div class="card-footer">
          <div><span class="card-price">₹2,599</span><span class="card-price-sub">All MacBook models</span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
    <div class="product-card fade-up" data-cat="protection">
      <div class="card-img" style="background:linear-gradient(135deg,#fff8f0,#fff0e0)">
        <div class="card-img-inner">
          <svg class="product-svg" viewBox="0 0 100 80">
            <rect x="15" y="15" width="70" height="50" rx="10" fill="#c8a070" stroke="#b08050" stroke-width="1.5"/>
            <rect x="22" y="22" width="56" height="36" rx="6" fill="#b89060"/>
            <circle cx="50" cy="72" r="4" fill="#a07040"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">Bag</p>
        <h3 class="card-name">Leather MacBook Folio — Tan</h3>
        <p class="card-desc">Full-grain leather that ages beautifully. Magnetic closure.</p>
        <div class="color-dots">
          <span class="dot" style="background:#c8a070"></span>
          <span class="dot" style="background:#5c3a1e"></span>
          <span class="dot" style="background:#1d1d1f"></span>
        </div>
        <div class="card-footer">
          <div><span class="card-price">₹6,990</span><span class="card-price-sub">Genuine leather</span></div>
          <button class="btn-add">Add →</button>
        </div>
      </div>
    </div>
 
  </div>
</div>
 
{/* <!-- WHY IVISION --> */}
<div class="why-section">
  <div class="section-header">
    <h2 class="section-title">Why <em>iVision</em></h2>
  </div>
  <div class="why-grid">
    <div class="why-card fade-up">
      <div class="why-icon">✓</div>
      <h4 class="why-title">100% Authentic</h4>
      <p class="why-desc">Every product is sourced directly from Apple or authorized distributors. No fakes, ever.</p>
    </div>
    <div class="why-card fade-up">
      <div class="why-icon">⚡</div>
      <h4 class="why-title">Fast Delivery</h4>
      <p class="why-desc">Express delivery across India. Order before 6 PM, receive by tomorrow.</p>
    </div>
    <div class="why-card fade-up">
      <div class="why-icon">↩</div>
      <h4 class="why-title">Easy Returns</h4>
      <p class="why-desc">15-day no-questions-asked returns. We handle everything — pickup to refund.</p>
    </div>
  </div>
</div>
 
{/* <!-- FOOTER --> */}
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <div style="font-size:20px;font-weight:600">iVision</div>
        <p>India's most trusted Apple reseller. Every device authentic, every order handled with care.</p>
        <div style="display:flex;gap:12px;margin-top:20px">
          <span style="width:32px;height:32px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer">𝕏</span>
          <span style="width:32px;height:32px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer">in</span>
          <span style="width:32px;height:32px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer">📷</span>
        </div>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        <a href="#">iPhone</a>
        <a href="#">MacBook</a>
        <a href="#">iPad</a>
        <a href="#">Apple Watch</a>
        <a href="#">AirPods</a>
        <a href="#">Accessories</a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="#">About Us</a>
        <a href="#">Our Promise</a>
        <a href="#">Authenticity</a>
        <a href="#">Careers</a>
        <a href="#">Press</a>
      </div>
      <div class="footer-col">
        <h4>Support</h4>
        <a href="#">Track Order</a>
        <a href="#">Returns &amp; Exchange</a>
        <a href="#">Warranty</a>
        <a href="#">Contact Us</a>
        <a href="#">FAQ</a>
      </div>
      <div class="footer-col">
        <h4>Stay in the Loop</h4>
        <p style="font-size:13px;color:rgba(255,255,255,0.5);line-height:1.6;margin-bottom:14px">Fresh deals, new arrivals, and exclusive offers — straight to your inbox.</p>
        <div style="display:flex;gap:8px">
          <input type="email" placeholder="your@email.com" style="flex:1;padding:9px 14px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:980px;color:#fff;font-size:13px;outline:none">
          <button style="background:#f5c518;color:#000;padding:9px 16px;border-radius:980px;font-size:13px;font-weight:600;border:none;cursor:pointer;white-space:nowrap">Subscribe →</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 iVision — Sitemap</span>
      <div style="display:flex;gap:20px">
        <a href="#" style="color:rgba(255,255,255,0.4);text-decoration:none">Privacy Policy</a>
        <a href="#" style="color:rgba(255,255,255,0.4);text-decoration:none">Terms of Use</a>
        <a href="#" style="color:rgba(255,255,255,0.4);text-decoration:none">Shipping Policy</a>
        <a href="#" style="color:rgba(255,255,255,0.4);text-decoration:none">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
</div>
 )
 }

export default MacAccessories