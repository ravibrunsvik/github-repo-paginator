import React from "react";
import {
  CreatorImage,
  ItemHeader,
  DescriptionParagraph,
  DetailsList,
} from "./repo-item.styles";

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
      <ItemHeader>
        <a href={html_url}>{name}</a>
        <CreatorImage src={avatar_url} alt='' />
      </ItemHeader>
      <DescriptionParagraph> Description: {description} </DescriptionParagraph>
      <DetailsList>
        <li>
          <i className='far fa-eye' /> {watchers}
        </li>
        <li>
          <i className='fas fa-globe' /> {language}
        </li>
        <li>
          <i className='fas fa-code-branch' /> {forks}
        </li>
        <li>
          <i className='fas fa-exclamation' /> Open issues: {open_issues}
        </li>
      </DetailsList>
    </div>
  );
};

export default RepoItem;
