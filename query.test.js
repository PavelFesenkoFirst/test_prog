const app = require("./tests/try_some");
const supertest = require("supertest");
const { request } = require("./tests/try_some");


describe("some", () => {

  test("GET /apiv1/users", async () => {
    await supertest(app).get("/apiv1/users").expect(200).then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(5);
        expect(response.body[0].id).toBe(1);
    }) 
  } )
  
  test("GET /apiv1/chats", async () => {
    await supertest(app).get("/apiv1/chats").expect(200).then((response)=>{
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body[5].dataValues.id).toEqual(19);
      expect(response.body[5].dataValues.type).toMatch('public');
      
    })
  })

  test("POST /test/select/chat", async () => {
    try{
      const testSELECT = await supertest(app).get("/apiv1/test/select/chat");
      expect(testSELECT.body.id).toEqual(19);
      expect(testSELECT.body.title).toMatch('testing title chat');
      expect(testSELECT.body.type).toMatch('public');

      console.log(testSELECT.body.id);
    }catch(e){
      console.log(`ERROR!!! ----- ${e}`);
    }




    // let stateObj = {
    //   id: 19
    // };
    // const {body} = await supertest(app)
    // .post("/test/select/chat")
    // console.log(body);
  })



  // test("DELETE /apiv1/test/delete/chat", async () => {
  //   const selectChat = await supertest(app)
  //   .post("/test/select/chat")
  //   .send({
  //     "id":19
  //   });
  //   console.log("TRY SELECT CHAT", selectChat.body);
  //   const removeChat = await supertest(app)
  //   .delete('/test/select/chat').send({id:19});
  //   // console.log(removeChat);
  // })
  
  
  // доделать  
  // test("PATCH /apiv1/users", async () => {
  //   // const newUser = await supertest(app)
  //   // .get("/apiv1/users")
  //   // .send({
  //   //   id:1,
  //   // });
  //   // console.log(newUser);
  //   const updUser = await supertest(app)
  //   .patch(`/apiv1/users`)
  //   .send([{
  //     id:1,
  //     nickname: "some name IN"
  //   }])
  //   console.log(updUser);
  //   expect(updUser.body.nickname).toBe("some name IN")
  // })
})