// const unfilter = {
//     uploaderIsVisible: false,
//     profilePic:
//         "https://mysocialspicedbucket.s3.us-east-2.amazonaws.com/R3YD_YPNWMcUKGFHu2hztbYib9XSavwd.jpg",
//     id: 201,
//     first: "Carlos ",
//     last: "Garcia",
//     email: "carlosgarcia@gmail.com",
//     bio: null,
// };

// const filtered =
//     Object.keys(unfilter).filter((key) => [
//         "uploaderIsVisible",
//         "profilePic",
//         "id",
//         "first",
//         "last",
//         "email",
//     ].includes(key)).reduce((obj, key) => {
//         obj[key] = unfilter[key];
//         return obj;
//     }, {})

// console.log(filtered);