import helmet from "helmet";
import cors from "cors";
import { Request, Response, Express } from "express";

export default ((app: Express) => {
    let clientURL;
    let apiURL;
    if(process.env.MODE === "dev") {
        clientURL = "http://localhost:3040";
        apiURL = "http://localhost:4040";
    }
    else {
        clientURL = process.env.CLIENT_URL;
        apiURL = process.env.API_URL;
    }

    app.use(helmet({
        xDnsPrefetchControl: false,
        xPermittedCrossDomainPolicies: {
          permittedPolicies: "by-content-type"
        }
    }));
    app.use(cors({
      origin: clientURL,
      credentials: true
    }));
})