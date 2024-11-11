export default function CardSet() {
  return (
    <div className="flex h-[300px] w-full flex-col gap-2 text-white">
      <div className="flex h-1/2 flex-col gap-3 rounded-xl border-2 border-white/[0.5] p-2">
        <div className="flex justify-between">
          <span>Dealer</span>
          <span>0</span>
        </div>
        <div className="h-full">
          <div className="grid h-full grid-cols-5 gap-1">
            <div className="h-full rounded-lg border-2 border-white/[0.5]"></div>
            <div className="h-full rounded-lg border-2 border-white/[0.5]"></div>
            <div className="h-full rounded-lg border-2 border-white/[0.5]"></div>
            <div className="h-full rounded-lg border-2 border-white/[0.5]"></div>
            <div className="h-full rounded-lg border-2 border-white/[0.5]"></div>
          </div>
        </div>
      </div>

      <div className="flex h-1/2 flex-col gap-3 rounded-xl border-2 border-white/[0.5] p-2">
        <div className="flex justify-between">
          <span>You</span>
          <span>0</span>
        </div>
        <div className="h-full">
          <div className="grid h-full grid-cols-5 gap-1">
            <div className="h-full rounded-lg border-2 border-white/[0.5]"></div>
            <div className="h-full rounded-lg border-2 border-white/[0.5]"></div>
            <div className="h-full rounded-lg border-2 border-white/[0.5]"></div>
            <div className="h-full rounded-lg border-2 border-white/[0.5]"></div>
            <div className="h-full rounded-lg border-2 border-white/[0.5]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
