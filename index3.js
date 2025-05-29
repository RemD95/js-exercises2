/* interrompere setInterval con clearInterval */
const id = setInterval(() => {
    console.log("ciao");
}, 1000)

setTimeout(() => {
    clearInterval(id);
    console.log("fine intervallo");
},5000)
