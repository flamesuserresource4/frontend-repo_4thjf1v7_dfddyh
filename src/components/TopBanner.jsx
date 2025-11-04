import { Stethoscope } from "lucide-react";

export default function TopBanner() {
  return (
    <header className="w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
            <Stethoscope className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-semibold text-slate-800">Aurora General Hospital</h1>
            <p className="text-xs md:text-sm text-slate-500">Compassionate care • Modern medicine</p>
          </div>
        </div>
        <div className="hidden md:flex items-center text-slate-500 text-sm">
          Open 24/7 • Emergency Services
        </div>
      </div>
    </header>
  );
}
