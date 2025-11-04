import { CalendarClock, Hash, Sparkles } from "lucide-react";

export default function TicketPanel({ selectedService, lastTicket, onGenerate, isGenerating, notification }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-5 md:px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
        <div>
          <h4 className="text-slate-800 font-semibold">Ticket Center</h4>
          <p className="text-slate-500 text-sm">Generate a queue ticket for the selected service.</p>
        </div>
        <button
          onClick={onGenerate}
          disabled={!selectedService || isGenerating}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-emerald-400/60 ${
            !selectedService || isGenerating
              ? "bg-emerald-200 text-white cursor-not-allowed"
              : "bg-emerald-600 hover:bg-emerald-700 text-white"
          }`}
        >
          <Sparkles className="h-4 w-4" />
          {isGenerating ? "Generating..." : "Generate Ticket"}
        </button>
      </div>

      {notification && (
        <div className="mx-5 md:mx-6 mt-4 rounded-lg bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-700">
          {notification}
        </div>
      )}

      <div className="p-5 md:p-6 grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <p className="text-sm text-slate-500">Selected Service</p>
          {selectedService ? (
            <div className="rounded-xl border border-slate-200 p-4 bg-white">
              <div className="text-slate-800 font-medium">{selectedService.name}</div>
              <p className="text-sm text-slate-500 mt-1">{selectedService.description}</p>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 p-4 text-slate-500 text-sm">
              Choose a service to enable ticket generation.
            </div>
          )}
        </div>

        <div className="space-y-3">
          <p className="text-sm text-slate-500">Latest Ticket</p>
          {lastTicket ? (
            <div className="rounded-xl border border-slate-200 p-4 bg-gradient-to-br from-slate-50 to-white">
              <div className="flex items-center gap-2 text-slate-800">
                <Hash className="h-4 w-4 text-slate-500" />
                <span className="font-semibold tracking-wide text-lg">{lastTicket.number}</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                <CalendarClock className="h-4 w-4 text-slate-500" />
                <span>{new Date(lastTicket.timestamp).toLocaleString()}</span>
              </div>
              <div className="mt-2 text-xs text-slate-500">Service: {lastTicket.serviceName}</div>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 p-4 text-slate-500 text-sm">
              No tickets yet. Generate your first ticket to see details here.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
