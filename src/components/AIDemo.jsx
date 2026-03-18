import { useEffect, useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

export default function CinematicAIDemo() {
  const prompt = "Generate a growth strategy for a SaaS startup";
  const responseText =
    "NeuraFlow recommends focusing on product-led growth, optimizing onboarding funnels, and leveraging AI-driven analytics to identify high-converting user segments.";

  const [typedPrompt, setTypedPrompt] = useState("");
  const [typedResponse, setTypedResponse] = useState("");
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;

    let i = 0;

    const typePrompt = setInterval(() => {
      setTypedPrompt((prev) => prev + prompt.charAt(i));
      i++;

      if (i >= prompt.length) {
        clearInterval(typePrompt);

        setTimeout(() => {
          let j = 0;

          const typeResponse = setInterval(() => {
            setTypedResponse((prev) => prev + responseText.charAt(j));
            j++;

            if (j >= responseText.length) {
              clearInterval(typeResponse);
            }
          }, 20);
        }, 1200);
      }
    }, 30);

    return () => clearInterval(typePrompt);
  }, [start]);

  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      {/* bg glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] top-10 left-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Experience AI in Motion</h2>

        <p className="text-gray-400 mt-4">
          Watch how NeuraFlow generates insights in real time.
        </p>

        {/* screen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          onViewportEnter={() => setStart(true)}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 text-left shadow-2xl"
        >
          {/* auto prompt */}
          <div className="text-gray-400 mb-4">
            <span className="text-purple-400">Prompt:</span>
            <p className="mt-2">{typedPrompt}</p>
          </div>

          {/* auto response */}
          <div className="text-gray-300">
            <span className="text-blue-400">Response:</span>
            <p className="mt-2">{typedResponse}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
