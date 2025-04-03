//! SSH

// SSH (Secure Shell) in Git is a secure way to communicate with remote repositories (like GitHub, GitLab, or Bitbucket). It allows you to push, pull, and clone repositories without entering a username and password every time.

//~ Steps to SetUp SSH in GIT

//! 1. Check If SSH is installed or not
ssh -V
//! 2. Generate SSH Key
ssh-keygen -t rsa -b 4096 -C "nikhil01575@gmail.com"


// -t rsa → Uses the RSA encryption method.
// -b 4096 → Creates a strong 4096-bit key.
// -C "your_email@example.com" → Links the SSH key to your email.
//  Press Enter when asked for the file name and passphrase (leave it empty for auto-login).


// SHA256:hhjfqD3W0xbhG881mu2aAu9H29LCGDqzis2KxYS9fcE nikhil01575@gmail.com
// The key's randomart image is:
// +---[RSA 4096]----+
// |                 |
// |                 |
// |    .     .      |
// |   o + = . .     |
// |  . + + E +   o  |
// |   o = o.o.*.= . |
// |    = = +++==+.  |
// |   o = o+o+ *oo  |
// |  . o.+..=.oo+.  |
// +----[SHA256]-----+



//! 3. Add SSH Key to GitHub/GitLab
cat ~/.ssh/id_rsa.pub

//  Go to GitHub → Settings → SSH and GPG keys → New SSH key.
//  Paste the copied SSH key and Save.

// ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC5fr1jWwsDK7fxQALIe3S5sKCF6sn1Kx4JrotwP7Um6wwZDlBO4zlhMQNzuAyv6ecMJbldiH4N/50AotRCBW8428A8II9htwAGS3OUa4TiI04JVsM+jcj3jC8RqNA0ewAYikz9JBoMqZLB4oF5doe00J2Rlo1knOout/VVgj8uAatYvhfKV/bCUYTjyYDc+UB0NY8prmxrG3CJ+HeSBx9rmpuM4hNvuVbo1WZHnDd60z7+ZF/mofP/gT5WPVnVy1w+F/wgWpIyh1fcQ6OooFNvKSAMLjLGIjENri77ed10YAeW+QCKa1rB0IF4ADV3jzW+y7GAP1QYyRGAjpF/jUKoQb1lJkSVr5XVXsJYfjak2Uf2QJtCIU0OY1DjYssieXs4SbncfsYlXlpLlv4xPbIwFZiNsthFoAjWH4eHjCGlAQHMHXH+tT/5HTxfzJKE3GAPo66eytQJGa2mgNeMJXat16lZwQaSS/5c3OXuMdbQRAuWXyRCAp7I51rgh4uMUvo/RwzWHzW2K2/fts1DvycWG6B8aHuxPtQn7TzD8fxONuxtE3JHVDZ8cOcUIn/nntDYQ3KyEofyGsNEi/5Kn4J0h2ibHPNLWWhlDu950I6mTcCUvTtAF/9Qt24yHLZeYJ3kG+BhoCUGNGR9UgJ8bD4y/DPAmItVsegrkuqSqrflqw== nikhil01575@gmail.com


//! 4.  Test SSH Connection
ssh -T git@github.com



// ssh-keygen -t rsa -b 4096 -C "email"	                    Generate SSH key
// ssh-add ~/.ssh/id_rsa	                                Add SSH key to the SSH agent
// cat ~/.ssh/id_rsa.pub	                                Display SSH public key
// ssh -T git@github.com	                                Test SSH connection with GitHub
// git clone git@github.com:user/repo.git	                Clone repo using SSH
// git remote add origin git@github.com:user/repo.git	    Add SSH remote repository
// git push origin main	Push code using SSH                 Push code using SSH
// git pull origin main	Pull latest changes                 Pull latest changes