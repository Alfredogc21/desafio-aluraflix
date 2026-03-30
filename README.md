# AluraFlix

Aplicacion web para gestionar y visualizar videos por categorias, desarrollada en React.

## Stack

- React 18
- React Router DOM 6
- Vite 7
- CSS Modules

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalacion

1. Clona el repositorio.
2. Entra en la carpeta del proyecto.
3. Instala dependencias.

```bash
git clone https://github.com/Alfredogc21/desafio-aluraflix.git
cd desafio-aluraflix
npm install
```

## Scripts disponibles

- `npm start`: inicia el servidor de desarrollo con Vite.
- `npm run dev`: equivalente a `npm start`.
- `npm run build`: genera build de produccion en `dist/`.
- `npm run preview`: previsualiza localmente el build de produccion.

## Desarrollo local

```bash
npm start
```

Por defecto, la app queda disponible en:

```text
http://localhost:5173/
```

## Fuente de datos

Actualmente la aplicacion consume una API remota configurada en `src/context/GlobalContext.jsx`.

Si quieres usar el archivo local `db.json`, puedes levantar un servidor local con:

```bash
npx json-server --watch db.json --port 3001
```

Y luego cambiar temporalmente la URL de la API en `src/context/GlobalContext.jsx`.

## Build de produccion

```bash
npm run build
npm run preview
```

## Seguridad

Para revisar vulnerabilidades de dependencias:

```bash
npm audit
```
