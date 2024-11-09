import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation

const WebsiteGrader = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Navigation hook

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
        url
      )}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const lighthouseResult = data?.lighthouseResult;
      if (!lighthouseResult) {
        throw new Error(
          "Lighthouse data is not available in the API response."
        );
      }

      const performanceScore =
        lighthouseResult.categories?.performance?.score * 100 || 0;
      const accessibilityScore =
        lighthouseResult.categories?.accessibility?.score * 100 || 0;
      const bestPracticesScore =
        lighthouseResult.categories?.["best-practices"]?.score * 100 || 0;
      const seoScore = lighthouseResult.categories?.seo?.score * 100 || 0;

      const resultData = {
        url,
        scores: {
          aggregate:
            (performanceScore +
              accessibilityScore +
              bestPracticesScore +
              seoScore) /
            4,
          details: [
            {
              label: "Performance",
              score: performanceScore,
              maxScore: 100,
              color: "red",
            },
            {
              label: "Accessibility",
              score: accessibilityScore,
              maxScore: 100,
              color: "orange",
            },
            {
              label: "Best Practices",
              score: bestPracticesScore,
              maxScore: 100,
              color: "blue",
            },
            { label: "SEO", score: seoScore, maxScore: 100, color: "green" },
          ],
        },
      };

      // Navigate to Lighthouse component and pass resultData as state
      navigate("/lighthouse", { state: { analysisData: resultData } });
    } catch (error) {
      setError(`Failed to fetch performance data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>Website Grader</h1>
      <p>Enter a URL to check its performance and SEO metrics:</p>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          style={{
            padding: "10px",
            width: "80%",
            marginBottom: "10px",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Analyze
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default WebsiteGrader;
