
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layers, TrendingUp, ShieldCheck, Zap } from "lucide-react";

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
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Layers className="h-8 w-8 text-tradegold" />
            <h1 className="text-2xl font-bold">TRADECHAIN</h1>
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
        </header>
        
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tradeblue">Blockchain & AI</span>
            <br />
            Powered Market Analysis
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Leverage AI predictions and blockchain transparency for smarter trading decisions in the Indian stock market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg"
              onClick={() => navigate("/login")}
            >
              Log In
            </Button>
          </div>
        </section>
        
        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border/50">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-3">Real-time Analytics</h2>
            <p className="text-muted-foreground">
              Track Indian markets with real-time data, customizable dashboards, and advanced charting tools
            </p>
          </div>
          
          <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border/50">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-3">AI Predictions</h2>
            <p className="text-muted-foreground">
              Get AI-powered market predictions and trading signals based on advanced pattern recognition
            </p>
          </div>
          
          <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border/50">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-3">Blockchain Verified</h2>
            <p className="text-muted-foreground">
              All market data and predictions are verified and stored on blockchain for complete transparency
            </p>
          </div>
        </section>
        
        {/* CTA */}
        <section className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your trading?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of traders leveraging AI and blockchain technology on TRADECHAIN
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/signup")}
          >
            Create Your Account
          </Button>
        </section>
        
        {/* Footer */}
        <footer className="border-t border-border/50 pt-8 pb-6 text-center text-sm text-muted-foreground">
          <p>© 2025 TRADECHAIN. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
