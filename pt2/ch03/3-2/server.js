// building web server with express

import express from "express";
// since HTTP requests are readable streams, we can use bodyparser to handle data
import bodyParser from "body-parser";
import fs from "fs";

// consume api & specifying type as json to avoid error
import skiTerms from "./ski-terms.json" assert { type: "json" };

const app = express();

let definitions = skiTerms;

// using middleware to insert functionality into the request-response cycle
app.use("/", express.static("./client"));
app.use(bodyParser.json());

// middleware to log requests to the console
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  // if there is data in the request body, log it to the console
  if (Object.keys(req.body).length) {
    console.log(req.body);
  }
  next();
});

app.get("/dictionary", (req, res) => {
  res.json(definitions);
});
app.post("/dictionary", bodyParser.json(), (req, res) => {
  definitions.push(req.body);
  save();
  res.json({
    status: "success",
    term: req.body,
  });
});

app.delete("/dictionary/:term", (req, res) => {
  definitions.filter(({ term }) => {
    return term.toLowerCase() !== req.params.term;
  });
  save();
  res.json({
    status: "success",
    removed: req.params.term,
    newLength: definitions.length,
  });
});

// will update our api in ski-terms.json file with inputted data from client
const save = () => {
  fs.writeFile(
    "./ski-terms.json",
    JSON.stringify(definitions, null, 2),
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
};

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
