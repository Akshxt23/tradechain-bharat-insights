
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Info, TrendingUp, TrendingDown, ExternalLink, CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIInsightCardProps {
  title: string;
  description: string;
  type: "bullish" | "bearish" | "neutral" | "alert";
  confidence: number;
  stockSymbol: string;
  timeframe: string;
}

const AIInsightCard = ({
  title,
  description,
  type,
  confidence,
  stockSymbol,
  timeframe,
}: AIInsightCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case "bullish":
        return "text-tradegreen bg-tradegreen/10 hover:bg-tradegreen/20";
      case "bearish":
        return "text-tradered bg-tradered/10 hover:bg-tradered/20";
      case "alert":
        return "text-tradegold bg-tradegold/10 hover:bg-tradegold/20";
      default:
        return "text-muted-foreground bg-muted/50 hover:bg-muted";
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case "bullish":
        return <TrendingUp className="h-4 w-4" />;
      case "bearish":
        return <TrendingDown className="h-4 w-4" />;
      case "alert":
        return <CircleAlert className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  // Calculate confidence bar color
  const getConfidenceColor = () => {
    if (confidence < 40) return "bg-tradered";
    if (confidence < 70) return "bg-tradegold";
    return "bg-tradegreen";
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between py-3 px-4">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <CardTitle className="text-md">AI Insight</CardTitle>
        </div>
        <Badge variant="outline" className={cn("flex items-center gap-1", getTypeColor())}>
          {getTypeIcon()}
          <span className="font-medium capitalize">{type}</span>
        </Badge>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        
        <div className="flex flex-col space-y-2 mb-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Confidence</span>
            <span className="font-medium">{confidence}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className={cn("h-full rounded-full", getConfidenceColor())}
              style={{ width: `${confidence}%` }}
            />
          </div>
        </div>
        
        <div className="flex justify-between mb-4 text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Stock</span>
            <span className="font-medium">{stockSymbol}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-muted-foreground">Timeframe</span>
            <span className="font-medium">{timeframe}</span>
          </div>
        </div>
        
        <Button variant="outline" size="sm" className="w-full">
          <ExternalLink className="h-4 w-4 mr-2" />
          View Detailed Analysis
        </Button>
      </CardContent>
    </Card>
  );
};

export default AIInsightCard;
