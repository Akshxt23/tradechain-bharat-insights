
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Star, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

const StockCard = ({
  symbol,
  name,
  price,
  change,
  changePercent,
}: StockCardProps) => {
  const [favorite, setFavorite] = useState(false);
  const isPositive = changePercent >= 0;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
        <div className="flex flex-col">
          <CardTitle className="text-lg flex items-center gap-1.5">
            {symbol}
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => setFavorite(!favorite)}
            >
              <Star
                className={cn(
                  "h-4 w-4",
                  favorite ? "fill-tradegold text-tradegold" : "text-muted-foreground"
                )}
              />
            </Button>
          </CardTitle>
          <p className="text-sm text-muted-foreground">{name}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Add to Watchlist</DropdownMenuItem>
            <DropdownMenuItem>View AI Analysis</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="mt-1 mb-3">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">₹{price.toLocaleString()}</span>
            <div
              className={cn(
                "flex items-center gap-1 text-sm px-2 py-1 rounded-full",
                isPositive ? "bg-tradegreen/10 text-tradegreen" : "bg-tradered/10 text-tradered"
              )}
            >
              {isPositive ? (
                <TrendingUp className="h-3.5 w-3.5" />
              ) : (
                <TrendingDown className="h-3.5 w-3.5" />
              )}
              <span>
                {isPositive ? "+" : ""}
                {change.toFixed(2)} ({isPositive ? "+" : ""}
                {changePercent.toFixed(2)}%)
              </span>
            </div>
          </div>
        </div>
        <div className="h-16 bg-muted/30 rounded-md flex items-center justify-center text-xs text-muted-foreground">
          Chart placeholder
        </div>
      </CardContent>
    </Card>
  );
};

export default StockCard;
