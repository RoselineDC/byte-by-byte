#!/bin/bash

set -x
sleep 1 

# Set Git user config if not already set
if ! git config --global user.email > /dev/null; then
    git config --global user.email "roseline.danga@gmail.com"
fi

if ! git config --global user.name > /dev/null; then
    git config --global user.name "RoselineDC"
fi

# Stage all changes (modified + untracked)
git add .

# Check if there's anything to commit
if git diff --cached --quiet; then
    echo "✅ Nothing to commit. Working tree clean."
    exit 0
fi

# Commit and push
timestamp=$(date "+%Y-%m-%d %H:%M:%S")
git commit -m "modified by Roseline on $timestamp"

branch=$(git symbolic-ref --short HEAD)
git push origin "$branch"

echo "🚀 Changes pushed to branch $branch at $timestamp"
