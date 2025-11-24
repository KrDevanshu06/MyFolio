import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

// Helper to wrap client components safely
const ClientBadge = (props: any) => <Badge {...props} />;
const ClientSeparator = (props: any) => <Separator {...props} />;
const ClientTable = (props: any) => (
  <div className="my-8 border border-slate-800 rounded-lg overflow-hidden">
    <Table {...props} />
  </div>
);

// New: Client wrapper for ScrollArea to use in MDX
const ClientScrollArea = (props: any) => (
  <div className="rounded-lg border border-slate-800 mb-8 bg-slate-950/50 shadow-xl">
    <ScrollArea className="w-full" type="always">
      <div className="p-4">
        {props.children}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  </div>
);

export const MDXComponents = {
  // Use the wrapper functions instead of direct component references
  Badge: ClientBadge,
  Separator: ClientSeparator,
  // Map standard HTML to Tailwind classes for the "Research Paper" aesthetic
  h1: (props: any) => <h1 className="font-serif text-3xl md:text-4xl text-slate-100 mt-12 mb-6 leading-tight" {...props} />,
  h2: (props: any) => <h2 className="font-serif text-2xl text-slate-100 mt-10 mb-4 border-b border-slate-800 pb-2" {...props} />,
  h3: (props: any) => <h3 className="font-serif text-xl text-teal-400 mt-8 mb-3" {...props} />,
  p: (props: any) => <p className="font-sans text-slate-400 leading-7 mb-6 text-lg" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside text-slate-400 mb-6 ml-4 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside text-slate-400 mb-6 ml-4 space-y-2" {...props} />,
  li: (props: any) => <li className="marker:text-teal-500" {...props} />,
  
  // Syntax Highlighting & Code Blocks
  code: (props: any) => <code className="font-mono text-teal-300 bg-slate-900/50 px-1.5 py-0.5 rounded text-sm border border-slate-800" {...props} />,
  
  // Use our new ClientScrollArea for pre tags
  pre: ClientScrollArea,
  
  // Quotes & Callouts
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-teal-500 pl-6 italic text-slate-400 my-8 py-2 bg-slate-900/30 rounded-r-lg" {...props} />
  ),
  
  // Tables
  table: ClientTable,
  thead: (props: any) => <TableHeader {...props} />,
  tbody: (props: any) => <TableBody {...props} />,
  tr: (props: any) => <TableRow className="hover:bg-slate-900/50" {...props} />,
  th: (props: any) => <TableHead className="text-teal-400 font-mono uppercase text-xs tracking-wider" {...props} />,
  td: (props: any) => <TableCell className="text-slate-400 font-mono text-sm" {...props} />,
};