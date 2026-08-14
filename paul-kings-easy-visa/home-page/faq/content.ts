import { faqItems } from "@/data/faq";

const itemsHtml = faqItems.map((item, index) => {
  const n = String(index + 1).padStart(2, "0");
  const open = index === 0;
  return `<article class="faq-item${open ? " is-open" : ""}"><button aria-controls="faq-answer-${index + 1}" aria-expanded="${open ? "true" : "false"}" class="faq-mobile-head" type="button"><span class="faq-number">${n}</span><span class="faq-question-text">${item.question}</span><span aria-hidden="true" class="faq-mobile-toggle">${open ? "−" : "+"}</span></button><div class="faq-mobile-answer" id="faq-answer-${index + 1}"><div><p>${item.answer}</p></div></div></article>`;
}).join("\n");

export const faqHtml = `<section aria-labelledby="faq-title" class="faq-section" id="faq">
<div class="container">
<header class="section-heading">
<span class="section-eyebrow">Frequently asked questions</span>
<h1 id="faq-title">
        Questions Before<br/>
<span>You Begin?</span>
</h1>
<p>
        Clear answers about British passport renewals, costs, visa applications
        and the legal services our experienced team provides.
      </p>
</header>
<div class="faq-board">
<div class="faq-grid">
${itemsHtml}
</div>
</div>
</div>
</section>`;
