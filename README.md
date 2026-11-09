# Day 13: Introduction to Bootstrap 5 Master Guide & Codes 🅱️🚀

A comprehensive repository covering the theory, 12-column grid system, essential UI components, utility classes, and practical code implementations of **Bootstrap 5**.

---

## 📑 Table of Contents
1. [What is Bootstrap?](#what-is-bootstrap)
2. [Why Bootstrap 5? (Key Features)](#why-bootstrap-5-key-features)
3. [Getting Started & Installation](#getting-started--installation)
   - CDN Setup
   - NPM / Vite Setup
4. [The 12-Column Grid System](#the-12-column-grid-system)
   - Containers (`.container`, `.container-fluid`)
   - Rows & Columns (`.row`, `.col-*`)
   - Responsive Breakpoints
5. [Core Bootstrap Components](#core-bootstrap-components)
   - Navbar
   - Buttons & Button Groups
   - Cards
   - Alerts & Badges
   - Forms & Input Groups
6. [Utility Classes (Spacing, Colors, Flex)](#utility-classes-spacing-colors-flex)
7. [Bootstrap in React Applications](#bootstrap-in-react-applications)
8. [Component & Code Walkthrough](#component--code-walkthrough)

---

## What is Bootstrap?

**Bootstrap** is the world's most popular open-source front-end toolkit. It provides pre-built CSS styles, a responsive 12-column grid, ready-to-use UI components, and JavaScript plugins to build responsive, mobile-first websites rapidly.

Originally created at Twitter by Mark Otto and Jacob Thornton, Bootstrap standardized responsive web design for millions of developers worldwide.

---

## Why Bootstrap 5? (Key Features)

* **No jQuery Dependency**: Bootstrap 5 uses pure modern JavaScript (ES6+), resulting in lighter bundles and faster execution.
* **CSS Custom Properties (Variables)**: Colors, typography, and component states are customizable directly in CSS without recompiling Sass.
* **Enhanced 12-Column Grid**: Added a new extra-extra-large (`xxl`) breakpoint (`≥1400px`) and improved gutter utilities (`g-*`, `gx-*`, `gy-*`).
* **Utility API**: Comprehensive utility classes for margin, padding, flexbox, typography, and borders.
* **Custom SVG Icons**: First-party Bootstrap Icons library.

---

## Getting Started & Installation

### Option 1: Quick CDN (HTML `<head>` and `<body>`)
```html
<!-- Bootstrap 5.3 CSS in <head> -->
<link 
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
  rel="stylesheet" 
/>

<!-- Bootstrap 5.3 JS Bundle (includes Popper) before closing </body> -->
<script 
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js">
</script>
```

### Option 2: NPM (For React, Vite, Next.js)
```bash
npm install bootstrap
```
In your main entry file (`main.jsx` or `App.jsx`):
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

---

## The 12-Column Grid System

Bootstrap's grid uses Flexbox under the hood. Any `.row` is divided into **12 virtual columns**.

```
+-----------------------------------------------------------------------------+
|                               .container                                    |
|  +-----------------------------------------------------------------------+  |
|  |                                 .row                                  |  |
|  |  +-------------------------+  +------------------------------------+  |  |
|  |  |       .col-md-4         |  |             .col-md-8              |  |  |
|  |  |   (4 / 12 = 33.33%)     |  |         (8 / 12 = 66.67%)          |  |  |
|  |  +-------------------------+  +------------------------------------+  |  |
|  +-----------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------+
```

### Grid Breakpoints
| Breakpoint | Infix | Dimensions | Target Devices |
|------------|-------|------------|----------------|
| Extra small| *(none)* | `<576px` | Portrait Phones |
| Small      | `sm`  | `≥576px`   | Landscape Phones |
| Medium     | `md`  | `≥768px`   | Tablets |
| Large      | `lg`  | `≥992px`   | Desktops / Laptops |
| Extra large| `xl`  | `≥1200px`  | Large Desktops |
| Extra extra large | `xxl` | `≥1400px` | Ultra-wide Screens |

### Grid Example
```html
<div class="container">
  <div class="row g-3">
    <!-- Stacks to 100% on mobile, 50% on tablet, 33.3% on desktop -->
    <div class="col-12 col-md-6 col-lg-4">
      <div class="p-3 bg-light border rounded">Column 1</div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="p-3 bg-light border rounded">Column 2</div>
    </div>
    <div class="col-12 col-md-12 col-lg-4">
      <div class="p-3 bg-light border rounded">Column 3</div>
    </div>
  </div>
</div>
```

---

## Core Bootstrap Components

### 1. Responsive Navbar
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">BootApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#grid">Grid</a></li>
        <li class="nav-item"><a class="nav-link" href="#components">Components</a></li>
      </ul>
    </div>
  </div>
</nav>
```

### 2. Buttons & Badges
```html
<!-- Button Variants -->
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-outline-success">Success Outline</button>
<button type="button" class="btn btn-danger btn-sm">Small Danger</button>

<!-- Badges -->
<span class="badge bg-primary">New</span>
<span class="badge rounded-pill bg-success">Active</span>
```

### 3. Cards
```html
<div class="card shadow-sm h-100">
  <div class="card-body">
    <h5 class="card-title">Bootstrap Cards</h5>
    <p class="card-text text-muted">Cards are flexible content containers with headers, footers, and contextual options.</p>
    <a href="#" class="btn btn-primary btn-sm">Explore More</a>
  </div>
</div>
```

### 4. Alerts
```html
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Success!</strong> Bootstrap 5 is successfully loaded and functioning.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

### 5. Forms
```html
<div class="mb-3">
  <label for="userEmail" class="form-label">Email address</label>
  <input type="email" class="form-control" id="userEmail" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <select class="form-select">
    <option selected>Select Framework</option>
    <option value="1">Bootstrap 5</option>
    <option value="2">Tailwind CSS</option>
  </select>
</div>
```

---

## Utility Classes (Spacing, Colors, Flex)

### Spacing Syntax: `{property}{sides}-{size}`
* **Properties**: `m` (margin), `p` (padding)
* **Sides**: `t` (top), `b` (bottom), `s` (start/left), `e` (end/right), `x` (horizontal), `y` (vertical), blank (all 4 sides)
* **Sizes**: `0` (none), `1` (0.25rem), `2` (0.5rem), `3` (1rem), `4` (1.5rem), `5` (3rem), `auto`
* **Examples**:
  - `mb-4` = `margin-bottom: 1.5rem`
  - `py-3` = `padding-top: 1rem; padding-bottom: 1rem`
  - `mx-auto` = Centered block element

### Flexbox Utilities
* `d-flex`: Display flex
* `justify-content-between`, `justify-content-center`, `justify-content-end`
* `align-items-center`, `align-items-start`, `align-items-stretch`
* `flex-column`, `flex-wrap`, `gap-3`

---

## Bootstrap in React Applications

In React, standard Bootstrap class names are written using `className`:
```jsx
import React from 'react';

const CardDemo = () => (
  <div className="container py-4">
    <div className="row g-3">
      <div className="col-md-6">
        <div className="card shadow-sm p-3">
          <h4 className="text-primary">React + Bootstrap</h4>
          <p className="text-muted">Use standard Bootstrap utility classes in JSX className.</p>
        </div>
      </div>
    </div>
  </div>
);

export default CardDemo;
```

---

## 💻 Included Files & Code

1. **`src/components/BootstrapDemo.jsx`**:
   - Complete React component demonstrating:
     - 12-column responsive layout grid.
     - Interactive Alert dismissal and alert generation.
     - Bootstrap Card showcase with responsive column wrapping.
     - Form input controls and button group variants.
2. **`src/components/BootstrapDemo.module.css`**:
   - Custom CSS module showing how to cleanly override or extend Bootstrap utility rules.
3. **`index.html`**:
   - Complete, standalone browser-ready webpage loading Bootstrap 5.3 CDN directly, with responsive navbar, hero banner, interactive alert, card grid, and contact form.
