import { ErrorMapper } from "utils/ErrorMapper";

import * as Inscribe from "screeps-inscribe";

import * as Profiler from "profiler/Profiler";
global.Profiler = Profiler.init();

import { log } from "./utils/logger/log";

import * as utils from "utils/utils";

import { ConsoleCommands } from "utils/consolecommands";

/*
    Profiler
    Profiler.start() - Starts the profiler

    Profiler.stop() - Stops/Pauses the profiler

    Profiler.status() - Returns whether is profiler is currently running or not

    Profiler.output() - Pretty-prints the collected profiler data to the console
    // MyClass.ts
    import { profile } from "./path/to/Profiler";

    @profile
    export class myClass {

    }

    // or

    export class myClass {
      @profile
      public someMethod() {  }
    }
    */


// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
console.log(`[${Inscribe.color("New Script loaded", "red")}]`);


export const loop = ErrorMapper.wrapLoop(() => {

  // console.log(`Current game tick is ${Game.time}`);
  global.cc = ConsoleCommands;

  //Test
  log.info("Time: " + Game.time);
  log.error("ErrorTest");

  // Automatically delete memory of missing creeps
  utils.ClearNonExistingCreeMemory();

  utils.log_info();
});
