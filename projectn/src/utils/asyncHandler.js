const asynchandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
    next(error);
  }
};
