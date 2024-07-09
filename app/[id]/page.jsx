import CountriesList from "@/components/CountriesList";
import MatchesList from "@/components/MatchesList";
import PopularSports from "@/components/PopularSports";

export default function SportPage() {
  return (
    <section className="bg-red flex w-full flex-col justify-center text-sm text-neutral-300">
      <PopularSports />
      <div className="flex items-start justify-between">
        <CountriesList />
        <MatchesList />
      </div>
    </section>
  );
}
