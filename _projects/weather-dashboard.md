---
title: Weather Dashboard
date: 2024-06-01
description: A browser-based weather dashboard that shows real-time weather data and a 5-day forecast using the OpenWeatherMap API.
tech: [JavaScript, HTML, CSS, REST API]
github: https://github.com/havriutkin
demo: https://havriutkin.github.io
---

## Overview

A clean weather dashboard that fetches live weather data from the OpenWeatherMap API and displays current conditions alongside a 5-day forecast.

## Features

- Search by city name
- Displays temperature, humidity, wind speed, and weather description
- 5-day forecast with daily high/low temperatures
- Responsive grid layout
- Graceful error handling for invalid cities or network failures

## Tech Stack

- Vanilla JavaScript (no frameworks)
- Fetch API for HTTP requests
- CSS Grid and Flexbox for layout
- OpenWeatherMap free-tier API

## Running locally

1. Get a free API key at [openweathermap.org](https://openweathermap.org)
2. Add your key to `config.js`
3. Open `index.html` in a browser — no build step required
