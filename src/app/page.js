export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center">
      <div className="mx-auto max-w-2xl text-center sm:max-w-xl md:max-w-2xl">
        <h1>
          We’re building <span className="font-semibold">PaisaSync</span>
        </h1>
        <p>
          A smart way to manage your money, expenses, budgets, debt, and savings
          – all in one place.
        </p>
        <h2 className="mt-6">For updates</h2>
        <div className="flex justify-center gap-4">
          <a
            href="https://x.com/here_vikram"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            X (Twitter)
          </a>
          <a
            href="https://www.linkedin.com/in/vikrammahto/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            LinkedIn
          </a>
          <a
            href=" https://github.com/vikrammahto"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
