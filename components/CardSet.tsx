import Image from "next/image";

export default function CardSet() {
  return (
    <div className="flex flex-col gap-2 text-white font-medium">
      <div className="rounded-xl border-2 border-white/[0.5] p-2">
        <div className="flex justify-between mb-3">
          <span>Dealer</span>
          <span>0</span>
        </div>
        <div className="grid grid-cols-5 gap-1">
          <div className="rounded-[10px] border-2 border-white/[0.5]">
            <Image
              className="rounded-lg"
              src="/cards/card-back.svg"
              alt="Logo"
              width={209}
              height={303}
              priority
            />
          </div>
          <div className="rounded-[10px] border-2 border-white/[0.5]">
            <Image
              className="rounded-lg"
              src="/cards/card-back.svg"
              alt="Logo"
              width={209}
              height={303}
              priority
            />
          </div>
          <div className="rounded-[10px] border-2 border-white/[0.5]">
            <Image
              className="rounded-lg"
              src="/cards/card-back.svg"
              alt="Logo"
              width={209}
              height={303}
              priority
            />
          </div>
          <div className="rounded-[10px] border-2 border-white/[0.5]">
            <Image
              className="rounded-lg"
              src="/cards/card-back.svg"
              alt="Logo"
              width={209}
              height={303}
              priority
            />
          </div>
          <div className="rounded-[10px] border-2 border-white/[0.5]">
            <Image
              className="rounded-lg"
              src="/cards/card-back.svg"
              alt="Logo"
              width={209}
              height={303}
              priority
            />
          </div>
        </div>
      </div>

      <div className="rounded-xl border-2 border-white/[0.5] p-2">
        <div className="flex justify-between mb-3">
          <span>You</span>
          <span>0</span>
        </div>
        <div className="grid grid-cols-5 gap-1">
          <div className="rounded-[10px] border-2 border-white/[0.5]">
            <Image
              className="rounded-lg"
              src="/cards/card-back.svg"
              alt="Logo"
              width={209}
              height={303}
              priority
            />
          </div>
          <div className="rounded-[10px] border-2 border-white/[0.5]">
            <Image
              className="rounded-lg"
              src="/cards/card-back.svg"
              alt="Logo"
              width={209}
              height={303}
              priority
            />
          </div>
          <div className="rounded-[10px] border-2 border-white/[0.5]">
            <Image
              className="rounded-lg"
              src="/cards/card-back.svg"
              alt="Logo"
              width={209}
              height={303}
              priority
            />
          </div>
          <div className="rounded-[10px] border-2 border-white/[0.5]">
            <Image
              className="rounded-lg"
              src="/cards/card-back.svg"
              alt="Logo"
              width={209}
              height={303}
              priority
            />
          </div>
          <div className="rounded-[10px] border-2 border-white/[0.5]">
            <Image
              className="rounded-lg"
              src="/cards/card-back.svg"
              alt="Logo"
              width={209}
              height={303}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
