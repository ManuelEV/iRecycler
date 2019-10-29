# module-name  

## Versiones y Dependencias

    Node: 10.16.0
    npm: 6.9.0
    dotenv: 8.2.0
    express: 4.17.1
    mongoose: 5.7.7
    mongodb: 4.2
  
**Resumen** 

API para ser usada en la creación de puntos desde el Frontend en Vue, guarda los puntos en la base de datos y los retorna cuando se necesiten.

## Instalación

Descarga de las dependencias necesarias
```
npm install
```
Es necesario un archivo .env en el directorio raíz para la variable de entorno de la aplicación que se usó en la conexión a la base de datos

```
DATABASE_URL = mongodb://127.0.0.1/<DBName>
```


## Inicio

Para inicar el servicio en el puerto 7070.
```
node index.js
```

