enum HttpStatusCodeType {
  OK = 'OK',
  BAD_REQUEST = 'BAD_REQUEST',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}

export default {
  [HttpStatusCodeType.OK]: 200,
  [HttpStatusCodeType.BAD_REQUEST]: 400,
  [HttpStatusCodeType.INTERNAL_SERVER_ERROR]: 500,
};
