module.exports = {
    preset: "@vue/cli-plugin-unit-jest",
    moduleFileExtensions: ["js", "json", "vue"],
    transform: {
        "^.+\\.vue$": "@vue/vue2-jest",
        "^.+\\.js$": "babel-jest",
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
    ],
    testPathIgnorePatterns: ["/node_modules/"],
    transformIgnorePatterns: ["/node_modules/(?!@babel|@vue)"],
    collectCoverage: true,
    collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"],
};
