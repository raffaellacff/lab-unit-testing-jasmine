// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(4, 2)).toEqual(2);
            expect(divide(16, 4)).toEqual(4);
            expect(divide(30, 10)).toEqual(3);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1) ).toEqual(undefined);
            expect(divide() ).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide("1", 3)).toEqual(undefined);
            expect(divide(3, "9")).toEqual(undefined);
            expect(divide("20", "4")).toEqual(undefined);
        })

    })    
})
