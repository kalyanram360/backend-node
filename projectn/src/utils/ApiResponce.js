class ApiResponce {
  constructor(StatusCode, message = "Success", data) {
    this.StatusCode = StatusCode;
    this.message = message;
    this.data = data;
    this.success = true;
  }
}

export default ApiResponce;
