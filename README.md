[![Build Status](https://travis-ci.org/dnltsk/commy-skill.svg?branch=master)](https://travis-ci.org/dnltsk/commy-skill/) [![codebeat badge](https://codebeat.co/badges/e9aa556f-a258-42bb-b5ba-963e7baf8658)](https://codebeat.co/projects/github-com-dnltsk-commy-skill) [![codecov](https://codecov.io/gh/dnltsk/commy-skill/branch/master/graph/badge.svg)](https://codecov.io/gh/dnltsk/commy-skill)

# Commy Skill

Alexa Skill to get the today's or upcoming commemoration days.

## basic idea

On March 14<br/>
User : "Alexa, ask **Commy** about the **today's** commemoration days."<br/>
Alexa: "Today is **Pi Day** and **White Day**"

On March 14 too<br/>
User: "Alexa, ask **Commy** about the **upcoming** commemoration days."<br/>
Alexa:  "Tomorrow is the **World Consumer Rights Day**"

## environment
* npm 4.0.2
* node 7.2.0

## test
* `npm test`

## build
* `build.sh` creates a commy-skill.zip

## deploy
* upload commy-skill.sh to the linked AWS Lambda function.

## data source

* list of commemorative days from Wikipedia, under Creative Commons<br/>
https://en.m.wikipedia.org/wiki/List_of_commemorative_days

* icon image from Iconfinder, under Creative Commons<br/>
https://www.iconfinder.com/icons/1118206/calendar_organizer_icon

## references

* Alexa Skills Kit Tutorial<br/>
https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/content/fact-skill-1

* Build Your Own Alexa Skill<br/>
https://github.com/oreillymedia/hello-alexa

* Speech Synthesis Markup Language (SSML) Reference<br/>
https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference