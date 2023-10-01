import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommits } from "../../redux/actions/actions";
import style from "./Commits.module.css";

export const Commits = () => {
  const dispatch = useDispatch();
  const commits = useSelector((state) => state.commits);

  const [dateFilter, setDateFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  useEffect(() => {
    dispatch(getCommits());
  }, []);

  // fecha
  const filteredCommitsByDate = dateFilter === "All" ? commits : commits.filter(commit =>
    commit.commit.author.date.startsWith(dateFilter)
  );
  const dateOptions = ["All", "2023-09-30", "2023-10-01"];

  //  tipo
  const filteredCommitsByType = typeFilter === "All" ? filteredCommitsByDate : filteredCommitsByDate.filter(commit =>
    (typeFilter === "Frontend" && commit.commit.message.startsWith("-")) ||
    (typeFilter === "Backend" && !commit.commit.message.startsWith("-"))
  );

  const typeOptions = ["All", "Frontend", "Backend"];
 

 

  return (
    <div className={style.commitsContainer}>
      
      <div className="row mb-3">
        <div className="col-md-4">
        {" "}
        <label  className = {style.lblFilter}>Order by date</label>
          <select
            className="form-select"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}          >
            {dateOptions.map((option) => (                
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
            {" "}
           <label className = {style.lblFilter}>Order by environmet</label>
          <select
            className="form-select"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            {typeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

     
      {filteredCommitsByType.map((commit) => (
        <div key={commit.sha} className={style.commit}>
          <div className={style.commitMessage}>{commit.commit.message}</div>
          <div className={style.commitDetails}>
            <div>
              <strong>Name:</strong> {commit.commit.author.name}
            </div>
            <div className={style.commitSha}>{commit.sha.substring(0, 7)}</div>
            <div>
              <strong>Date:</strong>{" "}
              {new Date(commit.commit.author.date).toLocaleString()}
            </div>
            <div>
              <strong>URL:</strong>{" "}
              <a className={`${style.url} ${style.link}`} href={commit.url} target="_blank" rel="noopener noreferrer">
                {commit.url}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
