import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-8">
        <div className="flex items-center space-x-4 justify-center mb-12">
          <Skeleton className="h-12 w-12 rounded-full bg-slate-800" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-slate-800" />
            <Skeleton className="h-4 w-[200px] bg-slate-800" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-8 w-3/4 mx-auto bg-slate-800" />
          <Skeleton className="h-4 w-1/2 mx-auto bg-slate-800" />
        </div>
      </div>
      <span className="mt-8 font-mono text-xs text-teal-500 animate-pulse">
        Initializing System Modules...
      </span>
    </div>
  );
}
