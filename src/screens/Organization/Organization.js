import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/Banner/Banner';
import OrgDetails from './components/OrgDetails/OrgDetails';
import OrgCauses from './components/OrgCauses/OrgCauses';
import LinkButton from '../../components/LinkButton';
import { getOrgData, getCauseList, causeSelected } from '../../actions/actions';
import './organization.css';

class Organization extends Component {

  componentDidMount() {
    this.props.getOrgData();
  }

  render() {
    const { organization } = this.props;
    console.log("ORG: ", organization);
    return(
      <div className="Organization">

      {organization &&
        <Banner
          heading={organization.name}
          BGimage={organization.backgroundImage}
          mainImage={organization.mainImage}
          roundImage={organization.Preferences[0].roundImage} /> }

        <div className="Wrapper">

        {organization &&
          <OrgCauses
            causes={organization.Causes}
            causeSelected={this.props.causeSelected} />}

          <OrgDetails
            heading={organization.heading}
            mission={organization.mission}
            email={organization.email} />

          <LinkButton
            href={organization.site_url}
            classname={'org-link'}
            linkText={`Visit ${organization.short_name}`} />

        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    organization: state.selectedOrg
  };
};

const mapDispatchToProps = { getOrgData, getCauseList, causeSelected };

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
