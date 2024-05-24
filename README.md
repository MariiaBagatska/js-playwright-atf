# Playwright Automation Testing Framework (JavaScript)
## Overview
The primary objective of this project is to gain hands-on experience with the Playwright Automation Testing Framework while honing best practices in test automation.
### Tech Stack
* JavaScript
* [Node.js](https://nodejs.org/en)
* [Playwright](https://playwright.dev/)
* [GitHub Actions](https://docs.github.com/en/actions) as a CI/CD tool
## Sensitive Data Disclosure:
Test user credentials are exposed because the learning platform provides them publicly. In a real-world scenario, these credentials would be encrypted, added to GitHub Secrets, and configured in GitHub Actions. This ensures that tests can run both locally and in a CI/CD pipeline securely.
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
* command for headless run `npx playwright test`
* command for headed run `npx playwright test --headed`
* command for run in debug mode 'npx playwright test --debug'
### Test report
To open last HTML report run `npx playwright show-report`
