# My Portfolio

## Technical Overview

This is a single page react app. The site is styled using tailwindCSS

## Goals

My goals for this site were to keep it very clean and simple. I decided on making a two element site. On the left (or top if on smaller devices) is the nav. On the right is the main section of the site.

The main section snaps to the next "Page" of the app when scrolling. Although it is listed as different pages, this section is all one div that has its overflow hidden. the snapping is done using a combination of CSS scroll snap and React useRef to show the heading if the nested "page" has additional overflow.

## Notes

As noted above this project was designed to be as clean as possible. Thanks to tailwind, this was as simple due to its predefined classes. The snapping adds some flair and, no pun intend, outside the box thinking while designing the functionality and layout of the site.
