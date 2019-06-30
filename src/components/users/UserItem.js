import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UserItem = ({ user }) => {
  const {
    name,
    avatar_url,
    login,
  } = user;
  return (
    <div className='card card-img-effect text-center'>
      <img src={avatar_url} alt="" className="round-img-effect" />
      <h3>{login}</h3>
      <h2>{name}</h2>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem
