const chalk = require("chalk")

const statusCodes = [
    { code: 100, message: "continue" },
    { code: 101, message: "Switching Protocol" },
    { code: 102, message: "Processing" },
    { code: 200, message: "ok" },
    { code: 201, message: "Created" },
    { code: 202, message: "Accepted" },
    { code: 203, message: "Non-authoritative Information" },
    { code: 204, message: "No Content" },
    { code: 205, message: "Reset Content" },
    { code: 206, message: "Partial Content" },
    { code: 207, message: "Multi-Status" },
    { code: 300, message: "Multiple Choice" },
    { code: 301, message: "Moved Permanently" },
    { code: 302, message: "Found" },
    { code: 303, message: "See Other" },
    { code: 304, message: "Not Modified" },
    { code: 307, message: "Temporary Redirect" },
    { code: 308, message: "Permanent Redirect" },
    { code: 400, message: "Bad Request" },
    { code: 401, message: "Unauthorized" },
    { code: 403, message: "Proibido" },
    { code: 404, message: "Página Não Encontrada" },
    { code: 405, message: "Method Not Allowed" },
    { code: 407, message: "Proxy Authentication Required" },
    { code: 408, message: "Request Timeout" },
    { code: 409, message: "Conflict" },
    { code: 410, message: "Gone" },
    { code: 413, message: "Payload Too Large" },
    { code: 414, message: "URI Too Long" },
    { code: 415, message: "Unsupported Media Type" },
    { code: 429, message: "Too Many Requests" },
    { code: 444, message: "Connection Closed Without Response" },
    { code: 499, message: "Client Closed Request" },
    { code: 411, message: "Length Required" },
    { code: 412, message: "Precondition Failed" },
    { code: 416, message: "Requested Range Not Satisfiable" },
    { code: 417, message: "Expectation Failed" },
    { code: 422, message: "Unprocessable Entity" },
    { code: 423, message: "Locked" },
    { code: 424, message: "Failed Dependency" },
    { code: 426, message: "Upgrade Required" },
    { code: 428, message: "Precondition Required" },
    { code: 431, message: " Request Header Fields Too Large" },
    { code: 451, message: "Unavailable For Legal Reasons" },
    { code: 500, message: "Internal server Error" },
    { code: 501, message: "Not Implemented" },
    { code: 502, message: "Bad Gateway e  Error" },
    { code: 503, message: "Service Unavailable" },
    { code: 504, message: "Gateway Timeout" },
    { code: 505, message: "HTTP Version Not Supported" },
    { code: 506, message: "Variant Also Negotiates" },
    { code: 507, message: "Insufficient Storage" },
    { code: 508, message: "Loop Detected" },
    { code: 510, message: "Not Extended" },
    { code: 511, message: " Network Authentication Required" },
    { code: 520 , message: "Web Server Returns an Unknown Error"},
    { code: 521 , message: "Web Server is Down"},
    { code: 522 , message: "Connection Timed Out"},
    { code: 523 , message: "Origin Is Unreachable"},
    { code: 524 , message: "A Timeout Occurred"},
    { code: 525 , message: "SSL Handshake Failed"},
    { code: 526 , message: "Invalid SSL Certificate"},
    { code: 527 , message: "Railgun Listener To Origin"},
    //Adicione mais código de status conforme necessário
];

const generateRandomIndex = () => {
    return Math.floor(Math.random() * statusCodes.length);
};

const randomicoIndex = generateRandomIndex();

statusCodes.forEach((status, index) => {
    if (index === randomicoIndex) {
        switch (true) {
            case (status.code >= 100 && status.code < 200):
              console.log ("Status sorteado:",chalk.bgGray.bold(`${status.code}`));
              console.log (chalk.gray.bold(`Status ${status.code}: ${status.message}`));
              break;
            case (status.code >= 200 && status.code < 300):
                console.log ("Status sorteado:",chalk.bgGreen.bold(`${status.code}`));
                console.log (chalk.green.bold(`Status ${status.code}: ${status.message}`));
              break;
            case (status.code >= 300 && status.code < 400):
                console.log ("Status sorteado:",chalk.bgYellow.bold(`${status.code}`));
                console.log (chalk.yellow.bold(`Status ${status.code}: ${status.message}`));
              break;
            case (status.code >= 400 && status.code < 500):
                console.log ("Status sorteado:",chalk.bgRed.bold(`${status.code}`));
                console.log (chalk.red.bold(`Status ${status.code}: ${status.message}`));             
                 break;
            case (status.code >= 500 && status.code < 600):
                console.log ("Status sorteado:",chalk.bgBlue.bold(`${status.code}`));
                console.log (chalk.blue.bold(`Status ${status.code}: ${status.message}`));             
                 break;
          }
          
    }

  });
  