/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.121.1
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  BoxGeometry_default
} from "./chunk-QSIXKPIL.js";
import "./chunk-YMD6364H.js";
import "./chunk-5RTASS44.js";
import "./chunk-N5CPCPYJ.js";
import "./chunk-ER27H77Q.js";
import "./chunk-CFJUTZIR.js";
import "./chunk-EI7MWQAW.js";
import "./chunk-VE7G5YJZ.js";
import "./chunk-MYMBHBEC.js";
import "./chunk-BHECY3WQ.js";
import "./chunk-U6I2SEH5.js";
import "./chunk-RTLXYA3C.js";
import "./chunk-IO3GOLZO.js";
import "./chunk-UVBMNHAS.js";
import {
  defined_default
} from "./chunk-XHOG2TOH.js";

// packages/engine/Source/Workers/createBoxGeometry.js
function createBoxGeometry(boxGeometry, offset) {
  if (defined_default(offset)) {
    boxGeometry = BoxGeometry_default.unpack(boxGeometry, offset);
  }
  return BoxGeometry_default.createGeometry(boxGeometry);
}
var createBoxGeometry_default = createBoxGeometry;
export {
  createBoxGeometry_default as default
};