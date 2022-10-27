#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
//.env読み込み
import "$std/dotenv/load.ts";
await dev(import.meta.url, "./main.ts");
