import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-slate-800 dark:text-slate-200">
            <span className="inline-block animate-[float_3s_ease-in-out_infinite]">4</span>
            <span className="inline-block animate-bounce">0</span>
            <span className="inline-block animate-[float_3s_ease-in-out_infinite]">4</span>
          </h1>
        </div>

        <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4 
                     animate-[fadeIn_0.6s_ease-out_forwards]">
          Oops! Page not found
        </h2>

        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg
                   transition-transform duration-200 ease-in-out
                   hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}