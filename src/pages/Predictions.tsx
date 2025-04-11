
import SimpleLayout from "@/components/layout/SimpleLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingUp, TrendingDown, BarChart } from "lucide-react";

const Predictions = () => {
  // Mock prediction data
  const predictions = [
    {
      stock: "HDFC Bank",
      currentPrice: "₹1,642.35",
      prediction: "Buy",
      trend: "up",
      confidence: "High",
      targetPrice: "₹1,720.00"
    },
    {
      stock: "Reliance Industries",
      currentPrice: "₹2,876.50",
      prediction: "Hold",
      trend: "neutral",
      confidence: "Medium",
      targetPrice: "₹2,900.00"
    },
    {
      stock: "Infosys",
      currentPrice: "₹1,485.75",
      prediction: "Buy",
      trend: "up",
      confidence: "Medium",
      targetPrice: "₹1,550.00"
    },
    {
      stock: "SBI",
      currentPrice: "₹745.20",
      prediction: "Sell",
      trend: "down",
      confidence: "High",
      targetPrice: "₹710.00"
    }
  ];

  return (
    <SimpleLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">AI Predictions</h1>
          <Badge variant="outline" className="ml-2">
            <Zap className="h-3 w-3 mr-1" />
            AI-Powered
          </Badge>
        </div>
        
        <p className="text-muted-foreground">
          These predictions are generated using our AI model based on market trends and historical data.
        </p>
        
        {/* Predictions List */}
        <div className="space-y-4">
          {predictions.map((item) => (
            <Card key={item.stock}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{item.stock}</CardTitle>
                  <Badge 
                    variant={
                      item.prediction === "Buy" ? "default" : 
                      item.prediction === "Sell" ? "destructive" : "secondary"
                    }
                  >
                    {item.prediction}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Price</p>
                    <p className="font-medium">{item.currentPrice}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Target Price</p>
                    <p className="font-medium">{item.targetPrice}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Trend</p>
                    <p className="font-medium flex items-center">
                      {item.trend === "up" ? (
                        <>
                          <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                          <span className="text-green-500">Upward</span>
                        </>
                      ) : item.trend === "down" ? (
                        <>
                          <TrendingDown className="h-4 w-4 mr-1 text-red-500" />
                          <span className="text-red-500">Downward</span>
                        </>
                      ) : (
                        <>
                          <BarChart className="h-4 w-4 mr-1 text-yellow-500" />
                          <span className="text-yellow-500">Neutral</span>
                        </>
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Confidence</p>
                    <p className="font-medium">{item.confidence}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              These predictions are for informational purposes only and should not be considered as financial advice.
              Always conduct your own research before making investment decisions.
            </p>
          </CardContent>
        </Card>
      </div>
    </SimpleLayout>
  );
};

export default Predictions;
