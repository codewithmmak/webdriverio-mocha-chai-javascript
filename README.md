# WebdriverIO JavaScript Automation Framework

A production-ready UI and API test automation framework built with **WebdriverIO v9**, **Mocha**, and **Chai**.

---

## Stack

| Tool | Purpose |
|---|---|
| [WebdriverIO v9](https://webdriver.io/) | Browser automation (async mode) |
| [Mocha](https://mochajs.org/) | Test runner (`describe/it` BDD style) |
| [Chai](https://www.chaijs.com/) | Assertions (`expect(...).to.*`) |
| [Allure](https://allurereport.org/) | UI test report |
| [Mochawesome](https://github.com/adamgruber/mochawesome) | API test report |
| [Supertest](https://github.com/ladjs/supertest) | HTTP API testing |
| [Faker](https://fakerjs.dev/) | Dynamic test data generation |
| [ESLint](https://eslint.org/) | Code quality |
| [Prettier](https://prettier.io/) | Code formatting |

---

## Project Structure

```
config/
  env.js                    <- single source of truth for URLs and credentials
test/
  data/
    users.js                <- externalized test data (reads from env vars)
  pageobjects/
    base.page.js            <- base class for all page objects
    login.page.js
    home.page.js
    checkboxes.page.js
    secure-area.page.js
  specs/
    ui/                     <- browser/UI tests
      login.test.js
      checkboxes.test.js
      element.test.js
      element-action.test.js
      element-state.test.js
      example.e2e.js
    api/                    <- HTTP API tests (no browser)
      users.test.js
.github/
  copilot-instructions.md   <- Copilot steering rules
  AGENTS.md                 <- AI agent rules
  instructions/             <- scoped Copilot instructions per file type
.vscode/
  prompts/                  <- reusable Copilot prompt commands
wdio.conf.js                <- UI test runner config
wdio.api.conf.js            <- API runner config
saucelabs.conf.js           <- SauceLabs config
```

---

## Prerequisites

- Node.js 18+ (LTS recommended)
- Google Chrome (for local UI runs)
- VS Code with GitHub Copilot (recommended)

---

## Setup

```bash
# Clone the repository
git clone <repo-url>
cd webdriverio-mocha-chai-javascript

# Install dependencies
npm install

# Copy environment template and configure
cp .env.example .env
# Edit .env to set BASE_URL, API_BASE_URL, TEST_USERNAME, TEST_PASSWORD if needed
```

---

## Running Tests

### UI Tests (browser)

```bash
# Default (uses ENV=dev from config/env.js)
npm run wdio

# Target a specific environment
npm run wdio:dev
npm run wdio:qa
npm run wdio:staging
npm run wdio:prod

# Override URL directly
BASE_URL=https://your-app.example.com npm run wdio

# Override credentials
TEST_USERNAME=admin TEST_PASSWORD=secret npm run wdio
```

### API Tests

```bash
npm run wdio:api
npm run wdio:api:dev
npm run wdio:api:qa
```

### SauceLabs (cloud)

```bash
SAUCE_USERNAME=your-username SAUCE_ACCESS_KEY=your-access-key npm run saucelabs
```

---

## Code Quality

```bash
# Lint (must pass before committing)
npm run lint

# Format code
npm run format
```

---

## Reports

```bash
# Generate and open Allure report (after a UI test run)
npm run allure
```

Mochawesome HTML report for API tests is saved automatically to `mochawesome-report/mochawesome.html`.

---

## Writing Tests

### New UI spec
Place in `test/specs/ui/<feature>.test.js`. See `.github/instructions/ui-tests.instructions.md` for the required pattern, or use the Copilot prompt:
> `/new-spec` in Copilot Chat

### New page object
Place in `test/pageobjects/<name>.page.js`, extending `base.page.js`. See `.github/instructions/pageobjects.instructions.md`.

### New API spec
Place in `test/specs/api/<resource>.test.js`. See `.github/instructions/api-tests.instructions.md`, or use:
> `/new-api-spec` in Copilot Chat

### Environment variables
Add new variables to `config/env.js` and document them in `.env.example`. Never hardcode URLs or credentials in test files.

---

## Coding Conventions

- **Always** `async/await` every WebdriverIO command
- **Always** use `require()` / `module.exports` (CommonJS — no ES modules)
- **Always** use Chai: `expect(value).to.equal(...)` — not WDIO `expect` matchers
- **Never** hardcode URLs — use `browser.options.baseUrl` or `config/env.js`
- **Never** hardcode credentials — use `test/data/users.js` (reads from env vars)
- **Never** use `browser.pause()` — use `waitForDisplayed()` / `waitForClickable()`
- **Never** commit `it.only` or `describe.only`

---

## Sample Test Results

![Allure Report](./assets/Allure-Report.png?raw=true "WebdriverIO Allure Report")

![Allure Report Detailed View](./assets/Allure-Report-Detailed-View.png?raw=true "WebdriverIO Allure Report Expanded")
