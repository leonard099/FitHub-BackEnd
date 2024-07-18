import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./User.enum";
@Entity({
    name:'users'
})
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({type:"varchar",length:100,nullable:false})
    name:string

    @Column({type:"varchar",length:100, nullable:false})
    email:string

    @Column({type:"varchar",length:100, nullable:false})
    password:string

    @Column({ type:'bigint' })
    phone:number

    @Column({default:UserRole.USER})
    isAdmin:UserRole

    @ManyToMany(()=>Rutina, rutina=> rutina.user)
    @JoinTable({name:'usuario-rutina'})
    rutina:Rutina[]
    
    @ManyToMany(()=>Planes ,planes=>planes.user)
    @JoinTable({name:'usuario-planes'})
    planes:Planes[]

    @OneToMany(()=>Rutina, rutina=> rutina.admin)
    @JoinTable({name:'admin-rutina'})
    rutinaAdmin:Rutina[]

    @OneToMany(()=>Planes ,planes=>planes.admin)
    @JoinTable({name:'admin-planes'})
    planesAdmin:Planes[]
}