import Avatar from './Avatar'
import FooterText from './FooterText'
import UserInfo from './UserInfo'
import './Comment.css'
function Comment(props){

return(
  <div className="Comment">
     <UserInfo author={props.author}/>
      <FooterText text={props.text} date={props.date}/>
  </div>

)
}

export default Comment