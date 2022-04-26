---
path: /check-again
date: 2022-04-26T14:04:10.743Z
title: Check again
image: /assets/1_k9ebhheyrb-wz2hix1rnqa.jpeg
---
Most Windows command prompts will choke when you set environment variables with `NODE_ENV=production` like that. (The exception is [Bash on Windows](https://msdn.microsoft.com/en-us/commandline/wsl/about), which uses native Bash.) Similarly, there's a difference in how windows and POSIX commands utilize environment variables. With POSIX, you use: `$ENV_VAR` and on windows you use `%ENV_VAR%`.