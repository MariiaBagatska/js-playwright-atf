# Playwright Automation Testing Framework (JavaScript)
## Overview
The primary objective of this project is to gain hands-on experience with the Playwright Automation Testing Framework while honing best practices in test automation.
### Tech Stack
* JavaScript
* [Node.js](https://nodejs.org/en)
* [Playwright](https://playwright.dev/)
* [GitHub Actions](https://docs.github.com/en/actions) as a CI/CD tool
## Sensitive Data Disclosure
Credentials used for testing purposes within the test data folder are not considered highly sensitive in this case. They are for simulated scenarios and provided publicly by the learning platform. However, authorization data are saved securely as encrypted secrets within GitHub Actions.
## Getting Started
### System requirements
* Node.js 18+
* Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
* MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.
* Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.
### Installation
1. Install [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm)
2. Download and install [Node.js](https://nodejs.org/en)
3. Install Playwright running command `npm init playwright@latest`
4. Get code from this repository
### Test run configuration
By default the tests will run headless on a chromium driver.
Switch to the local project repository and:
* run command for headless test execution `npx playwright test`
* run command for headed test execution `npx playwright test --headed`
* run command for test execution in debug mode `npx playwright test --debug`
### Test report
To open last HTML report run `npx playwright show-report`
