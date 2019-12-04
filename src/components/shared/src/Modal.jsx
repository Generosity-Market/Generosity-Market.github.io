import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Modal.css';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <Fragment>
        <div className="modal-overlay" />
        <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
        >
            <div className="modal">
                <div className="modal-header">
                    <button
                        type="button"
                        className="modal-close-button"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={hide}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <p>
                    {'Hello, I\'m a modal.'}
                </p>
            </div>
        </div>
    </Fragment>, document.body
) : null;

export default Modal;

// import React, { Component, Fragment } from 'react';
// import ReactModal from 'react-modal';
// import '../styles/Modal.css';

// ReactModal.setAppElement('#root');

// export default class Modal extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             isOpen: false,
//         };
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
//         /* eslint-disable-next-line no-console */
//         console.log('Is Open: ', isOpen);

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