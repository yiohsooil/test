/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

type HistoryTabItemProps = {
  year: number;
  description: {
    month: string;
    content: string;
  }[];
};

interface HistoryTabProps {
  item: HistoryTabItemProps[];
  isFirstLeft?: boolean;
}

export default function HistoryTabItem({
  item,
  isFirstLeft = true,
}: HistoryTabProps) {
  const renderArticle = (text: HistoryTabItemProps, index: number) => {
    return (
      <>
        <h3>{text.year}</h3>
        {text.description.map((description) => {
          if (!description.month) {
            return (
              <p key={`description-${index}`}>
                <img src={description.content} alt="history_img" />
              </p>
            );
          }
          return (
            <p key={`description-${index}`}>
              <strong>{description.month}</strong>
              {description.content}
            </p>
          );
        })}
      </>
    );
  };

  return (
    <React.Fragment>
      {item.map((text, index) => {
        if (isFirstLeft ? index % 2 === 0 : index % 2 !== 0) {
          return (
            <article css={postLeft} key={index}>
              {renderArticle(text, index)}
            </article>
          );
        } else {
          return (
            <article css={postRight} key={index}>
              {renderArticle(text, index)}
            </article>
          );
        }
      })}
    </React.Fragment>
  );
}

const postLeft = css`
  position: relative;
  margin-right: 50%;
  padding-right: 20px;
  text-align: right;

  & h3 {
    position: relative;
    margin: 0 0 15px 0;
    font-size: 1.8em;
  }

  & h3:after {
    content: '';
    position: absolute;
    top: 10px;
    right: -25px;
    width: 10px;
    height: 10px;
    background-color: #000;
    border-radius: 50%;
  }

  & p {
    overflow: hidden;
    font-size: 0.9em;
    margin: 4px 0;
    line-height: 1.7em;
  }

  @media (max-width: 768px) {
    & {
      margin: 0 0 0 45px;
      padding: 0;
      text-align: left;
    }

    & h3:after {
      right: 0px;
      left: -20px;
    }
  }
`;

const postRight = css`
  position: relative;
  margin-left: 50%;
  padding-left: 20px;

  & h3 {
    position: relative;
    margin: 0 0 15px 0;
    font-size: 1.8em;
  }

  & h3:after {
    content: '';
    position: absolute;
    top: 10px;
    left: -25px;
    width: 10px;
    height: 10px;
    background-color: #000;
    border-radius: 50%;
  }

  & p {
    overflow: hidden;
    font-size: 0.9em;
    margin: 4px 0;
    line-height: 1.7em;
  }

  @media (max-width: 768px) {
    & {
      margin-left: 45px;
      padding-left: 0;
    }

    & h3:after {
      right: 0px;
      left: -20px;
    }
  }
`;
