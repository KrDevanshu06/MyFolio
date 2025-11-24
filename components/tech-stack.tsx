"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Database, Layout, Server, BrainCircuit, GitBranch } from "lucide-react";

export function TechStack() {
  return (
    <section className="py-24 px-6 bg-slate-950 border-b border-slate-900">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-100 mb-4">System Architecture</h2>
        <p className="font-sans text-slate-400">Operational capabilities and technical stack.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <TooltipProvider>
          <Tabs defaultValue="backend" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-900 border border-slate-800">
            <TabsTrigger value="backend" className="font-mono text-xs md:text-sm data-[state=active]:bg-teal-950 data-[state=active]:text-teal-400">
              <Server className="w-4 h-4 mr-2 hidden md:inline" />
              Infrastructure
            </TabsTrigger>
            <TabsTrigger value="ai" className="font-mono text-xs md:text-sm data-[state=active]:bg-teal-950 data-[state=active]:text-teal-400">
              <BrainCircuit className="w-4 h-4 mr-2 hidden md:inline" />
              Intelligence
            </TabsTrigger>
            <TabsTrigger value="frontend" className="font-mono text-xs md:text-sm data-[state=active]:bg-teal-950 data-[state=active]:text-teal-400">
              <Layout className="w-4 h-4 mr-2 hidden md:inline" />
              Interface
            </TabsTrigger>
          </TabsList>
          
          {/* Content Area */}
          <div className="mt-8">
            <TabsContent value="backend">
              <StackCard 
                title="Distributed Systems"
                description="Scalable architecture and data ingestion."
                items={["PostgreSQL", "Apache Kafka", "MinIO", "Docker", "Go", "Node.js", "Redis"]}
              />
            </TabsContent>
            
            <TabsContent value="ai">
              <StackCard 
                title="Algorithmic Research"
                description="Generative models and optimization logic."
                items={["Python", "PyTorch", "TensorFlow", "Pandas", "OpenCV", "C++ (Competitive)", "Graph Theory"]}
              />
            </TabsContent>
            
            <TabsContent value="frontend">
              <StackCard 
                title="Client Experience"
                description="Responsive, high-performance interfaces."
                items={["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]}
              />
            </TabsContent>
          </div>
        </Tabs>
        </TooltipProvider>
      </div>
    </section>
  );
}

function StackCard({ title, description, items }: { title: string, description: string, items: string[] }) {
  return (
    <Card className="bg-slate-900/30 border-slate-800">
      <CardContent className="p-8 text-left">
        <h3 className="font-serif text-xl text-slate-100 mb-2">{title}</h3>
        <p className="text-slate-500 text-sm mb-6 font-mono">{description}</p>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <Tooltip key={item}>
              <TooltipTrigger asChild>
                <Badge 
                  variant="secondary" 
                  className="cursor-help bg-slate-800 text-slate-300 hover:bg-teal-900/30 hover:text-teal-400 border border-transparent hover:border-teal-900 transition-all"
                >
                  {item}
                </Badge>
              </TooltipTrigger>
              <TooltipContent className="bg-slate-950 border-slate-800 text-slate-400 font-mono text-xs">
                <p>Proficiency: Advanced</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
