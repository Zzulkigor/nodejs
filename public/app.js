document.querySelector(".addUser").addEventListener("click", () =>{
    const name = document.querySelector(".name").value;
    const email = document.querySelector(".email").value;

    fetch("api/add-user",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name, email})
    })
    .then(res =>res.json())
    .then(data =>{
        document.querySelector(".result").innerText = data.message
    })
})