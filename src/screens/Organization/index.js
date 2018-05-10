import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import OrgDetails from './components/OrgDetails/OrgDetails';
import OrgCauses from './components/OrgCauses/OrgCauses';
import LinkButton from '../../components/LinkButton';
import { getOrgData, getCauseList } from '../../actions/actions';
import './organization.css';

class Organization extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    if (this.props.causes.length === 0) {
      this.props.getCauseList();
    }
    this.props.getOrgData();
  }

  render() {
    const { organization } = this.props;

    return(
      <div className="Organization">

        {organization ? <Header
          heading={organization.name}
          BGimage={organization.backgroundImage}
          mainImage={organization.mainImage}
          roundImage={organization.preferences.roundImage}
        /> : '' }

        <OrgCauses
          orgId= {organization.id}
          causes={this.props.causes}
        />

        <OrgDetails
          heading={organization.heading}
          mission={organization.mission}
          email={organization.email}
        />

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
  return {
    organization: state.selectedOrg,
    causes: state.causeList
  };
};

const mapDispatchToProps = { getOrgData, getCauseList };

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
