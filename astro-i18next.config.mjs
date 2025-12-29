/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "es",
  locales: ["es", "en", "pt", "fr", "hi", "de", "it", "pl", "nl", "tr", "sv", "ru"],
  namespaces: ["common", "calculators"],
  defaultNamespace: "common",
  routes: {
    en: {
      "calculadoras": "calculators",
    },
    pt: {
      "calculadoras": "calculadoras",
    },
    fr: {
      "calculadoras": "calculatrices",
    },
    hi: {
      "calculadoras": "calculators",
    },
    de: {
      "calculadoras": "rechner",
    },
    it: {
      "calculadoras": "calcolatrici",
    },
    pl: {
      "calculadoras": "kalkulatory",
    },
    nl: {
      "calculadoras": "rekenmachines",
    },
    tr: {
      "calculadoras": "hesap-makineleri",
    },
    sv: {
      "calculadoras": "kalkylatorer",
    },
    ru: {
      "calculadoras": "kalkulyatory",
    }
  },
  showDefaultLocale: false,
  i18nextServer: {
    debug: false,
  },
  i18nextClient: {
    debug: false,
  },
};
