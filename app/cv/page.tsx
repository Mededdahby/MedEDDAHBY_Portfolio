"use client";
export default function CVPage() {
  return (
    <div className="h-screen w-full z-[10000] ">
      <iframe
        src="/cv/mededdahby.pdf"
        className="w-full h-full overflow-hidden"
        title="CV"
      />
    </div>
  );
  
}
