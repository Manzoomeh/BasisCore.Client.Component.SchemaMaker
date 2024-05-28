const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
router.use(express.json());
router.use("/public", express.static(path.resolve(__dirname, "public")));
const data = [
  { id: 1, value: "چاقو", status: "keyWord" },
  { id: 2, value: "میز", status: "keyWord" },
  { id: 3, value: "کتاب", status: "keyWord" },
  { id: 4, value: "مانیتور", status: "keyWord" },
  { id: 5, value: "بروشور", status: "keyWord" },
  { id: 6, value: "کاغذ A4", status: "keyWord" },
  { id: 7, value: "کشو", status: "keyWord" },
  { id: 8, value: "بادام", status: "keyWord" },
  { id: 9, value: "بادمجان", status: "keyWord" },
  { id: 10, value: "موبایل", status: "keyWord" },
];
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
    {
      hashid: "1-754ED4E0-C4B8-4013-B26D-5ED00825D28A",
      title: "الکترونیک و کامپیوتر",
    },
    { hashid: "6-754ED4E0-C4B8-4013-B26D-5ED00825D28A", title: "آموزش" },
    { hashid: "9-754ED4E0-C4B8-4013-B26D-5ED00825D28A", title: "لوازم خانگی" },
    { hashid: "18-754ED4E0-C4B8-4013-B26D-5ED00825D28A", title: "مواد غذائی" },
    {
      hashid: "25-754ED4E0-C4B8-4013-B26D-5ED00825D28A",
      title: "دکوراسیون و نورپردازی",
    },
    {
      hashid: "30-754ED4E0-C4B8-4013-B26D-5ED00825D28A",
      title: "پزشکی و سلامت",
    },
    {
      hashid: "206-754ED4E0-C4B8-4013-B26D-5ED00825D28A",
      title: "اسباب بازی، کودک ، نوزاد",
    },
  ]);
});
router.get("/popup", async (req, res) => {
  res.sendFile(path.join(__dirname, "schemas", "popUp.html"));
});
router.get("/keys", async (req, res) => {
  if (req.query.term) {
    const filteredData = data.filter((element) => {
      if (element.value.startsWith(req.query.term)) {
        return true;
      }
      return false;
    });
    return res.status(200).json(filteredData);
  }
  return res.status(200).json(data);
});
router.post("/temp-schema-maker", async (req, res) => {
  const { value } = req.body;
  const result = { id: data.length + 1, value, status: "tempKeyWord" };
  data.push(result);
  return res.status(200).json(result);
});
router.get("/keywordinfo", async (req, res) => {
  console.log(req.query.id);
  const id = Number(req.query.id);
  const result = data.find((element) => element.id == id);
  if (result) {
    return res.status(200).json({
      culture: "fa",
      title: result.value,
    });
  }
});
router.get("/js", async (req, res) => {
  res.sendFile(
    "F:\\AliBazregar\\BasisCore.Client.Component.SchemaMaker\\bc\\basiscore.js"
  );
});

module.exports = router;
