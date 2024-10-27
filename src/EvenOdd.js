import {useState, useRef} from "react";

function EvenOdd(){

	const rNum = useRef();
	
	const [num, setNum] = useState("");
	const [msg, setMsg] = useState("");
	
	const hNum = (event)=>{setNum(event.target.value)}

	const check =(event)=>{
		event.preventDefault();

		if(num === ""){
			alert("Please enter number");
			setMsg("");
			rNum.current.focus();
			return;
		}
	
		let n = parseInt(num);
		let r = n%2 === 0 ? "Number is Even" : "Number is Odd"; 
		setMsg(r);
		
	}

return(
<>
	<center>
		<h1>Even Odd Application</h1>
		<form onSubmit = {check}>
			<input type = "number" ref = {rNum} onChange = {hNum} placeholder = "Enter number here"/><br/><br/>
			<input type = "submit" value = "Even/Odd"/>
		</form>
		<h2>{msg}</h2>
	</center>
</>
)
}

export default EvenOdd;