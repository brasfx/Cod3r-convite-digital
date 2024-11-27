import Event from '../model/Event';

export default function validateEvents(events: Partial<Event>): string[] {
  const errors: string[] = [];

  if (!events.name) {
    errors.push('Nome é obrigatorio!');
  }

  if (!events.alias) {
    errors.push('Alias é obrigatorio!');
  }

  if (!events.date) {
    errors.push('Data é obrigatoria!');
  }

  if (!events.locale) {
    errors.push('Local é obrigatorio!');
  }

  if (!events.expectedAudience || events.expectedAudience < 1) {
    errors.push('Público esperado é obrigatorio!');
  }

  if (!events.image) {
    errors.push('Imagem é obrigatoria!');
  }

  if (!events.backgroundImage) {
    errors.push('Imagem de fundo é obrigatoria!');
  }

  return errors;
}
