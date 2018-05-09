import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { getOrgData } from '../../actions/actions';
import './organizations.css';

class Organization extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    this.props.getOrgData();
  }

  render() {
    console.log("Org Data::: ",this.props.organization);
    return(
      <div className="Organizations">
        <h2>Organization</h2>

        {/* <Header /> Component + props */}

        {/* <OrgDetails /> Component + props */}

        {/* <OrgCauses /> Component + props */}

        {/* To visit the organizations site below */}
        {/* <ActionButton /> Component + props */}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { organization: state.selectedOrg }
}

const mapDispatchToProps = {
  getOrgData
}

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
