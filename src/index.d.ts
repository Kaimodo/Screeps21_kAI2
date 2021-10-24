// Game Memory
interface Memory {
    uuid: number;
    log: any;
}

interface CreepMemory {
    role: string;
    room: string;
    working?: boolean;
}

interface FlagMemory { [name: string]: any }
interface SpawnMemory { [name: string]: any }
interface RoomMemory {
    [name: string]: any;
    TechLevel: number;
}



// Syntax for adding proprties to `global` (ex "global.log")
declare namespace NodeJS {
    interface Global {
        cc: any;
        Profiler: any;
        log: {
            level: number,
            showSource: boolean,
            showTick: boolean
        };
    }
}

/*
 // From https://github.com/screepers/RoomVisual
    interface RoomVisual {
    structure(x: number, y: number, structureType: StructureConstant): RoomVisual
    speech(text: string, x: number, y: number): RoomVisual
    animatedPosition(x: number, y: number): RoomVisual
    resource(type: ResourceConstant, x: number, y: number): RoomVisual
    connectRoads(): RoomVisual
    }
    https://github.com/glitchassassin/screeps-viz
 */
