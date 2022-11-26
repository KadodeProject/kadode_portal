interface BrandIntroCardT {
  title: string;
  url: string;
  description: string;
}
/**
 * Reactの特性上returnできるのは1つの要素なので、外側にflex持たせると壊れる観点から冗長だけど毎回flexつける
 */
export default function BrandIntroCard({
  title,
  url,
  description,
}: BrandIntroCardT) {
  return (
    <a
      class="p-4 flex flex-wrap mb-mt-4 mt-12 flex-col border-4 rounded-2xl bg-kn_white border-dotted border-kn_l_blue hover:text-kn_a_light_blue hover:bg-kn_a_green hover:border-solid hover:border-kn_a_green duration-500"
      href={url}
    >
      <h2 class="text-center text-4xl mb-4 ">{title}</h2>
      <p class="text-center">{description}</p>
    </a>
  );
}
