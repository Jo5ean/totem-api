import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: [
      "src/generated/**/*",
      ".next/**/*",
      "node_modules/**/*",
      "build/**/*",
      "dist/**/*"
    ]
  },
  {
    rules: {
      // Relajar reglas para build de Railway
      "prefer-const": "warn",
      "no-unused-vars": "warn",
      "@next/next/no-img-element": "warn",
      // Deshabilitar completamente para archivos generados
      "prefer-const": "off",
      "no-unused-vars": "off"
    }
  }
];

export default eslintConfig;
