import NormalExternalLinkButton from "@🗃/Button/NormalExternalLinkButton.tsx";
interface ProductIntroCardT {
  title: string;
  url: string;
  urlTitle: string;
  description: string;
  img_url: string;
}
/**
 * Reactの特性上returnできるのは1つの要素なので、外側にflex持たせると壊れる観点から冗長だけど毎回flexつける
 */
export default function ProductIntroCard({
  title,
  url,
  urlTitle,
  description,
  img_url,
}: ProductIntroCardT) {
  return (
    <div class="flex flex-wrap mb-mt-4 mt-12">
      <div class="w-full md:w-1/2 flex flex-col justify-center">
        <h2 class="text-center text-4xl mb-4 font-bold">{title}</h2>
        <p class="text-center">{description}</p>
        <NormalExternalLinkButton title={urlTitle} url={url} />
      </div>
      <div class="w-full md:w-1/2">
        <a href={url} target="_blank" rel="noopener">
          <img class="rounded-2xl" src={img_url} />
        </a>
      </div>
    </div>
  );
}
