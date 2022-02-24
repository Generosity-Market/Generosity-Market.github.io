import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import './Receipts.css';

import { useInViewport } from 'react-in-viewport';

import { getUserSupportedCauses } from 'ducks/user';

import { causeSelected } from 'ducks/cause';

// Shared UI Components
import {
    Heading,
    ReceiptItem,
} from 'components/shared';

export const Receipts = ({
    causeSelected,
    getUserSupportedCauses,
    user,
}) => {
    const componentRef = useRef();
    const {
        inViewport,
    } = useInViewport(componentRef, { rootMargin: '100px 0px 0px 0px' });

    const [loading, setLoading] = useState(false);

    const getReceipts = () => {
        if (!user.SupportedCauses) {
            setLoading(true);
            getUserSupportedCauses(user.id).then(() => setLoading(false));
        }
    };

    useEffect(() => {
        if (inViewport) {
            getReceipts();
        }
    }, [inViewport]);

    const causes = user?.SupportedCauses?.map(cause => {
        return (
            <ReceiptItem
                key={cause.icon + cause.name}
                selectCause={causeSelected}
                cause={cause}
            />
        );
    });

    const noSupportedCauses = (
        <div className="no-causes">
            {loading ? 'Loading your receipts...' : 'You haven\'t supported any causes yet'}
        </div>
    );

    const hasCauses = (causes && causes.length > 0);

    return (
        <div
            className="Receipts"
            ref={componentRef}
        >
            <Heading text={'Causes I Support'} />
            {hasCauses ? causes : noSupportedCauses}
        </div>
    );
};

Receipts.displayName = 'Receipts';

const mapStateToProps = ({ cause, user }) => {
    const { causeList } = cause;

    return {
        causeList,
        user,
    };
};

const mapDispatchToProps = {
    causeSelected,
    getUserSupportedCauses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Receipts);
