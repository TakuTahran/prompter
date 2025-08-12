import { Framework } from '../data/frameworks';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface FrameworkCardProps {
  framework: Framework;
  isSelected: boolean;
  onSelect: (framework: Framework) => void;
}

export function FrameworkCard({ framework, isSelected, onSelect }: FrameworkCardProps) {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
        isSelected ? 'ring-2 ring-primary shadow-md' : ''
      }`}
      onClick={() => onSelect(framework)}
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {framework.title}
          {isSelected && <Badge variant="default">Selected</Badge>}
        </CardTitle>
        <p className="text-muted-foreground">{framework.blurb}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Best For Section */}
        <div>
          <h4 className="mb-2 text-sm font-medium">Best For:</h4>
          <ul className="space-y-1">
            {framework.bestFor.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Acronym Breakdown */}
        <div>
          <h4 className="mb-3 text-sm font-medium">Framework Breakdown:</h4>
          <div className="space-y-2">
            {framework.acronym.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className={`px-2 py-1 rounded text-xs font-medium ${item.color} flex-shrink-0`}>
                  {item.letter}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm">{item.meaning}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Examples with Color-Coded Segments */}
        <div>
          <h4 className="mb-3 text-sm font-medium">Examples:</h4>
          <div className="space-y-3">
            {framework.examples.map((example, index) => (
              <div 
                key={index} 
                className="p-3 rounded-lg border text-sm leading-relaxed"
              >
                <div className="space-y-1">
                  {example.segments.map((segment, segmentIndex) => (
                    <span
                      key={segmentIndex}
                      className={segment.color ? `inline-block px-2 py-1 mx-0.5 rounded text-xs font-medium ${segment.color} border border-opacity-30` : 'inline'}
                    >
                      {segment.text}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Legend */}
        <div className="pt-3 border-t border-border/50">
          <div className="flex items-start gap-3 mb-2">
            <span className="w-2 h-2 bg-primary/20 rounded-full mt-1.5 flex-shrink-0"></span>
            <p className="text-xs text-muted-foreground">
              <strong>Color highlights</strong> show how each framework component appears in examples
            </p>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {framework.acronym.map((item, index) => (
              <span key={index} className={`px-1.5 py-0.5 rounded text-xs font-medium ${item.color}`}>
                {item.letter}: {item.meaning}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}