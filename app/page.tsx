import Image from "next/image";
export default function Home() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col py-16 border justify-center items-center gap-14">
      <div className="bg-white flex flex-row rounded-full px-10 py-5 w-fit  gap-4 items-center justify-center shadow-glow">
        <Image
          src={"/images/search-logo.png"}
          alt="seach-logo"
          width={56}
          height={56}
          className="h-14 w-14 shrink-0"
        />
        <p className="font-extrabold text-secondary text-xl uppercase">
          CRÉER UN SITE WEB VRAIMENT UNIQUE
        </p>
      </div>
      <h1 className="font-extrabold text-white uppercase text-3xl text-center  max-w-3xl tracking-tight ">
        Votre <span className="text-primary">site</span> doit{" "}
        <span className="text-primary">donner envie</span> de{" "}
        <span className="text-primary">rester</span>, pas de{" "}
        <span className="line-through decoration-secondary o">
          {" "}
          <span className="text-primary">revenir</span> en{" "}
          <span className="text-primary">arrière</span>.
        </span>
      </h1>

      <p className="text-base text-white/80 font-medium md:text-xl max-w-lg sm:max-w-2xl text-center">
        Design moderne, SEO solide, Suivi complet : on construit un site qui
        retient vos visiteurs et vous apporte des résultats.
      </p>
    </section>
  );
}
