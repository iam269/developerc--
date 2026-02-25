# C++ Mastery

![C++ Mastery Screenshot](c-.png)

A comprehensive, interactive educational platform for learning C++ programming, featuring code examples, tutorials, and real-world industry applications.

## 🚀 Live Demo

**View the website live**: [https://developerc.vercel.app/](https://developerc.vercel.app/)

![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [C++ Concepts Covered](#c-concepts-covered)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Resources](#resources)

## Overview

C++ Mastery is a modern, visually stunning educational website designed to help developers learn and master C++ programming. The platform covers everything from basic syntax to advanced programming concepts, with interactive code examples and real-world applications.

## Features

### 🎯 Interactive Learning Experience
- **Animated Hero Section**: Particle canvas animation with smooth transitions
- **Loading Screen**: Custom animated loader with performance-themed messaging

### 📚 Comprehensive Content Sections
- **History Timeline**: Interactive vertical timeline showing C++ evolution from 1979 to present
- **Concepts Guide**: 14 fundamental C++ programming concepts with code examples
- **Algorithms & Data Structures**: 5 key algorithm categories with explanations
- **Industry Applications**: 6 industries where C++ dominates (Games, OS, Auto, Finance, AI, Graphics)
- **Pros vs Cons**: Side-by-side comparison of C++ advantages and challenges

### 💻 Code Examples
- Custom code block component with syntax highlighting
- Clean, readable C++ code snippets
- Line numbers for reference

### 🎨 Modern UI/UX
- Dark theme with cyan accent colors
- Responsive design (mobile, tablet, desktop)
- Smooth animations using Motion (Framer Motion)
- Glass-morphism effects and gradients
- Interactive hover states

### 🔗 External Resources
- 8 curated learning resources with direct links to:
  - cppreference.com (official documentation)
  - LearnCpp.com (tutorials)
  - LeetCode (practice)
  - Reddit r/cpp (community)
  - ISO C++ Foundation
  - STL documentation
  - Recommended books

## C++ Concepts Covered

The website includes detailed explanations and code examples for:

1. **Variables & Data Types** - int, double, char, bool, string, const
2. **Control Flow** - if-else, switch statements
3. **Loops** - for, while, range-based for
4. **Functions** - parameters, references, default values
5. **Pointers & References** - memory addresses, dereferencing
6. **Structs & Classes** - OOP fundamentals
7. **Inheritance** - class derivation
8. **Polymorphism** - virtual functions, override
9. **Object-Oriented Programming** - classes, inheritance, encapsulation
10. **Templates (Generic Programming)** - template functions/classes
11. **STL** - vectors, maps, algorithms
12. **Exception Handling** - try, catch, throw
13. **Memory Management** - smart pointers, RAII
14. **File I/O** - reading/writing files

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: 
  - Radix UI (headless components)
  - Shadcn/ui components
- **Animation**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Language**: English (full translation)

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd developerc++

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
developerc++
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/              # Reusable UI components
│   │   │   ├── figma/           # Figma-related components
│   │   │   ├── Navbar.tsx       # Navigation menu
│   │   │   ├── Hero.tsx         # Landing section with animation
│   │   │   ├── HistoryTimeline.tsx  # C++ evolution timeline
│   │   │   ├── Concepts.tsx     # Programming concepts
│   │   │   ├── Algorithms.tsx   # Algorithms & data structures
│   │   │   ├── IndustrySection.tsx  # Industry applications
│   │   │   ├── ComparisonTable.tsx  # Pros vs cons
│   │   │   ├── Resources.tsx    # Learning resources
│   │   │   ├── CodeBlock.tsx   # Code display component
│   │   │   └── App.tsx         # Main application
│   │   └── main.tsx
│   ├── styles/                   # Global styles
│   └── main.tsx                 # Entry point
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.mjs
└── README.md
```

## Key Components

### Navbar
- Fixed position with blur effect
- Responsive mobile menu
- Navigation links to all sections

### Hero Section
- Canvas-based particle animation
- Animated text reveals
- Call-to-action buttons

### History Timeline
- Alternating left/right layout
- Animated entry on scroll
- Year markers with descriptions

### Concepts Section
- 14 concept cards with icons
- Code blocks for each concept
- Responsive grid layout

### Industry Section
- 6 industry cards with examples
- Company logos section
- Hover effects

### Comparison Table
- Two-column layout (pros/cons)
- Animated list items
- Color-coded entries

### Resources Section
- 8 external resource cards
- Direct links to documentation
- Category-based organization

### Footer
- Navigation links
- Social icons
- Copyright information

## Resources

The website links to:
- [cppreference.com](https://en.cppreference.com) - Official C++ reference
- [LearnCpp.com](https://www.learncpp.com) - Interactive tutorials
- [LeetCode](https://leetcode.com) - Practice platform
- [r/cpp](https://reddit.com/r/cpp) - Community
- [ISO C++](https://isocpp.org) - Standard body
- [cplusplus.com](https://cplusplus.com) - STL reference

---

Built with ❤️ for C++ developers everywhere

**Version**: 1.0.0  
**Language**: English  
**License**: MIT
