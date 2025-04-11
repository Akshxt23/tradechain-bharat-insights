
import SimpleLayout from "@/components/layout/SimpleLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, BarChart3, TrendingUp } from "lucide-react";

const Dashboard = () => {
  // Mock data for demonstration
  const marketData = [
    { name: "Sensex", value: "72,643.21", change: "+1.28%", up: true },
    { name: "Nifty 50", value: "22,055.60", change: "+1.15%", up: true },
    { name: "Bank Nifty", value: "46,787.80", change: "-0.37%", up: false },
    { name: "IT Index", value: "37,293.15", change: "+2.41%", up: true }
  ];

  return (
    <SimpleLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Market Dashboard</h1>
        
        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {marketData.map((item) => (
            <Card key={item.name}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
                <div className={`flex items-center mt-1 ${
                  item.up ? "text-green-500" : "text-red-500"
                }`}>
                  {item.up 
                    ? <ArrowUpIcon className="h-4 w-4 mr-1" /> 
                    : <ArrowDownIcon className="h-4 w-4 mr-1" />
                  }
                  <span>{item.change}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Market Trend Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Market Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <div className="flex flex-col items-center text-muted-foreground">
                <BarChart3 className="h-10 w-10 mb-2" />
                <p>Market trend visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Top Stocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Top Gainers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center p-2 rounded bg-muted/20">
                  <span>TCS</span>
                  <span className="text-green-500">+3.45%</span>
                </li>
                <li className="flex justify-between items-center p-2 rounded bg-muted/20">
                  <span>Infosys</span>
                  <span className="text-green-500">+2.87%</span>
                </li>
                <li className="flex justify-between items-center p-2 rounded bg-muted/20">
                  <span>Reliance</span>
                  <span className="text-green-500">+2.12%</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Top Losers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center p-2 rounded bg-muted/20">
                  <span>SBI</span>
                  <span className="text-red-500">-1.25%</span>
                </li>
                <li className="flex justify-between items-center p-2 rounded bg-muted/20">
                  <span>HDFC Bank</span>
                  <span className="text-red-500">-0.89%</span>
                </li>
                <li className="flex justify-between items-center p-2 rounded bg-muted/20">
                  <span>Airtel</span>
                  <span className="text-red-500">-0.67%</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default Dashboard;
