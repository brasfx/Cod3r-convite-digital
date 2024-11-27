import Logo from './Logo';

export interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export default function Page({ children, className }: PageProps) {
  return (
    <div
      className="flex flex-col items-center py-10 min-h-screen
    bg-[linear-gradient(to_bottom,_rgb(26,23,38),_rgb(64,58,95))] bg-cover"
    >
      <Logo />
      <main
        className={`flex-1 flex flex-col justify-center py-10 container ${className}`}
      >
        {children}
      </main>
    </div>
  );
}
