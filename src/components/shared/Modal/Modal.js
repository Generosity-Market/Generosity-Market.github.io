// import React, { Component, Fragment } from 'react';
// import ReactModal from 'react-modal';
// import './Modal.css';

// ReactModal.setAppElement('#root');

// export default class Modal extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             isOpen: false,
//         }
//     }

//     getParent = () => {
//         return document.querySelector('#root');
//     }


//     render() {
//         const {
//             isOpen,
//             contentLabel,
//             children,
//             handleCloseModal,
//             // ...rest
//         } = this.props;
//         console.log("Is Open: ", isOpen);

//         return (
//             <Fragment>
//                 <ReactModal
//                     isOpen={isOpen}
//                     cotentLabel={contentLabel}
//                     parentSelector={this.getParent}
//                     className="Modal"
//                     overlayClassName="Overlay"
//                     onRequestClose={handleCloseModal}
//                 >
//                     {children}
//                 </ReactModal>
//             </Fragment>
//         );
//     }
// }