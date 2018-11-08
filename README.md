# CO Legislative Tracker

The Colorado General Assembly website makes bill and voting data available to the public, but it requires navigating through bill pages, tabs, and links to see how a legislator voted. The CO Legislative Tracker links votes to legislators, tracks votes by party, and presents results graphically.

## Overview

As a former legislative staffer, I spent a lot of time on the Colorado General Assembly’s website.  The problem I found was that, while information is publicly available, it’s difficult to access it if you don’t know exactly what you’re looking for. With the Legislative Tracker, I'm trying to make it easier to see how an individual legislator voted compared to how their party voted, and how their chamber voted. Vote results are presented graphically.

## Technology Used

I used React and Firebase to deploy the frontend and Heroku to deploy the backend.  Chart.js was one of the new technologies that I used as well as Puppeteer, a Node library that you can use to control Headless Chrome.  The General Assembly’s voting data is not available as a public API, so I used Puppeteer to scrape the General Assembly's website for data.

## Links

[Hosting URL](https://legislative-tracker.firebaseapp.com)
[Backend Repo](https://github.com/KrisKam/legislative-database)
[Scraping Repo](https://github.com/KrisKam/leg-datav)
