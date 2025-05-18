interface IENVIRONMENTCONFIG {
  NEXT_PUBLIC_BACKEND_URI: string;
  NEXT_PUBLIC_NODE_ENV: "development" | "production" | "test";
}
export const ENV: IENVIRONMENTCONFIG = {
  NEXT_PUBLIC_BACKEND_URI: process.env.NEXT_PUBLIC_BACKEND_URI as string,
  NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV as IENVIRONMENTCONFIG["NEXT_PUBLIC_NODE_ENV"]
};

export function loadEnv(ENV_ARRAY: IENVIRONMENTCONFIG) {
  // Map on object and check if any env is undefined
  const undefinedValues = [];
  for (const [key, value] of Object.entries(ENV_ARRAY)) {
    if (value === undefined || value === null) {
      undefinedValues.push(key);
    }
  }
  if (undefinedValues.length > 0) {
    console.info(`
                              ********************

        We were unable to find the following environment variables from .env 
              [${undefinedValues.join(", ")}]

                              ********************
`);
    process.exit(1);
  }
}
