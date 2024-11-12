import { TbWallet } from "react-icons/tb";

export default function Balance() {
  return (
    <div className="self-end -mr-4 flex cursor-pointer items-center rounded-l-full bg-[#334048] p-1 pl-2 text-lg text-white sm:rounded-full sm:px-2.5 sm:py-1.5 sm:mr-0">
      <TbWallet />
      <span className="ml-1 mr-[2px] font-medium">25</span>
      <span className="font-medium">$</span>
    </div>
  );
}
