import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('reports')
class Report {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  count: number;

  @Column()
  date: Date;
}

export { Report }