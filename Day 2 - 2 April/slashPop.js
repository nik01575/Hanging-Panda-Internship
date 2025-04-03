//! What is git stash pop?

// git stash pop is a Git command that restores the last saved changes (stash) and removes them from the stash list.

//! Why use git stash pop?

// Imagine you were working on some changes, but suddenly you need to switch branches. You stash your work using git stash, then later, when you return, you want to restore those changes. That's where git stash pop comes in!


// You made some changes but haven't committed yet

//! git stash
// This saves your changes and makes the working directory clean.

//  You later want your changes back

//! git stash pop
// This brings back the latest stashed changes and removes them from the stash list.



// Difference Between git stash pop and git stash apply Command. What it does?

//! git stash pop           	Restores the changes and removes the stash from the list.
//! git stash apply	            Restores the changes but keeps the stash in the list....