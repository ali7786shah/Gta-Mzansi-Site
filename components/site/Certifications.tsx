export function Certifications() {
  const logos = [
    { name: "NKBA", label: "[NKBA Logo]" },
    { name: "BBB", label: "[BBB Accredited]" },
    { name: "Houzz", label: "[Houzz]" },
    { name: "Supplier A", label: "[Supplier Brand]" },
    { name: "Supplier B", label: "[Supplier Brand]" },
  ]
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-16 items-center justify-center rounded-md border bg-slate-50 text-sm text-slate-500"
            >
              {logo.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}