// A single package row (.pk in the original stylesheet).
export default function PackageRow({ pkg }) {
  return (
    <div className="flex justify-between items-baseline gap-4 py-[.85rem] border-b border-b-[rgba(46,33,24,.18)] mob:flex-wrap mob:gap-[.2rem_1rem]">
      <span>
        {pkg[0]}
        <small className="ml-[.4rem] opacity-70 whitespace-nowrap [font-size:smaller]">90 min</small>
      </span>
      <b className="font-medium text-[1.3rem] leading-[normal] font-serif text-rust whitespace-nowrap">{pkg[1]} €</b>
    </div>
  );
}
