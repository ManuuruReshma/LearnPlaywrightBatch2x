# `default` Keyword: Default vs Named Exports

## Named Exports (non-default)

**Exporting (e.g., `utils.js`, `testutils.js`):**
```js
export let BASE_URL = "https://api.staging.com";
export function formatUpperCaseString(name) { ... }
```
- Use `export` keyword **without** `default`.
- A file can have **multiple** named exports.

**Importing (e.g., `168_EXPORT_IMPORT.js`):**
```js
import { BASE_URL, formatTestName } from "../testutils.js";
```
- Must use **curly braces** `{}`.
- Import **name must match** the export name.
- Can rename with `as` (e.g., `169_Utils.js`):
  ```js
  import { BASE_URL as bul_util, formatUpperCaseString } from "../utils.js";
  ```

---

## Default Export

**Exporting (e.g., `logger.js`):**
```js
export default function log(message) {
    console.log("[LOG] - default" + message);
}
```
- Use `export default` keyword.
- A file can have **only one** default export.
- The function/class/variable can be **anonymous** — the name is optional.

**Importing:**
```js
import log from '../logger.js';
```
- **No curly braces** `{}`.
- Import **name can be anything** — it doesn't need to match the export name:
  ```js
  import myLogger from '../logger.js';
  // same as importing 'log'
  ```

---

## Mixing Both in One File

A file can combine a default export with named exports (`logger.js`):
```js
export default function log(message) { ... }   // default
export function log2(message) { ... }           // named
```

Import both:
```js
import log, { log2 } from '../logger.js';
//    ^ default     ^ named
```

---

## Quick Comparison

| Aspect               | Named Export                | Default Export              |
|----------------------|-----------------------------|-----------------------------|
| Keyword              | `export`                    | `export default`            |
| Count per file       | Unlimited                   | One                         |
| Import syntax        | `{ name }`                  | `name` (no braces)          |
| Name must match?     | Yes                         | No (pick any name)          |
| Alias support        | `{ name as alias }`         | Not needed (rename freely)  |
