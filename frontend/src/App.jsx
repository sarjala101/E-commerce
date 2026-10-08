// src/App.jsx (or any test component)
import { useEffect, useState } from "react";
import apiClient from "@/api/axios";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiClient
      .get("/status")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Connection error:", err);
        setError("Failed to connect to Laravel backend");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Connecting to backend...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Frontend-Backend Connection Status</h1>
      <p>
        <strong>Status:</strong> {data?.status}
      </p>
      <p>
        <strong>Message:</strong> {data?.message}
      </p>
    </div>
  );
}
