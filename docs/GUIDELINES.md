# Wayu Frontend Development Guidelines & Engineering Standards

## 1. Code Style & Linting Enforcement
Code adheres strictly to unified Prettier formatting and ESLint rules across TypeScript and React files.

## 2. Git Feature Branch & Pull Request Conventions
Branches follow structured prefixes (`feature/`, `fix/`, `chore/`) with conventional commit standards.

## 3. End-to-End Testing Workflow
Critical user journeys (authentication, checkout, form submissions) are covered by headless Playwright tests.

## 4. Production Build & Bundle Optimization
Bundle analyzer checks third-party library weights to ensure minimal first-load JS size.

## 5. CI/CD Automated Pipelines
Automated GitHub Actions workflows run typecheck, linting, and unit test suites on every pull request.

## 6. Semantic Versioning & Release Cycles
Version numbers increment predictably following SemVer rules with automated tag generation.
