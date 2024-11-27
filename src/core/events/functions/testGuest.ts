import Guest from '../model/Guest';
import validateGuest from './validateGuest';

export default function testGuest(guest: Partial<Guest>): Guest {
  const errors = validateGuest(guest);

  if (errors.length > 0) {
    throw new Error(errors.join('\n'));
  }
  const guestsAmount = guest.guestsAmount ?? 0;
  const haveGuest = guest.haveGuest && guest.attendance && guestsAmount > 0;

  const newGuest: Guest = {
    ...guest,
    haveGuest,
    guestsAmount: haveGuest ? guestsAmount : 0,
  } as Guest;

  return newGuest;
}
