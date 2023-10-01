import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommits } from "../../redux/actions/actions";
import style from "./Commits.module.css";

export const Commits = () => {
  const dispatch = useDispatch();
  const commits = useSelector((state) => state.commits);

  useEffect(() => {
    dispatch(getCommits());
  }, []);

  

   return (
    <div className={style.commitsContainer}>
      {commits.map((commit) => (
        <div key={commit.sha} className={style.commit}>
          <div className={style.commitMessage}>{commit.commit.message}</div>
          <div className={style.commitDetails}>
            <div>
              <strong>Name:</strong> {commit.commit.author.name}
            </div>
          <div className={style.commitSha}>{commit.sha.substring(0, 7)}</div>
            <div>
              <strong>Date:</strong> {new Date(commit.commit.author.date).toLocaleString()}
            
            </div>
            <div>
              <strong>URL:</strong>{" "}
              <a href={commit.url} target="_blank" rel="">
                {commit.url.substring(0, 87)}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
