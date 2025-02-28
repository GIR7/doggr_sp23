import { ProfileType } from "@/DoggrTypes.ts";
import {useEffect} from "react";

//now it has whatever in profiletype && these two funcs
export type ProfileProps =
	ProfileType &
	{
	onLikeButtonClick: () => void;
	onPassButtonClick: () => void;//takes in nothing and returns void
};

export function Profile(props:ProfileProps){
	//pulling the data off of the props
	//dont have to use all the data in type
	const {imgUri, name, petType, onLikeButtonClick, onPassButtonClick} = props
	
	const minioUrl = "http://localhost:9000/doggr/" + imgUri;
	
	//give them in to html in return()
	return (
		<div className={"flex flex-col items-center rounded-box bg-slate-700 w-4/5 mx-auto"}>
			<img  className="rounded w-128 h-128 mt-3" src={minioUrl} alt = "Profile of pet" />
			<h2 className={"text-4xl text-blue-800"}>{name}</h2>
			<div>Pet type: {petType}</div>
			<div>
				{" "}
				<button onClick={onPassButtonClick}> PASS </button>
				<button onClick={onLikeButtonClick}> LIKE </button>
			</div>{" "}
		</div>
	)
}
