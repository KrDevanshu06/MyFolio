"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Layout, Server, BrainCircuit } from "lucide-react";

export function TechStack() {
  return (
    <section className="py-24 px-6 bg-slate-950 border-b border-slate-900">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-100 mb-4">Technical Arsenal</h2>
        <p className="font-sans text-slate-400">Operational capabilities and engineering stack.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <TooltipProvider>
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-900 border border-slate-800">
              <TabsTrigger value="ai" className="font-mono text-xs md:text-sm data-[state=active]:bg-teal-950 data-[state=active]:text-teal-400">
                <BrainCircuit className="w-4 h-4 mr-2 hidden md:inline" />
                AI / Data
              </TabsTrigger>
              <TabsTrigger value="backend" className="font-mono text-xs md:text-sm data-[state=active]:bg-teal-950 data-[state=active]:text-teal-400">
                <Server className="w-4 h-4 mr-2 hidden md:inline" />
                Dev Tools
              </TabsTrigger>
              <TabsTrigger value="languages" className="font-mono text-xs md:text-sm data-[state=active]:bg-teal-950 data-[state=active]:text-teal-400">
                <Layout className="w-4 h-4 mr-2 hidden md:inline" />
                Languages
              </TabsTrigger>
            </TabsList>
          
          {/* Content Area */}
            
            <div className="mt-8">
              <TabsContent value="ai">
                <StackCard 
                  title="Data Science & ML"
                  description="Frameworks for predictive modeling and computer vision."
                  items={["TensorFlow", "Keras", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "OpenCV", "GenAI"]}
                />
              </TabsContent>
              
              <TabsContent value="backend">
                <StackCard 
                  title="Developer Tools"
                  description="Infrastructure and database management."
                  items={["Docker", "Git", "AWS", "GCP", "Jupyter", "DBeaver", "MySQL", "PostgreSQL"]}
                />
              </TabsContent>
              
              <TabsContent value="languages">
                <StackCard 
                  title="Core Languages"
                  description="Foundational programming proficiency."
                  items={["Python", "C/C++", "MySQL", "Bash", "HTML/CSS"]}
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
                <p>Verified Skill</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
