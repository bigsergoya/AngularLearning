import { SportEventDto } from "src/app/services/dto/sport-event";

export class SportDisciplineToEvents
{
  constructor(public typeName: string, public events: SportEventDto[])
  {

  }
} 