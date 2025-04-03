//! What is git rebase?

// git rebase is a Git command used to move or rewrite a branch’s commits on top of another branch. It is an alternative to git merge but creates a cleaner commit history by avoiding unnecessary merge commits

// Keeps your commit history linear and clean.
// Helps to update your branch with the latest changes from the main branch.
// Avoids unnecessary merge commits.

//! Basic Commands
// Starting a Rebase
// git rebase main - Moves your current branch's commits on top of the main branch.

//! Interactive Rebase
// git rebase -i <base>: This opens an editor where you can edit, reorder, or squash commits.
// Example: git rebase -i HEAD~3 - Lets you edit the last 3 commits.

//! Continuing a Rebase
// git rebase --continue: Use this after resolving conflicts to continue the rebase process.

//! Aborting a Rebase
// git rebase --abort: Stops the rebase process and returns your branch to its original state.

//! Skipping a Commit
// git rebase --skip: Skips the current commit during the rebase process.