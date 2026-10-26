// Price chips (.prices in the original stylesheet).
export default function PriceChips({ prices }) {
  return (
    <ul className="list-none flex flex-wrap gap-2 mt-[.4rem] mb-0 p-0">
      {prices.map(([minutes, price]) => (
        <li
          key={minutes}
          className="flex flex-col items-center min-w-[72px] px-[.8rem] py-[.45rem] rounded-[14px] bg-butter leading-[1.3] xs:min-w-[64px] xs:p-[.4rem_.6rem]"
        >
          <span className="text-[.72rem] text-muted">{minutes} min</span>
          <b className="font-medium text-[1.2rem] leading-[normal] font-serif text-rust">{price} €</b>
        </li>
      ))}
    </ul>
  );
}
