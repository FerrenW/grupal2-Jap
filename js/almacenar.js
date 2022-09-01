let items = [];
let test = [];
prueba = '';

document.addEventListener('DOMContentLoaded', () => {    
    console.log('CONTENIDO ITEMS INICIO', items);
        let contenedor = document.getElementById('contenedor');
        contenedor.innerHTML = '';
        if (localStorage.getItem('lista')){
        cargaWeb = JSON.parse(localStorage.getItem('lista'));
        console.log('cargando');
            for (item of cargaWeb){
            test.push(item)
            contenedor.innerHTML += item;
        }
        
    }
        document.getElementById('agregar').addEventListener('click', () =>{
        let  item = document.getElementById('item').value;
        if (item.trim().length !== 0){
        items.push(`<li class='list-group-item'>${item}</li>`);      
        console.log(items);
        let agregarContenedor = (items);
        console.log('for loop');
        console.log('AGREGAR CONTENEDOR',agregarContenedor);
        
        for(let i = 0; i < agregarContenedor.length; i++){
            let valor = agregarContenedor[i];
            test.push(valor);
            contenedor.innerHTML += agregarContenedor[i];
            agregarContenedor.splice(i,1);
        }
        localStorage.setItem('lista', JSON.stringify(test));
        console.log(items);
        console.log(test,'20');
    };
});
        document.getElementById('limpiar').addEventListener('click', () =>{
            //Borrando
            console.log('Borrando')
        agregarContenedor = '';
        items=[];
        test = [];
            localStorage.removeItem('lista');
           contenedor.innerHTML = '';
        });
    });