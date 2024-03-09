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
  "./arrayRemoveDuplicates-7ccf3114",
  "./BoundingRectangle-0ced9455",
  "./Transforms-0c3fa360",
  "./ComponentDatatype-7f6d9570",
  "./PolylineVolumeGeometryLibrary-d8099b25",
  "./GeometryAttribute-54019f82",
  "./GeometryAttributes-aff51037",
  "./GeometryPipeline-f46d7519",
  "./IndexDatatype-856d3a0c",
  "./PolygonPipeline-1667c4fc",
  "./VertexFormat-31cdbccc",
  "./RuntimeError-07496d94",
  "./_commonjsHelpers-89c9b271",
  "./combine-7cf28d88",
  "./WebGLConstants-d81b330d",
  "./EllipsoidTangentPlane-30c83574",
  "./AxisAlignedBoundingBox-646dc833",
  "./IntersectionTests-fbcff83c",
  "./Plane-17fe9d66",
  "./PolylinePipeline-f9c3fc71",
  "./EllipsoidGeodesic-3107c30b",
  "./EllipsoidRhumbLine-f1dbc710",
  "./AttributeCompression-28a6d524",
  "./EncodedCartesian3-32c625e4",
], function (
  e,
  t,
  n,
  o,
  i,
  r,
  a,
  l,
  s,
  c,
  p,
  d,
  u,
  m,
  y,
  g,
  f,
  h,
  b,
  P,
  _,
  E,
  k,
  v,
  V,
  L
) {
  "use strict";
  function x(n) {
    const o = (n = e.defaultValue(n, e.defaultValue.EMPTY_OBJECT))
        .polylinePositions,
      i = n.shapePositions;
    (this._positions = o),
      (this._shape = i),
      (this._ellipsoid = t.Ellipsoid.clone(
        e.defaultValue(n.ellipsoid, t.Ellipsoid.WGS84)
      )),
      (this._cornerType = e.defaultValue(n.cornerType, a.CornerType.ROUNDED)),
      (this._vertexFormat = u.VertexFormat.clone(
        e.defaultValue(n.vertexFormat, u.VertexFormat.DEFAULT)
      )),
      (this._granularity = e.defaultValue(
        n.granularity,
        r.CesiumMath.RADIANS_PER_DEGREE
      )),
      (this._workerName = "createPolylineVolumeGeometry");
    let l = 1 + o.length * t.Cartesian3.packedLength;
    (l += 1 + i.length * t.Cartesian2.packedLength),
      (this.packedLength =
        l + t.Ellipsoid.packedLength + u.VertexFormat.packedLength + 2);
  }
  x.pack = function (n, o, i) {
    let r;
    i = e.defaultValue(i, 0);
    const a = n._positions;
    let l = a.length;
    for (o[i++] = l, r = 0; r < l; ++r, i += t.Cartesian3.packedLength)
      t.Cartesian3.pack(a[r], o, i);
    const s = n._shape;
    for (
      l = s.length, o[i++] = l, r = 0;
      r < l;
      ++r, i += t.Cartesian2.packedLength
    )
      t.Cartesian2.pack(s[r], o, i);
    return (
      t.Ellipsoid.pack(n._ellipsoid, o, i),
      (i += t.Ellipsoid.packedLength),
      u.VertexFormat.pack(n._vertexFormat, o, i),
      (i += u.VertexFormat.packedLength),
      (o[i++] = n._cornerType),
      (o[i] = n._granularity),
      o
    );
  };
  const C = t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),
    F = new u.VertexFormat(),
    A = {
      polylinePositions: void 0,
      shapePositions: void 0,
      ellipsoid: C,
      vertexFormat: F,
      cornerType: void 0,
      granularity: void 0,
    };
  x.unpack = function (n, o, i) {
    let r;
    o = e.defaultValue(o, 0);
    let a = n[o++];
    const l = new Array(a);
    for (r = 0; r < a; ++r, o += t.Cartesian3.packedLength)
      l[r] = t.Cartesian3.unpack(n, o);
    a = n[o++];
    const s = new Array(a);
    for (r = 0; r < a; ++r, o += t.Cartesian2.packedLength)
      s[r] = t.Cartesian2.unpack(n, o);
    const c = t.Ellipsoid.unpack(n, o, C);
    o += t.Ellipsoid.packedLength;
    const p = u.VertexFormat.unpack(n, o, F);
    o += u.VertexFormat.packedLength;
    const d = n[o++],
      m = n[o];
    return e.defined(i)
      ? ((i._positions = l),
        (i._shape = s),
        (i._ellipsoid = t.Ellipsoid.clone(c, i._ellipsoid)),
        (i._vertexFormat = u.VertexFormat.clone(p, i._vertexFormat)),
        (i._cornerType = d),
        (i._granularity = m),
        i)
      : ((A.polylinePositions = l),
        (A.shapePositions = s),
        (A.cornerType = d),
        (A.granularity = m),
        new x(A));
  };
  const T = new o.BoundingRectangle();
  return (
    (x.createGeometry = function (e) {
      const u = e._positions,
        m = n.arrayRemoveDuplicates(u, t.Cartesian3.equalsEpsilon);
      let y = e._shape;
      if (
        ((y = a.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(y)),
        m.length < 2 || y.length < 3)
      )
        return;
      d.PolygonPipeline.computeWindingOrder2D(y) === d.WindingOrder.CLOCKWISE &&
        y.reverse();
      const g = o.BoundingRectangle.fromPoints(y, T);
      return (function (e, t, n, o) {
        const u = new s.GeometryAttributes();
        o.position &&
          (u.position = new l.GeometryAttribute({
            componentDatatype: r.ComponentDatatype.DOUBLE,
            componentsPerAttribute: 3,
            values: e,
          }));
        const m = t.length,
          y = e.length / 3,
          g = (y - 2 * m) / (2 * m),
          f = d.PolygonPipeline.triangulate(t),
          h = (g - 1) * m * 6 + 2 * f.length,
          b = p.IndexDatatype.createTypedArray(y, h);
        let P, _, E, k, v, V;
        const L = 2 * m;
        let x = 0;
        for (P = 0; P < g - 1; P++) {
          for (_ = 0; _ < m - 1; _++)
            (E = 2 * _ + P * m * 2),
              (V = E + L),
              (k = E + 1),
              (v = k + L),
              (b[x++] = k),
              (b[x++] = E),
              (b[x++] = v),
              (b[x++] = v),
              (b[x++] = E),
              (b[x++] = V);
          (E = 2 * m - 2 + P * m * 2),
            (k = E + 1),
            (v = k + L),
            (V = E + L),
            (b[x++] = k),
            (b[x++] = E),
            (b[x++] = v),
            (b[x++] = v),
            (b[x++] = E),
            (b[x++] = V);
        }
        if (o.st || o.tangent || o.bitangent) {
          const e = new Float32Array(2 * y),
            o = 1 / (g - 1),
            i = 1 / n.height,
            a = n.height / 2;
          let s,
            c,
            p = 0;
          for (P = 0; P < g; P++) {
            for (
              s = P * o, c = i * (t[0].y + a), e[p++] = s, e[p++] = c, _ = 1;
              _ < m;
              _++
            )
              (c = i * (t[_].y + a)),
                (e[p++] = s),
                (e[p++] = c),
                (e[p++] = s),
                (e[p++] = c);
            (c = i * (t[0].y + a)), (e[p++] = s), (e[p++] = c);
          }
          for (_ = 0; _ < m; _++)
            (s = 0), (c = i * (t[_].y + a)), (e[p++] = s), (e[p++] = c);
          for (_ = 0; _ < m; _++)
            (s = (g - 1) * o),
              (c = i * (t[_].y + a)),
              (e[p++] = s),
              (e[p++] = c);
          u.st = new l.GeometryAttribute({
            componentDatatype: r.ComponentDatatype.FLOAT,
            componentsPerAttribute: 2,
            values: new Float32Array(e),
          });
        }
        const C = y - 2 * m;
        for (P = 0; P < f.length; P += 3) {
          const e = f[P] + C,
            t = f[P + 1] + C,
            n = f[P + 2] + C;
          (b[x++] = e),
            (b[x++] = t),
            (b[x++] = n),
            (b[x++] = n + m),
            (b[x++] = t + m),
            (b[x++] = e + m);
        }
        let F = new l.Geometry({
          attributes: u,
          indices: b,
          boundingSphere: i.BoundingSphere.fromVertices(e),
          primitiveType: l.PrimitiveType.TRIANGLES,
        });
        if (
          (o.normal && (F = c.GeometryPipeline.computeNormal(F)),
          o.tangent || o.bitangent)
        ) {
          try {
            F = c.GeometryPipeline.computeTangentAndBitangent(F);
          } catch (e) {
            a.oneTimeWarning(
              "polyline-volume-tangent-bitangent",
              "Unable to compute tangents and bitangents for polyline volume geometry"
            );
          }
          o.tangent || (F.attributes.tangent = void 0),
            o.bitangent || (F.attributes.bitangent = void 0),
            o.st || (F.attributes.st = void 0);
        }
        return F;
      })(
        a.PolylineVolumeGeometryLibrary.computePositions(m, y, g, e, !0),
        y,
        g,
        e._vertexFormat
      );
    }),
    function (n, o) {
      return (
        e.defined(o) && (n = x.unpack(n, o)),
        (n._ellipsoid = t.Ellipsoid.clone(n._ellipsoid)),
        x.createGeometry(n)
      );
    }
  );
});
