# Burger Queen (API Client)

![image](https://user-images.githubusercontent.com/97176343/185514712-9d930cb8-ed2d-4414-93ff-8ac2b3822114.png)


## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Criterios de aceptación del proyecto y vistas del proyecto final](#2-criterios-de-aceptación-del-proyecto-y-vistas-del-proyecto-final)


***

## 1. Resumen del proyecto


Un pequeño restaurante de hamburguesas, que está creciendo, necesita un
sistema a través del cual puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente.

Este proyecto tiene dos áreas: interfaz (cliente) y API (servidor). Nuestra
clienta nos ha solicitado desarrollar la interfaz que se integre con la API
que otro equipo de desarrolladoras está trabajando simultáneamente


## 2. Criterios de aceptación del proyecto y vistas del proyecto final

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos presenta este _backlog_ que es el resultado de su trabajo con el clientx
hasta hoy.

***

#### [Historia de usuario 1] Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales

Yo como meserx quiero poder ingresar al sistema de pedidos.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Acceder a una pantalla de login.
* Ingresar email y contraseña.
* Recibir mensajes de error comprensibles, dependiendo de cuál es el error
  con la información ingresada.
* Ingresar al sistema de pedidos si las crendenciales son correctas.

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

##### Vista Desktop

![image](https://user-images.githubusercontent.com/97176343/185510424-fb40b1c7-d945-4e83-9c43-dcf5833d4079.png)
![image](https://user-images.githubusercontent.com/97176343/185510640-90aa3959-8c9c-437c-a5f4-59c00e03123c.png)
![image](https://user-images.githubusercontent.com/97176343/185516543-15543303-1560-4447-952b-df1ab0542bfd.png)


##### Vista Tablet
![image](https://user-images.githubusercontent.com/97176343/185511371-b40ee3c6-c06c-4709-a1c3-1b035e754d2c.png)
![image](https://user-images.githubusercontent.com/97176343/185511528-5d450560-79cd-40b7-aa3f-7e44a20affc7.png)
![image](https://user-images.githubusercontent.com/97176343/185516575-9920e6ed-c89d-4d65-8ea2-1e28c422a85a.png)

***



#### [Historia de usuario 2] Mesero/a debe poder tomar pedido de cliente/a

Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar nombre de clientx.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

##### Vista Desktop
![image](https://user-images.githubusercontent.com/97176343/185511098-0b668341-788d-47b4-9093-cac3809008c9.png)

##### Vista Tablet
![image](https://user-images.githubusercontent.com/97176343/185511951-d7bb8608-1127-4be3-aa5b-0686e456dc5a.png)
![image](https://user-images.githubusercontent.com/97176343/185511987-e29ba9aa-2959-4c14-83a9-f9a5d8642a10.png)
***

#### [Historia de usuario 3] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un clientx.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

##### Vista Desktop
![image](https://user-images.githubusercontent.com/97176343/185516686-05b11d0f-4011-47eb-ab91-27fec89fe375.png)


##### Vista Tablet

![image](https://user-images.githubusercontent.com/97176343/185516633-156512b1-a0c5-457f-867d-71b25db9a529.png)


***

#### [Historia de usuario 4] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.
  
##### Vista Desktop

![image](https://user-images.githubusercontent.com/97176343/185511171-0b691b15-9939-41de-a37c-7f70852f0260.png)


##### Vista Tablet
![image](https://user-images.githubusercontent.com/97176343/185512056-e7830c14-e616-4c80-af32-6e739151b4e5.png)

***

#### [Historia de usuario 5] Administrador(a) de tienda debe administrar a sus trabajadorxs

Yo como administrador(a) de tienda quiero gestionar a los usuarios de
la plataforma para mantener actualizado la informacion de mis trabajadorxs.

##### Criterios de aceptación

* Ver listado de trabajadorxs.
* Agregar trabajadorxs.
* Eliminar trabajadoxs.
* Actualizar datos de trabajadorxs.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

##### Vista Desktop

![image](https://user-images.githubusercontent.com/97176343/185510750-a70d6cc1-47c6-4366-88de-fa0be72dd56e.png)
![image](https://user-images.githubusercontent.com/97176343/185510828-521e1346-e601-4605-bebd-f7beb8b879b2.png)

##### Vista Tablet
![image](https://user-images.githubusercontent.com/97176343/185511575-072c6c53-7655-4fe0-b375-3430ca84c5cf.png)
![image](https://user-images.githubusercontent.com/97176343/185511648-0793bc5e-cf3f-4f0c-bd37-bb7036cc35a7.png)
![image](https://user-images.githubusercontent.com/97176343/185511800-1ca6fe2a-5071-46a0-9149-ad6b02ec89d9.png)

***

#### [Historia de usuario 6] Administrador(a) de tienda debe administrar a sus productos

Yo como administrador(a) de tienda quiero gestionar los productos
para mantener actualizado el menú.

##### Criterios de aceptación

* Ver listado de productos.
* Agregar productos.
* Eliminar productos.
* Actualizar datos de productos.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

##### Vista Desktop
![image](https://user-images.githubusercontent.com/97176343/185510925-b3d5f987-d9d5-46db-8700-fcb1deada256.png)
##### Vista Tablet
![image](https://user-images.githubusercontent.com/97176343/185511839-f7917a58-96b8-4186-8230-f461b12e0cf9.png)
![image](https://user-images.githubusercontent.com/97176343/185511859-0f81b336-27dd-4e05-90ac-4b00c5041825.png)
![image](https://user-images.githubusercontent.com/97176343/185511896-93678645-64f6-4b53-b99b-8ac7008ec19c.png)

***

