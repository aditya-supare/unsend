import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Bell,
  BellRing,
  BookUser,
  CircleUser,
  Code,
  Globe,
  Home,
  KeyRound,
  LayoutDashboard,
  LineChart,
  Mail,
  Menu,
  MessageSquareMore,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  Volume2,
} from "lucide-react";
import { Button } from "@unsend/ui/src/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@unsend/ui/src/dropdown-menu";
import { Input } from "@unsend/ui/src/input";
import { Sheet, SheetContent, SheetTrigger } from "@unsend/ui/src/sheet";

import { NextAuthProvider } from "~/providers/next-auth";
import { getServerAuthSession } from "~/server/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NavButton } from "./nav-button";

export const metadata = {
  title: "Unsend",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function AuthenticatedDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <NextAuthProvider session={session}>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden  bg-muted/20 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Image src="/Logo-1.png" alt="Unsend" width={40} height={40} />

                <span className=" ">Unsend</span>
              </Link>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <NavButton href="/dashboard">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </NavButton>

                <NavButton href="/emails">
                  <Mail className="h-4 w-4" />
                  Emails
                </NavButton>

                <NavButton href="/domains">
                  <Globe className="h-4 w-4" />
                  Domains
                </NavButton>

                <NavButton href="/contacts" comingSoon>
                  <BookUser className="h-4 w-4" />
                  Contacts
                </NavButton>

                <NavButton href="/contacts" comingSoon>
                  <Volume2 className="h-4 w-4" />
                  Marketing
                </NavButton>

                <NavButton href="/sms" comingSoon>
                  <MessageSquareMore className="h-4 w-4" />
                  SMS
                </NavButton>

                <NavButton href="/sms" comingSoon>
                  <BellRing className="h-4 w-4" />
                  Push notification
                </NavButton>

                <NavButton href="/api-keys">
                  <Code className="h-4 w-4" />
                  Developer settings
                </NavButton>
              </nav>
            </div>
            <div className="mt-auto p-4"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 md:hidden  bg-muted/20 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Orders
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Package className="h-5 w-5" />
                    Products
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Users className="h-5 w-5" />
                    Customers
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <LineChart className="h-5 w-5" />
                    Analytics
                  </Link>
                </nav>
                <div className="mt-auto"></div>
              </SheetContent>
            </Sheet>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 w-full lg:max-w-6xl mx-auto lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </NextAuthProvider>
  );
}
