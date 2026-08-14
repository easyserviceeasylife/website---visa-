import { clientStories } from "@/data/client-stories";

const panel = (story: (typeof clientStories)[number]) => `<div class="story-panel">
<div class="story-topline">
<span class="destination"><span class="flag">${story.flag}</span>${story.destination}</span>
<span class="route">${story.route}</span>
</div>
<h2>${story.names.replace("&", "&amp;")}</h2>
<p class="countries">${story.countries}</p>
<p class="quote">${story.quote}</p>
<span class="journey-label">Their journey</span>
<p class="journey-copy">${story.journey}</p>
<div class="help-grid">
${story.help.map((item) => `<span>${item}</span>`).join("\n")}
</div>
<div class="outcome">
<div>
<strong>${story.outcome}</strong>
<small>${story.outcomeDetail}</small>
</div>
<span class="outcome-mark">✓</span>
</div>
</div>`;

const photo = (story: (typeof clientStories)[number]) => `<div class="story-photo">
<img alt="${story.alt}" loading="lazy" src="${story.image}"/>
</div>`;

const storiesHtml = clientStories.map((story) => `<article class="journey-story${story.reverse ? " reverse" : ""}">
<span class="story-number">${story.number}</span>
${story.reverse ? panel(story) : photo(story)}
<span aria-hidden="true" class="journey-line"></span>
${story.reverse ? photo(story) : panel(story)}
</article>`).join("\n");

export const clientStoriesHtml = `
<section aria-labelledby="journeys-title" class="journeys-section" id="client-stories">
<div class="container">
<header class="section-heading">
<p class="eyebrow">Client journeys</p>
<h1 id="journeys-title">
<span>Helping couples move closer</span>
<span class="highlight">one visa at a time</span>
</h1>
<p>
    Behind every application is a relationship, a shared plan and an important next step.
    We help couples organise their evidence, explain their circumstances clearly and
    prepare visitor, fiancé and marriage visa applications with care.
  </p>
</header>
<div class="journeys-list">
${storiesHtml}
</div>
</div>
</section>
`;
