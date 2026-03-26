---
title: CLI Task Manager
date: 2024-09-15
description: A command-line task manager written in Python that supports priorities, due dates, and persistent storage.
tech: [Python, CLI, SQLite]
github: https://github.com/havriutkin
---

## Overview

A lightweight command-line task manager built with Python. Tasks are stored locally in an SQLite database so they persist across sessions.

## Features

- Add, list, complete, and delete tasks
- Set priorities (high / medium / low) and due dates
- Filter tasks by status or priority
- Color-coded terminal output

## Usage

```bash
# Add a task
python task.py add "Write unit tests" --priority high --due 2024-10-01

# List all tasks
python task.py list

# Mark a task complete
python task.py done 1

# Delete a task
python task.py delete 1
```

## Implementation

The project uses Python's built-in `sqlite3` module for persistence and `argparse` for the CLI interface. Color output is powered by the `colorama` library.
