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
router.get("/details", async function (req, res) {
  return res.json(JSON.parse(await fs.promises.readFile(path.join(__dirname, `/schemas/newSchema/details.json`))))
});
router.get("/detailsform", async function (req, res) {
  return res.json(JSON.parse(await fs.promises.readFile(path.join(__dirname, `/schemas/new/details.json`))))
});
router.get("/new-schema", async function (req, res) {
  return res.json(JSON.parse(await fs.promises.readFile(path.join(__dirname, `/schemas/newSchema/questions.json`))))
});
router.get("/add-to-log", async function (req, res) {
  return res.json(JSON.parse(await fs.promises.readFile(path.join(__dirname, `/schemas/new/addToLog.json`))))
});

router.post("/chatnormal", (req, res) => {
  return res.json({
    "data":"با توجه به دوران زمان کمپین، از 10 تا 20 اسفند ماه 1403 فرصت دارید تا با 49% تخفیف از بیسیس پنل خرید کنید و بسیاری از مشکلات سال آینده را با کمک هوش مصنوعی حل کنید. همچنین، با خرید مجموعه‌ای از امکانات بیسیس پنل (حداقل 50 میلیون تومان)، از گارانتی بدون سوال تا 3 ماه بهره‌مند خواهید شد. این یعنی شما می‌توانید با استفاده از تمام امکانات بیسیس پنل و به ویژه دستیار هوش مصنوعی که قابلیت اتصال به CRM را دارد، آینده سازمان خود را به راحتی برنامه‌ریزی کرده و از خدمات ما با خیالی آسوده بهره‌برداری کنید. توجه: به دلیل شرایط ویژه این کمپین، در حال حاضر امکان ارائه دسترسی‌های محدود برای آشنایی با امکانات پنل وجود ندارد. اما علاقه‌مندان می‌توانند با استفاده از تخفیف‌های ویژه و گارانتی بازگشت پول بدون سوال، از خدمات ما بهره‌مند شوند و در صورت عدم رضایت، پول خود را بازگشت دهند. این فرصت استثنایی به شما این امکان را می‌دهد که از تمام پتانسیل‌های بیسیس پنل برای بهبود عملکرد سازمان خود بهره‌مند شوید.",
    "json" : false
  })
})
router.post("/chat", (req, res) => {
  return res.json({
    "id": 3642,
    "message": {
      "lid": 1,
      "schemaVersion": "1.0.0",
      "schemaName": "فرم",
      // "sections": [
      //   {
      //     "id": 1,
      //     "title": "اطلاعات شخصی",
      //     "description": "",
      //     "gridColumns": null
      //   }
      // ],
      "questions": [
        {
          "prpId": 101,
          "title": "نام",
          "wordId": 1,
          "sectionId": 1,
          "parts": [
            {
              "part": 1,
              "viewType": "text",
              "validations": {
                "required": true
              }
            }
          ]
        },
        {
          "prpId": 102,
          "title": "فامیلی",
          "wordId": 2,
          "sectionId": 1,
          "parts": [
            {
              "part": 1,
              "viewType": "text",
              "validations": {
                "required": true
              }
            }
          ]
        },
        {
          "prpId": 103,
          "title": "ایمیل",
          "wordId": 3,
          "sectionId": 1,
          "parts": [
            {
              "part": 1,
              "viewType": "text",
              "validations": {
                "required": true,
                "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"
              }
            }
          ]
        },
        {
          "prpId": 104,
          "title": "شماره موبایل",
          "wordId": 4,
          "sectionId": 1,
          "parts": [
            {
              "part": 1,
              "viewType": "text",
              "validations": {
                "required": true,
                "regex": "^\\+98?|^0?9\\d{9}$"
              }
            }
          ]
        }
      ]
    },
    "json": true
  })
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
router.get("/temp-schema-maker", async (req, res) => {
  const value= req.query.term;
  const result = { id: data.length + 1, value, status: "tempKeyWord" };
  data.push(result);
  return res.status(200).json(result);
});
router.get("/keywordinfo", async (req, res) => {
  const id = Number(req.query.id);
  const result = data.find((element) => element.id == id);
    return res.status(200).json({rows : [
      {
        culture: "fa",
        title: result.value,
      },
      {
        culture: "en",
        title: "Value",
      },
    ],status: result.status});
});






module.exports = router;
