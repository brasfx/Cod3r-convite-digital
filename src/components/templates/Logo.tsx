import { Righteous } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const font = Righteous({
  subsets: ['latin'],
  weight: '400',
});

interface LogoProps {
  classes?: string;
  width?: number;
  height?: number;
}
export default function Logo({
  classes = 'logo-small',
  width = 50,
  height = 50,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex ${
        classes === 'logo-small' ? 'flex-row' : 'flex-col'
      } items-center gap-2 ${font.className}`}
    >
      <Image src="/logo.svg" alt="Logo" width={width} height={height} />
      <h1 className={classes}>
        <div>
          CONVIT<span className="text-blue-500">3</span>
        </div>
        <div>DIGITAL</div>
      </h1>
    </Link>
  );
}
