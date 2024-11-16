//https://randomuser.me/api/?results=10

const patron = (function(){
    async function usuarios(){
        const url = 'https://randomuser.me/api/?results=10';
        try{
            const datos = await fetch(url);
            const data = await datos.json();
            return data.results;
        }
        catch(error){
            console.error('Se ha producido un error al traer los datos de los usuarios', error);
        }
    }

    async function mostrarUsuarios(){
        const users = await usuarios();
        const usersData = document.getElementById('user-data');

        usersData.innerHTML = '';

        users.forEach((user) => {
            const parrafo = document.createElement('p');
            parrafo.innerHTML = `
            <br>
            <img src="${user.picture.large}">
            <br>${user.name.first} ${user.name.last}
            <br>${user.email}
            <br>${user.phone}
            <hr> 
            `;
            usersData.appendChild(parrafo);
        });  
    }
    return{
        mostrarUsuarios,
    };

})();

(function(){
    patron.mostrarUsuarios();
})();


