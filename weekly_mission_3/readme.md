# Weekly Mission 3

# Semana 3 

Proyectos desarrollados en la semana 3:

| Proyecto | Práctica | Link al repo |
| ------------- |:-------------:| -----:|
|`my_launchx_app`|1|[Link al repo](https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS)|
|`spiderverse`|2|[Link al repo](https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS)|
|`twitter`|3, 4, 5|[Link al repo](https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS)|
|`express_basic`|6|[Link al repo](https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS)|
|`express_api`|7|[Link al repo](https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS)|

# Comandos que utilice en el live 01

``` npm init ``` : Para crear un archivo package.json este archivo sirve para guardar toda la información de la configuración de nuestros proyectos en JavaScript.

``` npm install --save-dev jest ``` : Actualiza nuestro archivo, instala la ultima version de jest y crea un archivo package-lock.json que es un archivo de cache donde guarda las dependencias que usa a su ves esa dependencia y esto lo hace para guardar las versiones de las dependencias trasitivas que has agregado   

# Test en Windows 

Si es este el caso, la solución es sustituir la siguiente línea en el package.json:
``` 
"test": "node --experimental-vm-modules ./node_modules/.bin/jest"
```
por esta:
``` 
"test": "node --experimental-vm-modules ./node_modules/jest/bin/jest.js" 
```
No confies en una prueba que no has visto fallar
