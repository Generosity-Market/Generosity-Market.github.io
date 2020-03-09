import React from 'react';
import { connect } from 'react-redux';
import './Receipts.css';

import {
    causeSelected,
} from 'ducks/cause';

// Shared UI Components
import {
    Heading,
    ReceiptItem,
} from 'components/shared';

export const Receipts = React.forwardRef(({
    causeSelected,
    loading,
    supportedCauses,
}, ref) => {
    const causes = supportedCauses && supportedCauses.map(cause => {
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
            ref={ref}
        >
            <Heading text={'Causes I Support'} />
            {hasCauses ? causes : noSupportedCauses}
        </div>
    );
});

Receipts.displayName = 'Receipts';

const mapStateToProps = ({ cause }) => {
    const { causeList } = cause;

    return {
        causeList
    };
};

const mapDispatchToProps = {
    causeSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(Receipts);
