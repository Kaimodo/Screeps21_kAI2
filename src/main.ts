import { ErrorMapper } from "utils/ErrorMapper";

import * as Inscribe from "screeps-inscribe";

import * as Profiler from "utils/Profiler/profiler";

import { log, initLoggerMemory } from "utils/logger/logger";
import { USE_PROFILER } from "settings/config";

import * as utils from "utils/utils";

import { ConsoleCommands } from "utils/consolecommands";


console.log(`[${Inscribe.color("New Script loaded", "red")}]`);

if (USE_PROFILER) {
  Profiler.Enable();
}
// Initialise logger memory.
initLoggerMemory()

export const loop = ErrorMapper.wrapLoop(() => {

  // console.log(`Current game tick is ${Game.time}`);
  global.cc = ConsoleCommands;
  // log.info(`loading revision: ${__REVISION__}`)

  //Test
  log.info("Time: " + Game.time);
  log.error("ErrorTest");


  // MAIN Loop here?



  // Automatically delete memory of missing creeps
  utils.ClearNonExistingCreeMemory();

  utils.log_info();
});
