import React, { Fragment } from "react";
import {
  CreatorImage,
  ItemHeader,
  DescriptionParagraph,
  DetailsList,
  TableLink,
} from "./repo-item.styles";

const RepoItem = ({
  name,
  html_url,
  description,
  watchers,
  language,
  forks,
  open_issues,
  owner: { avatar_url, html_url: owner_url, login },
  displayStyle,
}) => {
  return (
    <Fragment>
      {displayStyle === "table" && (
        <Fragment>
          <tr>
            <td>
              {" "}
              <TableLink href={html_url}> {name} </TableLink>
            </td>
            <td>
              <TableLink href={owner_url}> {login} </TableLink>
            </td>
            <td>{forks}</td>
            <td>{watchers}</td>
            <td>{open_issues}</td>
          </tr>
        </Fragment>
      )}
      {displayStyle === "list" && (
        <Fragment>
          <ItemHeader>
            <a href={html_url}>{name}</a>
            <a href={owner_url}>
              <CreatorImage src={avatar_url} alt='avatar' />
            </a>
          </ItemHeader>
          <DescriptionParagraph> {description} </DescriptionParagraph>
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
        </Fragment>
      )}
    </Fragment>
  );
};

export default RepoItem;
