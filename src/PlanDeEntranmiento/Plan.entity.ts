import { Comentarios } from 'src/Comentario/Comentarios.entity';
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

@Entity({ name: 'plan' })
export class Plan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'boolean', default: false })
  virificado: boolean;

  @Column({ type: 'boolean' })
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

  //Agregar realcion a suscripcion
}
