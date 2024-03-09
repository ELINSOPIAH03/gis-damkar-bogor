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
  "./ArcType-b714639b",
  "./arrayRemoveDuplicates-7ccf3114",
  "./Matrix2-276d97d2",
  "./ComponentDatatype-7f6d9570",
  "./defaultValue-a6eb9f34",
  "./EllipsoidRhumbLine-f1dbc710",
  "./GeometryAttribute-54019f82",
  "./GeometryAttributes-aff51037",
  "./GeometryPipeline-f46d7519",
  "./IndexDatatype-856d3a0c",
  "./PolygonPipeline-1667c4fc",
  "./Transforms-0c3fa360",
], function (e, t, n, i, o, r, a, s, c, l, u, h, f) {
  "use strict";
  function p() {
    (this._array = []), (this._offset = 0), (this._length = 0);
  }
  Object.defineProperties(p.prototype, {
    length: {
      get: function () {
        return this._length;
      },
    },
  }),
    (p.prototype.enqueue = function (e) {
      this._array.push(e), this._length++;
    }),
    (p.prototype.dequeue = function () {
      if (0 === this._length) return;
      const e = this._array;
      let t = this._offset;
      const n = e[t];
      return (
        (e[t] = void 0),
        t++,
        t > 10 && 2 * t > e.length && ((this._array = e.slice(t)), (t = 0)),
        (this._offset = t),
        this._length--,
        n
      );
    }),
    (p.prototype.peek = function () {
      if (0 !== this._length) return this._array[this._offset];
    }),
    (p.prototype.contains = function (e) {
      return -1 !== this._array.indexOf(e);
    }),
    (p.prototype.clear = function () {
      this._array.length = this._offset = this._length = 0;
    }),
    (p.prototype.sort = function (e) {
      this._offset > 0 &&
        ((this._array = this._array.slice(this._offset)), (this._offset = 0)),
        this._array.sort(e);
    });
  const d = {
      computeHierarchyPackedLength: function (e, t) {
        let n = 0;
        const i = [e];
        for (; i.length > 0; ) {
          const e = i.pop();
          if (!r.defined(e)) continue;
          n += 2;
          const o = e.positions,
            a = e.holes;
          if (
            (r.defined(o) && o.length > 0 && (n += o.length * t.packedLength),
            r.defined(a))
          ) {
            const e = a.length;
            for (let t = 0; t < e; ++t) i.push(a[t]);
          }
        }
        return n;
      },
      packPolygonHierarchy: function (e, t, n, i) {
        const o = [e];
        for (; o.length > 0; ) {
          const e = o.pop();
          if (!r.defined(e)) continue;
          const a = e.positions,
            s = e.holes;
          if (
            ((t[n++] = r.defined(a) ? a.length : 0),
            (t[n++] = r.defined(s) ? s.length : 0),
            r.defined(a))
          ) {
            const e = a.length;
            for (let o = 0; o < e; ++o, n += i.packedLength) i.pack(a[o], t, n);
          }
          if (r.defined(s)) {
            const e = s.length;
            for (let t = 0; t < e; ++t) o.push(s[t]);
          }
        }
        return n;
      },
      unpackPolygonHierarchy: function (e, t, n) {
        const i = e[t++],
          o = e[t++],
          r = new Array(i),
          a = o > 0 ? new Array(o) : void 0;
        for (let o = 0; o < i; ++o, t += n.packedLength) r[o] = n.unpack(e, t);
        for (let i = 0; i < o; ++i)
          (a[i] = d.unpackPolygonHierarchy(e, t, n)),
            (t = a[i].startingIndex),
            delete a[i].startingIndex;
        return { positions: r, holes: a, startingIndex: t };
      },
    },
    y = new i.Cartesian2();
  function g(e, t, n, o) {
    return (
      i.Cartesian2.subtract(t, e, y),
      i.Cartesian2.multiplyByScalar(y, n / o, y),
      i.Cartesian2.add(e, y, y),
      [y.x, y.y]
    );
  }
  const m = new i.Cartesian3();
  function C(e, t, n, o) {
    return (
      i.Cartesian3.subtract(t, e, m),
      i.Cartesian3.multiplyByScalar(m, n / o, m),
      i.Cartesian3.add(e, m, m),
      [m.x, m.y, m.z]
    );
  }
  d.subdivideLineCount = function (e, t, n) {
    const r = i.Cartesian3.distance(e, t) / n,
      a = Math.max(0, Math.ceil(o.CesiumMath.log2(r)));
    return Math.pow(2, a);
  };
  const b = new i.Cartographic(),
    T = new i.Cartographic(),
    x = new i.Cartographic(),
    v = new i.Cartesian3(),
    w = new a.EllipsoidRhumbLine();
  (d.subdivideRhumbLineCount = function (e, t, n, i) {
    const r = e.cartesianToCartographic(t, b),
      s = e.cartesianToCartographic(n, T),
      c = new a.EllipsoidRhumbLine(r, s, e).surfaceDistance / i,
      l = Math.max(0, Math.ceil(o.CesiumMath.log2(c)));
    return Math.pow(2, l);
  }),
    (d.subdivideTexcoordLine = function (e, t, n, o, r, a) {
      const s = d.subdivideLineCount(n, o, r),
        c = i.Cartesian2.distance(e, t),
        l = c / s,
        u = a;
      u.length = 2 * s;
      let h = 0;
      for (let n = 0; n < s; n++) {
        const i = g(e, t, n * l, c);
        (u[h++] = i[0]), (u[h++] = i[1]);
      }
      return u;
    }),
    (d.subdivideLine = function (e, t, n, o) {
      const a = d.subdivideLineCount(e, t, n),
        s = i.Cartesian3.distance(e, t),
        c = s / a;
      r.defined(o) || (o = []);
      const l = o;
      l.length = 3 * a;
      let u = 0;
      for (let n = 0; n < a; n++) {
        const i = C(e, t, n * c, s);
        (l[u++] = i[0]), (l[u++] = i[1]), (l[u++] = i[2]);
      }
      return l;
    }),
    (d.subdivideTexcoordRhumbLine = function (e, t, n, r, a, s, c) {
      const l = n.cartesianToCartographic(r, b),
        u = n.cartesianToCartographic(a, T);
      w.setEndPoints(l, u);
      const h = w.surfaceDistance / s,
        f = Math.max(0, Math.ceil(o.CesiumMath.log2(h))),
        p = Math.pow(2, f),
        d = i.Cartesian2.distance(e, t),
        y = d / p,
        m = c;
      m.length = 2 * p;
      let C = 0;
      for (let n = 0; n < p; n++) {
        const i = g(e, t, n * y, d);
        (m[C++] = i[0]), (m[C++] = i[1]);
      }
      return m;
    }),
    (d.subdivideRhumbLine = function (e, t, n, i, s) {
      const c = e.cartesianToCartographic(t, b),
        l = e.cartesianToCartographic(n, T),
        u = new a.EllipsoidRhumbLine(c, l, e),
        h = u.surfaceDistance / i,
        f = Math.max(0, Math.ceil(o.CesiumMath.log2(h))),
        p = Math.pow(2, f),
        d = u.surfaceDistance / p;
      r.defined(s) || (s = []);
      const y = s;
      y.length = 3 * p;
      let g = 0;
      for (let t = 0; t < p; t++) {
        const n = u.interpolateUsingSurfaceDistance(t * d, x),
          i = e.cartographicToCartesian(n, v);
        (y[g++] = i.x), (y[g++] = i.y), (y[g++] = i.z);
      }
      return y;
    });
  const A = new i.Cartesian3(),
    L = new i.Cartesian3(),
    E = new i.Cartesian3(),
    I = new i.Cartesian3();
  (d.scaleToGeodeticHeightExtruded = function (e, t, n, o, a) {
    o = r.defaultValue(o, i.Ellipsoid.WGS84);
    const s = A;
    let c = L;
    const l = E;
    let u = I;
    if (
      r.defined(e) &&
      r.defined(e.attributes) &&
      r.defined(e.attributes.position)
    ) {
      const r = e.attributes.position.values,
        h = r.length / 2;
      for (let e = 0; e < h; e += 3)
        i.Cartesian3.fromArray(r, e, l),
          o.geodeticSurfaceNormal(l, s),
          (u = o.scaleToGeodeticSurface(l, u)),
          (c = i.Cartesian3.multiplyByScalar(s, n, c)),
          (c = i.Cartesian3.add(u, c, c)),
          (r[e + h] = c.x),
          (r[e + 1 + h] = c.y),
          (r[e + 2 + h] = c.z),
          a && (u = i.Cartesian3.clone(l, u)),
          (c = i.Cartesian3.multiplyByScalar(s, t, c)),
          (c = i.Cartesian3.add(u, c, c)),
          (r[e] = c.x),
          (r[e + 1] = c.y),
          (r[e + 2] = c.z);
    }
    return e;
  }),
    (d.polygonOutlinesFromHierarchy = function (e, t, o) {
      const a = [],
        s = new p();
      let c, l, u;
      for (s.enqueue(e); 0 !== s.length; ) {
        const e = s.dequeue();
        let h = e.positions;
        if (t)
          for (u = h.length, c = 0; c < u; c++)
            o.scaleToGeodeticSurface(h[c], h[c]);
        if (
          ((h = n.arrayRemoveDuplicates(h, i.Cartesian3.equalsEpsilon, !0)),
          h.length < 3)
        )
          continue;
        const f = e.holes ? e.holes.length : 0;
        for (c = 0; c < f; c++) {
          const h = e.holes[c];
          let f = h.positions;
          if (t)
            for (u = f.length, l = 0; l < u; ++l)
              o.scaleToGeodeticSurface(f[l], f[l]);
          if (
            ((f = n.arrayRemoveDuplicates(f, i.Cartesian3.equalsEpsilon, !0)),
            f.length < 3)
          )
            continue;
          a.push(f);
          let p = 0;
          for (r.defined(h.holes) && (p = h.holes.length), l = 0; l < p; l++)
            s.enqueue(h.holes[l]);
        }
        a.push(h);
      }
      return a;
    }),
    (d.polygonsFromHierarchy = function (e, t, o, a, s) {
      const c = [],
        l = [],
        u = new p();
      for (u.enqueue(e); 0 !== u.length; ) {
        const e = u.dequeue();
        let f = e.positions;
        const p = e.holes;
        let d, y;
        if (a)
          for (y = f.length, d = 0; d < y; d++)
            s.scaleToGeodeticSurface(f[d], f[d]);
        if (
          (t ||
            (f = n.arrayRemoveDuplicates(f, i.Cartesian3.equalsEpsilon, !0)),
          f.length < 3)
        )
          continue;
        let g = o(f);
        if (!r.defined(g)) continue;
        const m = [];
        let C = h.PolygonPipeline.computeWindingOrder2D(g);
        C === h.WindingOrder.CLOCKWISE &&
          (g.reverse(), (f = f.slice().reverse()));
        let b = f.slice();
        const T = r.defined(p) ? p.length : 0,
          x = [];
        let v;
        for (d = 0; d < T; d++) {
          const e = p[d];
          let c = e.positions;
          if (a)
            for (y = c.length, v = 0; v < y; ++v)
              s.scaleToGeodeticSurface(c[v], c[v]);
          if (
            (t ||
              (c = n.arrayRemoveDuplicates(c, i.Cartesian3.equalsEpsilon, !0)),
            c.length < 3)
          )
            continue;
          const l = o(c);
          if (!r.defined(l)) continue;
          (C = h.PolygonPipeline.computeWindingOrder2D(l)),
            C === h.WindingOrder.CLOCKWISE &&
              (l.reverse(), (c = c.slice().reverse())),
            x.push(c),
            m.push(b.length),
            (b = b.concat(c)),
            (g = g.concat(l));
          let f = 0;
          for (r.defined(e.holes) && (f = e.holes.length), v = 0; v < f; v++)
            u.enqueue(e.holes[v]);
        }
        c.push({ outerRing: f, holes: x }),
          l.push({ positions: b, positions2D: g, holes: m });
      }
      return { hierarchy: c, polygons: l };
    });
  const P = new i.Cartesian2(),
    D = new i.Cartesian3(),
    M = new f.Quaternion(),
    _ = new i.Matrix3();
  (d.computeBoundingRectangle = function (e, t, n, o, a) {
    const s = f.Quaternion.fromAxisAngle(e, o, M),
      c = i.Matrix3.fromQuaternion(s, _);
    let l = Number.POSITIVE_INFINITY,
      u = Number.NEGATIVE_INFINITY,
      h = Number.POSITIVE_INFINITY,
      p = Number.NEGATIVE_INFINITY;
    const d = n.length;
    for (let e = 0; e < d; ++e) {
      const o = i.Cartesian3.clone(n[e], D);
      i.Matrix3.multiplyByVector(c, o, o);
      const a = t(o, P);
      r.defined(a) &&
        ((l = Math.min(l, a.x)),
        (u = Math.max(u, a.x)),
        (h = Math.min(h, a.y)),
        (p = Math.max(p, a.y)));
    }
    return (a.x = l), (a.y = h), (a.width = u - l), (a.height = p - h), a;
  }),
    (d.createGeometryFromPositions = function (e, n, a, c, u, f, p) {
      let d = h.PolygonPipeline.triangulate(n.positions2D, n.holes);
      d.length < 3 && (d = [0, 1, 2]);
      const y = n.positions,
        g = r.defined(a),
        m = g ? a.positions : void 0;
      if (u) {
        const e = y.length,
          t = new Array(3 * e);
        let n = 0;
        for (let i = 0; i < e; i++) {
          const e = y[i];
          (t[n++] = e.x), (t[n++] = e.y), (t[n++] = e.z);
        }
        const r = {
          attributes: {
            position: new s.GeometryAttribute({
              componentDatatype: o.ComponentDatatype.DOUBLE,
              componentsPerAttribute: 3,
              values: t,
            }),
          },
          indices: d,
          primitiveType: s.PrimitiveType.TRIANGLES,
        };
        g &&
          (r.attributes.st = new s.GeometryAttribute({
            componentDatatype: o.ComponentDatatype.FLOAT,
            componentsPerAttribute: 2,
            values: i.Cartesian2.packArray(m),
          }));
        const a = new s.Geometry(r);
        return f.normal ? l.GeometryPipeline.computeNormal(a) : a;
      }
      return p === t.ArcType.GEODESIC
        ? h.PolygonPipeline.computeSubdivision(e, y, d, m, c)
        : p === t.ArcType.RHUMB
        ? h.PolygonPipeline.computeRhumbLineSubdivision(e, y, d, m, c)
        : void 0;
    });
  const G = [],
    S = [],
    R = new i.Cartesian3(),
    N = new i.Cartesian3();
  d.computeWallGeometry = function (e, n, a, l, h, f) {
    let p,
      y,
      g,
      m,
      C,
      b,
      T,
      x,
      v,
      w = e.length,
      A = 0,
      L = 0;
    const E = r.defined(n),
      I = E ? n.positions : void 0;
    if (h)
      for (
        y = 3 * w * 2,
          p = new Array(2 * y),
          E && ((v = 2 * w * 2), (x = new Array(2 * v))),
          g = 0;
        g < w;
        g++
      )
        (m = e[g]),
          (C = e[(g + 1) % w]),
          (p[A] = p[A + y] = m.x),
          ++A,
          (p[A] = p[A + y] = m.y),
          ++A,
          (p[A] = p[A + y] = m.z),
          ++A,
          (p[A] = p[A + y] = C.x),
          ++A,
          (p[A] = p[A + y] = C.y),
          ++A,
          (p[A] = p[A + y] = C.z),
          ++A,
          E &&
            ((b = I[g]),
            (T = I[(g + 1) % w]),
            (x[L] = x[L + v] = b.x),
            ++L,
            (x[L] = x[L + v] = b.y),
            ++L,
            (x[L] = x[L + v] = T.x),
            ++L,
            (x[L] = x[L + v] = T.y),
            ++L);
    else {
      const n = o.CesiumMath.chordLength(l, a.maximumRadius);
      let i = 0;
      if (f === t.ArcType.GEODESIC)
        for (g = 0; g < w; g++)
          i += d.subdivideLineCount(e[g], e[(g + 1) % w], n);
      else if (f === t.ArcType.RHUMB)
        for (g = 0; g < w; g++)
          i += d.subdivideRhumbLineCount(a, e[g], e[(g + 1) % w], n);
      for (
        y = 3 * (i + w),
          p = new Array(2 * y),
          E && ((v = 2 * (i + w)), (x = new Array(2 * v))),
          g = 0;
        g < w;
        g++
      ) {
        let i, o;
        (m = e[g]),
          (C = e[(g + 1) % w]),
          E && ((b = I[g]), (T = I[(g + 1) % w])),
          f === t.ArcType.GEODESIC
            ? ((i = d.subdivideLine(m, C, n, S)),
              E && (o = d.subdivideTexcoordLine(b, T, m, C, n, G)))
            : f === t.ArcType.RHUMB &&
              ((i = d.subdivideRhumbLine(a, m, C, n, S)),
              E && (o = d.subdivideTexcoordRhumbLine(b, T, a, m, C, n, G)));
        const r = i.length;
        for (let e = 0; e < r; ++e, ++A) (p[A] = i[e]), (p[A + y] = i[e]);
        if (
          ((p[A] = C.x),
          (p[A + y] = C.x),
          ++A,
          (p[A] = C.y),
          (p[A + y] = C.y),
          ++A,
          (p[A] = C.z),
          (p[A + y] = C.z),
          ++A,
          E)
        ) {
          const e = o.length;
          for (let t = 0; t < e; ++t, ++L) (x[L] = o[t]), (x[L + v] = o[t]);
          (x[L] = T.x),
            (x[L + v] = T.x),
            ++L,
            (x[L] = T.y),
            (x[L + v] = T.y),
            ++L;
        }
      }
    }
    w = p.length;
    const P = u.IndexDatatype.createTypedArray(w / 3, w - 6 * e.length);
    let D = 0;
    for (w /= 6, g = 0; g < w; g++) {
      const e = g,
        t = e + 1,
        n = e + w,
        r = n + 1;
      (m = i.Cartesian3.fromArray(p, 3 * e, R)),
        (C = i.Cartesian3.fromArray(p, 3 * t, N)),
        i.Cartesian3.equalsEpsilon(
          m,
          C,
          o.CesiumMath.EPSILON10,
          o.CesiumMath.EPSILON10
        ) ||
          ((P[D++] = e),
          (P[D++] = n),
          (P[D++] = t),
          (P[D++] = t),
          (P[D++] = n),
          (P[D++] = r));
    }
    const M = {
      attributes: new c.GeometryAttributes({
        position: new s.GeometryAttribute({
          componentDatatype: o.ComponentDatatype.DOUBLE,
          componentsPerAttribute: 3,
          values: p,
        }),
      }),
      indices: P,
      primitiveType: s.PrimitiveType.TRIANGLES,
    };
    E &&
      (M.attributes.st = new s.GeometryAttribute({
        componentDatatype: o.ComponentDatatype.FLOAT,
        componentsPerAttribute: 2,
        values: x,
      }));
    return new s.Geometry(M);
  };
  var O = d;
  e.PolygonGeometryLibrary = O;
});
