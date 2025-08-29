"use client"

import { useState } from "react"

export default function APITester() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const testAPI = async () => {
    setLoading(true)
    try {
      const data = JSON.parse(input)
      const res = await fetch("/api/bfhl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      })

      const result = await res.json()
      setResponse(result)
    } catch (error) {
      setResponse({ error: "Invalid JSON or API error" })
    }
    setLoading(false)
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>

      <div style={{ marginBottom: "30px" }}>
        <h3>Test API</h3>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Input Data (JSON Array):</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='["a","1","334","4","R", "$"]'
            style={{
              width: "100%",
              height: "80px",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          />
        </div>
        <button
          onClick={testAPI}
          disabled={loading}
          style={{
            padding: "10px 20px",
            backgroundColor: loading ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "14px",
          }}
        >
          {loading ? "Testing..." : "Test API"}
        </button>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3>Response</h3>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "15px",
            minHeight: "100px",
          }}
        >
          {response ? (
            <pre style={{ margin: 0, fontSize: "12px", overflow: "auto" }}>{JSON.stringify(response, null, 2)}</pre>
          ) : (
            <p style={{ color: "#666", margin: 0 }}>No response yet. Test the API above.</p>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3>Quick Test Examples</h3>
        <button
          onClick={() => setInput('["a","1","334","4","R", "$"]')}
          style={{
            padding: "8px 15px",
            margin: "5px",
            backgroundColor: "#f8f9fa",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Example A
        </button>
        <button
          onClick={() => setInput('["2","a", "y", "4", "&", "-", "*", "5","92","b"]')}
          style={{
            padding: "8px 15px",
            margin: "5px",
            backgroundColor: "#f8f9fa",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Example B
        </button>
        <button
          onClick={() => setInput('["A","ABcD","DOE"]')}
          style={{
            padding: "8px 15px",
            margin: "5px",
            backgroundColor: "#f8f9fa",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Example C
        </button>
      </div>

      <div style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "4px" }}>
        <h3>API Info</h3>
        <p>
          <strong>Method:</strong> POST
        </p>
        <p>
          <strong>Route:</strong> /api/bfhl
        </p>
        <p>
          <strong>Content-Type:</strong> application/json
        </p>
        <p>
          <strong>Request:</strong> {`{ "data": ["array", "of", "values"] }`}
        </p>
      </div>
    </div>
  )
}
