import { TbWallet } from "react-icons/tb";

export default function Balance({
  positionStyles,
}: {
  positionStyles?: string;
}) {
  return (
    <div
      className={`absolute flex cursor-pointer items-center rounded-l-full bg-[#334048] p-1 pl-2 text-lg text-white ${positionStyles}`}
    >
      <TbWallet />
      <span className="ml-1 mr-[2px] font-medium">25</span>
      <span className="font-medium">$</span>
    </div>
  );
}
