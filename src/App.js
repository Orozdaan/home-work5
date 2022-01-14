
import './App.css';
import commentData from './data'
import  Comment from './components/Comment'

const commentData= {
  date: new Date(),
  text: 'Learn React is awesome!',
  author: {
    name: 'Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
function App() {
  return (
    <div className="App">
      <Comment author={commentData.author} date={commentData.date}  text={commentData.text}/>
    </div>
  );
}

export default App;
