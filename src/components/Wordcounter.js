import {useState} from "react";
function Wordcounter(){
    const[count,setcount]=useState(0);
    const handlechange=(event)=>{
        let c=event.target.value;
        if(c.length===0){
            setcount(0);
        }
        else{
            c=c.replace(/(^\s*)|(\s*$)/gi,"");
            c=c.replace(/[ ]{2,}/gi," ");
            c=c.replace(/\n/,"\n");
            setcount(c.split(' ').length);

        }
       
    }
    return(
        <div>
            <center>
        <h4>Responsive Paragraph Word Counter</h4>
        <textarea style={{height:100,width:400}} onChange={handlechange}></textarea><br></br>
        <br></br>
        <span style={{marginRight:300}}>Word Count:{count}</span>
        </center>
        </div>
        
    )

    
}
export default Wordcounter;