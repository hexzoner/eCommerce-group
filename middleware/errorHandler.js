export default function errorHandler(err, req, res, next) {
  process.env.NODE_ENV !== "production" && console.error(err.stack);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message,
    error: err.name,
  });
}

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
