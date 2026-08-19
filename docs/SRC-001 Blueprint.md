# SRC-001

# The Portolan Blueprint

Version: 0.2

Status: Working blueprint

Created: 2026-08-18

Last Updated: 2026-08-19

---

> **Exploring the world’s greatest stories.**

## 1. What The Portolan Press is

The Portolan Press is an independent publishing project that explores new ways of experiencing important books from the past.

Its focus is on works that remain worth reading but that modern readers may find difficult to approach because of age, language, unfamiliar historical context, outdated editions, poor presentation or simple neglect.

Portolan uses modern editorial and digital tools to help readers navigate those works without simplifying away what makes them valuable.

The navigation metaphor is central. A portolan chart did not replace the voyage; it helped the traveller make the voyage.

Portolan should do the same for books.

## 2. What Portolan is not

Portolan is not an “AI publishing company”.

It is not a machine for cheaply repackaging public-domain books.

It is not a summary service, a modernisation factory or a content farm.

It is not presently an attempt to build a large catalogue, social network, multimedia platform, collector-edition business or elaborate virtual atlas.

Artificial intelligence may assist with research, translation, annotation, illustration, comparison of editions and other production tasks. Human editorial judgment remains responsible for what is selected, checked, changed and published.

Technology must serve the reading experience. If a technological feature does not materially help the reader, it does not belong.

## 3. The first expedition

The proof title is **The Travels of Sir John Mandeville**.

Mandeville is useful as a test because it presents exactly the problem Portolan is intended to address: a once-famous work filled with travel, geography, marvels, history, myth and misinformation, but one that few general readers are likely to pick up unaided today.

The immediate objective is not to create a Portolan edition of the whole book.

The objective is to create **one excellent, self-contained Mandeville reading experience lasting roughly 10–15 minutes**.

That experience must be good enough to test whether Portolan adds real value.

## 4. The prototype

The prototype should contain a carefully selected passage from Mandeville presented in readable form while preserving the character of the original work.

It should include a short introduction giving the reader only the context needed before reading.

Annotations should explain unfamiliar references, language or claims only where doing so improves understanding.

At least one map should help the reader understand the geographical journey or imagined geography involved.

An illustration may be included if it genuinely enriches the experience.

A short contextual section may distinguish what Mandeville reports from what historians, geographers or other modern scholarship now understand.

The experience should encourage the reader to continue exploring rather than demonstrate how much research Portolan has done.

## 5. Editorial principles

The source must always remain distinguishable from Portolan’s additions.

Historical language, assumptions and prejudices should not be silently rewritten to make them comfortable to modern readers. Where necessary they should be explained and contextualised.

Claims introduced by Portolan must be checked against reliable sources.

AI-generated research, translation, annotation or imagery must be treated as draft material requiring editorial scrutiny.

Uncertainty should be acknowledged rather than disguised.

Modernisation of spelling, punctuation or language should be done deliberately and consistently, with the editorial method explained where relevant.

Portolan should favour curiosity over instruction. The reader should feel accompanied through the work, not lectured about it.

## 6. Technical foundation

For the prototype, Portolan remains deliberately simple.

The canonical project repository is GitHub:

`VonkelVinger/the-portolan-press`

The public site is:

`https://theportolanpress.com`

GitHub Pages serves the website.

Plain HTML and CSS are sufficient until the prototype demonstrates a need for more sophisticated technology.

Markdown is the preferred working format for project documentation and editorial source material. Word, PDF and print formats are outputs rather than canonical sources.

Repository structure should emerge only as material requires it. At this stage we need only:

`/docs` – project and editorial documentation

`/titles/mandeville` – source material and working files for the first expedition

`/assets` – maps, illustrations and other reusable web assets when required

The live website files may remain at repository root while GitHub Pages is configured that way.

We should not introduce frameworks, databases, content-management systems or build pipelines without a demonstrated need.

## 7. Working method

Every substantial piece of work should have a defined outcome.

For website changes the operating sequence is:

**Edit → Save → Check → Commit → Push → Verify live**

GitHub is the canonical history of the project.

Commit messages use the form:

`EXP-### Short description`

The numbering should remain sequential from this point onward. Missing numbers from the initial setup do not need to be repaired retrospectively.

Project documentation should record important decisions so that the architecture does not depend on remembering a ChatGPT conversation.

## 8. Validation

The Mandeville prototype must be shown to real readers before Portolan expands significantly.

A first test group of approximately 5–10 suitable readers is sufficient.

We need evidence about whether they actually read the experience, whether they wanted to continue, which additions improved the reading, which additions distracted from it, whether they understood what Portolan was offering, and whether the experience felt valuable enough that they might pay for something similar.

Praise alone is weak evidence.

The strongest early signal is that readers voluntarily want more.

## 9. Decision gate

After the prototype has been tested, Portolan should make an explicit decision.

If readers show strong engagement, we continue developing Mandeville and investigate a viable product and business model.

If the response is mixed, we revise the concept and test again.

If the central experience does not interest readers, we stop or radically rethink the project rather than compensating with more technology, branding or infrastructure.

Until that decision gate has been passed, Portolan does not need a large catalogue or elaborate platform.

## 10. Immediate objective

The next project milestone is therefore:

> **Create and test one Portolan-quality Mandeville expedition.**

Everything else is secondary.