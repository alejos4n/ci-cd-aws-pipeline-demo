"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
async function handler(event, context) {
    console.log('Stage Name is: ' + process.env.stage);
    return {
        body: 'Hello from a Lambda Function',
        statusCode: 200,
    };
}
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ08sS0FBSyxVQUFVLE9BQU8sQ0FBQyxLQUFhLEVBQUUsT0FBZTtJQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsT0FBTztRQUNMLElBQUksRUFBRSw4QkFBOEI7UUFDcEMsVUFBVSxFQUFFLEdBQUc7S0FDaEIsQ0FBQztBQUNKLENBQUM7QUFORCwwQkFNQyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQ6IHN0cmluZywgY29udGV4dDogc3RyaW5nKSB7XG4gIGNvbnNvbGUubG9nKCdTdGFnZSBOYW1lIGlzOiAnICsgcHJvY2Vzcy5lbnYuc3RhZ2UpO1xuICByZXR1cm4ge1xuICAgIGJvZHk6ICdIZWxsbyBmcm9tIGEgTGFtYmRhIEZ1bmN0aW9uJyxcbiAgICBzdGF0dXNDb2RlOiAyMDAsXG4gIH07XG59Il19