const inputOptions = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Cause Name',
  }, {
    type: 'select',
    name: 'type',
  }, {
    type: 'text',
    name: 'organization_name',
    placeholder: "Non Profit / Organization's Name",
  }, {
    type: 'text',
    name: 'tax_id',
    placeholder: 'Tax ID',
  }, {
    type: 'number',
    name: 'goal',
    placeholder: 'Fundraising Goal',
  }, {
    type: 'textarea',
    name: 'description',
    placeholder: 'About the cause',
  }, {
    type: 'textarea',
    name: 'purpose',
    placeholder: 'How the funds will be used',
  }
]

export default inputOptions;
