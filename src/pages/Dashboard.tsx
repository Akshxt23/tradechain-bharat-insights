
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import StockCard from "@/components/dashboard/StockCard";
import MarketOverview from "@/components/dashboard/MarketOverview";
import AIInsightCard from "@/components/dashboard/AIInsightCard";
import BlockchainVerification from "@/components/dashboard/BlockchainVerification";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ArrowUpRight, Bell, Zap } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock authentication check
  useEffect(() => {
    const auth = localStorage.getItem("tradechain-auth");
    if (!auth) {
      toast({
        title: "Authentication Required",
        description: "Please log in to access the dashboard",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [navigate, toast]);

  // Mock stocks data
  const stocks = [
    {
      symbol: "RELIANCE",
      name: "Reliance Industries",
      price: 2875.45,
      change: 45.67,
      changePercent: 1.65,
    },
    {
      symbol: "INFY",
      name: "Infosys Ltd",
      price: 1456.30,
      change: -17.80,
      changePercent: -1.22,
    },
    {
      symbol: "HDFCBANK",
      name: "HDFC Bank Ltd",
      price: 1678.90,
      change: 8.25,
      changePercent: 0.48,
    },
    {
      symbol: "TCS",
      name: "Tata Consultancy Services",
      price: 3542.60,
      change: -28.35,
      changePercent: -0.79,
    },
  ];

  // AI Insights data
  const aiInsights = [
    {
      title: "Potential buying opportunity for RELIANCE",
      description:
        "Technical indicators suggest a bullish trend forming on Reliance Industries with strong support at ₹2800.",
      type: "bullish" as const,
      confidence: 82,
      stockSymbol: "RELIANCE",
      timeframe: "2-3 Weeks",
    },
    {
      title: "IT sector heading for correction",
      description:
        "Based on global tech trends and domestic factors, IT stocks may face headwinds in the near term.",
      type: "bearish" as const,
      confidence: 65,
      stockSymbol: "IT Sector",
      timeframe: "1-2 Months",
    },
    {
      title: "Unusual volume detected in SUNPHARMA",
      description:
        "Unusual trading activity detected with 1.8x average volume. Monitor closely for potential price movement.",
      type: "alert" as const,
      confidence: 75,
      stockSymbol: "SUNPHARMA",
      timeframe: "1-2 Days",
    },
  ];

  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back to your TRADECHAIN analytics dashboard
          </p>
        </div>
        <Button className="hidden sm:flex" size="sm">
          <Bell className="mr-2 h-4 w-4" />
          Set Alerts
        </Button>
      </div>

      {/* Main grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Market Overview */}
        <div className="lg:col-span-2 space-y-6">
          <MarketOverview />

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Top Stocks</h2>
              <Button variant="ghost" size="sm" className="gap-1">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stocks.map((stock) => (
                <StockCard key={stock.symbol} {...stock} />
              ))}
            </div>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                AI Trading Signals
              </CardTitle>
              <CardDescription>
                AI-powered trading signals based on market data and patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {aiInsights.map((insight, index) => (
                  <AIInsightCard key={index} {...insight} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column - Sidebar content */}
        <div className="space-y-6">
          <BlockchainVerification />

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Market News</CardTitle>
              <CardDescription>Latest updates from Indian markets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <p className="text-sm text-muted-foreground mb-1">
                      {i === 1
                        ? "2 hours ago"
                        : i === 2
                        ? "6 hours ago"
                        : "Yesterday"}
                    </p>
                    <h3 className="font-medium mb-1">
                      {i === 1
                        ? "RBI Maintains Repo Rate at 6.5% in Latest Policy"
                        : i === 2
                        ? "IT Sector Sees Rebound as Global Tech Spending Increases"
                        : "Govt Announces New Incentives for Manufacturing Sector"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {i === 1
                        ? "The Reserve Bank of India (RBI) maintained the repo rate at 6.5% for the seventh consecutive time..."
                        : i === 2
                        ? "Indian IT companies reported stronger than expected earnings as global technology spending shows signs of recovery..."
                        : "The government unveiled new incentives to boost domestic manufacturing, with special focus on electronics and pharmaceuticals..."}
                    </p>
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="w-full">
                  View All News
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Trading Calendar</CardTitle>
              <CardDescription>Upcoming market events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    date: "18 Apr",
                    event: "Quarterly Results: HDFC Bank",
                    type: "Earnings",
                  },
                  {
                    date: "22 Apr",
                    event: "RBI Minutes of Meeting Release",
                    type: "Economic",
                  },
                  {
                    date: "25 Apr",
                    event: "GDP Growth Rate Announcement",
                    type: "Economic",
                  },
                  {
                    date: "30 Apr",
                    event: "Monthly F&O Expiry",
                    type: "Trading",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-2 px-3 rounded-lg border border-border bg-card/60"
                  >
                    <div className="text-center min-w-[60px]">
                      <p className="text-sm font-medium">{item.date}</p>
                      <p className="text-xs text-muted-foreground">{item.type}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.event}</p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="w-full">
                  View Full Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
