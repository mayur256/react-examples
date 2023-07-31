# Intersection Observer API
- The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
- Intersection information is needed for many reasons, such as:
  * Lazy-loading of images or other content as a page is scrolled.
  * Implementing "infinite scrolling" websites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
  * Reporting of visibility of advertisements in order to calculate ad revenues.
  * Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.

# Intersection Concepts
- The Intersection Observer API allows you to configure a callback that is called when either of these circumstances occur:
  - A target element intersects either the device's viewport or a specified element. That specified element is called the root element or root for the purposes of the Intersection Observer API.
  - The first time the observer is initially asked to watch a target element.
- Typically, you'll want to watch for intersection changes with regard to the target element's closest **scrollable ancestor**, or, if the target element isn't a descendant of a scrollable element, the device's viewport. To watch for intersection relative to the device's **viewport**, specify _null_ for **root** option.

# Example
```
// configuration
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};
// Instantiation
const observer = new IntersectionObserver(callback, options);
```
