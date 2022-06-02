const checkReactWarnOrError = (args) => {
    args.forEach((err) => {
        if (typeof err === 'string' && err.toLowerCase().includes('react')) {
            return true;
        }
    });
};

const checkConsoleWarnOrErrors = (hasAllowableConsole = false) => {
    // RUn this seperately for each block/describe/test if there are allowable errors
    let isConsoleWarningOrError;
    let hasReactWarningOrError;

    beforeEach(() => {
        isConsoleWarningOrError = false;
        hasReactWarningOrError = false;

        jest.spyOn(global.console, 'error').mockImplementation((...args) => {
            isConsoleWarningOrError = true;
            hasReactWarningOrError = checkReactWarnOrError(args) || false;

            // Optional: jest spits out the error anyways
            // eslint-disable-next-line no-console
            console.log(...args);
        });

        jest.spyOn(global.console, 'warn').mockImplementation((...args) => {
            isConsoleWarningOrError = true;
            hasReactWarningOrError = checkReactWarnOrError(args) || false;
            // Optional: jest spits out the error anyways
            // eslint-disable-next-line no-console
            console.log(...args);
        });
    });

    afterEach(() => {
        if (isConsoleWarningOrError && !hasAllowableConsole) {
            const type = hasReactWarningOrError ? 'React' : 'Console';

            throw new Error(`${type} warnings and errors are not allowed.`);
        }
    });

    it('does not contain console warnings or errors', () => {
        expect(isConsoleWarningOrError).toBe(false);
    });
};

export default checkConsoleWarnOrErrors;
