import * as logger from "utils/logger/logger";

import * as config from "../settings/config";

import * as Inscribe from "screeps-inscribe";

import * as Harvester from "components/harvester";

import * as Upgrader from "components/upgrader";

import * as Builder from "components/builder";

/**
 *
 * @param room The Room
 */
export function run(room: Room): any
{
    // Main-Loop
    logger.log.info('Room "'+room.name+'" has '+Game.rooms[room.name].energyAvailable+' energy');
    for(const c in Game.creeps) {
        const creep: Creep = Game.creeps[c];

        /*
        if (creep.memory.role == "Harvester") {
            Harvester.run(creep);
        }else {
            Upgrader.run(creep);
        }
        */
        // Calculate and Spawn Creeps
        var harvesters =_.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var builders =_.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var upgraders =_.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        logger.log.info(room.name + "| Har: " + harvesters.length + "| Bui: "+ builders.length + "| Upg: " + upgraders.length);

        if(Game.spawns['Spawn1'].spawning) {
            var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
            Memory.uuid++;
            Game.spawns['Spawn1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn1'].pos.x + 1,
                Game.spawns['Spawn1'].pos.y,
                {align: 'left', opacity: 0.8});
          }

        if(harvesters.length < config.MANAGER_MAX_HARVESTERS) {
            var neName = room.name +'Har' + Memory.uuid;
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY, MOVE, MOVE],
                                            neName,
                                            {memory: {role: 'harvester',
                                            room: room.name}});
        } else if(builders.length < config.MANAGER_MAX_BUILDERS) {
            var neName = room.name +'Bui' + Memory.uuid;
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY, MOVE, MOVE],
                                            neName,
                                            {memory: {role: 'builder',
                                            room: room.name}});
        } else if(upgraders.length < config.MANAGER_MAX_UPGRADERS) {
            var neName = room.name +'Upg' + Memory.uuid;
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY, MOVE, MOVE],
                                            neName,
                                            {memory: {role: 'upgrader',
                                            room: room.name}});
        }

        // Run Manager on Creep Roles
        if (creep.memory.role == "harvester") {
            Harvester.run(creep);
        }else if (creep.memory.role == "upgrader") {
            Upgrader.run(creep);
        }else if (creep.memory.role == "builder") {
            Builder.run(creep);
        }

    }
}

