import { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import ResultPanel from "../components/ResultPanel";
import Navbar from "../components/Navbar";
import { reviewCode } from "../utils/api";

export default function Dashboard() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(""); // result স্টেটটি ডিক্লেয়ার করা প্রয়োজন

  const runReview = async () => {
    try {
      const data = await reviewCode(code);
      setResult(data.review);
    } catch (error) {
      console.error("Error reviewing code:", error);
    }
  }; // এই ব্র্যাকেটটি আপনার স্ক্রিনশটে মিসিং ছিল

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="editor-section">
        <CodeEditor code={code} setCode={setCode} />
        <button onClick={runReview}>Review Code</button>
      </div>
      <div className="result-section">
        <ResultPanel result={result} />
      </div>
    </div>
  );
}