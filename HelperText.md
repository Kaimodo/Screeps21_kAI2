Screeps-typescript-profiler from ([screepers](https://github.com/screepers/screeps-typescript-profiler))


Profiler hivemind

https://github.com/glitchassassin/screeps-viz

evtl profiler
https://github.com/suiramdev/screeps/blob/master/src/utils/screeps-profiler.ts


resir014  https://github.com/resir014/Stonehenge
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
    ZUSAMMEN OBEN
    import { profileRecord } from "profiler/Profiler";
    ZUSAMMEN UNTEN
    profileRecord("_loadCreeps", true);
    _loadCreeps(room); +
        profileRecord("_loadCreeps", false);
    ZUSAMMENENDE
    */


// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
