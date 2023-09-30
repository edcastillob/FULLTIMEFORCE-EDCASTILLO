

export interface GitDataUserInterface {
    sha: string; 
    commit: {
      message: string; 
      author: {
        date: string; 
      };
    };
  }
  