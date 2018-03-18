[![Build Status](https://travis-ci.org/fscs/majic.svg?branch=master)](https://travis-ci.org/fscs/majic)
[![codecov](https://codecov.io/gh/fscs/majic/branch/master/graph/badge.svg)](https://codecov.io/gh/fscs/majic)
[![Deployed on fscs.github.io/majic](https://img.shields.io/badge/try-fscs.github.io/majic-blue.svg)](https://fscs.github.io/majic)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

Majic is a tournament manager powered by ClojureScript and Reagent implementing [a variant of the Swiss pairing algorithm](https://en.wikipedia.org/wiki/Swiss-system_tournament#Magic:_the_Gathering).

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
