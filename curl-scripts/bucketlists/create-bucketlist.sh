#!/bin/bash

curl "http://localhost:4741/bucketlists" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "bucketlist": {
      "bl_name": "'"${NAME}"'",
      "task": "'"${TASK}"'"
    }
  }'

echo
