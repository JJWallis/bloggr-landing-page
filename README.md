# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP) on Frontend Mentor

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

## Overview

### The challenge

Your users should be able to:

-  View the optimal layout for the site depending on their device's screen size
-  See hover states for all interactive elements on the page

### Screenshot

![](./Screenshot.png)

### Links

-  Live Site URL:

## My process

### Built with

-  Semantic HTML5 markup
-  Flexbox
-  Mobile-first workflow
-  Vanilla JS

### What I learned

```html

```

Sep container for mobile navigation + sep one for wider styles | failed attempt at 1 dynamic container to accomodate both layouts (not possible - however maybe with grid but not necessary)

BEM naming throughout - 1st use to this extent | massive benefits vs bulky class markup

```css
.header {
   background: linear-gradient(
         to top,
         hsl(356, 100%, 66%),
         rgba(255, 143, 112)
      ), url('/images/bg-pattern-intro.svg');
   background-blend-mode: soft-light;
}
```

Completely changed way SVG appeared (accent + progression of colours) | add to future CSS list to try out with future assets

background-blend mode to blend them with bg colours (gradient in this case) - great impact on their colour (+ fit with the design)

```css
.future-container {
   background-position: calc(100% + 240px) 60%;
   /* pinned to viewport edge */
   background-size: 700px; /* for wider viewports */
}

.future__flex-parent::before {
   position: absolute;
   left: 60%;
   top: 50%;
   /* switched to being pinned with content */
}
```

Bg imgs pinned to browser viewport edges - clamp(0% - ... / 100% + ...) | full page containers + ultility class/container under to align content (nice effect) | positioned at wider viewports - doesn't fly off side when max-width hits (changed what positioned relative to + moves with rest of content) | positioning imgs - great as freedom (overlapping is an issue - fixed px width can help) | header SVG bg-img - fluid but stretching issue (fixed width - don't have issue)

```css
.infastructure__phones-parent {
   min-height: 3.5rem;
   /* control empty flex-child at mobile size (height didn't work) */
}

.infastructure__phones-img {
   top: -177px;
   right: 8%;
   width: 600px;
}
```

Phone imgs - positioned + fluid position so scales as browser shrinks/grows (but fixed vertical value so didn't become affected by other content wrapping + container heights switching) | bg-img for that section - positioned at top + fluid size so scaled from there (didn't want to just rely on giving everything fixed px value as solution) | empty flex child for mobile - min-height + width (or else collapsed - didn't happen at row layout as flex-grow/basis)

```js
const [header, hamburgerBtn, arrows] = [
   domSelect('.header'),
   domSelect('#hamburger'),
   domSelectAll('.arrow'),
]
```

Destructuring - cant use var which declaring in same line with another | helper functions

```js
const paths = {
   hamburgerBtnPath: './images/icon-hamburger.svg',
   closeBtnPath: './images/icon-close.svg',
   lightArrow: './images/icon-arrow-light.svg',
   darkArrow: './images/icon-arrow-dark.svg',
} // not most efficient - better than previous times!

const src = {
   normal() {
      hamburgerBtn.src = paths.hamburgerBtnPath
   },
   close() {
      hamburgerBtn.src = paths.closeBtnPath
   },
}
src[hamburgerBtn.src.includes('close') ? 'normal' : 'close']()
```

```js
function reset() {
   const navLists = domSelectAll('.header-nav__ul')
   for (const list of navLists) list.classList.add('hamburger-hidden')
   for (const arrow of arrows) arrow.classList.remove('rotate')
}
```

Arrow logic - loop to reset styles + make sure only one user wants to see if shown/facing up

Loop logic for nav arrows (multiple other use cases - FAQ accordians) | classic technique - commonly used (React docs + complicated/bloated navigations)

### Continued development

Hamburger animation | SVG - controlling them + animating them (again only where appropiate)

Clamp() usage - not relying on it to fill space for tablet design | innappropiate sizes - look forward to attempting a 'premium' project where tablet designs provided (for inspiration) | other logic funcs - min() + max() - for spacing maybe vs just fonts?

### Useful resources

-  [Min(), Max() & Clamp()](https://www.youtube.com/watch?v=U9VF-4euyRo&ab_channel=KevinPowell) - This was a great video by Kevin explaining some of the methods we may use to achieve 'fluid topography' between different viewport sizes. Although browser support is not at the level we may desire, we can use feature queries to create fallbacks to support older browsers that don't yet recognise these properties.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()
