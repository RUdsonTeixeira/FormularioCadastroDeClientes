
export async function Cep(cep:string) {
    try {
        console.log(`https://viacep.com.br/ws/${cep}/json/`)
    let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let dados = await response.json()
    return dados
    } catch (error) {
        alert('CEP digitado não foi encontrado!');   
    }
}