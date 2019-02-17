const isTestingEnvironment = () => process.env.NODE_ENV === 'test';

export default isTestingEnvironment;