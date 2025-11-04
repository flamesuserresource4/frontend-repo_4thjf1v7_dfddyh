import { Pill, FlaskConical, Stethoscope } from "lucide-react";

const iconMap = {
  outpatient: Stethoscope,
  lab: FlaskConical,
  pharmacy: Pill,
};

export default function ServiceSelector({ services, selectedService, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((svc) => {
        const Icon = iconMap[svc.id] || Stethoscope;
        const isActive = selectedService?.id === svc.id;
        return (
          <button
            key={svc.id}
            onClick={() => onSelect(svc)}
            className={`group flex items-start gap-4 rounded-xl border p-4 text-left transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400/60 ${
              isActive
                ? "border-emerald-500 bg-emerald-50/60"
                : "border-slate-200 bg-white"
            }`}
          >
            <div
              className={`mt-0.5 flex h-11 w-11 items-center justify-center rounded-lg ${
                isActive ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-600"
              }`}
            >
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-slate-800">{svc.name}</h3>
                {isActive && (
                  <span className="text-emerald-600 text-xs font-semibold">Selected</span>
                )}
              </div>
              <p className="text-sm text-slate-500 mt-1">{svc.description}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
