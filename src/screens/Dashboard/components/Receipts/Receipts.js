import React, { PureComponent } from 'react';
import './Receipts.css';

// Shared UI Components
import {
  Heading,
  ReceiptItem,
} from 'components/shared';

// TODO turn this into functional component if we arent using state...
class Receipts extends PureComponent {

  render() {
    const { supportedCauses } = this.props;

    const causes = supportedCauses && supportedCauses.map(cause => {
      return (
        <ReceiptItem
          key={cause.icon + cause.name}
          {...cause}
        />
      );
    });

    return (
      <div className="Receipts">
        <Heading text={'Causes I Support'} />

        {causes}

      </div>
    );
  }
};

export default Receipts;
