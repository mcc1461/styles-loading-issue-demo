import "./FixedPage.css";

function FixedPage() {
  return (
    <div className="flex items-center justify-center bg-gray-900 text-white min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-400">
          Stylesheet Loaded Successfully
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          This page shows the correct way to load external stylesheets without
          errors.
        </p>
      </div>
    </div>
  );
}

export default FixedPage;
