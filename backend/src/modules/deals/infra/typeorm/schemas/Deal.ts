import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('deals')
class Deal {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  title?: string

  @Column()
  date: Date

  @Column()
  amount: number

  @CreateDateColumn()
  createdAt: Date

}

export { Deal };