"use client"

import Image from "next/image"
import { useState } from "react"

function BeforeAfterPair({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [position, setPosition] = useState(50)
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-sm sm:h-80">
      <Image src={before} alt={`Before - ${alt}`} fill className="object-cover" />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={after} alt={`After - ${alt}`} fill className="object-cover" />
      </div>
      <input
        aria-label="Comparison slider"
        className="absolute bottom-3 left-1/2 z-10 w-2/3 -translate-x-1/2 cursor-pointer"
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="rounded-full bg-black/30 px-3 py-1 text-xs text-white">Drag slider</div>
      </div>
    </div>
  )
}

export function BeforeAfterGallery() {
  const pairs = [
    {
      before:
        "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1400&auto=format&fit=crop",
      after:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1400&auto=format&fit=crop",
      alt: "Kitchen transformation 1",
    },
    {
      before:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
      after:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop",
      alt: "Kitchen transformation 2",
    },
    {
      before:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop",
      after:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop",
      alt: "Kitchen transformation 3",
    },
  ]

  return (
    <section id="gallery" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a2540] sm:text-4xl">
            See Our Transformations: Before & After
          </h2>
          <p className="mt-3 text-slate-600">[Placeholder: Brief description of gallery]</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pairs.map((p) => (
            <BeforeAfterPair key={p.alt} before={p.before} after={p.after} alt={p.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}