export default class Alias {
  static format(value: string): string {
    return value.toLowerCase().replace(/\s/g, '-');
  }
}
