interface ExternalServiceIntroCardT {
  title: string;
  url: string;
  imgUrl: string;
}

export default function ExternalServiceIntroCard({
  title,
  url,
  imgUrl,
}: ExternalServiceIntroCardT) {
  return (
    <div class="mx-2 my-2">
      <a
        href={url}
        class="flex justify-center items-center border-2 border-dotted border-kn_a_green rounded-2xl p-2 bg-kn_white hover:bg-kn_a_green hover:text-kn_white duration-500"
        target="_blank"
        rel="noopener"
      >
        <img class="w-12 h-12" src={imgUrl} />
        <p class="ml-2 text-xl">{title}</p>
      </a>
    </div>
  );
}
