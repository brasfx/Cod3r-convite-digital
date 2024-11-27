import { Id, Password } from '@/core/shared';
import Event from '../model/Event';
import validateEvents from './validateEvent';

export default function testEvent(partialEvent: Partial<Event>): Event {
  const errors = validateEvents(partialEvent);

  if (errors.length > 0) {
    throw new Error(errors.join('\n'));
  }

  const event: Event = {
    ...partialEvent,
    id: partialEvent.id ?? Id.newId(),
    password: partialEvent.password ?? Password.create(20),
    expectedAudience: +(partialEvent.expectedAudience ?? 1),
  } as Event;

  return event;
}
