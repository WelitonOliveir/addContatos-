function addContato(){
  const contatoSection = document.getElementById('contatos-list')

  const h3 = document.createElement('h3')
  h3.innerText = "Contato"

  const ul = document.createElement('ul')

  const nameLi = document.createElement('li')
  nameLi.innerText = "Nome: "
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))


  const phoneLi = document.createElement('li')
  phoneLi.innerText = "Telefone:"
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneLi.appendChild (phoneInput)
  //appendChild server para Adicionar 
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))

  const endercoLi = document.createElement('li')
  endercoLi.innerHTML = '<label for="endereco"> Endereço: </label>'
  const EnderecoInput = document.createElement('input')
  EnderecoInput.type = 'text'
  EnderecoInput.name = 'Endereco'
  EnderecoInput.id = 'endereco'
  endercoLi.appendChild(EnderecoInput)
  ul.appendChild(endercoLi)
  ul.appendChild(document.createElement('br'))

  contatoSection.append(h3,ul)

}

function removeContato(){
  const contatoSection = document.getElementById('contatos-list')
  
  const titulo = document.getElementsByTagName('h3')
  const contatos = document.getElementsByTagName('ul')


  //removeChild server para remover
  contatoSection.removeChild(titulo[titulo.length -1 ])
  contatoSection.removeChild(contatos[contatos.length -1])
}