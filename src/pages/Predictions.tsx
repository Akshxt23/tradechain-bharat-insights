
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Brain,
  Check,
  ArrowRightLeft,
  TrendingUp,
  TrendingDown,
  Clock,
  BarChart,
  Zap,
  Blocks,
  ChevronRight,
  Hourglass,
  Filter,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Predictions = () => {
  const [symbol, setSymbol] = useState("");
  const [timeframe, setTimeframe] = useState("short");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleAnalyze = () => {
    if (!symbol) {
      toast({
        title: "Symbol Required",
        description: "Please enter a stock symbol to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
      toast({
        title: "Analysis Complete",
        description: `AI prediction generated for ${symbol.toUpperCase()}`,
      });
    }, 3000);
  };

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">AI Predictions</h1>
        <p className="text-muted-foreground">
          Generate AI-powered market predictions backed by blockchain verification
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Prediction Form */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              New Prediction
            </CardTitle>
            <CardDescription>
              Our AI analyzes multiple data points to generate predictions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="symbol">Stock Symbol</Label>
                <Input
                  id="symbol"
                  placeholder="e.g. RELIANCE, INFY, HDFC"
                  value={symbol}
                  onChange={(e) => setSymbol(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Enter NSE or BSE ticker symbol
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeframe">Prediction Timeframe</Label>
                <Select
                  value={timeframe}
                  onValueChange={(value) => setTimeframe(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short-term (1-7 days)</SelectItem>
                    <SelectItem value="medium">Medium-term (1-4 weeks)</SelectItem>
                    <SelectItem value="long">Long-term (1-6 months)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Analysis Type</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start" type="button">
                    <TrendingUp className="h-4 w-4 mr-2 text-tradegreen" />
                    Technical
                  </Button>
                  <Button variant="outline" className="justify-start" type="button">
                    <BarChart className="h-4 w-4 mr-2 text-tradegold" />
                    Fundamental
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Additional Factors</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start" type="button">
                    <ArrowRightLeft className="h-4 w-4 mr-2 text-tradeblue" />
                    Market Correlation
                  </Button>
                  <Button variant="outline" className="justify-start" type="button">
                    <Clock className="h-4 w-4 mr-2 text-tradecyan" />
                    Seasonality
                  </Button>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                type="button"
              >
                {isAnalyzing ? (
                  <>
                    <Hourglass className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Generate Prediction
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Prediction Results */}
        <div className="lg:col-span-2">
          {showResults ? (
            <Card>
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-xl">{symbol.toUpperCase()} Prediction</CardTitle>
                  <div className="flex items-center gap-1 text-xs bg-secondary py-1 px-2 rounded-full">
                    <Blocks className="h-3.5 w-3.5 text-primary" />
                    <span>Blockchain verified</span>
                    <Check className="h-3.5 w-3.5 text-tradegreen" />
                  </div>
                </div>
                <CardDescription>
                  {timeframe === "short"
                    ? "1-7 days"
                    : timeframe === "medium"
                    ? "1-4 weeks"
                    : "1-6 months"} prediction for {symbol.toUpperCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="summary">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="technical">Technical</TabsTrigger>
                    <TabsTrigger value="fundamental">Fundamental</TabsTrigger>
                  </TabsList>

                  <TabsContent value="summary" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <Card className="bg-secondary/30">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium">Prediction</h3>
                            <TrendingUp className="h-5 w-5 text-tradegreen" />
                          </div>
                          <p className="text-2xl font-bold text-tradegreen">Bullish</p>
                          <p className="text-xs text-muted-foreground">
                            Expected upside: 4-6%
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-secondary/30">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium">Confidence</h3>
                            <Brain className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-2xl font-bold">78%</p>
                          <p className="text-xs text-muted-foreground">
                            Based on 42 indicators
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-secondary/30">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium">Support/Resistance</h3>
                            <ArrowRightLeft className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div className="flex justify-between">
                            <div>
                              <p className="font-bold">₹2,780</p>
                              <p className="text-xs text-muted-foreground">Support</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold">₹2,950</p>
                              <p className="text-xs text-muted-foreground">Resistance</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="mb-4">
                      <CardContent className="p-4">
                        <h3 className="font-medium mb-2">AI Analysis Summary</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Our AI model predicts a bullish trend for {symbol.toUpperCase()} in the coming {timeframe === "short" ? "days" : timeframe === "medium" ? "weeks" : "months"} based on strong technical indicators and positive market sentiment. The stock shows potential for continued upward movement with solid support levels.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Key factors behind this prediction include increasing institutional buying, favorable sectoral trends, and technical breakout patterns observed in recent trading sessions.
                        </p>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="font-medium mb-2">Key Bullish Factors</h3>
                          <ul className="space-y-2 text-sm">
                            {[
                              "Strong trend continuation signals",
                              "Increasing trade volumes",
                              "Positive sector momentum",
                              "Favorable macroeconomic indicators",
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <TrendingUp className="h-4 w-4 text-tradegreen mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4">
                          <h3 className="font-medium mb-2">Risk Factors</h3>
                          <ul className="space-y-2 text-sm">
                            {[
                              "Short-term overbought conditions",
                              "Potential profit booking at resistance",
                              "Market volatility due to global factors",
                              "Sector rotation concerns",
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <TrendingDown className="h-4 w-4 text-tradered mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="technical" className="mt-0">
                    <div className="space-y-4">
                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">Technical Indicators</h3>
                          <Button variant="outline" size="sm">
                            <Filter className="h-4 w-4 mr-1" />
                            Filter
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { name: "MACD", value: "Bullish", isPositive: true },
                            { name: "RSI", value: "67.8", isPositive: true },
                            { name: "Moving Averages", value: "Bullish", isPositive: true },
                            { name: "Bollinger Bands", value: "Upper Band Test", isPositive: true },
                            { name: "Stochastic", value: "Overbought", isPositive: false },
                            { name: "OBV", value: "Increasing", isPositive: true },
                          ].map((indicator, i) => (
                            <div key={i} className="bg-card p-3 rounded-md border border-border flex justify-between items-center">
                              <span className="text-sm">{indicator.name}</span>
                              <span className={indicator.isPositive ? "text-tradegreen text-sm font-medium" : "text-tradered text-sm font-medium"}>
                                {indicator.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="font-medium mb-3">Technical Analysis</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {symbol.toUpperCase()} is showing strong bullish momentum with a golden cross pattern (50-day MA crossing above 200-day MA). The stock is trading above all major moving averages, indicating strong upward momentum.
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            RSI at 67.8 shows strength without being extremely overbought. MACD is positive with a recent bullish crossover, confirming the uptrend. Volume analysis shows increasing buying pressure supporting the price action.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            The stock has formed a cup and handle pattern, which typically signals continuation of the bullish trend. Key resistance levels to watch are ₹2,950 and ₹3,020.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <div className="h-60 bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Technical Chart Placeholder</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="fundamental" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="font-medium mb-3">Key Ratios</h3>
                          <div className="space-y-2">
                            {[
                              { name: "P/E Ratio", value: "22.8", vs: "24.3 (Sector Avg)" },
                              { name: "ROE", value: "16.4%", vs: "14.2% (Sector Avg)" },
                              { name: "Debt to Equity", value: "0.42", vs: "0.56 (Sector Avg)" },
                              { name: "Operating Margin", value: "18.2%", vs: "16.8% (Sector Avg)" },
                            ].map((ratio, i) => (
                              <div key={i} className="flex justify-between text-sm">
                                <span className="text-muted-foreground">{ratio.name}</span>
                                <div className="flex flex-col items-end">
                                  <span className="font-medium">{ratio.value}</span>
                                  <span className="text-xs text-muted-foreground">vs {ratio.vs}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="font-medium mb-3">Growth Trends</h3>
                          <div className="space-y-2">
                            {[
                              { name: "Revenue Growth (YoY)", value: "14.8%", isPositive: true },
                              { name: "EBITDA Growth (YoY)", value: "12.3%", isPositive: true },
                              { name: "Net Profit Growth (YoY)", value: "18.2%", isPositive: true },
                              { name: "Free Cash Flow Growth", value: "-2.4%", isPositive: false },
                            ].map((trend, i) => (
                              <div key={i} className="flex justify-between text-sm">
                                <span className="text-muted-foreground">{trend.name}</span>
                                <span className={trend.isPositive ? "text-tradegreen font-medium" : "text-tradered font-medium"}>
                                  {trend.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Card className="mb-4">
                      <CardContent className="p-4">
                        <h3 className="font-medium mb-3">Fundamental Analysis</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {symbol.toUpperCase()} demonstrates solid fundamental strength with consistent revenue and profit growth over the last 4 quarters. The company maintains better-than-sector margins and returns on equity.
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          The valuation appears reasonable with a P/E of 22.8, which is below the sector average of 24.3. The company has maintained a healthy balance sheet with a debt-to-equity ratio of 0.42, providing financial flexibility.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Recent capital expenditure plans and strategic initiatives are expected to drive future growth, supporting the bullish outlook. Management guidance for the coming quarters remains optimistic.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <h3 className="font-medium mb-3">Sentiment Analysis</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="bg-card p-3 rounded-md border border-border">
                          <p className="text-sm font-medium mb-1">Institutional</p>
                          <div className="flex items-center gap-1">
                            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                              <div className="bg-tradegreen h-full rounded-full" style={{ width: "76%" }}></div>
                            </div>
                            <span className="text-sm">76%</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Bullish</p>
                        </div>
                        
                        <div className="bg-card p-3 rounded-md border border-border">
                          <p className="text-sm font-medium mb-1">Analyst</p>
                          <div className="flex items-center gap-1">
                            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                              <div className="bg-tradegreen h-full rounded-full" style={{ width: "82%" }}></div>
                            </div>
                            <span className="text-sm">82%</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Bullish</p>
                        </div>
                        
                        <div className="bg-card p-3 rounded-md border border-border">
                          <p className="text-sm font-medium mb-1">News Sentiment</p>
                          <div className="flex items-center gap-1">
                            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                              <div className="bg-tradegold h-full rounded-full" style={{ width: "58%" }}></div>
                            </div>
                            <span className="text-sm">58%</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Neutral-Positive</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-border">
                  <Button className="w-full sm:w-auto">
                    <Zap className="h-4 w-4 mr-2" />
                    Generate New Prediction
                  </Button>
                  
                  <Button variant="outline" className="w-full sm:w-auto">
                    View Blockchain Verification
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center p-8">
              <div className="text-center max-w-md">
                <Zap className="h-12 w-12 text-primary/70 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">AI Prediction Engine</h2>
                <p className="text-muted-foreground mb-6">
                  Enter a stock symbol to generate AI-powered trading predictions with
                  blockchain verification for enhanced transparency and trust.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-6">
                  <div className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                      <Brain className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Advanced AI Models</p>
                      <p className="text-sm text-muted-foreground">
                        Trained on vast historical data and market patterns
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                      <Blocks className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Blockchain Verified</p>
                      <p className="text-sm text-muted-foreground">
                        All predictions are cryptographically secured
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    setSymbol("RELIANCE");
                    handleAnalyze();
                  }}
                >
                  Try a Demo Prediction
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Predictions;
