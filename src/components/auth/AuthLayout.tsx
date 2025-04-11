
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Layers, Lock, Shield } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
}

const AuthLayout = ({
  children,
  title,
  description,
  footerText,
  footerLinkText,
  footerLinkHref,
}: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - branding */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-secondary/90 to-secondary/50 p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Layers className="h-8 w-8 text-tradegold" />
            <h1 className="text-2xl font-bold text-white">TRADECHAIN</h1>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Blockchain & AI Powered<br />Market Analysis</h2>
          <p className="text-white/80 max-w-md">
            Advanced analytics for the Indian stock market with transparent blockchain integration and AI-powered predictions.
          </p>
        </div>
        
        <div className="hidden md:flex flex-col gap-6 mt-12">
          <div className="flex items-start gap-3">
            <Shield className="h-6 w-6 text-tradegold mt-1" />
            <div>
              <h3 className="text-white font-medium">Secure Authentication</h3>
              <p className="text-white/70 text-sm">Multi-layered security with blockchain verification</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Lock className="h-6 w-6 text-tradegold mt-1" />
            <div>
              <h3 className="text-white font-medium">Data Privacy</h3>
              <p className="text-white/70 text-sm">Your data is encrypted and never shared with third parties</p>
            </div>
          </div>
        </div>
        
        <div className="text-white/50 text-sm mt-8 hidden md:block">
          © 2025 TradeChain. All rights reserved.
        </div>
      </div>
      
      {/* Right side - auth form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <Card className="w-full max-w-md border-muted/20">
          <CardHeader>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            {children}
          </CardContent>
          <CardFooter className="flex items-center justify-center border-t border-muted/20 p-4">
            <p className="text-sm text-muted-foreground">
              {footerText}{" "}
              <Link to={footerLinkHref} className="text-primary hover:underline">
                {footerLinkText}
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AuthLayout;
