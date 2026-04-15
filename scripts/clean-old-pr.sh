#!/bin/bash
set -e

echo "Deleting old PR environment with tag: $OLD_PR_TAG"

BASE_DIR="/opt/apps/pr-env"

TARGET_DIR="$BASE_DIR/pr-$PR_NUMBER-$OLD_PR_TAG"

if [ -d "$TARGET_DIR" ]; then
  echo "Found old PR environment: $TARGET_DIR. Deleting..."
  find $TARGET_DIR -mindepth 1 -maxdepth 1 -type d | while IFS= read -r folder; do
    echo "processing folder: $folder"
    if [ -f "$folder/docker-compose.yml" ]; then
      echo "Stopping docker compose in $folder"
      (cd "$folder" && docker compose down --rmi all)
    fi
    echo "Deleting $folder"
    rm -rf "$folder"

    echo "Done with $folder"
    echo "---------------------"
  done
else
  echo "No old PR environment found with tag: $OLD_PR_TAG. Skipping deletion."
fi
