# import-sort-style-angular-alternative

An alternative import sort style for angular projects. Based on import-sort-style-module

Extension of [import-sort-style-module](https://github.com/renke/import-sort/tree/master/packages/import-sort-style-module), which is a style for [import-sort](https://github.com/renke/import-sort). Notable change: `@angular/` imports go to the top.

```js
// Absolute modules with side effects (not sorted because order may matter)
import "a";
import "c";
import "b";

// Relative modules with side effects (not sorted because order may matter)
import "./a";
import "./c";
import "./b";

// @angular/ modules sorted by name
import { Bar } from "@anguar/bar";
import { Foo } from "@anguar/foo";

// Third-party modules sorted by name
import aa from "aa";
import bb from "bb";
import cc from "cc";

// First-party modules sorted by "relative depth" and then by name
import aaa from "../../aaa";
import bbb from "../../bbb";
import aaaa from "../aaaa";
import bbbb from "../bbbb";
import aaaaa from "./aaaaa";
import bbbbb from "./bbbbb";
```
