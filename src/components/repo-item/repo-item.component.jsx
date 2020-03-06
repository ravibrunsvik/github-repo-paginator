import React from "react";
import "./repo-item.styles";

const RepoItem = ({
  name,
  html_url,
  description,
  watchers,
  language,
  forks,
  open_issues,
  owner,
}) => {
  const { avatar_url } = owner;
  return (
    <div>
      <h1>
        <a href={html_url}>{name}</a>
        <img src={avatar_url} alt='' />
      </h1>
      <p> {description} </p>
      <ul>
        <li>
          <a href='#'>
            <i className='fas fa-star' /> {watchers}
          </a>
        </li>
        <li>
          {" "}
          <a href='#'>
            <i className='fas fa-star' /> {language}
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='fas fa-star' /> {forks}
          </a>
        </li>
        <li>
          {" "}
          <a href='#'>
            <i className='fas fa-star' /> {open_issues}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RepoItem;
