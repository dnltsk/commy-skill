#!/usr/bin/env bash
rm -r node_modules
rm commy-skill.zip
npm install --production
zip -r commy-skill.zip index.js commemoration-days-repository.json node_modules

# reload dev dependencies
npm install