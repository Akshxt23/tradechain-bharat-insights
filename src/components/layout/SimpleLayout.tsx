
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Home,
  Layers,
  LogOut,
  Menu,
  Settings,
  User,
  X,
  TrendingUp,
  Zap,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SimpleLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("tradechain-auth");
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    navigate("/login");
  };

  const navItems = [
    { icon: <Home className="h-5 w-5" />, label: "Dashboard", href: "/dashboard" },
    { icon: <BarChart className="h-5 w-5" />, label: "Analytics", href: "/analytics" },
    { icon: <TrendingUp className="h-5 w-5" />, label: "Market", href: "/market" },
    { icon: <Zap className="h-5 w-5" />, label: "Predictions", href: "/predictions" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link to="/dashboard" className="flex items-center gap-2">
              <Layers className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">TRADECHAIN</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* User menu */}
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>DP</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/settings")}>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed top-0 right-0 w-3/4 h-full bg-card p-6 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-semibold">Menu</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                    isActive(item.href)
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2025 TRADECHAIN. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default SimpleLayout;
