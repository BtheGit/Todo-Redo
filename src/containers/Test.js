import React from 'react';

// const Test = props => (
//   <div>Test Page</div>
// )

// const Test = props => {
//   const a = 2 + 2;


//   return (
//     <div>
//       Test: <span>{a}</span>
//     </div>
//   )
// }

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Hello'
    }
  }

  render() {
    return (
      <div>
        Test
        <div>{this.state.title}</div>
      </div>
    )
  }
}

export default Test;