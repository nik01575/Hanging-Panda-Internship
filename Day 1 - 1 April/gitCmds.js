//!------------------------------------------ Push Commands ----------------------------------------------------------

git init
git add .
git status

git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/nik01575/demojava.git
git push -u origin main


//!------------------------------------------ Branch Commands ----------------------------------------------------------

git branch							            List local branches
git branch -a							        List all local & remote branches
git branch -r							        List remote branches
git branch <branch-name>					    Create a new branch
git checkout -b <branch-name>					Create & switch to a new branch
git switch -c <branch-name>					    Create & switch (new method)
git checkout <branch-name>					    Switch to an existing branch
git switch <branch-name>					    Switch branch (new method)
git branch -m <new-name>					    Rename current branch
git branch -d <branch-name>					    Delete a merged local branch
git branch -D <branch-name>					    Force delete a local branch
git push origin --delete <branch-name>			Delete a remote branch
git merge <branch-name>						    Merge another branch into the current branch
git merge --abort						        Cancel a merge

git push -u origin <branch-name>				Push a new branch to remote
git fetch --all							        Fetch all remote branches
git stash							            Save uncommitted changes temporarily
git stash pop							        Apply the last stashed changes



//!------------------------------------------ Pull Commands ----------------------------------------------------------


git init            					         # Initialize Git in the folder
git remote add origin <repo-url>				 # Connect to the remote repository
git pull origin main         					 # Pull the latest changes

git clone <repository-url>




git log								            Shows commit history.   {q}
git log --oneline					        	Shows a brief commit history.



git reset --hard <commit-id>					Resets to a specific commit, deleting all changes.
git reset --soft <commit-id>					Resets to a specific commit, but keeps changes staged.
git revert <commit-id>					    	Creates a new commit that reverses a previous commit.






			//! Remove a particular file from the repository and add it into gitignore file 
			//! To untrack a file that has already been added/initialized to yur repository 

git rm -r --cached .                                          This removes any changed files from the index(staging area), then just run:
git add .						                  Commit it: { add .gitignore file and add the file which you wants to ignore}
git commit -m ".gitignore is now working" 




git clone <repo-url>								                Clone the entire repository
git clone <repo-url> <folder-name>					        	    Clone into a specific folder
git clone -b <branch-name> <repo-url>					       	    Clone a specific branch
git clone --depth=1 <repo-url>							            Clone only the latest commit
git clone --branch <branch-name> --single-branch <repo-url>			Clone only one branch
git clone --recurse-submodules <repo-url>					        Clone with submodules




//! Remove the Last Commit and History and the files also from Remote Repository (Forced)

git reset --hard HEAD~1
git push origin --force


//! Next Topics
// ssh
// stash
// pop
// rebase