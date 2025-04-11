
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bell,
  Blocks,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Home,
  Layers,
  LogOut,
  Menu,
  MessageSquare,
  PieChart,
  Search,
  Settings,
  User,
  X,
  TrendingUp,
  Zap,
  Lock,
  ChevronUp,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useIsMobile();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [collapsedGroups, setCollapsedGroups] = useState<string[]>([]);
  const [mockNotifications, setMockNotifications] = useState(3);

  // Collapse sidebar on mobile by default
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  // Ensure sidebar closes when navigating on mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [pathname, isMobile]);

  const toggleCollapse = (group: string) => {
    setCollapsedGroups((prev) =>
      prev.includes(group)
        ? prev.filter((g) => g !== group)
        : [...prev, group]
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("tradechain-auth");
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    navigate("/login");
  };

  // Navigation groups structure
  const navGroups: NavGroup[] = [
    {
      label: "Overview",
      items: [
        {
          icon: <Home className="h-5 w-5" />,
          label: "Dashboard",
          href: "/dashboard",
        },
        {
          icon: <BarChart className="h-5 w-5" />,
          label: "Analytics",
          href: "/analytics",
        },
        {
          icon: <TrendingUp className="h-5 w-5" />,
          label: "Market Trends",
          href: "/trends",
        },
      ],
    },
    {
      label: "AI Tools",
      items: [
        {
          icon: <Zap className="h-5 w-5" />,
          label: "Predictions",
          href: "/predictions",
        },
        {
          icon: <MessageSquare className="h-5 w-5" />,
          label: "AI Assistant",
          href: "/ai-assistant",
        },
      ],
    },
    {
      label: "Blockchain",
      items: [
        {
          icon: <Blocks className="h-5 w-5" />,
          label: "Ledger",
          href: "/ledger",
        },
        {
          icon: <Lock className="h-5 w-5" />,
          label: "Security",
          href: "/security",
        },
      ],
    },
    {
      label: "Account",
      items: [
        {
          icon: <User className="h-5 w-5" />,
          label: "Profile",
          href: "/profile",
        },
        {
          icon: <CreditCard className="h-5 w-5" />,
          label: "Billing",
          href: "/billing",
        },
        {
          icon: <Settings className="h-5 w-5" />,
          label: "Settings",
          href: "/settings",
        },
      ],
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Overlay for mobile */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isMobile ? "lg:translate-x-0" : ""}`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center gap-2 px-4 border-b border-border">
            <Layers className="h-6 w-6 text-tradegold" />
            <h1 className="text-xl font-bold">TRADECHAIN</h1>
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            {navGroups.map((group) => (
              <div key={group.label} className="mb-6">
                <div
                  className="flex items-center justify-between mb-2 px-2 text-sm text-muted-foreground cursor-pointer"
                  onClick={() => toggleCollapse(group.label)}
                >
                  {group.label}
                  {collapsedGroups.includes(group.label) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronUp className="h-4 w-4" />
                  )}
                </div>
                {!collapsedGroups.includes(group.label) && (
                  <div className="space-y-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm group transition-colors ${
                          isActive(item.href)
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                        }`}
                      >
                        <span
                          className={`${
                            isActive(item.href)
                              ? "text-primary"
                              : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        >
                          {item.icon}
                        </span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* User profile */}
          <div className="mt-auto p-4 border-t border-border">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full flex items-center justify-start gap-2 px-2 hover:bg-accent"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>DP</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <p className="text-sm font-medium">Demo Profile</p>
                    <p className="text-xs text-muted-foreground">demo@example.com</p>
                  </div>
                  <ChevronDown className="ml-auto h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
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
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isOpen && !isMobile ? "ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <header className="h-16 border-b border-border flex items-center gap-4 px-4 sticky top-0 bg-background/80 backdrop-blur-sm z-30">
          {(!isOpen || isMobile) && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(true)}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          
          {!isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hidden lg:flex"
            >
              {isOpen ? (
                <ChevronLeft className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </Button>
          )}

          <div className="relative max-w-md w-full hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search stocks, insights..."
              className="pl-10 bg-accent/30"
            />
          </div>

          <div className="ml-auto flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {mockNotifications > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-tradered text-white text-xs flex items-center justify-center">
                  {mockNotifications}
                </span>
              )}
            </Button>

            <Button variant="ghost" size="icon">
              <PieChart className="h-5 w-5" />
            </Button>

            {isMobile && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
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
            )}
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
