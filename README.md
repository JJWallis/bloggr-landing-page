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
-  Mobile-first workflow
-  Flexbox
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

When I first started creating the HTML markup for this project, I really struggled with creating a layout that accomodated both the mobile and desktop navigation layout. However, having researched multiple solutions via the Front End Mentor platform, I realsied that it was perfectly ok to create an entirely separate section of markup for the mobile layout, which would ultimately be rendered invisible at wider viewports. I was also able to make use of the BEM naming convention to help differentiate between both sections of markup within the header, while styling them in a related manner within my stylesheets.

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

The header design in this project provided a great means to practicing background SVG placement and responsiveness, whilst also controlling how it blended with a gradient applied over the top. Since a gradient is technically a background-image, I had to practice layering multiple background images on top of one another, which was a technique I hadn't attempted before. I was suprised at the extent to which applying a different `background-blend-mode` would completely change the accented colour displayed throughout the SVG itself, which clearly provides a convenient way to achieve this effect without having to manually change the `fill` colour in the XML code.

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

By far the most challenging feature of this project was controlling the responsiveness of the primary background images, within the `<main>` sections of the content. This was not too difficult to achieve at mobile and tablet screens, for which I placed them within a responsive flex container to keep them aligned with the rest of the content.

However, I had to learn and implement the CSS `calc()` function to achieve the design of keeping both images pinned to opposite sides of the viewport, especially as both sides scaled further apart from one another. Using a calc value of 100% plus a desired fixed amount added on top would pin the image to the right viewport edge, whilst a value of 0% minus a fixed amount would do so to the left.

This still did not completely solve my problem, as at ultra-wide viewport sizes both images would fly off to the sides and become mis-aligned with the primary content when the max-width hit on my utility class. In order to solve this, I decided to position the images in relation to their corresponding empty flex container within the primary content, so they would respond in line with the centered content.

```css
.infastructure__phones-parent {
   min-height: 3.5rem;
}

.infastructure__phones-img {
   top: -177px;
   right: 8%;
   width: 600px;
}
```

The mobile-phone image provided a great challenge in using both relative and fixed unit lengths, in order to control when the asset would grow and when it would stay pinned with changing sections of content. In order to create the desired background for the image at mobile and tablet devices, I had to apply a `min-height` to its parent flex container to create the room (since both a fixed and max-height did not work). This would then need to be reset at wider screen sizes, else the parent would respond all child heights to match that minimun value with a 'row' direction.

As for the phone image itself, I applied a fuild size so it would grow up to wider screens, where I then overrode that value with a fixed size whilst changing its positioned-relative parent to the background flex-child. Similarly to the background images, this allowed it to respond in line with the primary content when the max-width hit.

```js
const [header, hamburgerBtn, arrows] = [
   domSelect('.header'),
   domSelect('#hamburger'),
   domSelectAll('.arrow'),
]
```

I was proud of my ability to use destructuring in this project, in a simple attempt to save unnecessary lines of code. However, although I feel that I am thinking in the correct manner when using the technique, I do believe I overused it and sometimes it would be more readable to decalre multiple variables on different lines for example.

```js
function reset() {
   const navLists = domSelectAll('.header-nav__ul')
   for (const list of navLists) list.classList.add('hamburger-hidden')
   for (const arrow of arrows) arrow.classList.remove('rotate')
}
```

I feel the block of code above showcases a good number of recently learnt techniques, whilst successfully re-creating a classic 'piece' of logic which I have personally seen used in multiple different scenarios, including complicated navigations such as the React docs. In this particular project, I used the function to reset all the arrow styles for the navigation when a user clicked on a link, rotating them to all face downwards whilst then 're-rotating' the one the user clicked to face up.

### Continued development

For future projects I would like to learn about more complicated CSS animations using the `animation` property. Although I do realise this can have negative impacts on accessibility and should only be used where appropiate, I feel it would enhance my knowledge of the language, whilst adding a level of sophistication to a finished project.

Furthermore, I feel as if I relied too heavily on the CSS `clamp()` function to fill the space between tablet and wider screen sizes. As a result, the font size appeared unecessarily large which reduced the visual distinction between different importance levels of text (headings and paragraphs). Although this is clearly a very useful technique to know about, I would like to dive deeper into other methods of filling empty space that may appear in responsive design.

### Useful resources

-  [Min(), Max() & Clamp()](https://www.youtube.com/watch?v=U9VF-4euyRo&ab_channel=KevinPowell) - This was a great video by Kevin explaining some of the methods we can use to achieve 'fluid topography' between different viewport sizes. We can also make use of feature queries to create fallbacks to support older browsers that don't yet recognise these properties.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis](https://www.linkedin.com/in/joshua-jameson-wallis/)
