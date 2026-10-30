"use client";

export default function Issue01Page() {
  return (
    <main className="relative bg-[#f3f4f6] overflow-hidden">
      {/* Platinum Grain Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="platinum-grain opacity-[0.35]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl pt-40 pb-32">
        {/* =====================================================
            SECTION 01 ISSUE SUMMARY
        ===================================================== */}
        <section className="max-w-3xl space-y-10 mb-28">
          <span className="block text-[11px] tracking-[0.45em] uppercase text-black/50">
            Issue 01
          </span>

          <h1 className="text-black font-light text-3xl md:text-5xl leading-tight">
            Designed to Disappear
          </h1>

          <p className="text-black/70 text-sm md:text-base leading-relaxed">
            This issue explores the quiet decisions that define experience long
            after a space is complete, where sound belongs, technology recedes,
            and intent remains intact.
          </p>

          {/* CONTENTS */}
          <div className="pt-6 space-y-4 text-black/65 text-sm md:text-base">
            <p> Editorial Foreword</p>
            <p> When AV Is Considered Too Late</p>
            <p> The Ceiling as a Battleground</p>
            <p> Silence, Control, and Effortless Experience</p>
            <p> Designing for What Is Felt</p>
          </div>
        </section>

        {/* =====================================================
            SECTION 02 BOOK FLIPPER
        ===================================================== */}
        <section className="relative bg-transparent shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
          <div className="relative w-full max-h-[70vh] h-[70vh] overflow-hidden">
            <iframe
              src="https://heyzine.com/flip-book/9057571446.html"
              className="absolute inset-0 w-full h-full border-0"
              allow="clipboard-write"
              allowFullScreen
            />
          </div>
        </section>
      </div>

      {/* =====================================================
          GLOBAL STYLES
      ===================================================== */}
      <style jsx global>{`
        .platinum-grain {
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px);
          background-size: 3px 3px;
          animation: moveGrain 50s linear infinite;
        }

        @keyframes moveGrain {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-12%, -12%);
          }
        }
      `}</style>
    </main>
  );
}
