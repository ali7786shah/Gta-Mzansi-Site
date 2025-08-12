export function ServiceArea() {
  return (
    <section id="service-area" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a2540] sm:text-4xl">Our Service Area</h2>
          <p className="mt-3 text-slate-600">Tacoma, Puyallup, Lakewood, Federal Way, and surrounding communities.</p>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl border shadow-sm">
          <iframe
            title="Tacoma Service Area Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85961.40167499531!2d-122.54845795!3d47.243968999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490551cb706a0cb%3A0x894575c1bdf8f8fe!2sTacoma%2C%20WA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}