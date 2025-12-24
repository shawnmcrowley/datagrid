import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Data Grid Example</h1>
      <p>Easy Data Display Grid with Filters, Sorting, Dates and Support for Nested Objects via JSON</p>
      <div style={{ marginTop: "2rem" }}>
        <Link href="/grid" style={{ 
          padding: "0.75rem 1.5rem", 
          backgroundColor: "#0070f3", 
          color: "white", 
          textDecoration: "none",
          borderRadius: "0.5rem",
          display: "inline-block"
        }}>
          View Data Grid
        </Link>
      </div>
    </main>
  );
}
