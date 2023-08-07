import './App.css';
import AddPostsForm from './feature/AddPostsForm';
import PostsList from './feature/PostsList';

function App() {
  return (
    <div className="App">
    <h2>User Posting App</h2>

          <AddPostsForm />
          <PostsList />
    </div>
  );
}

export default App;
