# Nigerian Locations

A lightweight JavaScript and TypeScript library that provides comprehensive Nigerian location data, including states, Local Government Areas (LGAs), and cities.

Perfect for forms, address selectors, validation, dashboards, and any application that requires Nigerian administrative location data.

## Features

* 🇳🇬 Complete list of all 36 states and the FCT
* 📍 Retrieve LGAs for any Nigerian state
* 🏙️ Retrieve cities and areas within each LGA
* 🔎 Retrieve all cities for a selected state
* 🔁 Reverse lookup a city or area to its parent LGA
* ⚡ Zero dependencies
* 📦 Supports both ESM and CommonJS
* 🔷 Fully typed with TypeScript
* 🔍 Case insensitive lookups

---

## Installation

Using npm:

```bash
npm install @eh1z/nigerian-locations
```

Using Yarn:

```bash
yarn add @eh1z/nigerian-locations
```

Using pnpm:

```bash
pnpm add @eh1z/nigerian-locations
```

Using Bun:

```bash
bun add @eh1z/nigerian-locations
```

---

## Usage

### ES Modules / TypeScript

```ts
import {
  getAllStates,
  getLocalGovernments,
  getLocalGovernmentByCity,
  getCitiesByState,
  getCities,
} from "@eh1z/nigerian-locations";

const states = getAllStates();
const lgas = getLocalGovernments("Abia");
const cityOptions = getCitiesByState("Abia");
const lga = getLocalGovernmentByCity("Abia", "Ariaria");
const cities = getCities("Abia", "Aba North");

console.log(states);
console.log(lgas);
console.log(cityOptions);
console.log(lga);
console.log(cities);
```

### CommonJS

```js
const {
  getAllStates,
  getLocalGovernments,
  getLocalGovernmentByCity,
  getCitiesByState,
  getCities,
} = require("@eh1z/nigerian-locations");

console.log(getAllStates());
console.log(getLocalGovernments("Abia"));
console.log(getCitiesByState("Abia"));
console.log(getLocalGovernmentByCity("Abia", "Ariaria"));
console.log(getCities("Abia", "Aba North"));
```

---

# API

## `getAllStates(): string[]`

Returns an alphabetically sorted array containing all Nigerian states, including the Federal Capital Territory (FCT).

### Example

```ts
getAllStates();
```

Returns:

```ts
[
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  ...
  "Zamfara"
]
```

---

## `getLocalGovernments(stateName: string): string[]`

Returns all Local Government Areas (LGAs) for the specified state.

The lookup is case insensitive.

### Example

```ts
getLocalGovernments("Lagos");
```

Returns:

```ts
[
  "Agege",
  "Ajeromi-Ifelodun",
  "Alimosho",
  ...
]
```

If the state does not exist, an empty array is returned.

---

## `getLocalGovernmentByCity(stateName: string, cityName: string): string`

Returns the parent Local Government Area for a city, town, or area name within a selected state.

The lookup is case insensitive and scoped to the provided state.

### Example

```ts
getLocalGovernmentByCity("Abia", "Ariaria");
```

Returns:

```ts
"Aba North"
```

If no matching city is found, an empty string is returned.

---

## `getCitiesByState(stateName: string): string[]`

Returns a sorted array of all unique cities, towns, and areas found anywhere in the selected state.

This is the helper to use for state-scoped city dropdowns when the frontend handles filtering and selection.

### Example

```ts
getCitiesByState("Abia");
```

Returns:

```ts
[
  "Aba Isu",
  "Aba Ukwu",
  "Abaukwu",
  ...
]
```

If the state does not exist, an empty array is returned.

---

## `getCities(stateName: string, localGovernment: string): string[]`

Returns all cities, towns, or areas associated with a Local Government Area.

Both the state and LGA lookups are case insensitive.

### Example

```ts
getCities("Abia", "Aba North");
```

Returns:

```ts
[
  "Ariaria",
  "Eziama",
  "Ogbor Hill",
  ...
]
```

If either the state or LGA cannot be found, an empty array is returned.

---

# Notes

* All returned arrays are alphabetically sorted.
* Duplicate entries are removed before being returned.
* `getCitiesByState` is the frontend-friendly source for city dropdowns scoped to a selected state.
* Reverse lookup is state-scoped so city names resolve to the correct LGA without requiring the user to guess it.
* The package ships with its data bundled, so no external downloads or runtime API calls are required.
* Compatible with JavaScript and TypeScript projects.
* Supports both ESM and CommonJS.

---

# Use Cases

Nigerian Locations is suitable for:

* Address forms
* Registration forms
* Checkout flows
* Location dropdowns
* Data validation
* Government portals
* Logistics applications
* Delivery services
* Analytics dashboards
* Nigerian business applications

---

# Contributing

Contributions are welcome.

If you'd like to improve the dataset, fix inaccuracies, or add new functionality, feel free to open an issue or submit a pull request.

---

# License

This project is licensed under the MIT License.