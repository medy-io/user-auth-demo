// const get = (endPoint) => {
//     fetch(DEV_API + endPoint, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(state)
//     })
// };
const post = (endPoint: string, payload: any) => {
    return fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
};

// const put = (endPoint, state) => {
//     fetch(DEV_API + endPoint, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(state)
//     })
// };

// const delete = (endPoint, state) => {
//     fetch(DEV_API + endPoint, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(state)
//     })
// };

export default {
    post: post
}