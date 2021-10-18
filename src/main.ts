import { ErrorMapper } from "utils/ErrorMapper";

import * as Inscribe from "screeps-inscribe";


import * as Profiler from "screeps-profiler";

import { log, initLoggerMemory } from "utils/logger/logger";
import { USE_PROFILER } from "settings/config";

import * as utils from "utils/utils";

import { ConsoleCommands } from "utils/consolecommands";

import * as Roommanager from "components/roommanager";


console.log(`[${Inscribe.color("New Script loaded", "red")}]`);

if (USE_PROFILER) {
  log.info("Profiler an: "+ USE_PROFILER);
  Profiler.enable();
}
// Initialise logger memory.
initLoggerMemory()

export const loop = ErrorMapper.wrapLoop(() =>
{
  Profiler.wrap(() => {
    // console.log(`Current game tick is ${Game.time}`);
    global.cc = ConsoleCommands;
    // log.info(`loading revision: ${__REVISION__}`)

    // MAIN Loop here?
    // Roommanager.RoomLoop;
    // Check memory for null or out of bounds custom objects
    if (!Memory.uuid || Memory.uuid > 1000) {
        Memory.uuid = 0;
    }
    // TEST
    if(Game.spawns['Spawn1'].spawning) {
      var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
      Game.spawns['Spawn1'].room.visual.text(
          '🛠️' + spawningCreep.memory.role,
          Game.spawns['Spawn1'].pos.x + 1,
          Game.spawns['Spawn1'].pos.y,
          {align: 'left', opacity: 0.8});
    }

    for (const i in Game.rooms) {
        const room: Room = Game.rooms[i];
        Roommanager.run(room);
    }



    // Automatically delete memory of missing creeps
    utils.ClearNonExistingCreeMemory();

    utils.log_info();
  });
});
