export default function ErrorPage() {
  const handleHomeClick = (event: Event) => {
    event.preventDefault();
    // eslint-disable-next-line no-undef
    window.history.pushState(null, "", "/");
    // eslint-disable-next-line no-undef
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div class="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4 text-white">
      <div class="w-full max-w-md text-center">
        {/* Logo placeholder */}
        <div class="mb-8">
          <span class="text-4xl font-bold text-green-400">HULU CLONE</span>
        </div>

        <h1 class="mb-4 text-5xl font-bold">Oops!</h1>
        <p class="mb-8 text-xl">We can't find the page you're looking for.</p>

        <a
          href="/"
          onClick={handleHomeClick}
          class="inline-block rounded-full bg-green-500 px-6 py-3 font-bold text-white transition duration-300 hover:bg-green-600"
        >
          Back to Home
        </a>
      </div>

      <footer class="mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} Hulu Clone. All rights reserved.
      </footer>
    </div>
  );
}
