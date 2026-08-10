import Script from "next/script";

/** Microsoft Clarity project ID (client-side; expected in the browser). */
const CLARITY_PROJECT_ID = "y047ur96sa";

/**
 * Microsoft Clarity heatmaps & session recordings.
 * Loaded once in the root layout via next/script (afterInteractive).
 */
export default function MicrosoftClarity() {
  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);
          t.async=1;
          t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];
          y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
      `}
    </Script>
  );
}
