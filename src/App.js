import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './Redux/Actions';

function App() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);

  const handleInputChange = event => {
    const { value } = event.target;
    setUsername(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(fetchUser(username));
  };

  return (
    <div className="container mt-2">
      <form onSubmit={handleFormSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            value={username}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter username"
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>
      {user && (
        <div>
          <h2 className="mt-4">Name: {user.name}</h2>
          <p className="fw-bold">CompanyName: {user.company ? user.company : 'N/A'}</p>
          <p className="fw-bold">Email: {user.email ? user.email : 'N/A'}</p>
          <img src={user.avatar_url} alt="Gravatar" className="img-thumbnail" />
          <p className='fw-bold'>Followers: {user.followers}</p>
          <p className="fw-bold">Following: {user.following}</p>
        </div>
      )}
    </div>
  );
}

export default App;
