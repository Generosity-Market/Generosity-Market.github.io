import React from 'react';
import './QrModalContainer.css';

import { Modal, QrCode } from '@jgordy24/stalls-ui';

const QrModalContainer = ({ name = '' }) => {

    const _name = name.replace(/ /g, '-');
    const url = `${window.location.href}/?title=${_name}`;

    const modalTriggerProps = {
        label: 'Share with Code',
        iconOnly: true,
        icon: 'qrcode',
        size: 'lg',
    };

    return (
        <>
            <Modal triggerProps={modalTriggerProps}>
                <div className="qr-container">
                    <QrCode url={url} />
                </div>
            </Modal>
        </>
    );
};

export default QrModalContainer;
