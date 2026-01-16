import Image from "next/image";
export default function Home() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col py-16 border justify-center items-center">
      <div className="bg-white flex flex-row rounded-full px-10 py-5 w-fit  gap-4 items-center justify-center shadow-glow">
        <Image
          src={"/images/search-logo.png"}
          alt="seach-logo"
          width={56}
          height={56}
          className="h-14 w-14 shrink-0"
        />
        <p className="font-extrabold text-secondary text-xl">
          CRÉER UN SITE WEB VRAIMENT UNIQUE
        </p>
      </div>
    </section>
  );
}
