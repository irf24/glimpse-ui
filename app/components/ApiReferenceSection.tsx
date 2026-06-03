import React from "react";

export function ApiReferenceSection() {
  return (
    <section id="api-reference" className="doc-section">
      <h2 className="doc-title">API Reference</h2>
      <p className="doc-text">
        The <code>Glimpse</code> component is designed to be as thin and semantic as possible. It extends all standard React <code>HTMLAttributes&lt;HTMLDivElement&gt;</code> options.
      </p>

      <div className="api-table-wrapper" id="api-props-table">
        <table className="api-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="api-table__prop-name">variant</span></td>
              <td><span className="api-table__prop-type">&quot;text&quot; | &quot;circle&quot; | &quot;rectangle&quot;</span></td>
              <td><span className="api-table__prop-default">&quot;text&quot;</span></td>
              <td className="api-table__prop-desc">
                Defines the base shape geometry. <code>text</code> matches font text dimensions, <code>circle</code> sets a 50% border radius, and <code>rectangle</code> supports fluid grid cards.
              </td>
            </tr>
            <tr>
              <td><span className="api-table__prop-name">animation</span></td>
              <td><span className="api-table__prop-type">&quot;shimmer&quot; | &quot;pulse&quot; | &quot;none&quot;</span></td>
              <td><span className="api-table__prop-default">&quot;shimmer&quot;</span></td>
              <td className="api-table__prop-desc">
                Specifies the type of loading transition. <code>shimmer</code> uses transform translate for GPU composited sliding gradient, <code>pulse</code> handles subtle opacity fades.
              </td>
            </tr>
            <tr>
              <td><span className="api-table__prop-name">width</span></td>
              <td><span className="api-table__prop-type">string | number</span></td>
              <td><span className="api-table__prop-default">undefined</span></td>
              <td className="api-table__prop-desc">
                Custom override width. Numerical values compile to pixel units (e.g. <code>48</code> to <code>48px</code>). CSS variables or percentage strings are evaluated directly.
              </td>
            </tr>
            <tr>
              <td><span className="api-table__prop-name">height</span></td>
              <td><span className="api-table__prop-type">string | number</span></td>
              <td><span className="api-table__prop-default">undefined</span></td>
              <td className="api-table__prop-desc">
                Custom override height. Fits same pattern rules as width properties. Perfect for locking sizing inside structural grids.
              </td>
            </tr>
            <tr>
              <td><span className="api-table__prop-name">ref</span></td>
              <td><span className="api-table__prop-type">React.Ref&lt;HTMLDivElement&gt;</span></td>
              <td><span className="api-table__prop-default">null</span></td>
              <td className="api-table__prop-desc">
                Forwards standard element references to the root container node for layout calculations or intersections.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
