import { Provide, Inject, Func } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import UserEntity from './entity/user';
import { Repository } from 'typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(UserEntity)
  userModel: Repository<UserEntity>;

  // save
  async saveUser() {
    
    // create a entity object
    let photo = new UserEntity();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;
    
    // save entity
    const result = await this.userModel.save(photo);
  }

  // find
  async findPhotos() {
    
    // find All
    let allPhotos = await this.userModel.find();

    // find first
    let firstPhoto = await this.userModel.findOne(1);

    // find one by name
    let meAndBearsPhoto = await this.userModel.findOne({ name: "Me and Bears" });

    // find by views
    let allViewedPhotos = await this.userModel.find({ views: 1 });
    let allPublishedPhotos = await this.userModel.find({ isPublished: true });
  
    // find and get count
    let [allPhotos, usersCount] = await this.userModel.findAndCount();
  }

  async updatePhoto() {
    
    let photoToUpdate = await this.photoModel.findOne(1);
    photoToUpdate.name = "Me, my friends and polar bears";
    
    await this.photoModel.save(photoToUpdate);
  }

  // find
  async findPhoto() {
    /*...*/
    let photos = await this.photoModel.find({ relations: [ 'metadata' ] });

    /*...*/
    let photos = await this.photoModel
      .createQueryBuilder('photo')
      .innerJoinAndSelect('photo.metadata', 'metadata')
      .getMany();

      let photos = await this.photoModel
      .createQueryBuilder("photo") // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
      .innerJoinAndSelect("photo.metadata", "metadata")
      .leftJoinAndSelect("photo.albums", "album")
      .where("photo.isPublished = true")
      .andWhere("(photo.name = :photoName OR photo.name = :bearName)")
      .orderBy("photo.id", "DESC")
      .skip(5)
      .take(10)
      .setParameters({ photoName: "My", bearName: "Mishka" })
      .getMany();
  }

  async updatePhoto() {
    /*...*/
    let photoToRemove = await this.photoModel.findOne(1);
    await this.photoModel.remove(photoToRemove);
  }

  async updatePhoto() {
    
    // create a few albums
    let album1 = new Album();
    album1.name = "Bears";
    await this.albumModel.save(album1);

    let album2 = new Album();
    album2.name = "Me";
    await this.albumModel.save(album2);

    // create a few photos
    let photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.albums = [album1, album2];
    await this.photoModel.save(photo);

    
    // now our photo is saved and albums are attached to it
    // now lets load them:
    const loadedPhoto = await this.photoModel.findOne(1, { relations: ["albums"] });
  }
}