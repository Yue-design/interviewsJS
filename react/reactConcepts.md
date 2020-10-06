# React Concepts

# 1. Virtual DOM
<p>The virtual DOM (VDOM) is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with "real" DOM by a library such as ReactDOM.</p>

# 2. Unidirectional Binding
<p>A unidirectional data flow means that when designing a React app you often nest child components within higher-order parent components.</p>

# 3. Reconciliation
<p>Instead, React implements a heuristic O(n) algorithm based on two assumptions: 
1. Two elements of different types will produce different trees.
2. The developer can hint at which child element may be stable across different renders with a key prop.
</p>

# 4. Shallow Comparison
<p>shallowCompare is a legacy add-on. Use React.memo or React.PureComponent instead.</p>
<p>Before React.PureComponent was introduced, shallowCompare was commonly used to achieve the same functionality as PureRenderMixin while using ES6 classes with React.</p>
<p>shallowCompare performs a shallow equality check on the current props and nextProps objects as well as the current state and nextState objects.</p>

# 5. Package.json
<p>package.json is kind of manifest file for your application, plays samle role as pom.xml in Maven projects, and follows the json syntac.</p>
<p>scripts defines a set of node scripts you can run in command line</p>
<p>dependencies sets a list of npm packages installed as dependencies</p>
<p>devDependencies</p>
<p>engines sets which versions of Node this package/app works on</p>

# 6. Render Props
<p>"Render Props" refers to a technique for sharing code between React components using a prop whose value is a function.</p>
<p>A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.</p>
<p>Libraries that use render props include React Router, Downshift and Formik.</p>

# 7. Modules
<p>Creating a module means you will group a set of related components, methods and assets together, providing a public interface to be used by other modules.</p>

# 8. Higher-Order Components (HOC)
<p>A higher-order componet (HOC) is an advanced technique in React for reusing component logic.</p>
<p>HOCs are not part of the React API, per se.</p>
<p>They are a pattern that emerges from React's compositional nature.</p>
<p>Concretely, a higher-order component is a function that takes a component and returns a new component.</p>
<p>HOCs are common in third-party React libraries, such as Redux's connect and Relay's createFragmentContainer.</p>

# 9. Why React
<p>Declarative</p>
<p>Component-Based</p>
<p>Learn once, Write anywhere</p>

# 10. History & Development
<p>React's release channels: latest, next, experimental.</p>
<p>Use the lastest releases for all user-facing React applications.</p>

# 11. Hooks
<p>Hooks are a new addition in React 16.8.</p>
<p>They let you use state and other React features without writing a class.</p>