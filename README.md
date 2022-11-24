# Portfolio

## Uso
Este proyecto fué creado con el propósito de poder crear un portfolio para un usuario únicamente.
Hasta el momento no andan las funciones de updates para editar la descripción y los campos de habilidades, experiencia y educación (esto está hecho por un novato), tengo algunos errores en el backend y estoy trabajando en su solución. 

En caso de querer utilizarlo, debés hacer un <npm install> en la parte de angular. El back (Java - Spring Boot - Maven): https://github.com/Vrivaans/backend-portfolio/tree/master
Instalar lo que Maven necesite (si hace falta :v) 
No olviden cambiar las URL en el front y back para ejecutar en local.

Una vez que se ejecute el back y se cree la base de datos (el nombre configurado es "portfolio_argprog", en caso de que no sepan donde encontrarlo para cambiarlo es en el archivo application.properties) tienen que:
-Ir a la base de datos y crear un rol en la tabla de rol. El comando es: <INSERT INTO `rol` (`id`, `rol_nombre`) VALUES (null,'ROLE_USER').
Una vez creado el rol, crean el usuario en Postman: 
    "nombre": "tuNombre",
    "nombreUsuario":"tuNombreDeUsuario",
    "email":"tu@email.com",
    "password":"tuContraseña”
  El rol no hace falta colocarlo porque por defecto lo crea como usuario.
  Recuerden que no se puede agregar más de un usuario y esto es solo para la parte del login.
  
  Esto es para crear el usuario que puede leer el front para mostrar su información.
  insert into usuario_model (id,date_of_birth,last_name,name, photo_url)
  values (1,'1/1/1','Tu apellido','Tu nombre', 'photoUrl no hace falta, debería sacarlo xD' )
Solo reemplacen con sus datos, y en caso de equivocarse no creen otro usuario, dado que solo lee el usuario con id=1.

Hecho esto, ya se puede hacer el login y desde el front ya se pueden mostrar datos. Ya queda en ustedes agregar experiencias, habilidades y educación, solo fíjense de como van los datos en el backend para que no tengan problemas a la hora de ejecutar.

## Agradecimientos
Gracias a aquellos que me ayudaron a llegar hasta este punto, ahora solo queda mejorar los errores. Y gracias por ver esto :v.
