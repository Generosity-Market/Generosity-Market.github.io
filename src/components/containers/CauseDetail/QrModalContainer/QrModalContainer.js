import React from 'react';
import './QrModalContainer.css';

import {
    MiniButton,
    Modal,
    QrCode,
} from '@jgordy24/stalls-ui';

const QrModalContainer = ({ name = '' }) => {

    const _name = name.replace(/ /g, '-');
    const url = `${window.location.href}/?title=${_name}`;

    const modalTriggerProps = {
        iconOnly: true,
        icon: 'qrcode',
        size: '2x',
        label: 'Share This Cause',
    };

    const downloadTrigger = (qrSrc) => qrSrc && (
        <a href={qrSrc} className="qr-download-trigger" download>
            <MiniButton icon="download" bsStyle="success" />
            Download Code
        </a>
    );

    return (
        <div className="qr-container">
            <Modal triggerProps={modalTriggerProps}>
                <div className="qr-modal-content">
                    <img
                        className="inline-logo-green"
                        src={require('Assets/Logo/PNG/Artboard-1-copy-5Generosity-Logo.png')}
                        alt="Generosity Market logo"
                    />
                    <QrCode
                        url={url}
                        download
                        downloadTrigger={downloadTrigger}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default QrModalContainer;
