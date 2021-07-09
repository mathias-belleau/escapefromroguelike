// const { Engine, Component }  = require("geotic")
import { Engine, Component } from "geotic";
// const {COMPS} = require("./Component")
// const {PREFABS} = require("./Prefabs")
import * as COMPS from "./Component.js"
import * as PREFABS from "./Prefabs.js"

const ecs = new Engine();

export const world = ecs.createWorld();

//comps
ecs.registerComponent(COMPS.Appearance)
ecs.registerComponent(COMPS.Position)
ecs.registerComponent(COMPS.Location)

//prefabs
ecs.registerPrefab(PREFABS.Being)
