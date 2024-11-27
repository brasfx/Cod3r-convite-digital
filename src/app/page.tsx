import Logo from '@/components/templates/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="h-screen flex flex-col justify-center gap-10
      items-center bg-[url('/background-home.svg')] bg-cover "
    >
      <div className="flex flex-col items-center gap-4">
        <Logo classes="logo-large" width={100} height={100} />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center  select-none">
          Crie e gerencie o convite do seu evento de forma rápida e sem
          complicações!
        </p>
      </div>
      <Link className="button blue text-lg uppercase" href="/event">
        Crie o seu evento
      </Link>
    </div>
  );
}
