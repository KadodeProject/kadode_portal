import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      // ハイフン使えないのでキャメルケースに変換
      kn_black: "#2f3437",
      kn_white: "#f9fff9",
      kn_d_purple: "#624464",
      kn_d_blue: "#4b8996",
      kb_d_brown: "#8a8772",
      kn_l_purple: "#ac78b0",
      kn_l_blue: "#71d0e3",
      kn_l_brown: "#d6d2b2",
      kn_s_1: "#33769c",
      kn_s_2: "#339c76",
      kn_s_3: "#e2534a",
      kn_a_yellow: "#id7bd57",
      knn_a_light_blue: "#d8e4ee",
      kn_a_green: "#7e9e7f",
    },
  },
} as Options;
