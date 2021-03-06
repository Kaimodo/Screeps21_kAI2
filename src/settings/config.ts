/* Helper
+-------------------------------------------------------------------------------------+
|R |  R       |  C |  S |  E  | R          | W  | T |  S |  L |  E |  L |  T |  O |  P|
|C |  o       |  o |  p |  x  | a          | a  | o |  t |  i |  x |  a |  e |  b |  S|
|L |  a       |  n |  a |  t  | m          | l  | w |  o |  n |  t |  b |  t |  s |  p|
|  |  d	      |  t |  w |  e  | p          | l  | e |  r |  k |  r |  o |  m |  e |  a|
|  |          |  a |  n |  n  | a          | s  | r |  a |    |  a |  r |  i |  r |  w|
|  |          |  i |	  |  s  | r			     |    |   |  g |    |  k |	y |  n |  v |  n|
|-------------------------------------------------------------------------------------+
|0	|  0			 |  5	|  1 |  0	 |  0			   | 0	|  0|	 0 |  0	|  0 |  0	|  0 |  0	|  0|
|1	|  200		 |  5	|  1 |  0	 |  0			   | 0	|  0|	 0 |  0	|  0 |  0	|  0 |  0	|  0|
|2	|  45			 |  5	|  1 |  5	 |  300000	 | 1	|  0|	 0 |  0	|  0 |  0	|  0 |  0	|  0|
|3	|  135		 |  5	|  1 |  10 |	1000000	 | 1	|  1|	 0 |  0	|  0 |  0	|  0 |  0	|  0|
|4	|  405		 |  5	|  1 |  20 |	3000000	 | 1	|  1|	 1 |  0	|  0 |  0	|  0 |  0	|  0|
|5	|  1215000 |	5	|  1 |  30 |	10000000 | 1	|  2|	 1 |  2	|  0 |  0	|  0 |  0	|  0|
|6	|  3645000 |	5	|  1 |  40 |	30000000 | 1	|  2|	 1 |  3	|  1 |  3	|  1 |  0	|  0|
|7	|  10935000|  5	|  2 |  50 |	100000000| 1	|  3|	 1 |  4	|  1 |  6	|  1 |  0	|  0|
|8	|  99999999|	5	|  3 |  60 |	300000000| 1	|  6|	 1 |  6	|  1 |  10|  1 |  1	|  1|
+-------------------------------------------------------------------------------------+
*/

// Revision
// export declare const __REVISION__: string

// Memory Version
export const MEMORY_VERSION = 1;

// Room Name
export const roomName = Game.spawns.Spawn1.room.name;

// Creep COunter
export const MANAGER_MAX_HARVESTERS: number = 1;
export const MANAGER_MAX_UPGRADERS: number = 3;
export const MANAGER_MAX_BUILDERS: number = 2;

//Debug Mode
import { LogLevel } from "utils/logger/logLevel";

/**
 * Enable this if you want a lot of text to be logged to console.
 * @type {boolean}
 */
export const ENABLE_DEBUG_MODE: boolean = true;

/**
 * Enable this to enable screeps profiler
 */
 export const USE_PROFILER: boolean = true

/**
 * Debug level for log output
 */
 export const LOG_LEVEL: number = LogLevel.DEBUG;

 /**
  * Prepend log output with current tick number.
  */
 export const LOG_PRINT_TICK: boolean = true;

 /**
  * Prepend log output with source line.
  */
 export const LOG_PRINT_LINES: boolean = true;

 /**
  * Load source maps and resolve source lines back to typeascript.
  */
 export const LOG_LOAD_SOURCE_MAP: boolean = true;

 /**
  * Maximum padding for source links (for aligning log output).
  */
 export const LOG_MAX_PAD: number = 100;

 /**
 * VSC location, used to create links back to source.
 * Repo and revision are filled in at build time for git repositories.
 */
export const LOG_VSC = { repo: '@@_repo_@@', revision: '@@_revision_@@', valid: false }
//export const LOG_VSC = { repo: '@@_repo_@@', revision: __REVISION__, valid: false }

/**
 * URL template for VSC links, this one works for github and gitlab.
 */
export const LOG_VSC_URL_TEMPLATE = (path: string, line: string) => {
  return `${LOG_VSC.repo}/blob/${LOG_VSC.revision}/${path}#${line}`
}

