const apiResponse = {
    "services": [
      {
        "id": 1,
        "head": null,
        "name": "Проф.осмотр",
        "node": 0,
        "price": 100.0,
        "sorthead": 20
      },
      {
        "id": 2,
        "head": null,
        "name": "Хирургия",
        "node": 1,
        "price": 0.0,
        "sorthead": 10
      },
      {
        "id": 3,
        "head": 2,
        "name": "Удаление зубов",
        "node": 1,
        "price": 0.0,
        "sorthead": 10
      },
      {
        "id": 4,
        "head": 3,
        "name": "Удаление зуба",
        "node": 0,
        "price": 800.0,
        "sorthead": 10
      },
      {
        "id": 5,
        "head": 3,
        "name": "Удаление 8ого зуба",
        "node": 0,
        "price": 1000.0,
        "sorthead": 30
      },
      {
        "id": 6,
        "head": 3,
        "name": "Удаление осколка зуба",
        "node": 0,
        "price": 2000.0,
        "sorthead": 20
      },
      {
        "id": 7,
        "head": 2,
        "name": "Хирургические вмешательство",
        "node": 0,
        "price": 200.0,
        "sorthead": 10
      },
      {
        "id": 8,
        "head": 2,
        "name": "Имплантация зубов",
        "node": 1,
        "price": 0.0,
        "sorthead": 20
      },
      {
        "id": 9,
        "head": 8,
        "name": "Коронка",
        "node": 0,
        "price": 3000.0,
        "sorthead": 10
      },
      {
        "id": 10,
        "head": 8,
        "name": "Слепок челюсти",
        "node": 0,
        "price": 500.0,
        "sorthead": 20
      }
    ]
  };

  
  // Создание корневой элемент дерева
  const root = document.createElement('ul');
  
  // Создание функции для построения дерева
  const createTree = (services, headId, level) => {
    const list = document.createElement('ul');
  
    const filteredServices = services.filter(service => service.head === headId);
  
    filteredServices.sort((a, b) => a.sorthead - b.sorthead);
  
    filteredServices.forEach(service => {
      const listItem = document.createElement('li');
      const serviceName = document.createElement('span');
      const servicePrice = document.createElement('span');
  
      serviceName.textContent = service.name;
      servicePrice.textContent = " " + service.price;
  
      listItem.classList.add(`level${level}`);
  
      listItem.appendChild(serviceName);
      listItem.appendChild(servicePrice);
      list.appendChild(listItem);
  
      if (service.node) {
        const childTree = createTree(services, service.id, level + 1);
        list.appendChild(childTree);
      }
    });

    return list;
  };
  
   const tree = createTree(apiResponse.services, null, 0);
  
  root.appendChild(tree);
  document.body.appendChild(root);
