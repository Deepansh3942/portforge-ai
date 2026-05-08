export default function BackgroundEffects() {
  return (
    <>
      <div className="fixed inset-0 -z-20 grid-bg" />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>
    </>
  );
}

