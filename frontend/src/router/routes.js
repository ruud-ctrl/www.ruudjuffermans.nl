import { PageBuilder } from "./PageBuilder";

import Home from "@pages/Home";

export const homePage = new PageBuilder()
  .element(Home).title("Home").subtitle("welcome to your dashboard")
  .build();
