type Testimonial = { name: string; location?: string; text: string };

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((t, i) => (
        <div key={i} className="rounded-xl border bg-white/70 p-6">
          <p className="italic">“{t.text}”</p>
          <div className="mt-3 text-sm font-medium">{t.name}{t.location ? `, ${t.location}` : ''}</div>
        </div>
      ))}
    </div>
  );
}


