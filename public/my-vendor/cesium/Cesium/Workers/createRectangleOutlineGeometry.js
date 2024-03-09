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
  "./defaultValue-a6eb9f34",
  "./Matrix2-276d97d2",
  "./Transforms-0c3fa360",
  "./ComponentDatatype-7f6d9570",
  "./GeometryAttribute-54019f82",
  "./GeometryAttributes-aff51037",
  "./GeometryOffsetAttribute-102da468",
  "./IndexDatatype-856d3a0c",
  "./PolygonPipeline-1667c4fc",
  "./RectangleGeometryLibrary-e0e1c3e7",
  "./RuntimeError-07496d94",
  "./_commonjsHelpers-89c9b271",
  "./combine-7cf28d88",
  "./WebGLConstants-d81b330d",
  "./EllipsoidRhumbLine-f1dbc710",
], function (e, t, i, n, o, a, r, l, s, u, c, d, p, f, g) {
  "use strict";
  const h = new i.BoundingSphere(),
    y = new i.BoundingSphere(),
    m = new t.Cartesian3(),
    b = new t.Rectangle();
  function _(e, t) {
    const i = e._ellipsoid,
      r = t.height,
      s = t.width,
      c = t.northCap,
      d = t.southCap;
    let p = r,
      f = 2,
      g = 0,
      h = 4;
    c && ((f -= 1), (p -= 1), (g += 1), (h -= 2)),
      d && ((f -= 1), (p -= 1), (g += 1), (h -= 2)),
      (g += f * s + 2 * p - h);
    const y = new Float64Array(3 * g);
    let b,
      _ = 0,
      E = 0;
    const A = m;
    if (c)
      u.RectangleGeometryLibrary.computePosition(t, i, !1, E, 0, A),
        (y[_++] = A.x),
        (y[_++] = A.y),
        (y[_++] = A.z);
    else
      for (b = 0; b < s; b++)
        u.RectangleGeometryLibrary.computePosition(t, i, !1, E, b, A),
          (y[_++] = A.x),
          (y[_++] = A.y),
          (y[_++] = A.z);
    for (b = s - 1, E = 1; E < r; E++)
      u.RectangleGeometryLibrary.computePosition(t, i, !1, E, b, A),
        (y[_++] = A.x),
        (y[_++] = A.y),
        (y[_++] = A.z);
    if (((E = r - 1), !d))
      for (b = s - 2; b >= 0; b--)
        u.RectangleGeometryLibrary.computePosition(t, i, !1, E, b, A),
          (y[_++] = A.x),
          (y[_++] = A.y),
          (y[_++] = A.z);
    for (b = 0, E = r - 2; E > 0; E--)
      u.RectangleGeometryLibrary.computePosition(t, i, !1, E, b, A),
        (y[_++] = A.x),
        (y[_++] = A.y),
        (y[_++] = A.z);
    const G = (y.length / 3) * 2,
      R = l.IndexDatatype.createTypedArray(y.length / 3, G);
    let P = 0;
    for (let e = 0; e < y.length / 3 - 1; e++) (R[P++] = e), (R[P++] = e + 1);
    (R[P++] = y.length / 3 - 1), (R[P++] = 0);
    const L = new o.Geometry({
      attributes: new a.GeometryAttributes(),
      primitiveType: o.PrimitiveType.LINES,
    });
    return (
      (L.attributes.position = new o.GeometryAttribute({
        componentDatatype: n.ComponentDatatype.DOUBLE,
        componentsPerAttribute: 3,
        values: y,
      })),
      (L.indices = R),
      L
    );
  }
  function E(i) {
    const o = (i = e.defaultValue(i, e.defaultValue.EMPTY_OBJECT)).rectangle,
      a = e.defaultValue(i.granularity, n.CesiumMath.RADIANS_PER_DEGREE),
      r = e.defaultValue(i.ellipsoid, t.Ellipsoid.WGS84),
      l = e.defaultValue(i.rotation, 0),
      s = e.defaultValue(i.height, 0),
      u = e.defaultValue(i.extrudedHeight, s);
    (this._rectangle = t.Rectangle.clone(o)),
      (this._granularity = a),
      (this._ellipsoid = r),
      (this._surfaceHeight = Math.max(s, u)),
      (this._rotation = l),
      (this._extrudedHeight = Math.min(s, u)),
      (this._offsetAttribute = i.offsetAttribute),
      (this._workerName = "createRectangleOutlineGeometry");
  }
  (E.packedLength = t.Rectangle.packedLength + t.Ellipsoid.packedLength + 5),
    (E.pack = function (i, n, o) {
      return (
        (o = e.defaultValue(o, 0)),
        t.Rectangle.pack(i._rectangle, n, o),
        (o += t.Rectangle.packedLength),
        t.Ellipsoid.pack(i._ellipsoid, n, o),
        (o += t.Ellipsoid.packedLength),
        (n[o++] = i._granularity),
        (n[o++] = i._surfaceHeight),
        (n[o++] = i._rotation),
        (n[o++] = i._extrudedHeight),
        (n[o] = e.defaultValue(i._offsetAttribute, -1)),
        n
      );
    });
  const A = new t.Rectangle(),
    G = t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),
    R = {
      rectangle: A,
      ellipsoid: G,
      granularity: void 0,
      height: void 0,
      rotation: void 0,
      extrudedHeight: void 0,
      offsetAttribute: void 0,
    };
  E.unpack = function (i, n, o) {
    n = e.defaultValue(n, 0);
    const a = t.Rectangle.unpack(i, n, A);
    n += t.Rectangle.packedLength;
    const r = t.Ellipsoid.unpack(i, n, G);
    n += t.Ellipsoid.packedLength;
    const l = i[n++],
      s = i[n++],
      u = i[n++],
      c = i[n++],
      d = i[n];
    return e.defined(o)
      ? ((o._rectangle = t.Rectangle.clone(a, o._rectangle)),
        (o._ellipsoid = t.Ellipsoid.clone(r, o._ellipsoid)),
        (o._surfaceHeight = s),
        (o._rotation = u),
        (o._extrudedHeight = c),
        (o._offsetAttribute = -1 === d ? void 0 : d),
        o)
      : ((R.granularity = l),
        (R.height = s),
        (R.rotation = u),
        (R.extrudedHeight = c),
        (R.offsetAttribute = -1 === d ? void 0 : d),
        new E(R));
  };
  const P = new t.Cartographic();
  return (
    (E.createGeometry = function (t) {
      const a = t._rectangle,
        c = t._ellipsoid,
        d = u.RectangleGeometryLibrary.computeOptions(
          a,
          t._granularity,
          t._rotation,
          0,
          b,
          P
        );
      let p, f;
      if (
        n.CesiumMath.equalsEpsilon(a.north, a.south, n.CesiumMath.EPSILON10) ||
        n.CesiumMath.equalsEpsilon(a.east, a.west, n.CesiumMath.EPSILON10)
      )
        return;
      const g = t._surfaceHeight,
        m = t._extrudedHeight;
      let E;
      if (!n.CesiumMath.equalsEpsilon(g, m, 0, n.CesiumMath.EPSILON2)) {
        if (
          ((p = (function (e, t) {
            const i = e._surfaceHeight,
              n = e._extrudedHeight,
              o = e._ellipsoid,
              a = n,
              r = i,
              u = _(e, t),
              c = t.height,
              d = t.width,
              p = s.PolygonPipeline.scaleToGeodeticHeight(
                u.attributes.position.values,
                r,
                o,
                !1
              );
            let f = p.length;
            const g = new Float64Array(2 * f);
            g.set(p);
            const h = s.PolygonPipeline.scaleToGeodeticHeight(
              u.attributes.position.values,
              a,
              o
            );
            g.set(h, f), (u.attributes.position.values = g);
            const y = t.northCap,
              m = t.southCap;
            let b = 4;
            y && (b -= 1), m && (b -= 1);
            const E = 2 * (g.length / 3 + b),
              A = l.IndexDatatype.createTypedArray(g.length / 3, E);
            f = g.length / 6;
            let G,
              R = 0;
            for (let e = 0; e < f - 1; e++)
              (A[R++] = e),
                (A[R++] = e + 1),
                (A[R++] = e + f),
                (A[R++] = e + f + 1);
            if (
              ((A[R++] = f - 1),
              (A[R++] = 0),
              (A[R++] = f + f - 1),
              (A[R++] = f),
              (A[R++] = 0),
              (A[R++] = f),
              y)
            )
              G = c - 1;
            else {
              const e = d - 1;
              (A[R++] = e), (A[R++] = e + f), (G = d + c - 2);
            }
            if (((A[R++] = G), (A[R++] = G + f), !m)) {
              const e = d + G - 1;
              (A[R++] = e), (A[R] = e + f);
            }
            return (u.indices = A), u;
          })(t, d)),
          e.defined(t._offsetAttribute))
        ) {
          const e = p.attributes.position.values.length / 3;
          let i = new Uint8Array(e);
          t._offsetAttribute === r.GeometryOffsetAttribute.TOP
            ? (i = i.fill(1, 0, e / 2))
            : ((E =
                t._offsetAttribute === r.GeometryOffsetAttribute.NONE ? 0 : 1),
              (i = i.fill(E))),
            (p.attributes.applyOffset = new o.GeometryAttribute({
              componentDatatype: n.ComponentDatatype.UNSIGNED_BYTE,
              componentsPerAttribute: 1,
              values: i,
            }));
        }
        const u = i.BoundingSphere.fromRectangle3D(a, c, g, y),
          b = i.BoundingSphere.fromRectangle3D(a, c, m, h);
        f = i.BoundingSphere.union(u, b);
      } else {
        if (
          ((p = _(t, d)),
          (p.attributes.position.values =
            s.PolygonPipeline.scaleToGeodeticHeight(
              p.attributes.position.values,
              g,
              c,
              !1
            )),
          e.defined(t._offsetAttribute))
        ) {
          const e = p.attributes.position.values.length;
          E = t._offsetAttribute === r.GeometryOffsetAttribute.NONE ? 0 : 1;
          const i = new Uint8Array(e / 3).fill(E);
          p.attributes.applyOffset = new o.GeometryAttribute({
            componentDatatype: n.ComponentDatatype.UNSIGNED_BYTE,
            componentsPerAttribute: 1,
            values: i,
          });
        }
        f = i.BoundingSphere.fromRectangle3D(a, c, g);
      }
      return new o.Geometry({
        attributes: p.attributes,
        indices: p.indices,
        primitiveType: o.PrimitiveType.LINES,
        boundingSphere: f,
        offsetAttribute: t._offsetAttribute,
      });
    }),
    function (i, n) {
      return (
        e.defined(n) && (i = E.unpack(i, n)),
        (i._ellipsoid = t.Ellipsoid.clone(i._ellipsoid)),
        (i._rectangle = t.Rectangle.clone(i._rectangle)),
        E.createGeometry(i)
      );
    }
  );
});
