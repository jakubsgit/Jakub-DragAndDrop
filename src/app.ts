import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";
import _ from "lodash";

//we can declare some variable globally as:
//declare const global: any

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

//we can make some file product.model.ts to declare model
