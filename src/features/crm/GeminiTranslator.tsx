"use client";


import React, { useState, useRef } from "react";
import Icon from "@/components/Icon/Icon";


export default function GeminiTranslator() {
  const [input, setInput] = useState("");
  const [translations, setTranslations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleTranslate = async () => {
    setLoading(true);
    setError("");
    setTranslations([]);
    setCopiedIdx(null);
    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Translation failed");
      setTranslations(data.translations || []);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <div style={{ position: 'relative', width: '100%' }}>
          <textarea
            id="ukrainian-text"
            rows={4}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Введіть український текст..."
            style={{ width: '100%', boxSizing: 'border-box', resize: 'vertical', paddingRight: 32, backgroundColor: 'black', color: 'white' }}
            onKeyDown={e => {
              if (
                e.key === 'Tab' &&
                !e.shiftKey &&
                buttonRef.current &&
                !buttonRef.current.disabled
              ) {
                e.preventDefault();
                buttonRef.current.focus();
              }
            }}
          />
          {input && (
            <button
              type="button"
              onClick={() => setInput("")}
              aria-label="Clear text"
              style={{
                position: 'absolute',
                right: 8,
                top: 8,
              }}
            >
              <Icon name="close" size={18} />
            </button>
          )}
        </div>
        <button
          ref={buttonRef}
          onClick={handleTranslate}
          disabled={loading || !input.trim()}
        >
          {loading ? (
            <span>
              <span className="spinner" aria-label="Loading" /> Translating...
            </span>
          ) : (
            "Rephrase to Smart English"
          )}
        </button>
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {translations.length > 0 && (
          <div>
            <strong>Options:</strong>
            <div>
              {translations.map((t, idx) => (
                <div key={idx} className="translation-card">
                  <div>{t}</div>
                  <button
                    onClick={() => handleCopy(t, idx)}
                    aria-label="Copy translation"
                  >
                    {copiedIdx === idx ? (
                      <Icon name="check" size={18} />
                    ) : (
                      <Icon name="copy" size={18} />
                    )}
                    {copiedIdx === idx && <span> Copied!</span>}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
