import { Entity, Property, Unique, ManyToOne } from "@mikro-orm/core";
import { DoggrBaseEntity } from "./DoggrBaseEntity.js";
import { User } from "./User.js";
import { SoftDeletable } from "mikro-orm-soft-delete";

@SoftDeletable(() => Match, "deleted_at", () => new Date())
@Entity()
export class Match {

    //compsite primary key: owner&matchee

    //one owner can have many matches
	// the person who performed the swiped right
	@ManyToOne({primary: true})
	owner!: User;
	
	//one user can be matched with many others
    //the account was swiped right on
	@ManyToOne({primary: true})
	matchee!: User;
	
	@Property()
	created_at = new Date();
	
	@Property({ nullable: true })
	deleted_at?: Date;
}
