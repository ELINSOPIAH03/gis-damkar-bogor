/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.97
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
define([
  "exports",
  "./Transforms-0c3fa360",
  "./Matrix2-276d97d2",
  "./ComponentDatatype-7f6d9570",
  "./defaultValue-a6eb9f34",
  "./GeometryAttribute-54019f82",
  "./GeometryAttributes-aff51037",
  "./GeometryOffsetAttribute-102da468",
  "./IndexDatatype-856d3a0c",
], function (t, i, e, a, n, o, r, s, u) {
  "use strict";
  const m = new e.Cartesian3(1, 1, 1),
    f = Math.cos,
    l = Math.sin;
  function c(t) {
    t = n.defaultValue(t, n.defaultValue.EMPTY_OBJECT);
    const i = n.defaultValue(t.radii, m),
      o = n.defaultValue(t.innerRadii, i),
      r = n.defaultValue(t.minimumClock, 0),
      s = n.defaultValue(t.maximumClock, a.CesiumMath.TWO_PI),
      u = n.defaultValue(t.minimumCone, 0),
      f = n.defaultValue(t.maximumCone, a.CesiumMath.PI),
      l = Math.round(n.defaultValue(t.stackPartitions, 10)),
      c = Math.round(n.defaultValue(t.slicePartitions, 8)),
      d = Math.round(n.defaultValue(t.subdivisions, 128));
    (this._radii = e.Cartesian3.clone(i)),
      (this._innerRadii = e.Cartesian3.clone(o)),
      (this._minimumClock = r),
      (this._maximumClock = s),
      (this._minimumCone = u),
      (this._maximumCone = f),
      (this._stackPartitions = l),
      (this._slicePartitions = c),
      (this._subdivisions = d),
      (this._offsetAttribute = t.offsetAttribute),
      (this._workerName = "createEllipsoidOutlineGeometry");
  }
  (c.packedLength = 2 * e.Cartesian3.packedLength + 8),
    (c.pack = function (t, i, a) {
      return (
        (a = n.defaultValue(a, 0)),
        e.Cartesian3.pack(t._radii, i, a),
        (a += e.Cartesian3.packedLength),
        e.Cartesian3.pack(t._innerRadii, i, a),
        (a += e.Cartesian3.packedLength),
        (i[a++] = t._minimumClock),
        (i[a++] = t._maximumClock),
        (i[a++] = t._minimumCone),
        (i[a++] = t._maximumCone),
        (i[a++] = t._stackPartitions),
        (i[a++] = t._slicePartitions),
        (i[a++] = t._subdivisions),
        (i[a] = n.defaultValue(t._offsetAttribute, -1)),
        i
      );
    });
  const d = new e.Cartesian3(),
    C = new e.Cartesian3(),
    _ = {
      radii: d,
      innerRadii: C,
      minimumClock: void 0,
      maximumClock: void 0,
      minimumCone: void 0,
      maximumCone: void 0,
      stackPartitions: void 0,
      slicePartitions: void 0,
      subdivisions: void 0,
      offsetAttribute: void 0,
    };
  (c.unpack = function (t, i, a) {
    i = n.defaultValue(i, 0);
    const o = e.Cartesian3.unpack(t, i, d);
    i += e.Cartesian3.packedLength;
    const r = e.Cartesian3.unpack(t, i, C);
    i += e.Cartesian3.packedLength;
    const s = t[i++],
      u = t[i++],
      m = t[i++],
      f = t[i++],
      l = t[i++],
      p = t[i++],
      h = t[i++],
      y = t[i];
    return n.defined(a)
      ? ((a._radii = e.Cartesian3.clone(o, a._radii)),
        (a._innerRadii = e.Cartesian3.clone(r, a._innerRadii)),
        (a._minimumClock = s),
        (a._maximumClock = u),
        (a._minimumCone = m),
        (a._maximumCone = f),
        (a._stackPartitions = l),
        (a._slicePartitions = p),
        (a._subdivisions = h),
        (a._offsetAttribute = -1 === y ? void 0 : y),
        a)
      : ((_.minimumClock = s),
        (_.maximumClock = u),
        (_.minimumCone = m),
        (_.maximumCone = f),
        (_.stackPartitions = l),
        (_.slicePartitions = p),
        (_.subdivisions = h),
        (_.offsetAttribute = -1 === y ? void 0 : y),
        new c(_));
  }),
    (c.createGeometry = function (t) {
      const m = t._radii;
      if (m.x <= 0 || m.y <= 0 || m.z <= 0) return;
      const c = t._innerRadii;
      if (c.x <= 0 || c.y <= 0 || c.z <= 0) return;
      const d = t._minimumClock,
        C = t._maximumClock,
        _ = t._minimumCone,
        p = t._maximumCone,
        h = t._subdivisions,
        y = e.Ellipsoid.fromCartesian3(m);
      let k = t._slicePartitions + 1,
        b = t._stackPartitions + 1;
      (k = Math.round((k * Math.abs(C - d)) / a.CesiumMath.TWO_PI)),
        (b = Math.round((b * Math.abs(p - _)) / a.CesiumMath.PI)),
        k < 2 && (k = 2),
        b < 2 && (b = 2);
      let x = 0,
        A = 1;
      const P = c.x !== m.x || c.y !== m.y || c.z !== m.z;
      let v = !1,
        M = !1;
      P &&
        ((A = 2),
        _ > 0 && ((v = !0), (x += k)),
        p < Math.PI && ((M = !0), (x += k)));
      const w = h * A * (b + k),
        V = new Float64Array(3 * w),
        g = 2 * (w + x - (k + b) * A),
        G = u.IndexDatatype.createTypedArray(w, g);
      let E,
        O,
        D,
        I,
        T = 0;
      const z = new Array(b),
        L = new Array(b);
      for (E = 0; E < b; E++)
        (I = _ + (E * (p - _)) / (b - 1)), (z[E] = l(I)), (L[E] = f(I));
      const R = new Array(h),
        N = new Array(h);
      for (E = 0; E < h; E++)
        (D = d + (E * (C - d)) / (h - 1)), (R[E] = l(D)), (N[E] = f(D));
      for (E = 0; E < b; E++)
        for (O = 0; O < h; O++)
          (V[T++] = m.x * z[E] * N[O]),
            (V[T++] = m.y * z[E] * R[O]),
            (V[T++] = m.z * L[E]);
      if (P)
        for (E = 0; E < b; E++)
          for (O = 0; O < h; O++)
            (V[T++] = c.x * z[E] * N[O]),
              (V[T++] = c.y * z[E] * R[O]),
              (V[T++] = c.z * L[E]);
      for (z.length = h, L.length = h, E = 0; E < h; E++)
        (I = _ + (E * (p - _)) / (h - 1)), (z[E] = l(I)), (L[E] = f(I));
      for (R.length = k, N.length = k, E = 0; E < k; E++)
        (D = d + (E * (C - d)) / (k - 1)), (R[E] = l(D)), (N[E] = f(D));
      for (E = 0; E < h; E++)
        for (O = 0; O < k; O++)
          (V[T++] = m.x * z[E] * N[O]),
            (V[T++] = m.y * z[E] * R[O]),
            (V[T++] = m.z * L[E]);
      if (P)
        for (E = 0; E < h; E++)
          for (O = 0; O < k; O++)
            (V[T++] = c.x * z[E] * N[O]),
              (V[T++] = c.y * z[E] * R[O]),
              (V[T++] = c.z * L[E]);
      for (T = 0, E = 0; E < b * A; E++) {
        const t = E * h;
        for (O = 0; O < h - 1; O++) (G[T++] = t + O), (G[T++] = t + O + 1);
      }
      let B = b * h * A;
      for (E = 0; E < k; E++)
        for (O = 0; O < h - 1; O++)
          (G[T++] = B + E + O * k), (G[T++] = B + E + (O + 1) * k);
      if (P)
        for (B = b * h * A + k * h, E = 0; E < k; E++)
          for (O = 0; O < h - 1; O++)
            (G[T++] = B + E + O * k), (G[T++] = B + E + (O + 1) * k);
      if (P) {
        let t = b * h * A,
          i = t + h * k;
        if (v) for (E = 0; E < k; E++) (G[T++] = t + E), (G[T++] = i + E);
        if (M)
          for (t += h * k - k, i += h * k - k, E = 0; E < k; E++)
            (G[T++] = t + E), (G[T++] = i + E);
      }
      const S = new r.GeometryAttributes({
        position: new o.GeometryAttribute({
          componentDatatype: a.ComponentDatatype.DOUBLE,
          componentsPerAttribute: 3,
          values: V,
        }),
      });
      if (n.defined(t._offsetAttribute)) {
        const i = V.length,
          e = t._offsetAttribute === s.GeometryOffsetAttribute.NONE ? 0 : 1,
          n = new Uint8Array(i / 3).fill(e);
        S.applyOffset = new o.GeometryAttribute({
          componentDatatype: a.ComponentDatatype.UNSIGNED_BYTE,
          componentsPerAttribute: 1,
          values: n,
        });
      }
      return new o.Geometry({
        attributes: S,
        indices: G,
        primitiveType: o.PrimitiveType.LINES,
        boundingSphere: i.BoundingSphere.fromEllipsoid(y),
        offsetAttribute: t._offsetAttribute,
      });
    }),
    (t.EllipsoidOutlineGeometry = c);
});
