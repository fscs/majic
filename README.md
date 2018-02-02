![Build Status](https://travis-ci.org/fscs/majic.svg?branch=master)
[![Deployed on fscs.github.io/majic](https://img.shields.io/badge/try-fscs.github.io/majic-blue.svg)](https://fscs.github.io/majic)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

Majic is a tournament manager powered by ClojureScript and Reagent.

## Development

```bash
rlwrap lein figwheel
sensible-browser http://localhost:3449/
```

## Release

```bash
lein cljsbuild once
sensible-browser resources/public/majic.html
```