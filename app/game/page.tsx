import Balance from "@/components/Balance";
import CardSet from "@/components/CardSet";
import BetForm from "@/components/BetForm";

export default function Page() {
  return (
    <main className="relative flex min-h-[calc(100svh-60px)] flex-col justify-around gap-4 bg-[#252c34] px-4">
      <Balance positionStyles="top-[10px] right-0" />
      <CardSet />
      <BetForm />
    </main>
  );
}
