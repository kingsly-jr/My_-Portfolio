import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink text-cream flex flex-col items-center justify-center px-6 text-center">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-forest mb-4">
        (404 // Page Not Found)
      </div>
      <h1 className="font-display text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight text-cream mb-6">
        404
      </h1>
      <p className="font-sans text-muted text-base sm:text-lg md:text-xl max-w-md mb-10 leading-relaxed">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-forest text-cream font-mono text-xs uppercase tracking-widest hover:bg-forest-light transition-colors duration-300"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

