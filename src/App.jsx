import { useMemo, useState } from "react";
import TopBanner from "./components/TopBanner";
import HeroSection from "./components/HeroSection";
import ServiceSelector from "./components/ServiceSelector";
import TicketPanel from "./components/TicketPanel";

export default function App() {
  const services = useMemo(
    () => [
      {
        id: "outpatient",
        name: "Outpatient Clinic",
        code: "OPD",
        description: "General consultations, follow-ups, and routine checkups.",
      },
      {
        id: "lab",
        name: "Laboratory",
        code: "LAB",
        description: "Bloodwork, imaging referrals, and diagnostics.",
      },
      {
        id: "pharmacy",
        name: "Pharmacy",
        code: "RX",
        description: "Prescription dispensing and medication counseling.",
      },
    ],
    []
  );

  const [selectedService, setSelectedService] = useState(null);
  const [lastTicket, setLastTicket] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [notification, setNotification] = useState("");

  const generateTicketNumber = (code) => {
    const now = new Date();
    const y = String(now.getFullYear()).slice(-2);
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `${code}-${y}${m}${d}-${rand}`;
  };

  const handleGenerate = async () => {
    if (!selectedService) return;
    setIsGenerating(true);

    // Simulate brief processing delay for UX feedback
    await new Promise((res) => setTimeout(res, 600));

    const number = generateTicketNumber(selectedService.code);
    const ticket = {
      number,
      timestamp: Date.now(),
      serviceId: selectedService.id,
      serviceName: selectedService.name,
    };
    setLastTicket(ticket);
    setIsGenerating(false);
    setNotification(`Ticket ${number} successfully created for ${selectedService.name}.`);

    // Auto-dismiss notification
    setTimeout(() => setNotification(""), 2800);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <TopBanner />
      <main className="mx-auto max-w-6xl px-4 md:px-6 space-y-8 md:space-y-10 py-6 md:py-10">
        <HeroSection />

        <section className="space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-800">Choose a Service</h3>
              <p className="text-sm text-slate-500">Pick one to generate your queue ticket.</p>
            </div>
          </div>
          <ServiceSelector
            services={services}
            selectedService={selectedService}
            onSelect={setSelectedService}
          />
        </section>

        <TicketPanel
          selectedService={selectedService}
          lastTicket={lastTicket}
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
          notification={notification}
        />
      </main>
      <footer className="mx-auto max-w-6xl px-4 md:px-6 py-10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Aurora General Hospital — All rights reserved.
      </footer>
    </div>
  );
}
