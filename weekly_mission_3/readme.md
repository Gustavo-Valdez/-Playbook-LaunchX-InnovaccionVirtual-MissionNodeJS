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

# Live 01

# Comandos que utilice en el live 01

``` npm init ``` : Para crear un archivo package.json este archivo sirve para guardar toda la información de la configuración de nuestros proyectos en JavaScript.

``` npm install --save-dev jest ``` : Actualiza nuestro archivo, instala la ultima version de jest y crea un archivo package-lock.json que es un archivo de cache donde guarda las dependencias que usa a su ves esa dependencia y esto lo hace para guardar las versiones de las dependencias trasitivas que has agregado.   

# Test en Windows 

Ejemplo para sustituir la siguiente línea en el package.json:
``` 
"test": "node --experimental-vm-modules ./node_modules/.bin/jest"
```
por esta:
``` 
"test": "node --experimental-vm-modules ./node_modules/jest/bin/jest.js" 
```
# Consejos

- Las pruebas no son negociables porque respaldan el funcionamiento de nuestro codigo. 

- No confies en una prueba que no has visto fallar.

- Los requerimientos del negocio se pueden modelar en las pruebas de unidad. 

# Resumen del Primer Live de la Semana 
![Ilustración resumen 1](https://user-images.githubusercontent.com/86739150/171525134-0fa79bdf-0d6c-4ce8-8288-dab25787d6c9.png)
![Ilustración_resumen 2](https://user-images.githubusercontent.com/86739150/171525169-bc53d7d6-d503-4a3b-975f-7a945af609fa.png)

# Live 02

# Consejos

- Cada commit es un cambio con su respectiva prueba, eso te da a ti como developer un nivel de finesa para resolver problemas.

- En las pruebas tu puedes validar que estas cumpliendo con tus requerimientos.

- Los setter nos sirven para actualizar la informacion de un objeto.

- Cuida del orden para que el orden cuide de ti. 

# Resumen del Segundo Live de la Semana

![Ilustración resumen 3](https://user-images.githubusercontent.com/86739150/171954019-d7c4737f-9ef3-4077-8b1d-ff9fca742e69.png)
![Ilustración_resumen 4](https://user-images.githubusercontent.com/86739150/171954084-8cb08d1d-8217-49c6-9bda-0ef0fef7f274.png)

# Live 03

# ¿Que es express?

Es un framework de JavaScript para ayudarnos a crear servidores.

# Comando que utlice en el live 03

``` npm install express --save ``` : Actualizar el package.json .

``` node app.js ``` : Ejecuta tu server.

# Para que no se olvide

El metodo GET sirve para regresar información, comunmente nos sirve para regresar toda la información de un modelo en una base datos.

- El metodo GET sirve para regresar información.
- El metodo POST sirve para crear. 
- El metodo PUT sirve para actualizar un registro.
- El metodo DELETE sirve para eliminar.

# Resumen del Tercer Live de la Semana

![Ilustración_resumen 5](https://user-images.githubusercontent.com/86739150/171954084-8cb08d1d-8217-49c6-9bda-0ef0fef7f274.png)
![Ilustración_resumen 6](https://user-images.githubusercontent.com/86739150/172509243-2ee74a55-eb4b-4fe1-a6fd-162798b1f9e6.png)