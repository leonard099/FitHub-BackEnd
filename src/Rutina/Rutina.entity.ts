import { Comentarios } from 'src/Comentario/Comentarios.entity';
import { Ejercicio } from 'src/Ejercicios/Ejercicios.entity';
import { Users } from 'src/User/User.entity';
import {
  Column,
  CommonEvents,
  Entity,
  JoinColumn,
  JoinTable,
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

  @OneToMany(() => Ejercicio, (ejercicio) => ejercicio.rutina)
  @JoinColumn({ name: 'ejercicios' })
  ejercicios: Ejercicio[];

  @ManyToOne(() => Users, (user) => user.rutinaAdmin)
  @JoinColumn({ name: 'admin' })
  admin: Users;

  @ManyToMany(() => Users, (user) => user.rutina)
  users: Users[];

  @OneToMany(() => Comentarios, (comentario) => comentario.rutina)
  @JoinColumn({ name: 'comentarios' })
  comentarios: Comentarios[];
}
