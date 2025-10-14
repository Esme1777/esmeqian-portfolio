import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function ImageViewer() {
  const q = useQuery();
  const src = q.get("p"); // e.g. /work/p1-long.jpg
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/project");
    }
  };

  if (!src) {
    return (
      <div style={{ padding: "6rem 1rem", textAlign: "center", color: "#fff" }}>
        <h2>Missing image path</h2>
        <p>Use <code>/viewer?p=/work/your-image.jpg</code></p>
        <Link to="/project" style={{ color: "#22d3ee" }}>Back to Projects</Link>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "88px 16px 24px", 
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 12,
        }}
      >
        <a
          href="/project"
          onClick={handleBack}
          style={{ color: "#22d3ee", textDecoration: "none" }}
          aria-label="Back to Projects"
        >
          ← Back to Projects
        </a>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          maxHeight: "85vh",
          overflow: "auto",
          borderRadius: 12,
          boxShadow: "0 10px 30px rgba(0,0,0,.35)",
          background: "#0d1117",
          padding: 8,
        }}
      >
        <img
          src={src}
          alt="Case study"
          style={{ width: "100%", height: "auto", display: "block" }}
          loading="eager"
        />
      </div>
    </div>
  );
}
