function startCatchers() {
    // For catching exceptions thrown outside of the request processing pipeline
    process.on('uncaughtException', (err) => {
        console.log('Catching uncaught exception: ', err);
        process.exit(1);
    });
    // For catching unhandled promises
    process.on('unhandledRejection', (err) => {
        console.log('Handling unhandled promise: ', err);
        process.exit(1);
    });
}

module.exports = startCatchers;