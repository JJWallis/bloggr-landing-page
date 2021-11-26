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
<div
   class="header__mobilebg-nav-container hidden hamburger-hidden"
   id="mobile-nav"
>
   <nav class="header__nav">...</nav>
</div>
```

When I first started building the HTML markup for this project, I really struggled with creating a layout that accomodated both the mobile and desktop navigation design. However, having researched multiple solutions via the Front End Mentor platform, I realsied that it was perfectly ok to create an entirely separate section of markup for the mobile design, which would ultimately be rendered invisible at wider screen sizes. I was also able to make use of the BEM naming convention to help differentiate between both sections of markup within the <header>, while styling them in a related manner within my stylesheets.

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

The header design in this project provided a great means to practicing background SVG placement and responsiveness, whilst also controlling how it blended with a gradient applied over the top. Since a gradient is technically a background-image, I had to practice layering multiple background images on top of one another, which was a technique I hadn't attempted before. I was suprised at the extent to which applying a different `background-blend-mode` would completely change the accented colour displayed throughout the SVG, which clearly provides a convient way to achieve this effect without having to manually change the `fill` colour in the XML code.

```css
.future-container {
   background-position: calc(100% + 240px) 60%;
   background-size: 700px;
}

.future__flex-parent::before {
   position: absolute;
   left: 60%;
   top: 50%;
}
```

By far the most challenging feature of this project was controlling the responsiveness of the primary background images, within the `<main>` sections of content. This was not too difficult to achieve at mobile and tablet screens, for which I placed them within a responsive flex container to keep them aligned with the rest of the content.

However, I had to learn and implement the CSS `calc()` function to achieve the design of keeping both images pinned to opposite sides of the viewport, especially as both sides scaled further apart from one another. Using a calc value of 100% plus a desired fixed amount added on top would pin the image to the right viewport edge, whilst a value of 0% minus a fixed amount would do so to the left.

This still did not completely solve my problem, as at ultra-wide viewport sizes both images would fly off to the sides and become mis-aligned with the primary content when the max-width hit on my utility class. In order to solve this, I decided to position the images in relation to their corresponding empty flex container within the primary content, so they would respond in line with the centered content.

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

The mobile-phone images provided a great challenge in using both relative and fixed unit lengths, in order to control when the asset would grow and when it would stay pinned with changing sections of content. In order to create the desired background for the image at mobile and tablet devices, I had to apply to a `min-height` to its parent flex container to create the room (since both a fixed and max-height did not work). This would then need to be reset at wider screen sizes, else flex would respond all other children heights to match that minimun value with a 'row' direction.

As for the phone image itself, I applied a fuild size so it would grow up to wider screens where I then overrode that value with a fixed size, whilst changing its positioned-relative parent to the background flex-child. Similarly to the background images, this allowed it to respond in line with the primary content when the max-width hit.

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
