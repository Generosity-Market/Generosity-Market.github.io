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

    return (
        <div
            className="Receipts"
            ref={ref}
        >
            <Heading text={'Causes I Support'} />
            {causes}
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
