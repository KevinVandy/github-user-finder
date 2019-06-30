import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {

  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;


  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  let blogURL = blog;
  if (!String(blog).includes("http")) {
    blogURL = "http://" + blog;
  }

  if (loading) {
    return (
      <Spinner />
    )
  } else {
    return (
      <Fragment>
        <Link to='/' className='btn btn-light' >
          Back To Search
          </Link>
        Hireable: {' '}
        {hireable ?
          (<i className="fas fa-check text-success" />)
          :
          (<i className="fas fat-times-circle text-danger" />)
        }
        <div className="card card-img-effect">
          <div className="grid-2">
            <div className="all-center">
              <img src={avatar_url} className='round-img-effect' alt="" style={{ width: '150px' }} />
              <h1>{name}</h1>
              <h2>( {login} )</h2>
              {location && <p>Location: {location}</p>}
            </div>
            <div>
              {bio && <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>}
              <a href={html_url} className="btn btn-dark my-1" target="_blank" rel="noopener noreferrer">Visit Github Profile</a>
              <ul>
                <li>
                  {login && <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>}
                </li>
                <li>
                  {company && <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>}
                </li>
                <li>
                  {blog && <Fragment>
                    <strong>Website: </strong> <a href={blogURL} target="_blank" rel="noopener noreferrer">{blog}</a>
                  </Fragment>}
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div className="text-center">
            <div className="badge badge-primary">Folowers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-danger">Public Repos: {public_repos}</div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
          </div>
        </div>
        <br />
        {repos.length > 0 && <h2 className="all-center">{name}'s Public Repositories</h2>}
        <Repos repos={repos} />
      </Fragment>
    );
  }
};


export default User;
