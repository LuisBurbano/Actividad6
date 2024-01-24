# Proyecto de Microservicios

En la raiz del proyecto se ejecuta el comando 
npm install
npm install nodemon

## Microservicio 1

Los comandos usados para ejecutar el microservicio son:
cd .\microservicio1\
npm init -y
npm i express cors
node .\servicio.js

## Microservicio 2

Los comandos usados para ejecutar el microservicio son:
cd .\microservicio1\
npm init -y
npm i express cors
node .\servicio.js

## Instalación del cliente

Los comandos usados para ejecutar el microservicio son:

cd .\cliente-microservicios\
npm create vite@lastest .
npm i axios
npm run dev

## Ejecución

Para iniciar los microservicios, navega a sus respectivas carpetas y ejecuta el siguiente comando en tu terminal:

```bash
npm start
```
En caso de existir errores, inicia cada microservicio en terminales separadas con el comando `node servicio.js`

En el caso del Cliente es necesario utilizar ya que utiliza `vite`

```bash
npm run dev
```

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- `express`: Un marco de aplicación web para Node.js
- `axios`: Un cliente HTTP basado en promesas para el navegador y Node.js
- `nodemon`: Una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación de nodo cuando se detectan cambios de archivo en el directorio.
- `concurrently`: Una herramienta para ejecutar múltiples comandos npm concurrentemente. Es útil cuando se tienen múltiples servidores o tareas que se quieren ejecutar al mismo tiempo.

## Licencia

Este proyecto está licenciado bajo la licencia MIT