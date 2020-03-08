//export class DatabaseProviders {}

import * as mongoose from 'mongoose'; 
export const DatabaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect("mongodb://localhost/animals")
  },
];
