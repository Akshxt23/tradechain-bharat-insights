
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layers, TrendingUp, ShieldCheck } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const auth = localStorage.getItem("tradechain-auth");
    if (auth) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="h-16 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Layers className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">TRADECHAIN</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/login")}
              >
                Log In
              </Button>
              <Button 
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">
            Indian Market Analysis with 
            <span className="text-primary"> AI & Blockchain</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Simple, transparent market insights for smarter trading decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/login")}
            >
              Log In
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-xl border border-border">
            <TrendingUp className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-bold mb-2">Market Analysis</h2>
            <p className="text-muted-foreground">
              Track Indian markets with real-time data and simple charts
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl border border-border">
            <Layers className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-bold mb-2">AI Predictions</h2>
            <p className="text-muted-foreground">
              Get AI-powered market predictions to help with trading decisions
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl border border-border">
            <ShieldCheck className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-bold mb-2">Blockchain Verified</h2>
            <p className="text-muted-foreground">
              All data is verified and stored securely using blockchain
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2025 TRADECHAIN. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
