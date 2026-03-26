---
layout: post
title: "Five Git Tricks I Use Every Day"
date: 2025-03-15 09:00:00 +0000
tags: [git, productivity, tips]
excerpt: "Beyond git add and git commit — five Git commands and workflows that have saved me hours."
---

Git is one of those tools where 20% of the features cover 80% of the work. These five tricks fall squarely in that 20%.

## 1. `git stash push -m "description"`

Named stashes are vastly easier to manage than anonymous ones.

```bash
git stash push -m "wip: refactor auth middleware"
git stash list
# stash@{0}: On main: wip: refactor auth middleware
git stash pop stash@{0}
```

## 2. `git log --oneline --graph --all`

Visualise the branch graph directly in the terminal:

```bash
git log --oneline --graph --all
```

I have this aliased to `git lg` in my global config.

## 3. Interactive rebase for clean commits

Before pushing, clean up messy WIP commits:

```bash
git rebase -i HEAD~5
```

Use `squash` or `fixup` to combine commits, `reword` to improve messages. Push only clean, logical commits.

## 4. `git bisect` to find regressions

Binary search through commit history to find which commit introduced a bug:

```bash
git bisect start
git bisect bad          # current commit is broken
git bisect good v1.2.0  # this tag was fine
# Git checks out the middle commit — test it, then:
git bisect good   # or: git bisect bad
# Repeat until Git identifies the culprit commit
git bisect reset
```

## 5. `git worktree` for parallel work

Work on two branches simultaneously without juggling stashes:

```bash
git worktree add ../hotfix-branch hotfix/login-crash
cd ../hotfix-branch
# Make your fix, commit, push
cd ../main-project
git worktree remove ../hotfix-branch
```

Each worktree is its own working directory sharing the same `.git` — no extra clones needed.

---

What are your favourite Git tricks? Happy to hear about them.
