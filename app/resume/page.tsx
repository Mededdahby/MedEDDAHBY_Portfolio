"use client";

export default function CVPage() {
  const handlePrint = () => {
    const iframe = document.getElementById("cv-frame") as HTMLIFrameElement;
    if (iframe?.contentWindow) {
      iframe.contentWindow.print();
    }
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Buttons */}
      <div className="p-4 flex gap-4 justify-center bg-white dark:bg-gray-800 shadow-md mt-10">
        {/* <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Print CV
        </button>
        <a
          href="/cv/mededdahby.pdf"
          download="Mohamed_EDDAHBY_CV.pdf"
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Download CV
        </a> */}
      </div>

      {/* PDF Viewer */}
      <iframe
        id="cv-frame"
        src="/cv/mededdahby.pdf"
        className="flex-1 w-full border-none"
        title="CV"
      />
    </div>
  );
}
