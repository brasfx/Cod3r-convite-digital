import { events } from '@/core';
import Image from 'next/image';
import Link from 'next/link';
import QRCode from 'react-qr-code';

export default function Events() {
  return (
    <div className="grid grid-cols-3 gap-5 ">
      {events.map((event) => {
        return (
          <div
            key={event.id}
            className="flex flex-col w-full bg-zinc-800 rounded-lg overflow-hidden border border-transparent hover:border-blue-500 transition duration-300"
          >
            <div className="relative w-full h-52">
              <Image
                src={event.image}
                fill
                alt={event.name}
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-7 text-white ">
              <span className="text-white text-start text-lg">
                {event.name}
              </span>
              <p className="text-slate-400 text-start text-sm flex-1">
                {event.description}
              </p>
              <div className=" flex items-center justify-center pt-5">
                <QRCode
                  value={JSON.stringify({
                    id: event.id,
                    password: event.password,
                    name: event.name,
                  })}
                  size={150}
                />
              </div>

              <div className="flex flex-wrap gap-5 pt-4">
                <Link
                  href={`/event/admin/${event.id}/${event.password}`}
                  className="flex-1 button red"
                >
                  Admin
                </Link>
                <Link
                  href={`/invites/${event.alias}`}
                  className="flex-1 button green"
                >
                  Convite
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
