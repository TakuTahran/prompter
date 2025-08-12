import { useState } from 'react';
import { frameworks, Framework } from './data/frameworks';
import { FrameworkCard } from './components/FrameworkCard';
import { PromptEditor } from './components/PromptEditor';
import { ScrollArea } from './components/ui/scroll-area';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [selectedFramework, setSelectedFramework] = useState<Framework | null>(null);

  const handleFrameworkSelect = (framework: Framework) => {
    setSelectedFramework(framework);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="mb-4">🎯 Prompt Framework Picker</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from 12 powerful prompt frameworks to structure your AI interactions. 
            Each framework is designed for specific use cases and provides a proven template for better results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Framework Cards - Chat Style */}
          <div>
            <div className="mb-4">
              <h2 className="text-lg font-medium">Available Frameworks</h2>
              <p className="text-sm text-muted-foreground">
                Click on any framework card to start editing your prompt
              </p>
            </div>
            
            <ScrollArea className="h-[calc(100vh-200px)]">
              <div className="space-y-4 pr-4">
                {frameworks.map((framework) => (
                  <FrameworkCard
                    key={framework.id}
                    framework={framework}
                    isSelected={selectedFramework?.id === framework.id}
                    onSelect={handleFrameworkSelect}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Prompt Editor */}
          <div>
            <div className="mb-4">
              <h2 className="text-lg font-medium">Your Prompt</h2>
              <p className="text-sm text-muted-foreground">
                Edit and customize your selected framework
              </p>
            </div>
            
            <PromptEditor selectedFramework={selectedFramework} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>
            💡 Pro tip: Start with the framework that matches your use case, 
            then customize the template to fit your specific needs.
          </p>
        </div>
      </div>

      <Toaster />
    </div>
  );
}