# Space tourism website - Frontend Mentor Challenge

This project is a solution for [Frontend Mentor's challenge](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Personal notes](#personal-notes)
- [Author](#author)

## Overview

This challenge is to build out space tourism website and get it looking as close to the design as possible.

### The challenge

Users would be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Frontend Mentor Solution Page](https://www.frontendmentor.io/solutions/space-tourism-multipage-website-AfG3EwNQHh)
- Live Site URL: [Space Tourism Website](https://space-tourism-kiflan-adli.vercel.app/)

## My process

### Built with

- React js
- Tailwind CSS
- React spring
- Flexbox
- Mobile-first workflow

### Personal notes

Using tailwind can be a little bit confusing in some cases. In this project, some page will render similar style, most fastest way to style them would be using custom class and styling through that, but the result won't be any different with ordinary css. So I create custom component whenever there are reusable style to apply with, for example:

```
export function SubHeading2(props) {
  return (
    <p className="font-barlow-condensed text-sm tracking-sm text-quartz">
      {props.children}
    </p>
  );
}
```

this code was used to style specific typography,

or:

```
export default function PageContainer({containerClass}) {
  return (
    <div
      className={`text-center p-6 pt-20 md:px-10 md:pb-0 md:pt-36 lg:px-32 min-h-screen bg-no-repeat bg-cover ${containerClass}`}
    >
    {...}
    </div>
  )
}
```

this code was used to contain the page with similar layout.

Though this way of creating template is quite fun to do, but the more components needs a slight variant the more complex the component props will become. for example:

```
<PageContainer
      page="crew"
      pageData={crew}
      Header={CrewHeader}
      Body={CrewBody}
      containerClass="bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop md:flex md:flex-col md:justify-between lg:gap-11"
      label={{ id: "02", title: "meet your crew" }}
      articleClass="md:flex-col-reverse md:max-lg:pb-0 lg:flex-row-reverse lg:gap-0 lg:py-0"
      sectionClass="md:flex-col-reverse lg:basis-[70%] lg:h-[65vh] lg:py-20 lg:justify-between xl:justify-around"
      headerClass="h-[40vh] md:h-[50vh] lg:h-[60vh] lg:self-end lg:shrink lg:flex lg:items-end"
      bodyClass="md:max-lg:max-w-[80%] mx-auto lg:mx-0"
>
{...}
</PageContainer>
```

this code is an example of using the template container for specific page.

I believe the most efficient way would be just use @apply, but again, that would be same as styling with ordinary SASS in my opinion.

## Author

- Website - [Kiflan Adli](https://kiflanadli.github.io)
- Frontend Mentor - [@kiflanadli](https://www.frontendmentor.io/profile/kiflanadli)
