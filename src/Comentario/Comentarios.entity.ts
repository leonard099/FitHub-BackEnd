import { Rutina } from "src/Rutina/Rutina.entity";
import { Users } from "src/User/User.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'Comentarios'
})
export class Comentarios{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({type:'varchar'})
    contenido:string

    @ManyToOne(()=>Users, usuario = usuario.comentarios)
    @JoinTable({name:'usurio'})
    usario:Users

    @ManyToOne(()=>Rutina, rutina=rutina.comentario, {nullable:true})
    @JoinColumn({name:'rutina'})
    rutina:Rutina

    @ManyToOne(()=>Plan, plan=plan.comentario, {nullable:true})
    @JoinColumn({name:'plan'})
    rutina:Plan
}