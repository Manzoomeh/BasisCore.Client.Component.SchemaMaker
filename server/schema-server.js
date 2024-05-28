const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

const apiDataList = [];

for (let index = 1; index < 1000; index++) {
  const data = {
    id: index,
    value: Math.random().toString(36).substring(7),
  };
  apiDataList.push(data);
}

router.get("/schemas/new", function (req, res) {
  const stream = fs.createReadStream(
    path.join(__dirname, `/schemas/new/questions.json`)
  );
  stream.on("open", function () {
    res.set("Content-Type", "application/json");
    stream.pipe(res);
  });
  stream.on("error", function () {
    res.set("Content-Type", "text/plain");
    res.status(404).end("Not found");
  });
});

router.get("/schemas/:id", function (req, res) {
  const stream = fs.createReadStream(
    path.join(__dirname, `/schemas/edit/${req.params.id}/questions.json`)
  );
  stream.on("open", function () {
    res.set("Content-Type", "application/json");
    stream.pipe(res);
  });
  stream.on("error", function () {
    res.set("Content-Type", "text/plain");
    res.status(404).end("Not found");
  });
});

router.get("/fix-data/:prpId/:part", function (req, res) {
  const fixDataStr = fs.readFileSync(
    path.join(__dirname, "/schemas/data.json"),
    {
      encoding: "utf8",
    }
  );
  const fixData = JSON.parse(fixDataStr);
  res.json(fixData[req.params.prpId]);
});

router.get("/autocomplete", (req, res) => {
  if (req.query.term) {
    const term = req.query.term;
    const data = apiDataList.filter((x) => x.value.indexOf(term) > -1);
    res.json(data.filter((_, i) => i < 10));
  } else if (req.query.fixid) {
    const fixId = req.query.fixid;
    const data = apiDataList.find((x) => x.id == fixId);
    res.json(data);
  }
});

router.get("/objectType", function (req, res) {
  res.json([
    { id: 20, value: "محصولات" },
    { id: 1, value: "اخبار و مقالات" },
    { id: 19, value: "خدمات" },
    { id: 10, value: "اماکن" },
    { id: 11, value: "اشخاص" },
    { id: 2, value: "رویدادها" },
  ]);
});

router.get("/defaultQuestions", function (req, res) {
  const stream = fs.createReadStream(
    path.join(__dirname, `/schemas/new/defaultQuestions.json`)
  );
  stream.on("open", function () {
    res.set("Content-Type", "application/json");
    stream.pipe(res);
  });
  stream.on("error", function () {
    res.set("Content-Type", "text/plain");
    res.status(404).end("Not found");
  });
});

router.post("/groupsUrl", function (req, res) {
  res.json([
    { hashid: "1-754ED4E0-C4B8-4013-B26D-5ED00825D28A", title: "الکترونیک و کامپیوتر" },
    { hashid: "6-754ED4E0-C4B8-4013-B26D-5ED00825D28A", title: "آموزش" },
    { hashid: "9-754ED4E0-C4B8-4013-B26D-5ED00825D28A", title: "لوازم خانگی" },
    { hashid: "18-754ED4E0-C4B8-4013-B26D-5ED00825D28A", title: "مواد غذائی" },
    { hashid: "25-754ED4E0-C4B8-4013-B26D-5ED00825D28A", title: "دکوراسیون و نورپردازی" },
    { hashid: "30-754ED4E0-C4B8-4013-B26D-5ED00825D28A", title: "پزشکی و سلامت" },
    { hashid: "206-754ED4E0-C4B8-4013-B26D-5ED00825D28A", title: "اسباب بازی، کودک ، نوزاد" },
  ]);
});

module.exports = router;
