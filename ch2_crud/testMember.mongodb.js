use("testMember")
db.users.insertMany([
    { name: "이상용", lunchNenuList: ["국밥", "된장찌개", "한식"], age:30, comment:{title: "메뉴글1", writer:"이상용"}},
    { name: "문정섭", lunchNenuList: ["한식", "초밥", "유가네"], age:20, comment:{title: "메뉴글2", writer:"문정섭"}},
  ]);
//추가
db.users.insertOne({ name: "SangYong Lee", email: "lsy@gmail.com" });

//전체조회
db.users.find({})

//조회
db.users.find({},{"_id":false,"name":true,"lunchNenuList":true})

//추가
db.users.updateOne({ name: "SangYong Lee" }, { $set: { jop: "teacher"} });

//변경
db.users.updateOne(
    { name: "문정섭" },
    { $set: { "age": "20" } }
  );

  db.users.update(
    {name: "이상용"},
    {
      $set: { "lunchNenuList.$[penElm]": "한식" },
    },
    { arrayFilters: [{ penElm: "양식" }] }
  );
//삭제
db.users.deleteOne({name:"SangYong Lee"})


