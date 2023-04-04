import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'varchar',
    length: 100
  })
  name: string

  @Column({ 
    type: "varchar", 
    length: 100, 
    unique: true 
  })
  email: string

  @Column({ 
    type: "varchar", 
    length: 255 
  })
  password: string;

  @Column({ 
    type: "enum", 
    enum: ["user", "admin"], 
    default: "user" 
  })
  permission: string;
}