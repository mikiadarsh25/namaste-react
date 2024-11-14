# Complete Guide to (JSX)[https://legacy.reactjs.org/docs/introducing-jsx.html]

## Table of Contents
1. [What is JSX?](#what-is-jsx)
2. [Basic Syntax Rules](#basic-syntax-rules)
3. [Elements and Components](#elements-and-components)
4. [Expressions in JSX](#expressions-in-jsx)
5. [Props and Attributes](#props-and-attributes)
6. [Children and Nesting](#children-and-nesting)
7. [Conditional Rendering](#conditional-rendering)
8. [Lists and Keys](#lists-and-keys)
9. [Event Handling](#event-handling)
10. [Styling in JSX](#styling-in-jsx)
11. [Best Practices](#best-practices)

## What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript, recommended for use with React. It allows you to write HTML-like code within JavaScript.

```jsx
// Basic JSX example
const element = <h1>Hello, World!</h1>;
```

## Basic Syntax Rules

1. **Every JSX element must be closed**
```jsx
// Self-closing tags
<img src="image.jpg" />
<input type="text" />

// Regular tags
<div>Content</div>
```

2. **Return a single root element**
```jsx
// Correct
return (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);

// Using Fragment
return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);
```

## Elements and Components

### HTML Elements
```jsx
// Basic HTML elements
<div>
  <h1>Title</h1>
  <p>Paragraph</p>
  <button>Click me</button>
</div>
```

### Custom Components
```jsx
// Function Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Using the component
<Welcome name="John" />
```

## Expressions in JSX

```jsx
const name = "John";
const element = (
  <div>
    {/* Variables */}
    <h1>Hello, {name}</h1>
    
    {/* Expressions */}
    <p>2 + 2 = {2 + 2}</p>
    
    {/* Function calls */}
    <p>{formatName(user)}</p>
    
    {/* Ternary operators */}
    <div>{isLoggedIn ? 'Welcome' : 'Please log in'}</div>
  </div>
);
```

## Props and Attributes

```jsx
// HTML attributes
<div className="container">
  <input type="text" disabled={true} />
  <img src={imageUrl} alt="description" />
</div>

// Custom props
<UserProfile
  name="John Doe"
  age={25}
  isAdmin={true}
  onUpdate={() => console.log('Updated')}
/>
```

## Children and Nesting

```jsx
// Nesting components
<Card>
  <CardHeader>
    <Title>Welcome</Title>
  </CardHeader>
  <CardBody>
    <p>Content goes here</p>
  </CardBody>
</Card>

// Children prop usage
function Container({ children }) {
  return <div className="container">{children}</div>;
}
```

## Conditional Rendering

```jsx
// Using ternary operator
{isLoggedIn ? <UserDashboard /> : <LoginForm />}

// Using && operator
{isAdmin && <AdminPanel />}

// Using variables
let content;
if (isLoggedIn) {
  content = <UserDashboard />;
} else {
  content = <LoginForm />;
}
return <div>{content}</div>;
```

## Lists and Keys

```jsx
const items = ['Apple', 'Banana', 'Orange'];

return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// With objects
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
];

return (
  <ul>
    {users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);
```

## Event Handling

```jsx
// Click events
<button onClick={handleClick}>Click Me</button>

// Form events
<form onSubmit={handleSubmit}>
  <input
    type="text"
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
  />
</form>
```

## Styling in JSX

```jsx
// Inline styles
<div style={{ 
  backgroundColor: 'blue',
  fontSize: '14px',
  padding: '10px'
}}>
  Styled content
</div>

// CSS classes
<div className="container main-content">
  Content
</div>
```

## Best Practices

1. **Use Proper Naming Conventions**
```jsx
// Component names should be PascalCase
function UserProfile() { }

// Props and variables should be camelCase
<UserProfile firstName="John" />
```

2. **Props Destructuring**
```jsx
// Good
function Profile({ name, age, avatar }) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
```

3. **Use Fragment When Possible**
```jsx
// Instead of extra div
return (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);
```

4. **Always Use Alternative Text for Images**
```jsx
// Good
<img src={imageUrl} alt="User profile" />
```

5. **Proper Event Handling**
```jsx
// Good
const handleClick = (e) => {
  e.preventDefault();
  // Handle click
};

<button onClick={handleClick}>Click</button>
```

Remember:
- JSX is closer to JavaScript than HTML, so use camelCase for property names
- Use `className` instead of `class`
- Close all tags, even self-closing ones
- Expressions must be wrapped in curly braces `{}`
- Comments inside JSX must be wrapped in curly braces and written as `{/* comment */}`
- Always include error boundaries in your application
- Use meaningful component names that describe their purpose