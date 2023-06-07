import React, { Component } from 'react';
import '../style/style.css';
import farmingImage from '../img/farming.jpg';
import cropsImage from '../img/crops.jpg';
import tractorImage from '../img/tractor.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPost: '',
    };
  }

  componentDidMount() {
    // Adding some dummy data posts
    const dummyPosts = [
      {
        id: 1,
        content: 'Just finished planting a new crop field. Excited for the harvest season!',
        image: farmingImage,
      },
      {
        id: 2,
        content: 'Harvested a great yield of crops this year. Sharing some photos of the harvest.',
        image: cropsImage,
      },
      {
        id: 3,
        content: 'Using the new tractor for plowing the fields. It makes the work much easier!',
        image: tractorImage,
      },
    ];

    this.setState({ posts: dummyPosts });
  }

  handlePostChange = (event) => {
    this.setState({ newPost: event.target.value });
  };

  handlePostSubmit = (event) => {
    event.preventDefault();
    if (this.state.newPost.trim() !== '') {
      const newPost = {
        id: Date.now(),
        content: this.state.newPost,
        image: null,
      };
      this.setState((prevState) => ({
        posts: [...prevState.posts, newPost],
        newPost: '',
      }));
    }
  };

  render() {
    return (
      <div>
        <h1>Welcome to the Farmer Social Page</h1>
        <form onSubmit={this.handlePostSubmit}>
          <textarea
            value={this.state.newPost}
            onChange={this.handlePostChange}
            placeholder="Write a post..."
            rows={4}
            cols={50}
          />
          <br />
          <button type="submit">Post</button>
        </form>
        <div>
          <h2>Posts:</h2>
          {this.state.posts.length === 0 ? (
            <p>No posts yet.</p>
          ) : (
            <div className="post-container">
              {this.state.posts.map((post) => (
                <div key={post.id} className="post-item">
                  <div className="post-image">
                    {post.image && <img src={post.image} alt="Post" width={100} height={100} />}
                  </div>
                  <div className="post-content">
                    <p>{post.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
