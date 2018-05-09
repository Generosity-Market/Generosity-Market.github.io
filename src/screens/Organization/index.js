import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import OrgDetails from './components/OrgDetails/OrgDetails';
// import OrgCauses from './components/OrgCauses/OrgCauses';
import LinkButton from '../../components/LinkButton';
import { getOrgData } from '../../actions/actions';
import './organization.css';

class Organization extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    this.props.getOrgData();
  }

  render() {
    // console.log("Org Data::: ",this.props.organization);

    const { organization } = this.props;

    return(
      <div className="Organization">

        {organization ? <Header
          heading={organization.name}
          BGimage={organization.backgroundImage}
          mainImage={organization.mainImage}
          roundImage={organization.preferences.roundImage}
        /> : '' }

        <OrgDetails
          heading={organization.heading}
          mission={organization.mission}
          email={organization.email}
        />

        {/* <OrgCauses
              causes={organization.Causes}
            /> */}

        <LinkButton
          href={organization.siteUrl}
          classname={'org-link'}
          linkText={`Visit ${organization.short_name}`}
        />

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { organization: state.selectedOrg };
};

const mapDispatchToProps = { getOrgData };

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
