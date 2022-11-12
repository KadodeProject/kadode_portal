interface NormalLinkButtonType {
  title: string;
  url: string;
}

export default function NormalExternalLinkButton({
  title,
  url,
}: NormalLinkButtonType) {
  return (
    <div class="flex justify-center m-4">
      <a
        href={url}
        class="text-2xl text-center px-4 py-2 border-rounded border-2 rounded-xl hover:text-kn_a_light_blue hover:bg-kn_a_green duration-500"
        target="_blank"
        rel="noopener"
      >
        {title}
      </a>
    </div>
  );
}
