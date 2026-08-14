import { business } from "@/data/business";

export const contactHtml = `<section aria-labelledby="contact-title" class="contact-section" id="contact">
<div class="container">
<header class="section-heading">
<span class="section-eyebrow">Contact Paul Kings Easy Visa</span>
<h1 id="contact-title">
        Start Your Journey<br/>
<span>With Us.</span>
</h1>
<p>
        Contact our experienced team by telephone or email with your enquiry,
        or visit our office in Central Pattaya, Chonburi, Thailand.
      </p>
</header>
<div class="contact-layout">
<article class="contact-card">
<span class="office-label">Our Pattaya office</span>
<h2>Speak with our team today.</h2>
<p>
          Tell us what support you need and we will explain the appropriate next step clearly.
        </p>
<div class="address-block">
<span aria-hidden="true" class="info-icon">
<svg viewbox="0 0 24 24">
<path d="M12 21s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12Z"></path>
<circle cx="12" cy="9" r="2.3"></circle>
</svg>
</span>
<div class="info-copy">
<small>Visit our office</small>
<strong>${business.addressLine1}</strong>
<strong>${business.addressLine2}</strong>
</div>
</div>
<div class="phone-grid">
<a class="phone-card thai" href="tel:${business.thaiPhoneHref}">
<small>Call in Thai</small>
<strong>${business.thaiPhoneDisplay}</strong>
<span>Tap to call our Thai-speaking team</span>
</a>
<a class="phone-card english" href="tel:${business.englishPhoneHref}">
<small>Call in English</small>
<strong>${business.englishPhoneDisplay}</strong>
<span>Tap to call our English-speaking team</span>
</a>
</div>
<div class="small-details">
<div class="detail-row">
<span aria-hidden="true" class="info-icon">
<svg viewbox="0 0 24 24">
<path d="M4 4h16v12H4z"></path>
<path d="M7 20h10M12 16v4M7 8h10"></path>
</svg>
</span>
<div>
<small>Fax</small>
<a href="tel:${business.thaiPhoneHref}">${business.thaiPhoneDisplay}</a>
</div>
</div>
<div class="detail-row">
<span aria-hidden="true" class="info-icon">
<svg viewbox="0 0 24 24">
<rect height="14" rx="2" width="18" x="3" y="5"></rect>
<path d="m3 7 9 6 9-6"></path>
</svg>
</span>
<div>
<small>Email</small>
<a href="mailto:${business.email}">${business.email}</a>
</div>
</div>
</div><div aria-label="Contact and business links" class="contact-platforms clean-platform-buttons"><a aria-label="Contact Paul Kings Easy Visa on WhatsApp" class="clean-platform-button whatsapp-clean" href="${business.whatsapp}" rel="noopener" target="_blank">
<span aria-hidden="true" class="clean-logo whatsapp-clean-logo">
<svg viewbox="0 0 64 64">
<circle cx="32" cy="32" fill="#25D366" r="30"></circle>
<path d="M47.6 16.8A22 22 0 0 0 13 43.3L10 54l11-2.9A22 22 0 1 0 47.6 16.8ZM32 50.2c-3.4 0-6.8-.9-9.7-2.6l-.7-.4-6.5 1.7 1.7-6.3-.4-.7A18.2 18.2 0 1 1 32 50.2Zm10-13.6c-.5-.3-3.2-1.6-3.7-1.8-.5-.2-.9-.3-1.3.3-.4.5-1.5 1.8-1.8 2.2-.3.4-.7.4-1.2.1-3.5-1.7-5.8-3.2-8.1-7.2-.6-1.1.6-1 1.7-3.2.2-.4.1-.8-.1-1.2-.1-.3-1.3-3.1-1.8-4.2-.5-1.1-.9-1-1.3-1h-1.1c-.4 0-1 .1-1.6.8-.5.6-2.1 2.1-2.1 5.2s2.2 6 2.5 6.5c.3.4 4.3 6.6 10.5 9.3 3.9 1.7 5.5 1.8 7.5 1.5 1.2-.2 3.2-1.3 3.7-2.6.5-1.3.5-2.3.3-2.6-.2-.3-.6-.5-1.1-.7Z" fill="#fff"></path>
</svg>
</span>
<strong>WhatsApp</strong>
</a><a aria-label="View Paul Kings Easy Visa on Google Business" class="clean-platform-button google-clean" href="${business.googleBusiness}" rel="noopener" target="_blank">
<span aria-hidden="true" class="clean-logo google-clean-logo">
<svg viewbox="0 0 64 64">
<rect fill="#fff" height="48" rx="14" stroke="#DADCE0" stroke-width="2" width="48" x="8" y="8"></rect>
<path d="M15 21h13l-2 13H11z" fill="#EA4335"></path>
<path d="M28 21h10l2 13H26z" fill="#FBBC04"></path>
<path d="M38 21h10l5 13H40z" fill="#4285F4"></path>
<path d="M11 34h15a7.5 7.5 0 0 1-15 0Zm15 0h14a7 7 0 0 1-14 0Zm14 0h13a6.5 6.5 0 0 1-13 0Z" fill="#fff"></path>
<path d="M16 38h32v14H16z" fill="#4285F4"></path>
<path d="M27 40h10v12H27z" fill="#34A853"></path>
<path d="M20 41h5v5h-5zm19 0h5v5h-5z" fill="#fff"></path>
</svg>
</span>
<strong>Google Business</strong>
</a></div>
</article>
<article class="map-card">
<div class="map-heading">
<small>Find our office</small>
<h3>Located in Central Pattaya</h3>
<p>
            Use the illustrated map below, or open our address directly in Google Maps.
          </p>
</div>
<div class="map-frame">
<a aria-label="Open Paul Kings Easy Visa in Google Maps" href="${business.googleBusiness}" rel="noopener" target="_blank">
<img alt="Full illustrated map showing Paul Kings Easy Visa on Central Pattaya Road" loading="lazy" src="/images/home-page/pattaya-office-map.png"/>
</a>
</div>
<div class="google-bar">
<div class="google-brand">
<svg aria-hidden="true" class="google-mark" viewbox="0 0 64 64">
<path d="M32 4C20.4 4 11 13.3 11 24.8c0 15.2 21 35.2 21 35.2s21-20 21-35.2C53 13.3 43.6 4 32 4Z" fill="#34A853"></path>
<path d="M32 4c-7.7 0-14.4 4.1-18.1 10.2l16.7 12.2L45.4 9.9A20.9 20.9 0 0 0 32 4Z" fill="#4285F4"></path>
<path d="M13.9 14.2A20.6 20.6 0 0 0 11 24.8c0 5.2 2.5 11.2 5.8 16.8l13.8-15.2-16.7-12.2Z" fill="#FBBC04"></path>
<path d="M45.4 9.9 30.6 26.4 48.3 42A37.4 37.4 0 0 0 53 24.8c0-5.9-2.4-11.2-7.6-14.9Z" fill="#EA4335"></path>
<circle cx="32" cy="25" fill="#fff" r="8.5"></circle>
</svg>
<div class="google-copy">
<strong>Google Maps</strong>
<span>Paul Kings Easy Visa, Central Pattaya</span>
</div>
</div>
<a class="google-button" href="${business.googleBusiness}" rel="noopener" target="_blank">
            Open Map →
          </a>
</div>
</article>
</div>
<div class="final-strip">
<div>
<strong>Not sure which service you need?</strong>
<p><span class="final-copy-desktop">Tell us about your situation and our team will explain the appropriate next step clearly and professionally.</span><span class="final-copy-mobile">Tell us about your situation and we’ll guide you to the right next step.</span></p>
</div>
<a class="final-button" href="mailto:${business.email}">
        Send Your Enquiry
      </a>
</div>
</div>
</section>`;
