#!/bin/bash

curl "http://localhost:4741/bucketlists" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
