---
title: 2/8 Software Construction
subtitle:

categories:
    - cs3420 lecuture
tags:
---

# IDEs and SCM

How do we work together as a team?

* __Our definition__
    * Software Construction focuses specifically on the building, testing, and technical production of the software porudct and tools and techniques used  


* __Techniques and Practices__
    * Coding standards
    * Refactoring
    * Collective code ownership and continuous integration
    * minimal shippable/viable product

* __Tool Categories__
    * IDEs
    * Source control management
    * Bug/ Issue tracker
    * Requirements / Features / Backlog tracker
    * Communication systems
    * Continuous intergration systems

These are all things helping larger team **keep on track**

* Training
    * In many companies, when you're on-boarded, you have some time of **crash course** in the tools and systems used in that organization
    * Smaller and more agile teams often allow more freedom for developers in tool/system choices
    * New team memeber/new developers are often given less freedom...


# IDEs

* An IDE is a programming tool that combines a few dev features into one unified system
    * code editor
        * syntax highlighting
        * code folding
        * auto-complete
    * compiling/running
    * debugging
    * Testing

# Source Control Management

* SCM enbales multiple people to simultaneously work on a single project. 
* Verion control also enables one person to use multiple computers to work on a project, so it's valuable even if you are working by yourself
* if there are any conflicting edits to the same line of a file, then the version control system requests human assistance in deciding what to do

* ### Distributed vs Centralized SCM
    * Distributed version control is more modern
    * main difference is that 
        * Centralized -> there is just one repo
        * distributed -> there are multiple repos

* ### Repository
    * place where SCM keeps track of changes

* ### Working copy(Working Tree)
    * Your current view or copy of what's in the repo
    * you edit, update, test, etc these files
    * When you're ready, you **commit** a file to the repository -> kind of **Save files**

# Typical Git WorkFlow
    1. Start coding session by fetching code from shared remote repo
    2. Merge that branch into local branch
    3. Code, test files in your local branch
    4. Commit code to local repo
    5. Repeat steps 3 and 4 until you have something ready for sharing with others
    6. Push code to shared remote repo
    7. But you should look at and fetch any changes others have made first. Resolve any problems before push