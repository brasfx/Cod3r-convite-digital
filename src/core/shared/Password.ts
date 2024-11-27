export default class Password {
  static create(maxLength: number = 15) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%&*';

    const groups = [characters, symbols, numbers];
    const password = [];

    for (let i = 0; i < maxLength; i++) {
      const group = groups[Math.floor(Math.random() * groups.length)];
      password.push(group[Math.floor(Math.random() * group.length)]);
    }
    return password.join('');
  }
}
