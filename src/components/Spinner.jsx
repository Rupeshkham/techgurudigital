"use client";

export default function Spinner({ show }) {
  if (!show) return null;

  return (
    <div
      id="spinner"
      className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      style={{ zIndex: 9999 }}
    >
      <div
        className="spinner-border text-primary"
        style={{ width: "3rem", height: "3rem" }}
      />
    </div>
  );
}
