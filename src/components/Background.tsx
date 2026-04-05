export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(13,58,64,0.85),transparent_55%),radial-gradient(900px_circle_at_90%_10%,rgba(6,53,60,0.9),transparent_60%),radial-gradient(700px_circle_at_70%_90%,rgba(9,53,49,0.95),transparent_55%)]" />
      <div className="absolute inset-0 noise" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />
    </div>
  );
}

