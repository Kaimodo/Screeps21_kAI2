import * as logger from "utils/logger/logger";

import * as config from "../settings/config";

import * as Inscribe from "screeps-inscribe";

import * as TechLevel from "components/techlevel";

import * as SpawnManager from "components/spawnmanager"

import * as Harvester from "components/harvester";

import * as Upgrader from "components/upgrader";

import * as Builder from "components/builder";

import { ENABLE_DEBUG_MODE } from "../settings/config";

/**
 *
 * @param room The Room
 */
export function run(room: Room): any
{
    // Check TechLevel
    let Roomlevel = TechLevel.getLevel(room);

    // Log Info
    if (Game.time % 25 === 0) {
        logger.log.info(Inscribe.color(room.name + "| E: "+ Game.rooms[room.name].energyAvailable + "| Har: " + SpawnManager.harvesters.length + "| Bui: "+ SpawnManager.builders.length + "| Upg: " + SpawnManager.upgraders.length +"|", "skyblue"));
    }

    // Visualize Spawning
    if(Game.spawns['Spawn1'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Memory.uuid++;
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1,
            Game.spawns['Spawn1'].pos.y,
            {align: 'left', opacity: 0.8});
      }

    // Spawn Creeps
    SpawnManager.run(room);

    // Run Manager on Creep Roles
    for(const c in Game.creeps) {
        const creep: Creep = Game.creeps[c];
        if (creep.memory.role == "harvester") {
            Harvester.run(creep);
        }else if (creep.memory.role == "upgrader") {
            Upgrader.run(creep);
        }else if (creep.memory.role == "builder") {
            Builder.run(creep);
        }
    }
}

