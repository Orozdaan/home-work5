
import'./Avatar.css'
const  Avatar=()=>{
    return <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name}/>
}
export default Avatar