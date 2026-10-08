# 🛒 E-Commerce Project

A responsive e-commerce shopping cart application built with **React.js**.  
This project demonstrates product fetching from an external API, global state management using Context API, cart functionality, quantity management, and dynamic price calculation.

## 🚀 Live Demo

🔗 [View Live Project](https://e-commerce-project-git-main-devansh-2e83.vercel.app/)

## 📌 Features

- 🛍️ Fetches products from Fake Store API
- 📦 Displays products with images, titles, categories, ratings, and prices
- 🛒 Add products to cart
- ➕ Increase product quantity
- ➖ Decrease product quantity
- 🗑️ Automatically removes product when quantity reaches zero
- 💰 Dynamic cart total calculation
- 🔄 Global state management using React Context API
- ⚡ API requests handled using Axios
- 📱 Responsive and modern UI
- 🚀 Deployed using Vercel

## 🛠️ Tech Stack

- **React.js**
- **JavaScript (ES6+)**
- **Context API**
- **Axios**
- **Fake Store API**
- **CSS / Tailwind CSS**
- **Vite**
- **Vercel**

## 🧠 React Concepts Used

This project helped me practice and implement:

- React Components
- Props
- State Management with `useState`
- `useEffect`
- Context API
- `useContext`
- Conditional Rendering
- Array Methods: `map()`, `filter()`, `find()`, `reduce()`
- API Integration
- Event Handling
- Functional State Updates

## 🛒 Cart Functionality

The cart uses React Context API for global state management.

Each cart item stores:

- Product details
- Product ID
- Price
- Quantity

The total price is calculated dynamically based on:

```js
price × quantity
