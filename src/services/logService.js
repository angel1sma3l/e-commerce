import { toast } from "react-toastify";

function init() {
  // Sentry service here
}

function log(error) {
  //   Sentry.captureException(err);
  console.log(error);
}

function error(error) {
  toast.error(error, {
    autoClose: 13000,
    style: {
      fontSize: 25,
      color: "white",
      backgroundColor: "orange",
    },
  });
}

const logService = {
  init,
  log,
  error,
};

export default logService;
