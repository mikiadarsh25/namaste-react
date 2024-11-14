# Complete Guide to (React Elements)[https://legacy.reactjs.org/blog/2014/10/14/introducing-react-elements.html]

## Table of Contents
1. [What are React Elements?](#what-are-react-elements)
2. [Creating React Elements](#creating-react-elements)
3. [JSX Syntax](#jsx-syntax)
4. [HTML Tags in React](#html-tags-in-react)
5. [Props and Attributes](#props-and-attributes)
6. [Children and Nesting](#children-and-nesting)
7. [Event Handling](#event-handling)
8. [Styling Elements](#styling-elements)
9. [Common HTML Tags and Their React Usage](#common-html-tags)
10. [Best Practices](#best-practices)

## What are React Elements?
React elements are the smallest building blocks of React applications. They are plain JavaScript objects that describe what you want to see on the screen. Unlike browser DOM elements, React elements are cheap to create and are immutable.

```jsx
// Basic React element
const element = <h1>Hello, World!</h1>;

// React element using createElement
const element = React.createElement('h1', null, 'Hello, World!');
```

## Creating React Elements

### Using JSX
```jsx
// Simple element
const element = <div>Content</div>;

// Element with attributes
const element = <div className="container">Content</div>;

// Self-closing element
const element = <img src="image.jpg" alt="description" />;
```

### Using createElement
```jsx
// Basic createElement syntax
React.createElement(type, props, ...children);

// Example
const element = React.createElement(
  'div',
  { className: 'container' },
  'Content'
);
```

## JSX Syntax

### Basic Rules
```jsx
// Single line
const element = <div>Hello</div>;

// Multiple lines (must be wrapped in parentheses)
const element = (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);

// JavaScript expressions in JSX
const name = 'John';
const element = <div>Hello, {name}</div>;
```

## HTML Tags in React

### Common HTML Elements
```jsx
// Text elements
<h1>Heading 1</h1>
<p>Paragraph</p>
<span>Inline text</span>

// Form elements
<input type="text" value={value} onChange={handleChange} />
<textarea value={text} onChange={handleChange}></textarea>
<button onClick={handleClick}>Click me</button>

// Lists
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

// Tables
<table>
  <thead>
    <tr>
      <th>Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
```

## Props and Attributes

### HTML Attributes in React
```jsx
// Class becomes className
<div className="container">

// For becomes htmlFor
<label htmlFor="input-id">

// Style takes an object
<div style={{ backgroundColor: 'blue', fontSize: '16px' }}>

// Data attributes
<div data-testid="test">

// Boolean attributes
<input disabled={true} />
<input required />
```

### Custom Props
```jsx
// Passing props
const element = <CustomComponent name="John" age={25} isActive={true} />;

// Spreading props
const props = { name: 'John', age: 25 };
const element = <CustomComponent {...props} />;
```

## Children and Nesting

### Working with Children
```jsx
// Single child
<div>Hello</div>

// Multiple children
<div>
  <h1>Title</h1>
  <p>Paragraph</p>
</div>

// Children as props
<Component>
  <Child1 />
  <Child2 />
</Component>

// Mapping children
<ul>
  {items.map(item => (
    <li key={item.id}>{item.text}</li>
  ))}
</ul>
```

## Event Handling

### Common Events
```jsx
// Click events
<button onClick={handleClick}>Click</button>

// Form events
<input 
  onChange={handleChange}
  onFocus={handleFocus}
  onBlur={handleBlur}
/>

// Mouse events
<div
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  Hover me
</div>

// Keyboard events
<input onKeyDown={handleKeyDown} />
```

## Styling Elements

### Different Styling Approaches
```jsx
// Inline styles
<div style={{ 
  backgroundColor: 'blue',
  padding: '10px',
  marginTop: '20px'
}}>

// CSS classes
<div className="container primary-bg">

// CSS Modules
import styles from './styles.module.css';
<div className={styles.container}>

// Conditional classes
<div className={isActive ? 'active' : 'inactive'}>
```

## Common HTML Tags
```jsx
// Semantic HTML tags
<header>
<nav>
<main>
<article>
<section>
<aside>
<footer>

// Media elements
<img src="" alt="" />
<video src="" controls>
<audio src="" controls>

// Form elements
<form onSubmit={handleSubmit}>
<input type="text" />
<select>
  <option value="1">Option 1</option>
</select>
<textarea>
<button type="submit">
```

## Best Practices

1. Always close tags
```jsx
// Good
<img src="image.jpg" alt="description" />
<input type="text" />

// Bad
<img src="image.jpg" alt="description">
```

2. Use proper case for components and HTML elements
```jsx
// Components (PascalCase)
<MyComponent />

// HTML elements (lowercase)
<div>
```

3. Use keys for lists
```jsx
// Good
{items.map(item => (
  <li key={item.id}>{item.text}</li>
))}
```

4. Prefer object spread for props
```jsx
// Good
const props = { id: 1, name: 'John' };
<Component {...props} />

// Instead of
<Component id={props.id} name={props.name} />
```

5. Use semantic HTML
```jsx
// Good
<article>
  <header>
    <h1>Title</h1>
  </header>
  <section>
    <p>Content</p>
  </section>
</article>

// Instead of
<div>
  <div>
    <h1>Title</h1>
  </div>
  <div>
    <p>Content</p>
  </div>
</div>
```

Remember:
- All custom components must start with a capital letter
- Every element must be closed
- JSX expressions must have one parent element
- Use camelCase for prop names
- Some HTML attributes have different names in React (className instead of class)
- Boolean props can be written without a value when true
- Always handle events with functions, not inline code