import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import {
  BarChart3,
  Users,
  CreditCard,
  Activity,
  ArrowUpRight,
  Zap,
  Target,
  ShoppingCart,
  UserPlus,
  Eye,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto bg-muted/10 p-6 md:p-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Welcome back. Here's an overview of your business performance.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-lg border bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent transition-colors">
                Export
              </button>
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-opacity">
                + New Report
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-xl border bg-card p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <div className="rounded-lg bg-emerald-500/10 p-2">
                  <CreditCard className="h-4 w-4 text-emerald-500" />
                </div>
              </div>
              <p className="mt-3 text-2xl font-bold">$45,231.89</p>
              <div className="mt-2 flex items-center gap-1.5 text-xs">
                <span className="flex items-center gap-0.5 font-medium text-emerald-500">
                  <ArrowUpRight className="h-3.5 w-3.5" /> 20.1%
                </span>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Subscriptions</p>
                <div className="rounded-lg bg-blue-500/10 p-2">
                  <Users className="h-4 w-4 text-blue-500" />
                </div>
              </div>
              <p className="mt-3 text-2xl font-bold">+2,350</p>
              <div className="mt-2 flex items-center gap-1.5 text-xs">
                <span className="flex items-center gap-0.5 font-medium text-emerald-500">
                  <ArrowUpRight className="h-3.5 w-3.5" /> 180.1%
                </span>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Sales</p>
                <div className="rounded-lg bg-violet-500/10 p-2">
                  <BarChart3 className="h-4 w-4 text-violet-500" />
                </div>
              </div>
              <p className="mt-3 text-2xl font-bold">+12,234</p>
              <div className="mt-2 flex items-center gap-1.5 text-xs">
                <span className="flex items-center gap-0.5 font-medium text-emerald-500">
                  <ArrowUpRight className="h-3.5 w-3.5" /> 19%
                </span>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">Active Now</p>
                <div className="rounded-lg bg-orange-500/10 p-2">
                  <Activity className="h-4 w-4 text-orange-500" />
                </div>
              </div>
              <p className="mt-3 text-2xl font-bold">+573</p>
              <div className="mt-2 flex items-center gap-1.5 text-xs">
                <span className="flex items-center gap-0.5 font-medium text-emerald-500">
                  <ArrowUpRight className="h-3.5 w-3.5" /> +201
                </span>
                <span className="text-muted-foreground">since last hour</span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Performance Overview</h3>
                  <p className="text-sm text-muted-foreground">Key metrics this month</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-muted/40 p-5 text-center">
                  <p className="text-2xl font-bold">94%</p>
                  <p className="mt-1 text-xs text-muted-foreground">Goal Progress</p>
                </div>
                <div className="rounded-xl bg-muted/40 p-5 text-center">
                  <p className="text-2xl font-bold">12.4k</p>
                  <p className="mt-1 text-xs text-muted-foreground">Total Visits</p>
                </div>
                <div className="rounded-xl bg-muted/40 p-5 text-center">
                  <p className="text-2xl font-bold">4.8%</p>
                  <p className="mt-1 text-xs text-muted-foreground">Conversion</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-violet-500/10 p-2">
                  <Target className="h-4 w-4 text-violet-500" />
                </div>
                <h3 className="font-semibold">Goals</h3>
              </div>
              <div className="space-y-5">
                <div>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="text-muted-foreground">Monthly Revenue</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[78%] rounded-full bg-emerald-500"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="text-muted-foreground">New Customers</span>
                    <span className="font-medium">64%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[64%] rounded-full bg-blue-500"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="text-muted-foreground">Product Sales</span>
                    <span className="font-medium">91%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[91%] rounded-full bg-violet-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="mb-5 font-semibold">Recent Activity</h3>
            <div className="space-y-1">
              <div className="flex items-center gap-4 rounded-lg p-3 hover:bg-muted/50 transition-colors">
                <div className="rounded-lg bg-emerald-500/10 p-2">
                  <ShoppingCart className="h-4 w-4 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New order received</p>
                  <p className="text-xs text-muted-foreground">Order #3847 • $249.00</p>
                </div>
                <span className="text-xs text-muted-foreground">2 min ago</span>
              </div>
              <div className="flex items-center gap-4 rounded-lg p-3 hover:bg-muted/50 transition-colors">
                <div className="rounded-lg bg-blue-500/10 p-2">
                  <UserPlus className="h-4 w-4 text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New customer signed up</p>
                  <p className="text-xs text-muted-foreground">Sarah Johnson joined</p>
                </div>
                <span className="text-xs text-muted-foreground">14 min ago</span>
              </div>
              <div className="flex items-center gap-4 rounded-lg p-3 hover:bg-muted/50 transition-colors">
                <div className="rounded-lg bg-violet-500/10 p-2">
                  <Eye className="h-4 w-4 text-violet-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Report viewed</p>
                  <p className="text-xs text-muted-foreground">Monthly analytics report</p>
                </div>
                <span className="text-xs text-muted-foreground">1 hour ago</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}