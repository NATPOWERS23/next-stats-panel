"use client";


import React, { useState, useRef } from "react";
import Icon from "@/components/Icon/Icon";
import Button from "@/components/Button/Button";
import { SkeletonLoader, SkeletonLoaderWrapper } from "@/components/Skeleton/Skeleton";


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
      setTimeout(() => setCopiedIdx(null), 3000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="card w-full p-4 pt-2 rounded-2large shadow-lg bg-grey flex flex-col row-span-2">
      <div className="card-body">
        <div style={{ position: 'relative', width: '100%' }}>
          <textarea
            id="ukrainian-text"
            rows={4}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Введіть український текст..."
            style={{ width: '100%', boxSizing: 'border-box', resize: 'vertical', paddingRight: 32, backgroundColor: 'black', color: 'white' }}
            className="rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary transition duration-300"
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
          className="w-fit my-2 bg-secondary hover:bg-secondary/70 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
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
        {loading ? (
          <SkeletonLoaderWrapper>
            <div>
              <strong className="text-lg font-semibold text-grey-light">Options:</strong>
              <div>
                {[0, 1, 2].map(idx => (
                  <div key={idx} className="translation-card flex justify-between items-center p-2 my-2 rounded">
                    <SkeletonLoader width="80%" height="2em" />
                    <SkeletonLoader width="2em" height="2em" />
                  </div>
                ))}
              </div>
            </div>
          </SkeletonLoaderWrapper>
        ) : (
          translations.length > 0 && (
            <div>
              <strong className="text-lg font-semibold text-grey-light">Options:</strong>
              <div>
                {translations.map((t, idx) => (
                  <div key={idx} className="translation-card flex justify-between items-center p-2 my-2 rounded">
                    <div>{t}</div>
                    {copiedIdx === idx ? (
                      <Icon name="check" size={18} color="limegreen" />
                    ) : (
                      <Button
                        content={<Icon name="copy" size={18} />}
                        onClick={() => handleCopy(t, idx)}
                        aria-label="Copy translation"
                        size="small"
                        buttonType="outlined"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
