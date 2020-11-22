# Notes on breaking stuff

## Spread operator ...<arrName>

Ya que una variable que tiene, al menos, dos valores, estos 3 puntos representan todos los valores que puede tomar cierta variable. it allows an iterable to expand in places where 0+ arguments are expected. ...<arrayName> me devuelve cada uno de los valores del array.

```js
const [usuario, setUsuario] = useState([
  nombre: ''
  , apellido: ''
])

let arr = ["hola", "mundo", "como", "estas"]
console.log(...arr)
console.log(arr)
```


