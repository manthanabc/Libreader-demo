/* tslint:disable */
/* eslint-disable */
export function find_panels(image_bytes: Uint8Array, rdp_epsilon: number, small_panel_ratio: number, reading_direction: string, gutter_x: number, gutter_y: number, gutter_r: number, gutter_b: number): any;
export class WasmSerializablePanel {
  private constructor();
  free(): void;
  x: number;
  y: number;
  width: number;
  height: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_wasmserializablepanel_free: (a: number, b: number) => void;
  readonly __wbg_get_wasmserializablepanel_x: (a: number) => number;
  readonly __wbg_set_wasmserializablepanel_x: (a: number, b: number) => void;
  readonly __wbg_get_wasmserializablepanel_y: (a: number) => number;
  readonly __wbg_set_wasmserializablepanel_y: (a: number, b: number) => void;
  readonly __wbg_get_wasmserializablepanel_width: (a: number) => number;
  readonly __wbg_set_wasmserializablepanel_width: (a: number, b: number) => void;
  readonly __wbg_get_wasmserializablepanel_height: (a: number) => number;
  readonly __wbg_set_wasmserializablepanel_height: (a: number, b: number) => void;
  readonly find_panels: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => any;
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
