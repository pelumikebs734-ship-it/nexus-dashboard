import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Welcome to Nexus Dashboard Starter Kit
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-sm font-medium text-muted-foreground">Total Revenue</h3>
              <p className="mt-2 text-2xl font-bold">$45,231</p>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-sm font-medium text-muted-foreground">Subscriptions</h3>
              <p className="mt-2 text-2xl font-bold">+2350</p>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-sm font-medium text-muted-foreground">Sales</h3>
              <p className="mt-2 text-2xl font-bold">+12,234</p>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-sm font-medium text-muted-foreground">Active Users</h3>
              <p className="mt-2 text-2xl font-bold">+573</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
