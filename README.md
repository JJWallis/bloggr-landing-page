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
-  CSS custom properties
-  Flexbox
-  CSS Grid
-  Mobile-first workflow
-  [React](https://reactjs.org/) - JS library
-  [Styled Components](https://styled-components.com/) - For styles
-  Sass - CSS preprocessor

### What I learned

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

.infastructure__phones-parent {
   min-height: 3.5rem;
   /* control empty flex-child at mobile size (height didn't work) */
}
```

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

### Continued development

Better HTML for mobile navigation (hamburger animation) |

wider transitions use of transitions where appropiate

Clamp() usage - not relying on it to fill space for tablet design

SVG - controlling them + animating them (again only where appropiate) | background-blend mode to blend them with bg colours (gradient in this case) - great impact on their colour (+ fit with the design)

### Useful resources

-  [Min(), Max() & Clamp()](https://www.youtube.com/watch?v=U9VF-4euyRo&ab_channel=KevinPowell) - This was a great video by Kevin explaining some of the methods we may use to achieve 'fluid topography' between different viewport sizes. Although browser support is not at the level we may desire, we can use feature queries to create fallbacks to support older browsers that don't yet recognise it.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()

###### TODO

HTML:

Sep container for mobile navigation + sep one for wider styles | failed attempt at 1 dynamic container to accomodate both layouts (not possible - however maybe with grid but not necessary)

BEM naming throughout - 1st use to this extent | massive benefits vs bulky class markup

Semantic wrappers - attempting to escape div overuse | asides + articles within sections | lists more - beyond nav (social icons)

CSS:

Hr styles - thin (similar with borders - opacity change for softness)

Bg imgs pinned to browser viewport edges - clamp(0% - ... / 100% + ...) | full page containers + ultility class/container under to align content (nice effect) | positioned at wider viewports - doesn't fly off side when max-width hits (changed what positioned relative to + moves with rest of content) | positioning imgs - great as freedom (overlapping is an issue - fixed px width can help) | header SVG bg-img - fluid but stretching issue (fixed width - don't have issue)

Header nav - space-between full width + then 80% width on wider screen sizes (aligned with content - else spacing not enough between both edges)

Text widths - controlling everything via fluid width change of parent container (vs max-width of individual els - restrive + break layout often)

Phone imgs - positioned + fluid position so scales as browser shrinks/grows (but fixed vertical value so didn't become affected by other content wrapping + container heights switching) | bg-img for that section - positioned at top + fluid size so scaled from there (didn't want to just rely on giving everything fixed px value as solution) | empty flex child for mobile - min-height + width (or else collapsed - didn't happen at row layout as flex-grow/basis)

JS:

Arrow logic - loop to reset styles + make sure only one user wants to see if shown/facing up

Destructuring practice - tried to use those same vars with others destructured on same line (incorrect) |

Modules next time for arrow img paths - vs storing in obj (better than vars)

Callback practice - breaking up our event handler into sep func + running as direct callback (something I never used to do)
