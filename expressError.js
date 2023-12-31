//Class for express error used for error handling

class ExpressError extends Error {
    constructor(message, status) {
        super();
        this.msg = msg;
        this.status = status;
        console.error(this.stack)
    }
}

module.exports = ExpressError;