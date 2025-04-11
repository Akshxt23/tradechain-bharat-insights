
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, BarChart3, ArrowRightLeft } from "lucide-react";

const MarketOverview = () => {
  const indicesData = [
    {
      name: "NIFTY 50",
      value: "23,450.32",
      change: "+132.45",
      percentChange: "+0.57%",
      isPositive: true,
    },
    {
      name: "SENSEX",
      value: "77,126.08",
      change: "+387.28",
      percentChange: "+0.50%",
      isPositive: true,
    },
    {
      name: "NIFTY BANK",
      value: "49,321.75",
      change: "-122.56",
      percentChange: "-0.25%",
      isPositive: false,
    },
    {
      name: "INDIA VIX",
      value: "13.85",
      change: "+0.76",
      percentChange: "+5.83%",
      isPositive: true,
    },
  ];

  const globalIndicesData = [
    {
      name: "S&P 500",
      value: "5,234.28",
      change: "+22.12",
      percentChange: "+0.42%",
      isPositive: true,
    },
    {
      name: "NASDAQ",
      value: "16,781.42",
      change: "+93.65",
      percentChange: "+0.56%",
      isPositive: true,
    },
    {
      name: "DOW JONES",
      value: "38,459.08",
      change: "-42.38",
      percentChange: "-0.11%",
      isPositive: false,
    },
    {
      name: "HANG SENG",
      value: "17,984.31",
      change: "-134.25",
      percentChange: "-0.74%",
      isPositive: false,
    },
  ];

  const currencyData = [
    {
      name: "USD/INR",
      value: "83.17",
      change: "-0.06",
      percentChange: "-0.07%",
      isPositive: false,
    },
    {
      name: "EUR/INR",
      value: "89.45",
      change: "+0.23",
      percentChange: "+0.26%",
      isPositive: true,
    },
    {
      name: "GBP/INR",
      value: "105.28",
      change: "+0.42",
      percentChange: "+0.40%",
      isPositive: true,
    },
    {
      name: "JPY/INR",
      value: "0.54",
      change: "-0.01",
      percentChange: "-1.12%",
      isPositive: false,
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          Market Overview
        </CardTitle>
        <CardDescription>
          Live performance of major market indices and currencies
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="india">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="india">Indian Indices</TabsTrigger>
            <TabsTrigger value="global">Global Indices</TabsTrigger>
            <TabsTrigger value="currency">
              <ArrowRightLeft className="h-4 w-4 mr-1" />
              Currency
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="india" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {indicesData.map((index) => (
                <div
                  key={index.name}
                  className="flex justify-between items-center p-3 bg-card/60 border border-border rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{index.name}</h3>
                    <p className="text-2xl font-bold">{index.value}</p>
                  </div>
                  <div
                    className={`flex flex-col items-end ${
                      index.isPositive ? "text-tradegreen" : "text-tradered"
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {index.isPositive ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span>{index.percentChange}</span>
                    </div>
                    <span className="text-sm">{index.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="global" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {globalIndicesData.map((index) => (
                <div
                  key={index.name}
                  className="flex justify-between items-center p-3 bg-card/60 border border-border rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{index.name}</h3>
                    <p className="text-2xl font-bold">{index.value}</p>
                  </div>
                  <div
                    className={`flex flex-col items-end ${
                      index.isPositive ? "text-tradegreen" : "text-tradered"
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {index.isPositive ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span>{index.percentChange}</span>
                    </div>
                    <span className="text-sm">{index.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="currency" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currencyData.map((currency) => (
                <div
                  key={currency.name}
                  className="flex justify-between items-center p-3 bg-card/60 border border-border rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{currency.name}</h3>
                    <p className="text-2xl font-bold">{currency.value}</p>
                  </div>
                  <div
                    className={`flex flex-col items-end ${
                      currency.isPositive ? "text-tradegreen" : "text-tradered"
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {currency.isPositive ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span>{currency.percentChange}</span>
                    </div>
                    <span className="text-sm">{currency.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MarketOverview;
