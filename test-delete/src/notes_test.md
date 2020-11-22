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

## Componentes y props

Conceptualmente los componentes son como las funciones de JS. Aceptan entradas arbitrarias, llamadas props, y devuelven a React elementos que describen lo que debe aparecer en la pantalla.


Cuando React ve un elemento representando un componente definido por el usuario, pasa atributos JSX e hijos a este componente como un solo objeto. Llamamos a este objeto "props".

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Sara" />;
```

```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

Acepta author (un objeto), text (un string), y date (una fecha) como props, y describe un comentario en una web de redes sociales.

```js
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

Recomendamos nombrar las props desde el punto de vista del componente, en vez de la del contexto en el que se va a utilizar.


```
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

```js
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

```js
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

Una buena regla en general, es que si una parte de su interfaz de usuario se usa varias veces (Button, Panel, Avatar), o es lo suficientemente compleja por s’ misma (App, FeedStory, Comment), es buen candidato para extraerse en un componente independiente.

Todos los componentes de React deben actuar como funciones puras con respecto a sus props.

<https://es.reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized>



