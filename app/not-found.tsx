import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center selection:bg-red-500/20">
      <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mb-8 animate-pulse">
        <AlertTriangle className="w-12 h-12 text-red-500" />
      </div>
      
      <h1 className="font-mono text-4xl md:text-6xl font-bold text-slate-100 mb-4">
        404: Signal Lost
      </h1>
      
      <p className="font-sans text-slate-400 max-w-md mb-8 text-lg">
        The requested neural pathway could not be established. The resource may have been archived or relocated.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-500 text-white">
          <Link href="/">Re-establish Connection</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800">
          <Link href="/#contact">Report Anomaly</Link>
        </Button>
      </div>

      <div className="mt-12 font-mono text-xs text-slate-600">
        Error Code: ERR_NODE_UNREACHABLE
      </div>
    </div>
  );
}
