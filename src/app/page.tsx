import Script from "next/script";
import { HomePage } from "@/views/HomePage";

export default function Home() {
  return (
    <>
      <Script id="digital-assistant-widget" strategy="afterInteractive">
        {`
          (function (w, d, s, o, f, js, fjs) {
            w[o] = w[o] || function () {
              (w[o].q = w[o].q || []).push(arguments);
            };
            js = d.createElement(s);
            fjs = d.getElementsByTagName(s)[0];
            js.id = o;
            js.src = f;
            js.async = 1;
            fjs.parentNode.insertBefore(js, fjs);
          })(window, document, "script", "DigitalAssistant", "https://twin-dev-frontend-445817183784.s3.us-east-1.amazonaws.com/widget.js");

          DigitalAssistant("init", {
            assistantName: "AI Portfolio Assistant",
            greeting: "Hi, I can answer questions about Eze's work. How can I help you?",
            lambdaUrl: "https://yj1a9kmvce.execute-api.us-east-1.amazonaws.com/chat",
            primaryColor: "#2364aa",
            position: "bottom-right",
          });
        `}
      </Script>
      <HomePage />
    </>
  );
}
