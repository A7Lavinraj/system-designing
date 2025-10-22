#!/usr/bin/env bash

REQUEST_COUNT=20
REQUEST_URL="http://localhost:3000"

while [[ $# -gt 0 ]]; do
  case "$1" in
    -n)
      REQUEST_COUNT="$2"; shift 2
      ;;
    *)
      REQUEST_URL="$1"
      shift
      ;;
  esac
done

echo "Request count: $REQUEST_COUNT, Request URL: $REQUEST_URL"

for ((i=0; i<REQUEST_COUNT;i++)); do
  curl --parallel --silent -o /dev/null $REQUEST_URL
done
