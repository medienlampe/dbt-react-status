import React, { useState, useEffect, Fragment as F } from "react";
import axios from "axios";

function GitLabStatusText() {
  const [gitlabStatus, setGitlabStatus] = useState();

  async function updateGitlabStatus() {
    const result = await axios.get(
      process.env.REACT_APP_GITLAB_ROUTE + "/api/v4/groups/53",
      {
        headers: {
          "PRIVATE-TOKEN": process.env.REACT_APP_GITLAB_TOKEN
        }
      }
    );

    setGitlabStatus(result.data);
  }

  useEffect(() => {
    updateGitlabStatus();
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => updateGitlabStatus(), 60000);

    return () => {
      clearTimeout(timer);
    };
  });

  if (gitlabStatus) {
    return (
      <F>
        {gitlabStatus.projects.map(project => {
          return (
            <p>
              <span className="font-powerline-bold">{project.name}</span>
              <br />
              {new Date(project.last_activity_at).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
              })}{" "}
              Uhr
            </p>
          );
        })}
      </F>
    );
  }

  return "Wird geladen...";
}

export default function GitlabStatus(props) {
  return (
    <div id="gitlab">
      <h2>Commits</h2>
      <div className="font-powerline">
        <GitLabStatusText />
      </div>
    </div>
  );
}
