import { useState, useEffect } from 'react';
import { Framework } from '../data/frameworks';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface PromptEditorProps {
  selectedFramework: Framework | null;
}

export function PromptEditor({ selectedFramework }: PromptEditorProps) {
  const [promptText, setPromptText] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedFramework) {
      setPromptText(selectedFramework.template);
    }
  }, [selectedFramework]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      toast.success('Prompt copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy prompt');
    }
  };

  if (!selectedFramework) {
    return (
      <Card className="sticky top-4">
        <CardContent className="flex items-center justify-center h-48">
          <div className="text-center text-muted-foreground">
            <div className="mb-2">✨</div>
            <p>Select a framework above to start editing your prompt</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Edit Your {selectedFramework.title}
          <Button
            onClick={handleCopy}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy
              </>
            )}
          </Button>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Textarea
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
          placeholder="Your prompt will appear here..."
          className="min-h-[200px] resize-y"
        />
        
        <div className="mt-4 p-3 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground">
            💡 <strong>Tip:</strong> Edit the template above to customize your prompt. 
            Replace placeholders in [brackets] with your specific requirements.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}