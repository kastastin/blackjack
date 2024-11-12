import Balance from "@/components/Balance";
import CardSet from "@/components/CardSet";
import BetForm from "@/components/BetForm";

export default function Page() {
  return (
    <main className="py-2 flex min-h-[calc(100svh-60px)] flex-col justify-between gap-4 container">
      <Balance />
      <CardSet />
      <BetForm />
    </main>
  );
}
