#!/usr/bin/env bash
node ServerClient/color-service.js &
node ServerClient/color-service2.js &

node ServerClient/twitterService.js &
node ServerClient/mailService.js &
