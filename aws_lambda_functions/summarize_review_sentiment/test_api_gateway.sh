#!/bin/bash

query="Everything was great. | Oh what a lovely restaurant. | This was great. | I'm coming back."

invoke_url=https://qz3pgn7nd5.execute-api.us-east-1.amazonaws.com/PROD/sentiment_summary

curl -X POST -H "Content-Type: application/json" -d "{\"query\":\"$query\"}" "$invoke_url"

echo ""
