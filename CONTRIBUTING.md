# Branching Strategy

This document defines the standards for branching, committing, PRs, and merging.

## Branch Naming
Use prefixes to easily indicate the branch's purpose. Use underscores as spaces

    feat/: New features

    fix/: Bug fixes

    docs/: Documentation changes

    ex. feat/countdown_widget

## Commit Messages

Similar to the branch naming strategy, use prefixes. Try to keep commit messages to less than 75 characters. If more detail is required, then consider committing more often. Do not explain how something was done, focus on clearly stating what was done instead

    feat: add home page structure

    fix: dark mode toggle working now

    docs: added API explanation

## Pull Requests

Always create a pull request before merging into main. **Direct push to main are NOT allowed**. Pull requests should consist of 5-10 commits and must be reviewed to merge.

    Title: State the overall purpose of the PR's commits (ex. "Backend: connect databse", "Frontend: create home screen", "Fullstack: add widgets")

    Changes:
        - Bullet point list
        - of each change,
        - likely to match each commit
    
    Proof:
        - Include photos of implemented changes
        - or any passing test cases
        - in bullet points

    Review: All PRs must be reviewed by at least one other person before merging to main. You can request a PR review by assigning it to someone or messaging group chat to ask for a review

## Workflow:

    1. Pull the latest changes from main

    2. Create your branch: git checkout -b feat/yay-progress

    3. Commit often with descriptive messages

    4. Push and open a PR

    5. Review and address feedback

    6. Merge into main once PR is approved

    Helpful git commands (for terminal):
        - git checkout -b <branch name>
        - git status
        - git add <file path>
        - git commit -m "message"
        - git push origin <branch name>