export default interface Guest {
  id: string;
  name: string;
  email: string;
  attendance: boolean;
  haveGuest: boolean;
  guestsAmount: number;
}
