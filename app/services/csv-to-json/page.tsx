"use client";

import { useState } from "react";


export default function CSVToJSONPage() {
   const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);


  const uploadFile = async () => {
    if (!file) {
      setError('Please select an Excel (.csv) file');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      if(!process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL){
            alert('Webhook URL is not defined !');
            return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL!}/excel-to-json`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(
      JSON.stringify(result, null, 2)
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  } catch {
    setError('Failed to copy to clipboard');
  }
};


  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          CSV to JSON Converter
        </h1>
        <p className="text-gray-500 mb-6">
          Upload an <strong>.csv</strong> file and get structured JSON output.
        </p>

        {/* Upload Box */}
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:border-blue-500 transition">
          <input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />

          <div className="text-center">
            <p className="text-sm text-gray-600">
              {file ? (
                <>
                  <span className="font-semibold text-blue-600">
                    {file.name}
                  </span>
                  <br />
                  <span className="text-xs text-gray-400">
                    {(file.size / 1024).toFixed(1)} KB
                  </span>
                </>
              ) : (
                'Click to upload or drag & drop Excel file'
              )}
            </p>
          </div>
        </label>

        {/* Upload Button */}
        <button
          onClick={uploadFile}
          disabled={loading}
          className={`mt-6 w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-white font-medium transition
            ${loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
          {loading && (
            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}
          {loading ? 'Uploading...' : 'Upload & Convert'}
        </button>

        {/* Error */}
        {error && (
          <div className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
            ❌ {error}
          </div>
        )}

        {/* Result */}
        {result && (
        <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">
                API Response
            </h3>

            <button
                onClick={copyToClipboard}
                className="text-xs px-3 py-1.5 rounded-lg border border-gray-300
                        hover:bg-gray-100 transition flex items-center gap-2"
            >
                📋 {copied ? 'Copied!' : 'Copy JSON'}
            </button>
            </div>

            <pre className="bg-slate-900 text-green-400 rounded-xl p-4 max-h-96 overflow-auto text-xs">
            {JSON.stringify(result, null, 2)}
            </pre>
        </div>
        )}

      </div>
    </div>
  );
}
