
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Clock, AlertCircle, ExternalLink } from "lucide-react";

const BlockchainVerification = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Blockchain Verification
          </CardTitle>
          <Badge variant="outline" className="bg-tradegreen/10 text-tradegreen hover:bg-tradegreen/20 flex items-center gap-1">
            <CheckCircle className="h-3.5 w-3.5" />
            <span>Verified</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            All market data and AI predictions are cryptographically verified and stored on blockchain for transparency and integrity.
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-card/60 border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="h-4 w-4 text-tradegreen" />
                <span className="text-sm font-medium">Market Data</span>
              </div>
              <p className="text-xs text-muted-foreground">Last verified 2 minutes ago</p>
            </div>
            
            <div className="p-3 bg-card/60 border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-tradegold" />
                <span className="text-sm font-medium">AI Predictions</span>
              </div>
              <p className="text-xs text-muted-foreground">Verification in progress</p>
            </div>
            
            <div className="p-3 bg-card/60 border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="h-4 w-4 text-tradegreen" />
                <span className="text-sm font-medium">User Transactions</span>
              </div>
              <p className="text-xs text-muted-foreground">All transactions verified</p>
            </div>
            
            <div className="p-3 bg-card/60 border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">System Status</span>
              </div>
              <p className="text-xs text-muted-foreground">All systems operational</p>
            </div>
          </div>
          
          <Button variant="outline" size="sm" className="w-full">
            <ExternalLink className="h-4 w-4 mr-2" />
            View Blockchain Ledger
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlockchainVerification;
