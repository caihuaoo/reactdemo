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
  EllipseOutlineGeometry_default
} from "./chunk-AFABYUU6.js";
import "./chunk-DH2STOJO.js";
import "./chunk-YMD6364H.js";
import "./chunk-X2SXJCAR.js";
import "./chunk-N5CPCPYJ.js";
import "./chunk-ER27H77Q.js";
import "./chunk-CFJUTZIR.js";
import "./chunk-EI7MWQAW.js";
import "./chunk-VE7G5YJZ.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-MYMBHBEC.js";
import "./chunk-BHECY3WQ.js";
import "./chunk-U6I2SEH5.js";
import "./chunk-RTLXYA3C.js";
import "./chunk-IO3GOLZO.js";
import "./chunk-UVBMNHAS.js";
import {
  defined_default
} from "./chunk-XHOG2TOH.js";

// packages/engine/Source/Workers/createEllipseOutlineGeometry.js
function createEllipseOutlineGeometry(ellipseGeometry, offset) {
  if (defined_default(offset)) {
    ellipseGeometry = EllipseOutlineGeometry_default.unpack(ellipseGeometry, offset);
  }
  ellipseGeometry._center = Cartesian3_default.clone(ellipseGeometry._center);
  ellipseGeometry._ellipsoid = Ellipsoid_default.clone(ellipseGeometry._ellipsoid);
  return EllipseOutlineGeometry_default.createGeometry(ellipseGeometry);
}
var createEllipseOutlineGeometry_default = createEllipseOutlineGeometry;
export {
  createEllipseOutlineGeometry_default as default
};
