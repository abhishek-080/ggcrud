const successResponse = (res,data, message="Request Successful") => {
    res.json({
        success: true,
        message,
        data
    });
}
const errorResponse = (res,error, message="Request Failed") => {
    res.json({
        success: false,
        message,
        error
    });
}
module.exports = {
    successResponse,
    errorResponse
}