import { WHATSAPP, CTA } from "./shared/config";
import { Icons } from "./shared/icons";
import { FadeUp } from "./shared/motion";

/**
 * This is the site-wide footer CTA framing, not specific to Concierge.
 * Copy here is verbatim as provided: keep it consistent if this block is
 * reused on other pages (Corporate, Hospitality, Surgery Centres, etc.).
 */
export default function FooterCTA() {
  return (
    <section className="bg-[#fafafa] border-t border-slate-100 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <h2
            className="font-raleway font-extrabold text-[#0f172a] leading-[1.15] mb-6"
            style={{ fontSize: "clamp(26px, 3.2vw, 38px)" }}
          >
            Let's Design the Right Care Experience
          </h2>
          <p className="text-slate-500 text-[16px] leading-[1.85] mb-10 max-w-xl mx-auto">
            Whether you're planning recovery after surgery, coordinating care for a loved
            one, or exploring workforce wellness, our team is here to help.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#02385a] hover:bg-[#012644] text-white font-raleway font-semibold text-sm px-8 py-4 rounded-full transition-colors"
          >
            {CTA.footer}
            <Icons.ArrowRight />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}