import { states } from "./data";

const getStateEntry = (stateName: string) =>
  states.find(
    (stateObj) =>
      Object.keys(stateObj)[0].toLowerCase() === stateName.toLowerCase()
  );

export const getAllStates = (): string[] => {
  const allStates = Array.from(
    new Set(states.map((stateObj) => Object.keys(stateObj)[0]))
  ).sort();
  return allStates;
};

export const getLocalGovernments = (stateName: string): string[] => {
  const state = getStateEntry(stateName);

  if (state) {
    const stateKey = Object.keys(state)[0];
    const stateData = state[stateKey as keyof typeof state];
    return Array.from(new Set(Object.keys(stateData))).sort();
  }

  return [];
};

export const getCities = (
  stateName: string,
  localGovernment: string
): string[] => {
  const state = getStateEntry(stateName);

  if (state) {
    const stateKey = Object.keys(state)[0];
    const stateData = state[stateKey as keyof typeof state];
    const localGovtKey = Object.keys(stateData).find(
      (key) => key.toLowerCase() === localGovernment.toLowerCase()
    );
    if (localGovtKey) {
      return Array.from(new Set(stateData[localGovtKey])).sort();
    }
  }

  return [];
};

export const getLocalGovernmentByCity = (
  stateName: string,
  cityName: string
): string => {
  const state = getStateEntry(stateName);

  if (state) {
    const stateKey = Object.keys(state)[0];
    const stateData = state[stateKey as keyof typeof state];

    const matchedLocalGovernment = Object.entries(stateData).find(([, cities]) =>
      cities.some(
        (city) => city.toLowerCase() === cityName.toLowerCase()
      )
    );

    return matchedLocalGovernment?.[0] ?? "";
  }

  return "";
};

export const getCitiesByState = (stateName: string): string[] => {
  const state = getStateEntry(stateName);

  if (state) {
    const stateKey = Object.keys(state)[0];
    const stateData = state[stateKey as keyof typeof state];
    const localGovernmentNames = new Set(Object.keys(stateData).map((name) => name.toLowerCase()));

    return Array.from(
      new Set(
        Object.values(stateData)
          .flat()
          .filter((city) => !localGovernmentNames.has(city.toLowerCase()))
      )
    ).sort();
  }

  return [];
};
