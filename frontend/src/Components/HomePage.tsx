//stateless components can be in same file
//state components should have own file

export const Home = ()=>{
	return(
		<div>
			<Title />
			<Subtitle />
		</div>
	)
}
export function Title(){
	return (<h1>Doggr</h1>)
}
export function Subtitle(){
	return(<h3>Where your pets finds love(tm)</h3>)
}


// export const Header = ()=>{
//returns a html
// 	return (
// 		<div>
// 			<h1>Doggr</h1>
// 			<h3>Where your pets finds love(tm)</h3>
// 			<br/>
// 		</div>
// 	)
// }//move to Home
