//! STASH
// Git Stash allows you to temporarily save (stash) your uncommitted changes without committing them. This is useful when you need to switch branches or pull new changes but don’t want to commit incomplete work.

//! Why Use Git Stash?

// Temporarily save changes without committing.
// Keep your working directory clean before switching branches.
// Restore stashed changes later when needed.
// Multiple stashes can be stored and applied selectively


git stash                       # Save uncommitted changes
git stash save "message"        # Save uncommitted changes with message
git stash list                  # List of all the stashes

git stash drop                  # Removes the most recent stash from the list.
git stash drop 'stash@{n}'      # Removes a specific stash from the list.
git stash clear                 # Removes all stashed changes.

git stash pop                   # Applies the most recent stash and then removes it from the list.

git stash pop 'stash@{n}'       # Applies a specific stash and then removes it from the list.