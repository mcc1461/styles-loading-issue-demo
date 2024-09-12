import "./ErrorPage.css";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center bg-gray-900 text-white min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-500">
          Stylesheet Failed to Load
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          This page simulates the "This Page Failed to Load a Stylesheet" error
          caused by incorrect `@import` in CSS.
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
