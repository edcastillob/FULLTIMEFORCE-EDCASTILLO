export interface CommitDetail {
  sha: string;
  node_id: string;
  commit: {
    message: string;
  };
  url: string;
  html_url: string;
  comments_url: string;  
  parents: Array<{
    sha: string;
    url: string;
    html_url: string;
  }>;
}
