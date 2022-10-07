import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column('int')
  views: number;

  @Column()
  status: boolean;

  constructor(props) {
    Object.assign(this, props);
  }
}

// export class Task {}
