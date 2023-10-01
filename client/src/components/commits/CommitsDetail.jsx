import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCommitDetail } from "../../redux/actions/actions";
import style from "./CommitsDetail.module.css";

export const CommitsDetail = () => {
  const dispatch = useDispatch();
  const { sha } = useParams();
  const commitDetail = useSelector((state) => state.commitDetail);

  useEffect(() => {
    dispatch(getCommitDetail(sha));
  }, [dispatch, sha]);

  if (!commitDetail) {
    return <p>Loading commit details...</p>;
  }

  return (
    <div className={style.commitsContainer}>
      <div key={commitDetail.sha} className={style.commit}>
        <div className={style.commitMessage}>
          <strong>ID Commit (SHA):</strong> {commitDetail.sha}</div>
          <div><strong>Message:</strong> {commitDetail.commit.message}</div>
        <div className={style.commitDetails}>
          <div><strong>Node ID:</strong> {commitDetail.node_id} </div>
          <div>
            <strong>HTML URL:</strong>{" "}
            <a
              className={`${style.url} ${style.link}`}
              href={commitDetail.html_url}
              target="_blank"
              rel=" "
            >
              {commitDetail.html_url}
            </a>
          </div>
          <div><strong>URL:</strong>{" "}   
          <a
              className={`${style.url} ${style.link}`}
              href={commitDetail.url}
              target="_blank"
              rel=" "
            >
              {commitDetail.url}
            </a>
          </div>          
        
          <div>
            <strong>Parent Commits:</strong>
            <ul>
              {commitDetail.parents.map((parent, index) => (
                <li key={index}>                 
                  <strong>URL:</strong>{" "}
                  <a
                    className={`${style.url} ${style.link}`}
                    href={parent.url}
                    target="_blank"
                    rel=" "
                  >
                    {parent.url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Link to="/commits">Back to Commits</Link>
    </div>
  );
};
