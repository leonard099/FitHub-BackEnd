import { BlobOptions } from 'buffer';
import { Users } from 'src/User/User.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'rutina',
})
export class Rutina {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'boolean', default: false })
  virificado: boolean;

  @OneToMany(() => Ejercicios, (ejercicio = ejercicio.rutina))
  @JoinColumn({ name: 'ejercicios' })
  ejercicios: Ejercicios[];

  @ManyToOne(() => Users, (user = user.rutinaAdmin))
  @JoinColumn({ name: 'admin' })
  admin: Users;

  @ManyToMany(() => Users, (user = user.rutina))
  users: Users[];

  @OneToMany(() => Comentarios, (cometario = comentario.rutina))
  @JoinColumn({ name: 'comentarios' })
  comentarios: Comentarios[];
}
