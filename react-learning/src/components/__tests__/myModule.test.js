const initializeCityDatabase = () => {
    console.log("DB initialized");
    return Promise.resolve();
};
const clearCityDatabase = () =>{
    console.log("DB cleared");
    return Promise.resolve();
}
const isCity = (name) => ["Vienna", "San Juan"].includes(name);
beforeAll(()=>{
    return initializeCityDatabase();
})
afterAll(()=>{
    return clearCityDatabase();
});
beforeEach(()=>{
    console.log("Runs before each test.");
})
afterEach(()=>{
    console.log("Runs after each test");
})
test("city database has Vienna", ()=>{
    expect(isCity("Vienna")).toBeTruthy();
})
test("city database has San Juan", ()=>{
    expect(isCity("San Juan")).toBeTruthy();
})