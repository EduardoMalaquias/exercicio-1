const html = {
    get(element) {
        return document.querySelector(element)
    }
}

function pegaUrl(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(user) {
    linha = document.createElement("div")
    tdImg = document.createElement("img")
    tdNome = document.createElement("h3")
    tdEmail = document.createElement("p")

    tdImg.src = user.avatar
    tdNome.innerHTML = user.first_name + " " + user.last_name
    tdEmail.innerHTML = user.email

    linha.appendChild(tdImg)
    linha.appendChild(tdNome)
    linha.appendChild(tdEmail)

    return linha
}

function main () {
    let data = pegaUrl("https://reqres.in/api/users")
    let users = JSON.parse(data)
    let usuario = users["data"]
    let tabela = html.get('.container')
    usuario.forEach(element => {
        let linha = criaLinha(element)
        tabela.appendChild(linha)
    });
}

main()