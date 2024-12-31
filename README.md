# Making a Tic Tac Toe Game

This is a tic tac toe game made with react and typescript
The logic for the game is we take an array of 9 elements and keep the initial value as null
And using the useState Hook we can change the value of the array by clicking on the block
and by default we keep the X value first

# Managing State in Parent and Using onClick in Child

When your state is managed in a parent component or elsewhere (like a global store) and you need to handle an onClick event in a child component while rendering it dynamically, you pass the handler function and relevant state values as props.

Yes, the provided Block component is a good example of the concept where the state is managed externally, and the onClick handler is passed down as a prop. The component itself is stateless, and it relies on props to determine its behavior and rendering.

# Explanation of Your Code

# Interface for Props

The BlockProps interface defines the expected props:
value: string | null - Represents the value displayed inside the block.
onClick: () => void - A callback function triggered when the block is clicked.
Rendering and onClick Handling

The onClick handler is invoked when the div is clicked, but the logic of what happens during the click (e.g., updating state) is handled in the parent component.
Reusability

The Block component is reusable and doesn't care about where its state or click handler comes from. It only needs the value and onClick passed as props.
