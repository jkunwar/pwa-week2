if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js', { scope: '/pwa-week2/' })
        .then((res) => {
            console.log(res)
        })
        .catch(err => console.log(err));
} else {
    console.log('Service worker is not supported.')
}

// setInterval(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(res => {
//             console.log(res.json())
//         })
//         .catch(err => console.log(err))
// }, 3000)