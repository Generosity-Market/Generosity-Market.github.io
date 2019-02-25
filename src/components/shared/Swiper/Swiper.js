// import React, { Component } from 'react';
// import Swipe from 'react-swipe-component';
// import './Swiper.css';

// class Swiper extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             actionText: '',
//             continuousSwipeListener: true,
//             left: 0
//         };

//         this.onSwipeEnd = this._onSwipeEnd.bind(this);
//         this.onSwipeLeftListener = this._onSwipeLeftListener.bind(this);
//         this.onSwipeRightListener = this._onSwipeRightListener.bind(this);
//         this.onSwipeDownListener = this._onSwipeUpListener.bind(this);
//         this.onSwipeUpListener = this._onSwipeDownListener.bind(this);
//         this.onSwipeListener = this._onSwipeListener.bind(this);
//     }

//     render() {
//         /* eslint-disable-next-line no-console */
//         console.log('Left?? ', this.state.left);
//         return (
//             <div className="Test" style={{ left: `${this.state.left}px` }}>
//                 <Swipe
//                     nodeName="div"
//                     className="Swiper"
//                     mouseSwipe={true}
//                     onSwipeEnd={this.onSwipeEnd}
//                     onSwipedLeft={this.onSwipeLeftListener}
//                     onSwipedRight={this.onSwipeRightListener}
//                     onSwipedDown={this.onSwipeDownListener}
//                     onSwipedUp={this.onSwipeUpListener}
//                     onSwipe={this.onSwipeListener}
//                 >
//                     Action - {this.state.actionText}
//                 </Swipe>
//                 <Swipe
//                     nodeName="div"
//                     className="Swiper2"
//                     mouseSwipe={true}
//                     onSwipeEnd={this.onSwipeEnd}
//                     onSwipedLeft={this.onSwipeLeftListener}
//                     onSwipedRight={this.onSwipeRightListener}
//                     onSwipedDown={this.onSwipeDownListener}
//                     onSwipedUp={this.onSwipeUpListener}
//                     onSwipe={this.onSwipeListener}
//                 >
//                     Swiper 2 - {this.state.actionText}
//                 </Swipe>
//             </div>
//         );
//     }

//     _onSwipeEnd() {
//         this.setState({ actionText: 'Swipe Ended' });
//     }
//     _onSwipeLeftListener() {
//         this.setState({ actionText: 'Swiped left' });
//     }
//     _onSwipeRightListener() {
//         this.setState({ actionText: 'Swiped right' });
//     }
//     _onSwipeUpListener() {
//         this.setState({ actionText: 'Swiped Up' });
//     }
//     _onSwipeDownListener() {
//         this.setState({ actionText: 'Swiped down' });
//     }
//     _onSwipeListener(event) {
//         /* eslint-disable-next-line no-console */
//         console.log('Fired');
//         /* eslint-disable-next-line no-console */
//         console.log('Event: ', event);
//         if (event[1] === 0 && this.state.continuousSwipeListener) this.setState({ actionText: `Swipe x: ${event[0]}`, left: event[0] });
//         else if (event[0] === 0 && this.state.continuousSwipeListener) this.setState({ actionText: `Swipe y: ${event[1]}` });
//     }

// }

// export default Swiper;
