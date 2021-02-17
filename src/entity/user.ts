/**
 * 用户实体
 * @author Philip
 */
import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from "./author";

@EntityModel('user')
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 32
  })
  username: string;
  
  @Column({
    length: 32
  })
  password: string;
  
  @Column('text')
  nickname: string;
  
  @Column({
    length: 256
  })
  avatar: string;

  @ManyToMany(type => Photo, photo => photo.albums)
  @JoinTable()
  author: Author;
}