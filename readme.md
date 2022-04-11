# Instalar dependencias.

```
npm install
```

## Instrucciones de uso.

| Alias | Comando  | Descripción                                  | Tipo     | Valor por defecto |
| ----- | -------- | -------------------------------------------- | -------- | ----------------- |
| -b    | --base   | Base de la tabla de multiplicación.          | número   | required          |
| -l    | --listar | Lista la tabla de multiplicación en consola. | booleano | false             |
| -h    | --hasta  | Limite de la tabla de multiplicación.        | booleano | false             |

## Ejemplo de uso

```
node app -b 10 -h 10 -l
```

![Preview](/salida/preview.png)

## Carpeta "salida"

- Aquí se almacenan las instrucciones de uso (info.md).
- Aquí se almacena la imagen del resultado del "ejemplo de uso" (preview.png).
