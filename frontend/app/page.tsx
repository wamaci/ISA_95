export default function Home() {
  const kpis = [
    { label: "OEE", value: "78.4%", delta: "+2.1%", tone: "good" },
    { label: "Planned Orders", value: "32", delta: "5 delayed", tone: "warn" },
    { label: "Material Alerts", value: "07", delta: "2 urgent", tone: "danger" },
    { label: "Quality Yield", value: "96.2%", delta: "+0.8%", tone: "good" },
  ];

  const workOrders = [
    {
      code: "LSX-0302",
      product: "Desk Calendar 2026",
      machine: "SM74-02",
      progress: 68,
      status: "Running",
    },
    {
      code: "LSX-0314",
      product: "Promotional Calendar OEM",
      machine: "Bobst-01",
      progress: 42,
      status: "Setup",
    },
    {
      code: "LSX-0285",
      product: "Pocket Calendar V2.1",
      machine: "CTP-31",
      progress: 89,
      status: "QC Hold",
    },
  ];

  return (
    <main className="min-h-screen bg-grid text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <section className="panel flex flex-col gap-5 overflow-hidden lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">
              Nam Long Manufacturing Control Tower
            </p>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Phase 0 foundation workspace
              </h1>
              <p className="mt-2 max-w-3xl text-sm text-slate-300 sm:text-base">
                Initial ERP/MES shell for master data, access control, and audit-ready
                operations. This dashboard sets the visual baseline for dense factory
                workflows.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            <div className="metric-chip">
              <span>Company Model</span>
              <strong>1 DB / Company</strong>
            </div>
            <div className="metric-chip">
              <span>Stack</span>
              <strong>Next + Nest</strong>
            </div>
            <div className="metric-chip">
              <span>Alignment</span>
              <strong>ISA-95</strong>
            </div>
            <div className="metric-chip">
              <span>Status</span>
              <strong>Bootstrap</strong>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((kpi) => (
            <article className="panel" key={kpi.label}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-400">{kpi.label}</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">{kpi.value}</h2>
                </div>
                <span className={`status-pill status-pill-${kpi.tone}`}>{kpi.delta}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-4 xl:grid-cols-[1.65fr_1fr]">
          <article className="panel">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">Live production orders</h2>
                <p className="text-sm text-slate-400">
                  Dashboard density follows the target manufacturing style.
                </p>
              </div>
              <button className="action-button">Export Excel</button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="min-w-full divide-y divide-white/10 text-left text-sm">
                <thead className="bg-white/5 text-slate-300">
                  <tr>
                    <th className="px-4 py-3 font-medium">Order</th>
                    <th className="px-4 py-3 font-medium">Product</th>
                    <th className="px-4 py-3 font-medium">Machine</th>
                    <th className="px-4 py-3 font-medium">Progress</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {workOrders.map((order) => (
                    <tr key={order.code} className="bg-slate-950/40">
                      <td className="px-4 py-4 font-medium text-white">{order.code}</td>
                      <td className="px-4 py-4 text-slate-300">{order.product}</td>
                      <td className="px-4 py-4 text-slate-300">{order.machine}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-full rounded-full bg-white/10">
                            <div
                              className="h-2 rounded-full bg-cyan-400"
                              style={{ width: `${order.progress}%` }}
                            />
                          </div>
                          <span className="w-12 text-right text-slate-300">{order.progress}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="status-pill status-pill-neutral">{order.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="panel space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-white">Phase 0 delivery slices</h2>
              <p className="text-sm text-slate-400">
                The first implementation phase focuses on master data and governance.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Company and factory setup",
                "Users, roles, and permissions",
                "Employee, shift, and department masters",
                "Customer and supplier masters",
                "Work center, machine, UOM, currency",
                "Audit log framework",
              ].map((item) => (
                <div className="list-row" key={item}>
                  <span className="list-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
