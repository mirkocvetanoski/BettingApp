import CountriesList from "@/components/CountriesList";
import PopularSports from "@/components/PopularSports";

export default function Home() {
  return (
    <section className="bg-red flex w-full flex-col justify-center text-sm text-neutral-300">
      <PopularSports />
      <CountriesList />
    </section>
  );
}
