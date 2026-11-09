import React, { useState } from "react";
import styles from "./BootstrapDemo.module.css";

/**
 * BootstrapDemo Component
 * Demonstrates:
 * 1. Bootstrap 5 standard 12-column grid layout (container, row, col-*)
 * 2. Interactive Alert box with dismiss & trigger functionality
 * 3. Responsive Card Deck with hover elevation & utility badges
 * 4. Bootstrap Form Controls (floating labels, input groups, validation styles)
 * 5. Utility Classes (spacing: my-*, p-*, flex: d-flex, justify-content-between)
 */
const BootstrapDemo = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", topic: "Grid System" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className={`container py-5 ${styles.customWrapper}`}>
      {/* Header Banner */}
      <header className="text-center mb-5">
        <span className="badge bg-primary px-3 py-2 rounded-pill mb-2 text-uppercase fw-semibold">
          Day 13: Introduction to Bootstrap 5
        </span>
        <h1 className="display-5 fw-bold text-dark mt-2">
          Rapid Responsive UI with Bootstrap
        </h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          Build responsive, mobile-first websites fast using a battle-tested 12-column
          grid, modular components, and comprehensive utility classes.
        </p>
      </header>

      {/* Interactive Alert */}
      {showAlert && (
        <div
          className="alert alert-primary alert-dismissible fade show d-flex align-items-center justify-content-between shadow-sm"
          role="alert"
        >
          <div>
            <strong>💡 Pro Tip:</strong> Bootstrap 5 dropped jQuery completely in favor
            of native ES6+ JavaScript, resulting in significantly lighter page loads!
          </div>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setShowAlert(false)}
          ></button>
        </div>
      )}

      {/* Section 1: The 12-Column Grid System */}
      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4 text-dark fw-bold mb-0">1. The 12-Column Grid System</h2>
          <span className="text-muted small">Resizes across sm, md, and lg</span>
        </div>

        <div className="row g-3 text-center">
          <div className="col-12 col-md-4">
            <div className={`p-4 rounded-3 border ${styles.gridBox}`}>
              <h5 className="fw-semibold">col-md-4</h5>
              <p className="text-muted small mb-0">Takes 4 of 12 columns (33.3%) on tablets and above.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={`p-4 rounded-3 border ${styles.gridBox}`}>
              <h5 className="fw-semibold">col-md-4</h5>
              <p className="text-muted small mb-0">Evenly shares horizontal space using Flexbox rows.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={`p-4 rounded-3 border ${styles.gridBox}`}>
              <h5 className="fw-semibold">col-md-4</h5>
              <p className="text-muted small mb-0">Stacks to 100% full width automatically on mobile screens.</p>
            </div>
          </div>
        </div>

        <div className="row g-3 text-center mt-1">
          <div className="col-12 col-md-8">
            <div className={`p-3 rounded-3 border bg-light ${styles.gridBox}`}>
              <strong>col-md-8</strong> (66.6% width)
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={`p-3 rounded-3 border bg-light ${styles.gridBox}`}>
              <strong>col-md-4</strong> (33.3% width)
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Components Showcase */}
      <section className="mb-5">
        <h2 className="h4 text-dark fw-bold mb-3">2. Core UI Components</h2>
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body p-4 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-1">
                    Layout
                  </span>
                  <span className="text-muted small">Flexbox</span>
                </div>
                <h5 className="card-title fw-bold">Grid & Utilities</h5>
                <p className="card-text text-secondary flex-grow-1">
                  Margin (m-*), padding (p-*), display (d-flex), and alignment classes make custom CSS optional for standard layouts.
                </p>
                <button className="btn btn-outline-primary btn-sm rounded-pill mt-2">
                  Learn Grid →
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body p-4 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-1">
                    Theme
                  </span>
                  <span className="text-muted small">CSS Vars</span>
                </div>
                <h5 className="card-title fw-bold">CSS Variables</h5>
                <p className="card-text text-secondary flex-grow-1">
                  Bootstrap 5 provides root variables (--bs-primary, --bs-body-bg) enabling effortless runtime theme customization.
                </p>
                <button className="btn btn-outline-primary btn-sm rounded-pill mt-2">
                  View Variables →
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body p-4 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle rounded-pill px-3 py-1">
                    Forms
                  </span>
                  <span className="text-muted small">Controls</span>
                </div>
                <h5 className="card-title fw-bold">Accessible Controls</h5>
                <p className="card-text text-secondary flex-grow-1">
                  Clean form inputs, floating labels, select dropdowns, checks, and radios styled uniformly across all browsers.
                </p>
                <button className="btn btn-outline-primary btn-sm rounded-pill mt-2">
                  Explore Forms →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Bootstrap Form */}
      <section className="p-4 p-md-5 rounded-4 bg-light border shadow-sm">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 mb-4 mb-lg-0">
            <h3 className="fw-bold text-dark">Bootstrap Form Controls</h3>
            <p className="text-secondary">
              Bootstrap gives form controls modern padding, clean focus borders, and seamless responsive reflow.
            </p>
            <ul className="list-unstyled text-secondary small">
              <li className="mb-2">✔ Consistent styling on all devices</li>
              <li className="mb-2">✔ Built-in accessible focus states</li>
              <li>✔ Works smoothly with React state handlers</li>
            </ul>
          </div>

          <div className="col-12 col-lg-7">
            {submitted ? (
              <div className="alert alert-success p-4 rounded-3 text-center">
                <h5 className="alert-heading fw-bold mb-1">🎉 Form Submitted!</h5>
                <p className="mb-0">
                  Thank you, <strong>{formData.name}</strong>! We’ve registered your preference for <em>{formData.topic}</em>.
                </p>
                <button
                  className="btn btn-success btn-sm mt-3"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-4 rounded-3 shadow-sm border">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sameer Mohammed"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Preferred Topic</label>
                  <select
                    className="form-select"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  >
                    <option value="Grid System">12-Column Grid System</option>
                    <option value="Components">Cards, Modals & Alerts</option>
                    <option value="Utilities">Spacing & Flex Utilities</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BootstrapDemo;
