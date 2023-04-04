import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Buffer } from "buffer";

@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  name: string

  @Column('text')
  text: string

  @Column({
    type: 'text',
    default: 'PENDING'
  })
  status: string

  @Column({
    type: "bytea",
    default: null,
    nullable: true
  })
  photo: Buffer
}