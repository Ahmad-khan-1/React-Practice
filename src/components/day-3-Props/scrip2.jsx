export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

// ?Create and export a MoodBoardItem component that accepts three props: color, image, and description.
// The MoodBoardItem component should return a div with the class 'mood-board-item' as its top-level element.
// Set the background color of the '.mood-board-item' element to the value of the color prop using inline styles.
// Inside the '.mood-board-item' div, render an img element:
//   - The img element should have the class 'mood-board-image'.
//   - Its src attribute should be set to the value of the image prop.
// Inside the '.mood-board-item' div, also render an h3 element:
//   - The h3 element should have the class 'mood-board-text'.
//   - Its text should be the value of the description prop.

// Create and export a MoodBoard component.
// The MoodBoard component should return a div as its top-level element.
// Inside the MoodBoard div, render an h1 element:
//   - The h1 element should have the class 'mood-board-heading'.
//   - Its text should be 'Destination Mood Board'.
// Inside the MoodBoard div, render another div with the class 'mood-board'.
// Inside the '.mood-board' div, render at least three MoodBoardItem components.
//  ! - Each MoodBoardItem should pass color, image, and description props with valid values.
